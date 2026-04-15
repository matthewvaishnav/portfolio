# Networking — Subnetting & IP Design
> INFO1385 Internetwork Management | Conestoga College — Matthew Vaishnav

---

## Classful vs Classless Addressing

### Classful
- Predefined rules determine network portion based on IP class (A, B, C)
- Subnet mask is NOT included in routing updates
- No support for VLSM or CIDR
- Results in fixed-size blocks — wastes address space

### Classless (CIDR)
- You choose how many bits are used for the network
- Subnet mask IS included in routing updates
- Supports VLSM and efficient subnetting
- Written as: `192.168.1.0/24` — the `/24` defines the network bits

---

## Why Subnet?

**Performance:** Smaller broadcast domains = less congestion
**Security:** Isolate servers from workstations, create guest Wi-Fi
**Troubleshooting:** Fewer devices per segment to diagnose

---

## Subnet Mask Math

- Network bits = **1**, Host bits = **0**
- Logical AND of IP + subnet mask = network address

**Example:**
```
IP Address:   192.168.1.100
Subnet Mask:  255.255.255.0  (/24)
Network:      192.168.1.0
Broadcast:    192.168.1.255
Host Range:   192.168.1.1 – 192.168.1.254
Usable Hosts: 254  (2^8 - 2)
```

---

## Subnetting Process

1. Determine maximum number of required subnets
2. Determine maximum hosts per subnet
3. Determine the classful base network
4. Define the block size (magic number)
5. Map out all subnets with host ranges and broadcast addresses

---

## VLSM Block Sizes (4th Octet)

| CIDR | Subnet Mask | Block Size | Usable Hosts |
|------|------------|-----------|-------------|
| /24 | 255.255.255.0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 126 |
| /26 | 255.255.255.192 | 64 | 62 |
| /27 | 255.255.255.224 | 32 | 30 |
| /28 | 255.255.255.240 | 16 | 14 |
| /29 | 255.255.255.248 | 8 | 6 |
| /30 | 255.255.255.252 | 4 | 2 |
| /32 | 255.255.255.255 | 1 | 0 (host route) |

**Block size formula:** `256 - subnet_mask_octet_value`

---

## Subnetting Example — /24 into /25s

Base network: `10.0.0.0/24`

| Subnet | Network Address | Host Range | Broadcast |
|--------|----------------|------------|-----------|
| 1 | 10.0.0.0/25 | 10.0.0.1–10.0.0.126 | 10.0.0.127 |
| 2 | 10.0.0.128/25 | 10.0.0.129–10.0.0.254 | 10.0.0.255 |

---

## VLSM — Variable Length Subnet Masking

Using **different subnet masks** for different parts of a network to save address space.

**Example use case:** Point-to-point links between routers only need 2 hosts → use /30
Large office LANs need 200 hosts → use /24

**VLSM benefits:**
- Avoids wasting addresses
- Enables route summarization
- More efficient routing tables

**Avoid VLSM on client LANs** when possible — keeps administration and troubleshooting simpler.

---

## Route Summarization

When subnets are contiguous (sequential), a single summarized route can represent all of them:

```
10.0.0.0/11    ← covers 10.0.0.0 – 10.31.255.255
10.32.0.0/11   ← Region 1
10.64.0.0/11   ← Region 2
10.96.0.0/11   ← Region 3
10.128.0.0/11  ← Region 4

Summary: 10.0.0.0/8 → all of the above
```

Simpler routing tables = higher router performance.

---

## Efficient IP Design (Large Networks)

1. Start with `10.0.0.0/8` (Class A private)
2. Divide into a small number of large areas/regions
3. Keep network addresses contiguous within each area router
4. Always design with summarization in mind

### Example: Nationwide Org with Head Office + 4 Regions

Base: `10.0.0.0/8`
Need 5 large networks (1 HO + 4 regions) → borrow 3 bits (2³ = 8 > 5)

| Network | Address | Use |
|---------|---------|-----|
| 10.0.0.0/11 | Head Office LAN | |
| 10.32.0.0/11 | Region 1 | |
| 10.64.0.0/11 | Region 2 | |
| 10.96.0.0/11 | Region 3 | |
| 10.128.0.0/11 | Region 4 | |
| 10.160–224.0.0/11 | Future expansion | |

Point-to-point links use /30 from within the allocated block.

---

## Super-netting

Combining multiple smaller networks into one larger network.
Used to simplify routing or expand address space.
Example: Four /26 networks → one /24 summary route.

---

## Quick Reference — Classful Network Sizes

| Class | Default Mask | Networks | Hosts/Network |
|-------|-------------|----------|---------------|
| A | /8 | 126 | 16,777,214 |
| B | /16 | 16,384 | 65,534 |
| C | /24 | 2,097,152 | 254 |
