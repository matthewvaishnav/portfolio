# Networking — Intro & Network Types
> INFO1385 Internetwork Management | Conestoga College — Matthew Vaishnav

---

## Why Networking Matters

Networking is foundational to every IT role. As a Linux admin, DevOps engineer,
or security analyst you constantly work with firewall rules, SSH, DNS, DHCP,
routing, VPNs, and cloud networking.

**Common "server is down" causes requiring networking knowledge:**
- DNS misconfiguration
- Firewall blocking traffic
- Broken route or unreachable gateway
- Service listening on the wrong port

**Diagnostic toolkit:** `ping`, `traceroute`, `netstat`, `ss`, `tcpdump`, `iptables`

---

## Network Service Models

### Peer-to-Peer (P2P)
- Each computer's OS controls its own resources
- No central authority — local accounts only
- **Pros:** Simple, cheap | **Cons:** Not scalable, insecure
- Example: Windows/macOS/Linux machines in a local workgroup

### Client-Server
- NOS (Network Operating System) manages resources via central database
- **Active Directory (AD):** Microsoft's central directory service
  - Global user database — accounts work domain-wide
  - Single Sign-On (SSO)
  - Managed via Active Directory Domain Services (ADDS)
- **Pros over P2P:** SSO, centralized access control, monitoring, scalability
- NOS examples: Windows Server, Red Hat Linux, Ubuntu Server

---

## Network Types by Size

| Type | Full Name | Scope |
|------|-----------|-------|
| **PAN** | Personal Area Network | Single person's devices — few metres |
| **LAN** | Local Area Network | Single building or floor |
| **CAN** | Campus Area Network | Group of buildings |
| **MAN** | Metropolitan Area Network | City-wide, often in-ground fibre |
| **WAN** | Wide Area Network | Geographically dispersed LANs |
| **SAN** | Storage Area Network | Data centres — Fibre Channel, iSCSI |
| **SDWAN** | Software-Defined WAN | Virtual WAN managed by software |
| **MPLS** | Multiprotocol Label Switching | WAN protocol using labels to forward/prioritize data |

---

## Physical Topologies

| Topology | Structure | Pros | Cons | Status |
|----------|-----------|------|------|--------|
| **Bus** | Single backbone cable | Cheap | One failure = network down, collisions | Legacy |
| **Star** | All devices → central switch | Scalable, fault isolated | Switch = single point of failure | Modern standard |
| **Star-Bus** | Daisy-chained switches + star endpoints | Best of both | — | Enterprise standard |
| **Ring** | Devices in a loop | — | Break = network down | Legacy |
| **Mesh** | Every device connected to every other | Maximum redundancy | Expensive | WAN/Internet |
| **Point-to-Point** | Direct link between 2 devices | Simple | No redundancy | WAN links |

---

## Network Hardware

| Device | Layer | Function |
|--------|-------|----------|
| NIC | 1/2 | Connects host to network; holds MAC address |
| Hub | 1 | Repeats signal to all ports — **legacy** |
| Switch | 2 | Forwards frames using MAC address table |
| Router | 3 | Routes packets between networks using IP |
| Access Point | 1/2 | Wireless — half duplex |

---

## Communication Services

| Service | Examples | Key Note |
|---------|----------|----------|
| Client-Server Apps | Web, email, FTP, RDP | Client requests from server |
| File Services | SMB, NFS | Centralized storage |
| VoIP | Teams, Zoom | Latency-sensitive — needs QoS |
| Video Streaming | Live/stored video | Bandwidth-intensive |
| Unified Comms (UC) | Voice + video + data | Single converged network |

**QoS:** Admin-configured priority ensuring VoIP/video traffic gets bandwidth before regular data.

---

## Virtualization Concepts

| Term | Definition |
|------|------------|
| **vSwitch** | Software switch running on a hypervisor (e.g., VMware) |
| **vNIC** | Virtual NIC connecting a VM to the LAN |
| **NFV** | Network Function Virtualization — routers/firewalls/switches as software |
| **Hypervisor** | Bare-metal software allowing multiple VMs to share hardware |
