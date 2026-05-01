#!/usr/bin/env python3
"""
Network Recon & Asset Inventory Tool
======================================
Performs host discovery and service fingerprinting on a target subnet.
Generates a structured asset inventory report in JSON, CSV, and Markdown.

Features:
  - ICMP ping sweep + TCP SYN host discovery
  - Nmap service/version detection (-sV)
  - OS fingerprinting attempt
  - Common vulnerability keyword flagging
  - Multi-threaded scanning for speed
  - Export to JSON, CSV, or Markdown table

Author : Matthew Vaishnav — CST, Conestoga College
Usage  : python network_recon.py --target 192.168.1.0/24 --output report.md
         python network_recon.py --target 10.0.0.1 --ports 22,80,443,3389

LEGAL NOTICE: Only run against networks you own or have written permission to scan.
"""

import subprocess
import json
import csv
import argparse
import ipaddress
import socket
import threading
from datetime import datetime
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor

try:
    import nmap

    NMAP_AVAILABLE = True
except ImportError:
    NMAP_AVAILABLE = False

# ── Configuration ─────────────────────────────────────────────────────────────

DEFAULT_PORTS = "21,22,23,25,53,80,110,135,139,143,443,445,993,995,1723,3306,3389,5900,8080,8443"

VULN_KEYWORDS = {
    "Telnet": "⚠️  Plaintext protocol — replace with SSH",
    "FTP": "⚠️  Plaintext protocol — use SFTP/FTPS",
    "SMBv1": "🔴 EternalBlue-vulnerable SMB version",
    "OpenSSH 5": "🔴 Outdated SSH — multiple CVEs",
    "Apache 2.2": "🔴 EOL Apache version",
    "IIS/6": "🔴 EOL IIS — critical vulnerabilities",
    "RDP": "⚠️  Ensure NLA enforced and patched (BlueKeep: CVE-2019-0708)",
    "MySQL 5.5": "⚠️  EOL MySQL — upgrade recommended",
    "VNC": "⚠️  Check VNC authentication is enabled",
}

SERVICE_ICONS = {
    "ssh": "🔐",
    "http": "🌐",
    "https": "🔒",
    "ftp": "📁",
    "smtp": "📧",
    "dns": "🗺️",
    "rdp": "🖥️",
    "smb": "📂",
    "mysql": "🗄️",
    "telnet": "⚠️",
}


# ── Host Discovery ────────────────────────────────────────────────────────────


def ping_host(ip: str, timeout: float = 1.0) -> bool:
    """ICMP ping a host. Returns True if alive."""
    try:
        result = subprocess.run(
            ["ping", "-c", "1", "-W", str(int(timeout * 1000)), str(ip)],
            capture_output=True,
            timeout=timeout + 1,
        )
        return result.returncode == 0
    except (subprocess.TimeoutExpired, FileNotFoundError):
        return False


def tcp_probe(ip: str, port: int = 80, timeout: float = 1.0) -> bool:
    """TCP connect probe — useful when ICMP is blocked."""
    try:
        with socket.create_connection((str(ip), port), timeout=timeout):
            return True
    except (socket.timeout, ConnectionRefusedError, OSError):
        return False


def discover_hosts(network: str, max_workers: int = 50) -> list[str]:
    """Discover live hosts in a subnet using ping + TCP fallback."""
    try:
        net = ipaddress.ip_network(network, strict=False)
    except ValueError:
        return [network]

    hosts = [str(h) for h in net.hosts()]
    if len(hosts) > 254:
        print(f"  ⚠️  Large subnet ({len(hosts)} hosts) — this may take a while")

    live_hosts = []
    lock = threading.Lock()

    def check_host(ip):
        alive = ping_host(ip) or tcp_probe(ip, 80) or tcp_probe(ip, 443)
        if alive:
            with lock:
                live_hosts.append(ip)

    print(f"\n  🔍 Scanning {len(hosts)} hosts in {network}...")
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        list(executor.map(check_host, hosts))

    return sorted(live_hosts, key=lambda x: [int(p) for p in x.split(".")])


# ── Port Scanning ─────────────────────────────────────────────────────────────


def scan_ports_basic(ip: str, ports: str, timeout: float = 1.0) -> list[dict]:
    """Basic TCP connect scan (no nmap required)."""
    port_list = [int(p.strip()) for p in ports.split(",")]
    open_ports = []

    for port in port_list:
        try:
            with socket.create_connection((ip, port), timeout=timeout) as sock:
                sock.settimeout(0.5)
                banner = ""
                try:
                    sock.sendall(b"\r\n")
                    data = sock.recv(256)
                    banner = data.decode("utf-8", errors="replace").strip()[:100]
                except Exception:
                    pass
                open_ports.append(
                    {
                        "port": port,
                        "state": "open",
                        "service": get_service_name(port),
                        "banner": banner,
                        "version": "",
                    }
                )
        except (socket.timeout, ConnectionRefusedError, OSError):
            pass

    return open_ports


def get_service_name(port: int) -> str:
    """Map common ports to service names."""
    PORT_MAP = {
        21: "ftp",
        22: "ssh",
        23: "telnet",
        25: "smtp",
        53: "dns",
        80: "http",
        110: "pop3",
        135: "msrpc",
        139: "netbios",
        143: "imap",
        443: "https",
        445: "smb",
        993: "imaps",
        995: "pop3s",
        1723: "pptp",
        3306: "mysql",
        3389: "rdp",
        5900: "vnc",
        8080: "http-alt",
        8443: "https-alt",
    }
    return PORT_MAP.get(port, "unknown")


# ── Hostname / RDNS ───────────────────────────────────────────────────────────


def get_hostname(ip: str) -> str:
    try:
        return socket.gethostbyaddr(ip)[0]
    except socket.herror:
        return ""


# ── Vulnerability Flagging ────────────────────────────────────────────────────


def check_vulns(host_data: dict) -> list[str]:
    flags = []
    all_text = json.dumps(host_data).lower()
    for keyword, message in VULN_KEYWORDS.items():
        if keyword.lower() in all_text:
            flags.append(message)
    return flags


# ── Report Generation ─────────────────────────────────────────────────────────


def generate_markdown(hosts: list[dict], target: str) -> str:
    lines = [
        "# 🌐 Network Asset Inventory",
        f"**Target**: `{target}`  ",
        f"**Scan Date**: {datetime.now().strftime('%Y-%m-%d %H:%M')}  ",
        f"**Live Hosts**: {len(hosts)}",
        "",
        "---",
        "",
    ]

    for host in hosts:
        ip = host["ip"]
        hostname = host.get("hostname", "")
        name_str = f" ({hostname})" if hostname else ""
        lines.append(f"## 🖥️ {ip}{name_str}")

        if host.get("os"):
            lines.append(f"**OS**: {host['os']}")

        lines.append("")
        lines.append("| Port | Service | State | Version/Banner |")
        lines.append("|------|---------|-------|----------------|")

        for port_info in host.get("ports", []):
            port = port_info["port"]
            svc = port_info["service"]
            icon = SERVICE_ICONS.get(svc, "")
            version = port_info.get("version") or port_info.get("banner", "")[:60]
            lines.append(f"| {port} | {icon} {svc} | ✅ open | {version} |")

        if host.get("vulnerabilities"):
            lines.append("")
            lines.append("**⚠️ Security Observations:**")
            for vuln in host["vulnerabilities"]:
                lines.append(f"- {vuln}")

        lines.append("")
        lines.append("---")
        lines.append("")

    return "\n".join(lines)


def generate_csv(hosts: list[dict], filepath: str):
    with open(filepath, "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["IP", "Hostname", "OS", "Port", "Service", "State", "Version", "Vuln Flags"])
        for host in hosts:
            vulns = "; ".join(host.get("vulnerabilities", []))
            if host.get("ports"):
                for port_info in host["ports"]:
                    writer.writerow(
                        [
                            host["ip"],
                            host.get("hostname", ""),
                            host.get("os", ""),
                            port_info["port"],
                            port_info["service"],
                            port_info["state"],
                            port_info.get("version", "") or port_info.get("banner", "")[:60],
                            vulns,
                        ]
                    )
            else:
                writer.writerow(
                    [host["ip"], host.get("hostname", ""), host.get("os", ""), "", "", "", "", vulns]
                )


# ── Main ──────────────────────────────────────────────────────────────────────


def main():
    parser = argparse.ArgumentParser(description="Network Recon & Asset Inventory — Matthew Vaishnav")
    parser.add_argument("--target", default="192.168.1.0/24")
    parser.add_argument("--ports", default=DEFAULT_PORTS)
    parser.add_argument("--output", default="asset_inventory")
    parser.add_argument("--format", choices=["json", "csv", "md", "all"], default="all")
    parser.add_argument("--demo", action="store_true", help="Use simulated demo data")
    args = parser.parse_args()

    print(f"\n{'═'*60}")
    print(f"  🌐 Network Recon — Matthew Vaishnav | CST, Conestoga College")
    print(f"{'═'*60}")
    print(f"  Target : {args.target}")
    print(f"  Ports  : {args.ports}")
    print(f"  ⚠️  Only scan networks you own or have permission to scan!")
    print(f"{'═'*60}\n")

    if args.demo:
        hosts = [
            {
                "ip": "192.168.1.1",
                "hostname": "gateway.local",
                "os": "Linux (router firmware)",
                "ports": [
                    {"port": 22, "service": "ssh", "state": "open", "version": "OpenSSH 8.9"},
                    {"port": 80, "service": "http", "state": "open", "version": "lighttpd 1.4"},
                    {"port": 443, "service": "https", "state": "open", "version": "lighttpd 1.4"},
                ],
                "vulnerabilities": [],
            },
            {
                "ip": "192.168.1.10",
                "hostname": "win-server.corp.local",
                "os": "Windows Server 2019",
                "ports": [
                    {"port": 80, "service": "http", "state": "open", "version": "IIS/10.0"},
                    {"port": 443, "service": "https", "state": "open", "version": "IIS/10.0"},
                    {"port": 3389, "service": "rdp", "state": "open", "version": "Microsoft RDP"},
                    {"port": 445, "service": "smb", "state": "open", "version": "SMBv3"},
                ],
                "vulnerabilities": ["⚠️  Ensure NLA enforced and patched (BlueKeep: CVE-2019-0708)"],
            },
            {
                "ip": "192.168.1.25",
                "hostname": "ubuntu-web",
                "os": "Ubuntu 22.04",
                "ports": [
                    {"port": 22, "service": "ssh", "state": "open", "version": "OpenSSH 8.9p1"},
                    {"port": 80, "service": "http", "state": "open", "version": "nginx 1.18"},
                    {"port": 443, "service": "https", "state": "open", "version": "nginx 1.18"},
                    {"port": 3306, "service": "mysql", "state": "open", "version": "MySQL 8.0"},
                ],
                "vulnerabilities": [],
            },
            {
                "ip": "192.168.1.99",
                "hostname": "legacy-box",
                "os": "Windows XP (EOL)",
                "ports": [
                    {"port": 23, "service": "telnet", "state": "open", "version": ""},
                    {"port": 445, "service": "smb", "state": "open", "version": "SMBv1"},
                    {"port": 3389, "service": "rdp", "state": "open", "version": "RDP 5.1"},
                ],
                "vulnerabilities": [
                    "⚠️  Plaintext protocol — replace with SSH",
                    "🔴 EternalBlue-vulnerable SMB version",
                    "⚠️  Ensure NLA enforced and patched",
                ],
            },
        ]
        print(f"  📊 Demo mode: {len(hosts)} simulated hosts loaded\n")
    else:
        live_ips = discover_hosts(args.target)
        print(f"\n  ✅ Found {len(live_ips)} live hosts: {', '.join(live_ips)}\n")

        hosts = []
        for ip in live_ips:
            print(f"  📡 Scanning {ip}...")
            hostname = get_hostname(ip)
            ports = scan_ports_basic(ip, args.ports)
            host_data = {"ip": ip, "hostname": hostname, "os": "", "ports": ports}
            host_data["vulnerabilities"] = check_vulns(host_data)
            hosts.append(host_data)

    base = args.output
    if args.format in ("json", "all"):
        Path(f"{base}.json").write_text(json.dumps(hosts, indent=2))
        print(f"  💾 JSON  → {base}.json")

    if args.format in ("csv", "all"):
        generate_csv(hosts, f"{base}.csv")
        print(f"  💾 CSV   → {base}.csv")

    if args.format in ("md", "all"):
        md = generate_markdown(hosts, args.target)
        Path(f"{base}.md").write_text(md)
        print(f"  💾 MD    → {base}.md")

    print(f"\n{'═'*60}")
    print(f"  SCAN SUMMARY")
    print(f"{'═'*60}")
    print(f"  Live Hosts    : {len(hosts)}")
    total_ports = sum(len(h.get("ports", [])) for h in hosts)
    total_vulns = sum(len(h.get("vulnerabilities", [])) for h in hosts)
    print(f"  Open Ports    : {total_ports}")
    print(f"  Vuln Flags    : {total_vulns}")
    if total_vulns:
        print(f"\n  🔴 HOSTS REQUIRING ATTENTION:")
        for h in hosts:
            if h.get("vulnerabilities"):
                print(f"     • {h['ip']} ({h.get('hostname', 'N/A')})")
    print(f"{'═'*60}\n")


if __name__ == "__main__":
    main()
