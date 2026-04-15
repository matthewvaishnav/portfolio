# Networking — Ethernet, Switching & VLANs
> INFO1385 Internetwork Management | Conestoga College — Matthew Vaishnav

---

## Ethernet

The most common LAN standard. Defined by **IEEE 802.3**.
Operates at Layers 1 and 2.

### Transmission Modes

| Mode | Description | Used Where |
|------|-------------|-----------|
| **Full Duplex** | Transmit and receive simultaneously | All modern switch ports |
| **Half Duplex** | One direction at a time | Wi-Fi / Access Points |
| **Simplex** | One direction only | Rare |

- NICs should be set to **auto-negotiate** — automatically select best speed and duplex
- Some servers and switch crosslinks may be manually forced
- Speed/duplex mismatch causes degraded performance

### CSMA/CD — Carrier Sense Multiple Access with Collision Detection

Ethernet is technically a bus-based protocol. CSMA/CD handles access and collisions:

- **CS (Carrier Sense):** Listen for a carrier before transmitting — wait if medium is busy
- **MA (Multiple Access):** Multiple devices share the same medium
- **CD (Collision Detection):** If two devices transmit simultaneously, they detect the collision, send a jam signal, wait a random time, then retransmit

Wi-Fi uses **CSMA/CA** (Collision Avoidance) instead — it can't detect collisions.

---

## Ethernet Frame Structure

```
| Preamble | Dest MAC | Src MAC | 802.1Q Tag (optional) | Type/Length | Payload | FCS |
```

- **Destination MAC:** Where the frame is going (Layer 2)
- **Source MAC:** Where the frame came from
- **Type/Length:** Indicates payload protocol (e.g., 0x0800 = IPv4)
- **FCS (Frame Check Sequence):** Error detection trailer

---

## MAC Addresses

- **48 bits** (6 bytes) written as `00:1A:2B:3C:4D:5E`
- First 24 bits: **OUI (Organizationally Unique Identifier)** — assigned by IEEE to manufacturer
- Second 24 bits: **Device identifier** — assigned by manufacturer
- Globally unique — printed on device and packaging

---

## NICs

- Operate at Layers 1 and 2
- Contains MAC address
- Determines when OK to transmit (CSMA/CD)
- Assembles/disassembles frames

**NIC features to consider:**
- Network connection type (Ethernet, Wi-Fi)
- Maximum transmission speed
- Connector type (copper, fibre)
- Number of ports (servers often have multiple for redundancy/aggregation)
- Enhanced features: traffic management, PoE, TCP Offload, iSCSI HBA
- System interface (PCIe most common in PCs)

**TCP Offload:** Offloads TCP processing from CPU to NIC for better performance.

---

## How Switches Work

### Frame Forwarding — "Flood and Learn"

1. Frame arrives on a port
2. Switch checks **source MAC** — if not in MAC table, adds it with the port number
3. Switch checks **destination MAC** — if found, forwards only to that port
4. If destination MAC is **unknown** — floods the frame out all ports except the ingress port
5. For **broadcast** or **multicast** frames — flooded to all ports in the VLAN

**MAC Address Table (CAM Table):**
- Each entry includes: MAC address, port, aging timer (default: 5 minutes)
- Entries expire if no frames received within the timer window
- If a device moves ports, the entry updates automatically

### Collision Domains
- **Hub (Layer 1):** One collision domain for all ports — everyone hears everything
- **Switch (Layer 2):** Every port is its own collision domain — isolated

### Broadcast Domains
- **Switches** forward broadcast frames within the VLAN
- **Routers** block broadcasts — each router interface = new broadcast domain
- Only routers (and Layer 3 switches) separate broadcast domains

---

## Three-Tier Switching Model

| Layer | Role | Characteristics |
|-------|------|----------------|
| **Core** | High-speed backbone | Lowest latency, frame forwarding only |
| **Distribution** | Intelligent routing | Routing, NAT, filtering, firewall |
| **Access** | User connections | Access control, security policy, endpoints |

---

## VLANs — Virtual Local Area Networks

A VLAN creates a separate **broadcast domain** at Layer 2.
Multiple VLANs can run on a single physical switch.

**Why use VLANs:**
- Logical separation without buying extra switches
- Security: isolate HR from IT from Sales traffic
- Performance: limit broadcast scope
- Inter-VLAN traffic requires **routing** (a router or Layer 3 switch)

### Interswitch Communication — Trunking

Carrying multiple VLANs over a single link between switches.

**IEEE 802.1Q (dot1Q):** Industry standard VLAN tagging
- Inserts a 4-byte VLAN tag into the Ethernet frame header
- Identifies which VLAN the frame belongs to

**Cisco ISL:** Proprietary — deprecated, replaced by 802.1Q

### Inter-VLAN Routing Options

**Router-on-a-Stick:**
- Single router interface trunked to switch
- Sub-interfaces created per VLAN on the router
- All inter-VLAN traffic passes through the single trunk link

**Layer 3 Switch IVR:**
- SVIs (Switched Virtual Interfaces) configured per VLAN on the switch
- No external router needed for inter-VLAN routing
- More scalable and faster than router-on-a-stick
