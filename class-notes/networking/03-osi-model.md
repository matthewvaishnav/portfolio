# Networking — OSI Model
> INFO1385 Internetwork Management | Conestoga College — Matthew Vaishnav

---

## What is the OSI Model?

OSI stands for **Open Systems Interconnection** — a conceptual framework that
standardizes how different network systems communicate. It breaks networking into
7 layers, each with defined responsibilities, so engineers can reason about
protocols, troubleshoot problems, and build interoperable systems.

**Why models matter:**
- Breaks complex networking into manageable layers
- Gives engineers a common language
- Helps categorize new protocols as they emerge
- Makes troubleshooting more logical

---

## The 7 Layers

| # | Layer | PDU | Key Protocols | Function |
|---|-------|-----|---------------|----------|
| 7 | **Application** | Data | HTTP, FTP, SMTP, SNMP, DNS | API for applications and services |
| 6 | **Presentation** | Data | TLS, gzip, UTF-8 | Encoding, compression, encryption |
| 5 | **Session** | Data | NetBIOS, RPC | Session management, synchronization |
| 4 | **Transport** | Segment / Datagram | TCP, UDP | End-to-end delivery, ports, flow control |
| 3 | **Network** | Packet | IP, ARP, ICMP, OSPF, BGP | Logical addressing, routing |
| 2 | **Data Link** | Frame | Ethernet, MAC, 802.11 | Physical addressing, media access |
| 1 | **Physical** | Bit | Cables, voltages, connectors | Transmits raw bits over medium |

**Memory aid:** _All People Seem To Need Data Processing_ (7 → 1)

---

## Layer-by-Layer Breakdown

### Layer 7 — Application
- Defines protocols used by applications to communicate across computers
- Can provide **end-user services** (web, email) or **system services** (network monitoring)
- **Payload:** Data passed between applications or management utilities
- Examples: HTTP (web), FTP (file transfer), SMTP (email), SNMP (network management)

### Layer 6 — Presentation
- Formats data so it can be interpreted by the receiving application
- Handles: encoding (UTF-8), compression (gzip), encryption (TLS)
- Services usually provided by the OS
- **Payload:** Formatted data passed between applications

### Layer 5 — Session
- Manages how messages between applications are synchronized
- Handles recovery if messages are not received intact
- **Payload:** Formatted data passed between applications

### Layer 4 — Transport
- Ensures inbound data reaches the correct application (via ports)
- May guarantee delivery (TCP) or not (UDP)

**TCP — Transmission Control Protocol:**
- Connection-oriented: establishes connection via 3-way handshake (SYN → SYN/ACK → ACK)
- Guarantees delivery with sequencing, checksums, and acknowledgements
- Flow control via windowing — multiple segments sent before ACK required
- Chunks called **segments**

**UDP — User Datagram Protocol:**
- Connectionless — no handshake
- Best-effort delivery, no sequencing or integrity checks
- Faster and lower overhead — used for DNS, VoIP, video streaming
- Chunks called **datagrams**

**Ports:**
- Well-known: 0–1023 (HTTP=80, HTTPS=443, SSH=22)
- Registered: 1024–49151
- Dynamic/Ephemeral: 49152–65535
- **Socket:** IP address + port (e.g., `192.168.1.10:443`)

### Layer 3 — Network
- Routes packets between different networks
- Adds IP header (source and destination IP addresses)

Key protocols:
- **IP (Internet Protocol):** Logical addressing for nodes
- **ARP (Address Resolution Protocol):** Maps IP addresses to MAC addresses
- **ICMP (Internet Control Message Protocol):** Manages traffic flow; used by `ping`
- **IGMP:** Layer 3 multicast management (video conferencing)
- **Encapsulated unit:** Packet

### Layer 2 — Data Link
- Forwards frames between devices on the **same** network
- Adds header (source/destination MAC) and trailer (FCS — Frame Check Sequence)
- MAC address: 48-bit hardware address burned into NIC
  - First 24 bits: OUI (Organizationally Unique Identifier) assigned by IEEE
  - Second 24 bits: Device identifier assigned by vendor
- **If destination is on a different network:** destination MAC = default gateway MAC
- Source/destination MAC addresses change at each hop; IP addresses do not
- **Encapsulated unit:** Frame

### Layer 1 — Physical
- Transmits raw, unstructured bits over the network medium
- Defines connectors, voltages, cable types, speeds
- Media: RF (wireless), current over copper, light over fibre optic
- **Encapsulated unit:** Bit

---

## Protocol Data Units (PDUs)

Encapsulation is the process of adding a header (and sometimes trailer) at each layer
as data moves down the stack before transmission.

| Layer | PDU Name | Technical Name |
|-------|----------|----------------|
| 7–5 | Data | L7PDU |
| 4 | Segment (TCP) / Datagram (UDP) | L4PDU |
| 3 | Packet | L3PDU |
| 2 | Frame | L2PDU |
| 1 | Bit | L1PDU |

---

## Data Flow (Encapsulation & De-encapsulation)

**Sending (down the stack):**
1. Application creates data (HTTP request)
2. Transport adds TCP/UDP header → **Segment**
3. Network adds IP header → **Packet**
4. Data Link adds MAC header + FCS → **Frame**
5. Physical transmits bits over wire

**Receiving (up the stack):**
Each layer strips its header and passes payload to the layer above — **de-encapsulation**.

---

## OSI vs DoD (TCP/IP) Model

| DoD Layer | Equivalent OSI Layers |
|-----------|----------------------|
| Process/Application | 7, 6, 5 |
| Host-to-Host/Transport | 4 |
| Internet | 3 |
| Network Access | 2, 1 |

The DoD model is simpler (4 layers) and is what TCP/IP actually uses in practice.
The OSI model is the conceptual teaching framework.

---

## Functional Groupings

| Layers | Group | Provided by |
|--------|-------|-------------|
| 7, 6, 5 | Application layers | OS or the application/service itself |
| 4, 3 | Logical network layers | OS or hardware |
| 2, 1 | Physical layers | Hardware (NIC, cables, switches) |
