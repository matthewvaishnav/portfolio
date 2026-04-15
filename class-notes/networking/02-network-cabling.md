# Networking — Cabling, Power & Physical Infrastructure
> INFO1385 Internetwork Management | Conestoga College — Matthew Vaishnav

---

## Copper Cabling — Twisted Pair

All network copper cable uses twisted pair — pairs of conductors twisted together
to reduce interference. Wired to TIA/EIA 568 standard.

### Categories

| Category | Min Speed | Notes |
|----------|-----------|-------|
| Cat 5e | 1 Gbps | Minimum for gigabit — older installs |
| Cat 6 | 10 Gbps (short runs) | Plastic core inside, most common today |
| Cat 6a | 10 Gbps (100m) | Shielded — first shielded UTP |
| Cat 7 | 10 Gbps+ | Must be shielded (STP) |
| Cat 8 | 25/40 Gbps | Must be shielded — data centres |

**Higher category = more twists/foot, more EMI immunity, more expensive, higher bandwidth.**

### UTP vs STP

| | UTP | STP |
|--|-----|-----|
| Shielding | None | Foil wrap on pairs or whole cable |
| Cost | Lower | Higher |
| Noise immunity | Standard | Better |
| Max length | 100m | 100m |
| When to use | Most LAN deployments | High-EMI environments |

### Connectors
- **RJ-45 (8P8C):** Standard copper LAN connector — most common port on client-facing switches
- **TIA/EIA 568A and 568B:** Two pinout standards — functionally equivalent, but must be consistent end-to-end
- **Straight-through:** Computer/router → switch
- **Crossover:** Like devices (switch → switch); mostly obsolete due to Auto-MDI-X
- **Rollover (Console/Yost):** RS-232 serial — computer to router/switch console port

---

## Power over Ethernet (PoE)

PoE delivers both power and data over a single Ethernet cable.
Common for: IP cameras, VoIP phones, wireless access points.

| Standard | Max Port Power | Max Device Power | Name |
|----------|---------------|-----------------|------|
| 802.3af | 15.4W | 12.95W | PoE |
| 802.3at | 30W | 25.5W | PoE+ |
| 802.3bt Type 3 | 60W | 51W | PoE++ |
| 802.3bt Type 4 | 100W | 71W | PoE++ |

- **PSE (Power Sourcing Equipment):** The switch supplying power
- **PD (Powered Device):** The device receiving power
- **PoE Injector:** Adds PoE to non-PoE ports
- **Critical:** Track total PoE budget — a 48-port 802.3at switch could need 1200W

---

## Single Pair Ethernet (SPE)

- Runs Ethernet over a **single** twisted pair
- Designed for IoT devices (thermostats, sensors, door locks)
- Also delivers up to 50W of power
- Uses T1 connectors

| Speed | Distance |
|-------|----------|
| 10 Mbps | 1 km |
| 1 Gbps | 40 m |
| 12 Gbps | 7 m |

---

## Fibre Optic Cable

Light transmitted through glass or plastic core — reflects off cladding.
**Immune to EMI, much longer distances, extremely high throughput.**

### Single-Mode Fibre (SMF)
- Core: 8–10 µm
- Light source: Laser
- Distance: Up to 40 km
- Use: Internet backbone, long-haul
- Classification: OS1, OS2

### Multi-Mode Fibre (MMF)
- Core: 50 µm or 62.5 µm
- Light source: LED or laser
- Distance: Shorter than SMF
- Use: Network backbones within buildings
- Classification: OM1–OM4

| | SMF | MMF |
|--|-----|-----|
| Throughput | Higher | Lower |
| Distance | Up to 40 km | Shorter |
| Cost | More expensive | Less expensive |
| Use case | Long-haul, WAN | Building backbones |

### Transceivers (SFP/QSFP)

Most common way to connect fibre to switches/routers:

| Type | Speed |
|------|-------|
| SFP | 1 Gbps |
| SFP+ | 10 Gbps |
| QSFP | 40 Gbps |
| QSFP+ | 100 Gbps+ |

**DAC (Direct Attach Copper):** Twinax cable with transceivers at each end.
Speeds from 1–100 Gbps. Budget-friendly alternative to fibre for short runs (0.5m–15m).

---

## Transmission Flaws

| Flaw | Description |
|------|-------------|
| **Attenuation** | Signal loss over distance — why cable length limits exist |
| **EMI** | Electromagnetic interference — most commonly RF; affects copper |
| **Crosstalk** | Signal from one wire bleeds into adjacent wire |
| **NEXT** | Near-End Crosstalk — occurs near signal source |
| **FEXT** | Far-End Crosstalk — occurs near destination |
| **Latency** | Delay between transmission and reception |

**100m rule:** UTP copper cable max length. Beyond 100m: signal loss, packet loss.

---

## Cable Plant & Physical Infrastructure

**Cable plant:** All data communications cables within a building/campus.
Governed by **TIA/EIA 568 Commercial Building Wiring Standard**.

### Cable Management Best Practices
- Don't expose more than 1 inch of untwisted cable at termination
- Honour minimum bend radius
- Use plenum-rated cable in air ducts/raised floors
- Cinch cables loosely with Velcro (never zip ties too tight)
- Leave slack in cable runs
- Avoid laying cables across floors — use covers or cable management
- Keep documentation current

### Rack Systems
- Standard width: **19 inches**
- Height measured in **Rack Units (U)** — 1U = 1.75 inches
- 2-post or 4-post mounting
- Heaviest equipment (UPS, battery packs) goes at the **bottom**
- Servers typically 1U, 2U, or 4U

### Labelling Standard (TIA/EIA 606-B)
- Horizontal cable label format: `<Floor><TR>.<Rack>-<RU>:<Port>`
- Example: `1A.01-42:16` = Floor 1, Telecom Room A, Rack 01, position 42U, port 16

---

## Power Management

| Issue | Description |
|-------|-------------|
| **Surge** | Momentary voltage spike — lightning, solar flares |
| **Sag/Brownout** | Momentary voltage drop — peak demand |
| **Blackout** | Complete power loss |
| **Noise** | Voltage fluctuation from EMI or other equipment |

### UPS (Uninterruptible Power Supply)
- Battery-operated power source that conditions and supplies power
- **Standby UPS:** Switches to battery on blackout
- **Online UPS:** Continuously powers load from battery
- Must be tested regularly

### Generators
- Backup power for extended blackouts
- Fuelled by diesel, natural gas, propane, or steam
- Usually combined with UPS for continuous conditioned power
