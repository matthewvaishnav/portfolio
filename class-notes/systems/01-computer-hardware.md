# Computer Systems — Hardware Fundamentals
> WA-WMB-3G05 Computer Systems Fundamentals | Conestoga College — Matthew Vaishnav

---

## CPU — Central Processing Unit

The "heart" of the computer — does the actual computation.
Everything else (RAM, storage, GPU) is a supporting player.

### Basic Operations
- **Control:** Fetch → Decode → Execute
- **Execute:** Mathematics (add, subtract, multiply, divide), integer/floating point
- **Address Translation:** Convert relative addresses to physical memory addresses

### CISC vs RISC

| Type | Full Name | Examples |
|------|-----------|---------|
| **CISC** | Complex Instruction Set Computer | Intel Core/AMD Ryzen — most common desktop/server |
| **RISC** | Reduced Instruction Set Computer | IBM Power, Apple M-series, Broadcom |

### Clock Speed
- Measured in **Hz** (cycles per second)
- 1 GHz = 1 billion cycles per second
- Every instruction requires at least 2 cycles

### CPU Cache Hierarchy (fastest → slowest)

| Level | Size | Speed |
|-------|------|-------|
| Registers | ~KB | ~1 cycle |
| L1 Cache | 128–256 KB | ~700 GB/s |
| L2 Cache | ~1 MB | ~200 GB/s |
| L3 Cache | 6–128 MB | ~100 GB/s |
| RAM | GBs | ~10 GB/s |
| SSD | TBs | ~2 GB/s |

### Clock Multipliers
- Modern CPUs run at a multiple of the system bus clock speed
- Automatically configured via **CPUID** (CPU identifier)
- **Throttling:** Reducing clock speed under light load to save power — standard on laptops

### Key Technologies
- 64-bit processing (standard on all modern CPUs)
- Multicore processing
- Virtualization support (essential for running VMs)
- Integrated Memory Controller (IMC)
- Integrated GPU

---

## Motherboard

The foundation of the PC. Provides connections for all components.

### Form Factors

| Form Factor | Size | Notes |
|------------|------|-------|
| **ATX** | Full size | Most expansion slots, best for overclocking, desktop standard |
| **Micro-ATX** | ~30% smaller | Less expensive, fewer slots, fits smaller cases |
| **Mini-ITX** | 6.7" × 6.7" | SFF systems, low power |
| **Nano/Pico-ITX** | Smaller | Embedded/specialty systems |

Servers and laptops use proprietary form factors.

### Chipset
Controls how CPU, RAM, and I/O devices interact.
Historically: **Northbridge** (CPU/RAM) + **Southbridge** (expansion/storage).
Modern CPUs have the memory controller integrated on-die.

### Expansion Buses

| Slot | Speed | Common Use |
|------|-------|-----------|
| **PCIe x16** | Fastest | Video cards (GPUs) |
| **PCIe x1/x4** | Fast | Network cards, SSDs, sound |
| **PCI** | Older | Legacy devices |

**PCIe (PCI Express):** Point-to-point serial connection — each device has its own direct lane to chipset, no shared bus contention.

---

## RAM — Random Access Memory

- Volatile — loses data when power is removed
- Organized as a grid: each row holds 8 bits (1 byte)
- CPUs cannot read directly from storage — data loaded into RAM first

### DRAM
Dynamic RAM — requires constant electrical charge refresh to maintain data.
Used for main memory in all modern computers.

### Memory Hierarchy (why caches exist)
Hard drives are too slow to feed a CPU directly.
Data path: Storage → RAM → L3 → L2 → L1 → CPU Registers

---

## Storage

### HDD — Hard Disk Drive
- Electro-mechanical — rotating magnetic platters with read/write heads
- Non-volatile (data persists without power)
- Random access — data can be read/written in any order

### SSD — Solid State Drive
- Flash memory — no moving parts
- Much faster than HDD
- Silent, more durable, more expensive per GB

### Interfaces

| Interface | Max Speed | Notes |
|-----------|-----------|-------|
| **PATA/IDE** | 133 MB/s | Legacy — wide ribbon cable |
| **SATA I** | 1.5 Gb/s | First generation |
| **SATA II** | 3.0 Gb/s | Common in older systems |
| **SATA III** | 6.0 Gb/s | Current standard for HDDs/SATA SSDs |
| **NVMe (PCIe)** | 3.5+ GB/s | Modern SSDs — much faster than SATA |

SATA advantages over PATA: hot-plugging, narrower cable, no jumpers, higher speeds.

### RAID — Redundant Array of Independent Disks

| Level | Technique | Min Disks | Redundancy | Notes |
|-------|-----------|-----------|-----------|-------|
| **RAID 0** | Striping | 2 | None | Faster reads/writes, no fault tolerance |
| **RAID 1** | Mirroring | 2 | Yes | Full copy on second drive |
| **RAID 5** | Striping + Parity | 3 | Yes (1 drive failure) | Most common |
| **RAID 10** | Mirror + Stripe | 4 | Yes | High performance + redundancy |

**Hardware RAID:** Dedicated controller — faster, transparent to OS.
**Software RAID:** OS-managed — easier to set up, slightly slower.

**S.M.A.R.T.:** Self-Monitoring, Analysis, and Reporting Technology
- Built into all modern drives
- Reports indicators of imminent failure
- First sign of failure: back up immediately, then replace drive

---

## PSU — Power Supply Unit

Converts AC wall power to DC voltages used by PC components (3.3V, 5V, 12V).

- **Wattage:** Total power the PSU can supply — add up all component consumption
- **Form factors:** ATX (standard desktop), SFX (small form factor), EPS12V (server)
- Use online PSU calculators to size correctly

### Power Issues

| Issue | Description |
|-------|-------------|
| **Surge/Spike** | Momentary voltage increase — lightning, generator start |
| **Sag/Brownout** | Momentary voltage drop — overloaded grid |
| **Blackout** | Complete power loss |
| **Noise** | EMI-induced voltage fluctuation |
| **Harmonic Distortion** | Distorted power waveform from unequal loads |

**UPS (Uninterruptible Power Supply):** Battery backup + power conditioning.
**Generator:** Long-duration backup — combined with UPS for continuous conditioned power.

---

## Cooling

### Heat Sink
Passive heat exchanger — dissipates heat from CPU/GPU to air.

### Thermal Paste
Applied between CPU and heat sink for best thermal transfer.
- Always clean surfaces before application
- Reapply if heat sink is removed after extended use

### Case Airflow
- Cases are designed to channel air through in a specific path
- **Never remove side panels** — disrupts engineered airflow, reduces cooling
- Fans push/pull air through in organized paths (usually front intake, rear/top exhaust)

---

## Connectors Quick Reference

| Connector | Type | Use |
|-----------|------|-----|
| **RJ-45** | 8P8C | Ethernet networking |
| **RJ-11** | 6P4C | Telephone |
| **DB-9** | Serial | Legacy — modems, console cables |
| **DB-25** | Parallel | Legacy — printers |
| **USB-A/B/C** | Serial | Modern universal peripheral connection |
| **HDMI** | Video+Audio | Monitors, TVs |
| **DisplayPort** | Video+Audio | Monitors (PC standard) |
| **VGA** | Analog video | Legacy monitors |

---

## Server Types

| Type | Description | Use Case |
|------|-------------|---------|
| **Tower** | Standalone chassis | Small/medium office |
| **Rack (1U, 2U, 4U)** | Fits 19" rack, 1U = 1.75" | Data centres |
| **Blade** | Slots into blade chassis | High-density data centres |

**Rack placement:** Heaviest equipment (UPS, batteries) at the **bottom**.
