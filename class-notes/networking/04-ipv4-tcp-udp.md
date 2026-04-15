# Networking — IPv4, TCP, UDP & Address Protocols
> INFO1385 Internetwork Management | Conestoga College — Matthew Vaishnav

---

## IPv4 Addressing

- **32-bit** address written in dotted decimal notation: `172.16.254.1`
- Divided into 4 octets (8 bits each) — max value per octet: 255
- Every IP address has two components: **network address** + **host address**

### IPv4 Address Classes (Classful)

| Class | First Octet Range | Default Subnet Mask | Private Range |
|-------|------------------|--------------------:|---------------|
| A | 1–126 | 255.0.0.0 (/8) | 10.0.0.0/8 |
| B | 128–191 | 255.255.0.0 (/16) | 172.16.0.0–172.31.0.0 |
| C | 192–223 | 255.255.255.0 (/24) | 192.168.0.0–192.168.255.0 |
| D | 224–239 | N/A | Multicast |
| E | 240–255 | N/A | Experimental/reserved |

### Special IPv4 Addresses

| Address | Purpose |
|---------|---------|
| `0.0.0.0` | Undefined — used for default gateway/route |
| `127.0.0.1` | Loopback — your own machine before Data Link layer |
| `169.254.0.0/16` | APIPA / Link-Local — auto-assigned when DHCP unavailable; not routable |
| `255.255.255.255` | Broadcast — all devices on local network |

### Public vs Private
- **Private addresses** are used inside networks and are not routed on the internet
- **Public addresses** are unique globally — your router's internet-facing IP
- NAT (Network Address Translation) maps many private addresses to one public IP —
  this is how IPv4 addresses have been conserved

---

## Subnet Mask

- 32-bit value that identifies the network portion of an IP address
- **1 bits = network, 0 bits = host**
- Logical AND between IP address and subnet mask = network address

```
IP:   192.168.1.100  =  11000000.10101000.00000001.01100100
Mask: 255.255.255.0  =  11111111.11111111.11111111.00000000
      AND result     =  11000000.10101000.00000001.00000000
Network:               192.168.1.0
```

### CIDR Notation
Simplified representation of subnet mask: `192.168.1.0/24`
The `/24` means the first 24 bits are the network portion.

---

## IPv4 Assignment

### Static
- Administrator manually configures IP, subnet mask, default gateway, DNS
- Used for servers, printers, network devices — anything that needs a consistent address

### Dynamic (DHCP)
- DHCP server automatically assigns IP configuration from an address pool
- Leases are temporary — when expired, configuration returns to pool
- DORA process: **Discover → Offer → Request → Acknowledge**

**Windows tools:** `ipconfig` (view), Network Adapter settings (change)
**Linux tools:** `ifconfig` or `ip address` (view/change)

---

## Key Layer 3 Protocols

### ARP — Address Resolution Protocol
- Maps IP addresses to MAC addresses on the local network
- Broadcast-based — "Who has IP x.x.x.x? Tell me your MAC"
- Results cached in the **ARP table**
- View with: `arp -a`

### ICMP — Internet Control Message Protocol
- Layer 3 core protocol for error messaging and diagnostics
- Used by `ping` (echo request/reply) and `traceroute`
- Indicates: network congestion, delivery failure, discarded messages
- No failure correction — reporting only

### IGMP — Internet Group Management Protocol
- Layer 3 multicast management
- Devices join or leave multicast groups
- Common use: video conferencing, router info exchange

### NAT — Network Address Translation
| Type | Description |
|------|-------------|
| Static NAT | One private IP ↔ one public IP (fixed) |
| Dynamic NAT | Private IP maps to any available public IP from a pool |
| PAT / NAT Overload | Many private IPs → one public IP using different port numbers — **most common** |

---

## TCP — Transmission Control Protocol

- **Connection-oriented:** uses 3-way handshake before data transfer
- Guarantees delivery with sequencing and acknowledgements
- Flow control via **windowing** (multiple segments before ACK required)
- Higher overhead than UDP — used when reliability matters

### TCP Three-Way Handshake
```
Client  →  SYN        →  Server   (client initiates)
Client  ←  SYN/ACK    ←  Server   (server acknowledges + responds)
Client  →  ACK        →  Server   (client confirms)
```

### TCP Header Key Fields
- Source Port / Destination Port
- Sequence Number / Acknowledgement Number
- Window Size (flow control)
- Flags: SYN, ACK, FIN, RST

### Common TCP Ports
| Port | Protocol |
|------|----------|
| 22 | SSH |
| 23 | Telnet |
| 25 | SMTP |
| 53 | DNS |
| 80 | HTTP |
| 143 | IMAP |
| 443 | HTTPS |
| 445 | SMB |
| 3389 | RDP |

---

## UDP — User Datagram Protocol

- **Connectionless:** no handshake, no session
- Best-effort delivery — no sequencing, no acknowledgement, no integrity check
- Lower overhead — faster than TCP
- Used when speed matters more than reliability: DNS, VoIP, streaming, DHCP

### Common UDP Ports
| Port | Protocol |
|------|----------|
| 53 | DNS |
| 67/68 | DHCP |
| 69 | TFTP |
| 123 | NTP |
| 161 | SNMP |

---

## TCP vs UDP Summary

| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Connection-oriented (3-way handshake) | Connectionless |
| Reliability | Guaranteed delivery | Best-effort |
| Sequencing | Yes | No |
| Flow control | Yes (windowing) | No |
| Speed | Slower (overhead) | Faster |
| Use cases | HTTP, FTP, SSH, email | DNS, VoIP, video, DHCP |

---

## Port Number Ranges

| Range | Type | Description |
|-------|------|-------------|
| 0–1023 | Well-known | System services (HTTP, SSH, FTP) |
| 1024–49151 | Registered | Application-assigned |
| 49152–65535 | Dynamic/Ephemeral | Auto-assigned for client connections |

**Socket:** Combination of IP address + port (e.g., `10.0.0.1:443`)
