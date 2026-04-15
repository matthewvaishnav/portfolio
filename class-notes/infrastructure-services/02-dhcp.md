# Infrastructure Services — DHCP
> INFO1555 Infrastructure Services Administration | Conestoga College — Matthew Vaishnav

---

## What is DHCP?

DHCP (Dynamic Host Configuration Protocol) automatically assigns IP configuration
to devices when they connect to the network.

**Without DHCP:** Every device needs manual static IP config.
**With DHCP:** Plug in, and you're automatically configured in seconds.

### What DHCP Assigns
- IP Address
- Subnet Mask
- Default Gateway
- DNS Server(s)
- Optional: NTP server, domain name, etc.

---

## DORA Process

The 4-step handshake between a DHCP client and server:

```
Client                              Server
  │                                   │
  │──── DISCOVER (broadcast) ────────→│  "Is there a DHCP server out there?"
  │                                   │
  │←─── OFFER ────────────────────────│  "Yes! Here's an IP for you."
  │                                   │
  │──── REQUEST (broadcast) ─────────→│  "I'd like that IP please."
  │                                   │
  │←─── ACKNOWLEDGE ──────────────────│  "Done. It's yours for [lease time]."
```

- Client broadcasts **Discover** because it has no IP yet
- Server **reserves** the offered IP until the client accepts or times out
- Client **broadcasts** its Request so other DHCP servers know it chose this server
- Lease has a duration — client must renew before it expires

---

## Windows DHCP Server

### Benefits
- Eliminates manual config errors (typos, address conflicts)
- Centralized and automated TCP/IP configuration
- Handles portable devices (laptops moving between locations)

### Key Concepts

| Term | Description |
|------|-------------|
| **Scope** | A pool of IP addresses for a specific subnet |
| **Exclusion** | Range within a scope withheld from dynamic assignment |
| **Reservation** | Specific IP always given to a specific MAC address |
| **Lease** | Duration an IP address is assigned to a client |

### Common PowerShell Commands

```powershell
# Install DHCP role
Install-WindowsFeature -Name DHCP -IncludeManagementTools

# Create a new DHCP scope
Add-DhcpServerv4Scope -Name "Office-LAN" -StartRange 192.168.10.50 -EndRange 192.168.10.200 -SubnetMask 255.255.255.0

# Set scope options (gateway, DNS)
Set-DhcpServerv4OptionValue -ScopeId 192.168.10.0 -Router 192.168.10.1 -DnsServer 10.0.0.10

# Add a reservation (bind IP to MAC)
Add-DhcpServerv4Reservation -ScopeId 192.168.10.0 -IPAddress 192.168.10.20 -ClientId "AA-BB-CC-DD-EE-FF" -Description "Printer01"

# View active leases
Get-DhcpServerv4Lease -ScopeId 192.168.10.0

# View all scopes
Get-DhcpServerv4Scope
```

---

## Linux DHCP — ISC DHCP (Rocky Linux 8/9)

### Install and Start

```bash
dnf install dhcp-server
systemctl start dhcpd
systemctl enable dhcpd
```

### Config File: `/etc/dhcp/dhcpd.conf`

```conf
default-lease-time 600;
max-lease-time 7200;
authoritative;

subnet 192.168.10.0 netmask 255.255.255.0 {
    range 192.168.10.50 192.168.10.200;
    option routers 192.168.10.1;
    option subnet-mask 255.255.255.0;
    option domain-name-servers 192.168.10.1;
}

# Reservation (bind IP to MAC)
host Printer01 {
    hardware ethernet AA:BB:CC:DD:EE:FF;
    fixed-address 192.168.10.20;
}
```

### Validate and Manage

```bash
dhcpd -t                          # Validate config syntax
systemctl restart dhcpd           # Apply changes
cat /var/lib/dhcpd/dhcpd.leases   # View current leases
journalctl -u dhcpd               # View logs
```

### Firewall

```bash
firewall-cmd --add-service=dhcp --permanent
firewall-cmd --reload
```

---

## Linux DHCP — Kea (Rocky Linux 10+)

ISC DHCP is being replaced by **Kea** as the modern standard.

### Install and Start

```bash
dnf install kea kea-dhcp4
systemctl enable --now kea-dhcp4
```

### Config File: `/etc/kea/kea-dhcp4.conf` (JSON format)

```json
{
  "Dhcp4": {
    "interfaces-config": {
      "interfaces": ["ens160"]
    },
    "subnet4": [
      {
        "subnet": "192.168.10.0/24",
        "pools": [
          { "pool": "192.168.10.50 - 192.168.10.200" }
        ],
        "option-data": [
          { "name": "routers", "data": "192.168.10.1" },
          { "name": "domain-name-servers", "data": "192.168.10.1" }
        ],
        "reservations": [
          {
            "hw-address": "AA:BB:CC:DD:EE:FF",
            "ip-address": "192.168.10.20"
          }
        ]
      }
    ]
  }
}
```

```bash
systemctl restart kea-dhcp4
journalctl -u kea-dhcp4           # Logs
cat /var/lib/kea/kea-leases4.csv  # Lease database
```

---

## Linux DHCP Client Configuration

```bash
# Set interface to DHCP
nmcli connection modify ens160 ipv4.method auto
nmcli connection up ens160

# Release and renew
dhclient -r    # Release
dhclient       # Renew

# Switch from static to DHCP
nmcli connection modify ens160 ipv4.method auto
nmcli connection up ens160

# View current IP
ip a
```

---

## Windows vs Linux DHCP Comparison

| Feature | Windows DHCP | ISC DHCP (Linux) | Kea (Linux) |
|---------|-------------|-----------------|------------|
| Management | GUI + PowerShell | Text config file | JSON config file |
| Install | Server Manager | `dnf install dhcp-server` | `dnf install kea` |
| Service | DHCP Server | `dhcpd` | `kea-dhcp4` |
| Logs | Event Viewer | `/var/log/messages` | `/var/log/kea/` |
| Reservations | MAC-based, GUI | Config file | JSON config |
| Modern | Yes | Aging out | Current standard |

---

## Troubleshooting DHCP

**Client not getting an IP?**

1. Check DHCP service status: `systemctl status dhcpd` or `kea-dhcp4`
2. Validate config: `dhcpd -t` (ISC) or check JSON syntax (Kea)
3. Check firewall: `firewall-cmd --list-all` — port UDP 67/68 must be open
4. Confirm NIC is on correct subnet: `ip a`
5. Check logs: `journalctl -u dhcpd`
6. Verify scope has addresses remaining (not exhausted)
