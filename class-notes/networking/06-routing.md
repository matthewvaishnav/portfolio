# Networking — Routing
> INFO1385 Internetwork Management | Conestoga College — Matthew Vaishnav

---

## Routing Fundamentals

A router forwards packets between networks. To route, it must know:
- Destination IP address (from packet header)
- Neighboring routers
- Possible routes to the target network
- The **best** route to the target network
- How to maintain and verify routing information

**Routing table:** The router's map of all known networks and how to reach them.

---

## How Routers Learn Routes

| Method | Description |
|--------|-------------|
| **Connected** | Networks directly attached to router interfaces — learned automatically |
| **Static** | Manually configured by administrator |
| **Dynamic** | Learned from neighboring routers via routing protocols |

---

## Static Routing

Explicit route manually configured by an admin.

### Cisco IOS Syntax
```
ip route <dest_network> <mask> <next_hop_IP | exit_interface> [admin_distance] [permanent]
```

**Parameters:**
- `next_hop` — IP of the neighboring router interface toward the destination
- `exit_interface` — interface to forward traffic out of
- `admin_distance` — trustworthiness of the route (lower = more trusted)
- `permanent` — keeps route even if next hop is unreachable

### Examples
```bash
# Route to 10.105.121.0/24 via next-hop router
ip route 10.105.121.0 255.255.255.0 192.168.0.2

# Route to 10.105.121.0/24 out serial interface
ip route 10.105.121.0 255.255.255.0 s0/0
```

---

## Default Routing (Route of Last Resort)

- Used when no specific route exists for the destination
- Forwards traffic to a gateway that knows where to send it (usually ISP)
- Also known as **stub routing** when a router only has a default route

```bash
ip route 0.0.0.0 0.0.0.0 192.168.0.1
```

---

## Dynamic Routing Protocols

Routers automatically exchange routing information with neighbors.
Best route determined by **lowest administrative distance (AD)**.

### Administrative Distance (Default Values)

| Route Source | Admin Distance |
|-------------|----------------|
| Directly connected | 0 |
| Static route | 1 |
| EIGRP | 90 |
| OSPF | 110 |
| RIP | 120 |
| External BGP | 20 |
| Internal BGP | 200 |

Lower AD = more trusted. If two routes to the same network exist, the one with lower AD wins.

---

## Dynamic Routing Protocol Types

### Distance Vector
- Routes based on **hop count** (number of routers to destination)
- Fewest hops = "best" route
- Entire routing table advertised periodically to neighbors
- **Example: RIP (Routing Information Protocol)**
  - Very inefficient — slow convergence
  - Max 15 hops (16 = unreachable)
  - Mostly legacy

### Link State
- Neighbors understand the **state of links** between them
- Builds a complete map of the network topology
- Only sends updates to neighbors when changes occur (not full table)
- **Example: OSPF (Open Shortest Path First)**
  - Fast convergence
  - Scalable — widely used in enterprise networks

### Hybrid
- Combines elements of distance vector and link state
- **Example: EIGRP (Enhanced Interior Gateway Routing Protocol)**
  - Cisco proprietary
  - Fast convergence, efficient updates

---

## BGP — Border Gateway Protocol

- Used for routing **between autonomous systems** (e.g., between ISPs)
- The backbone of the internet
- Extremely complex but highly scalable
- External BGP (eBGP): between different organizations
- Internal BGP (iBGP): within the same organization

---

## Routing Table Example

```
R1# show ip route

C    192.168.1.0/24 is directly connected, GigabitEthernet0/0
C    10.0.0.0/30    is directly connected, Serial0/0
S    10.105.121.0/24 [1/0] via 192.168.0.2
S*   0.0.0.0/0 [1/0] via 10.0.0.1   ← default route
```

**Legend:**
- `C` = Connected
- `S` = Static
- `O` = OSPF
- `R` = RIP
- `D` = EIGRP
