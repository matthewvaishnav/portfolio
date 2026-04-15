# Networking — Cisco IOS Configuration
> INFO1385 Internetwork Management | Conestoga College — Matthew Vaishnav

---

## What is Cisco IOS?

A dedicated OS for Cisco network devices (routers, switches, firewalls).
- Vendor-specific
- Controls switching and routing
- Changes state immediately on command entry
- **Always save:** `copy running-config startup-config`

Other vendor OS examples:
- Juniper: JunOS
- Brocade: Fabric OS

---

## IOS Operating Modes

| Mode | Prompt | Purpose |
|------|--------|---------|
| User EXEC | `hostname>` | Basic view commands only |
| Privileged EXEC | `hostname#` | Full view access — show commands, tools |
| Global Config | `hostname(config)#` | Device-wide configuration |
| Interface/Specific Config | `hostname(config-if)#` | Configure specific interfaces |
| Setup | — | Interactive setup dialog — avoid unless initial setup |

### Mode Navigation
```bash
hostname> enable                    # User → Privileged
hostname# disable                   # Privileged → User
hostname# configure terminal        # Privileged → Global Config (conf t)
hostname(config)# exit              # Global Config → Privileged
hostname(config)# end               # Any mode → Privileged
Ctrl+Z                              # Any mode → Privileged
```

---

## Configuration State

- **Running-config:** Current active config stored in RAM — not persistent
- **Startup-config:** Saved config in NVRAM — loaded on boot

```bash
# Save running config to startup
copy running-config startup-config

# View running config
show running-config

# View startup config
show startup-config
```

---

## Basic Device Configuration

### Hostname
```bash
hostname(config)# hostname SW1
```

### Banners
```bash
# Message of the Day — displayed to all connecting users
hostname(config)# banner motd #
WARNING: Authorized access only. All activity is monitored.
#
```

### Console Authentication
```bash
hostname(config)# line con 0
hostname(config-line)# password Secret55
hostname(config-line)# login

# Prevent console messages from interrupting command entry
hostname(config-line)# logging synchronous
```

### Privileged EXEC Password (Encrypted)
```bash
hostname(config)# enable secret <password>
```

---

## Remote Access Configuration

### Configure IP on Switch (SVI)
```bash
hostname(config)# interface vlan 1
hostname(config-if)# ip address 10.105.1.1 255.255.255.0
hostname(config-if)# no shutdown
```

### Telnet Access (VTY lines)
```bash
hostname(config)# line vty 0 15
hostname(config-line)# login
hostname(config-line)# password <password>
```

### SSH Access (Preferred — encrypted)
```bash
# 1. Set hostname and domain
hostname(config)# hostname SW1
hostname(config)# ip domain-name corp.local

# 2. Create local user
hostname(config)# username admin password Secret55

# 3. Generate RSA key pair (use 1024+ bits)
hostname(config)# crypto key generate rsa
# Enter modulus: 1024

# 4. Enable SSH version 2
hostname(config)# ip ssh version 2

# 5. Configure VTY lines for SSH
hostname(config)# line vty 0 15
hostname(config-line)# transport input ssh
hostname(config-line)# login local
```

---

## Key Line Editing Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+A` | Jump to beginning of line |
| `Ctrl+E` | Jump to end of line |
| `Ctrl+Z` | Return to privileged mode |
| `Ctrl+C` | Cancel current command |
| `Tab` | Auto-complete command |
| `?` | Show available options |
| `↑ Arrow` | Previous command |
| `↓ Arrow` | Next command |

---

## Verification Commands

```bash
show version                  # IOS version, uptime, hardware
show running-config           # Current active config
show ip interface brief       # Interface status and IP addresses
show interfaces               # Detailed interface stats
show mac address-table        # Switch MAC learning table
show ip route                 # Routing table
show vlan brief               # VLAN assignments
show cdp neighbors            # Connected Cisco devices
```

---

## VLAN Configuration

### Create VLANs
```bash
hostname(config)# vlan 10
hostname(config-vlan)# name HR
hostname(config)# vlan 20
hostname(config-vlan)# name IT
hostname(config)# vlan 30
hostname(config-vlan)# name SALES
```

### Assign Ports to VLANs (Access Mode)
```bash
hostname(config)# interface range fa0/1 - 5
hostname(config-if-range)# switchport mode access
hostname(config-if-range)# switchport access vlan 10

hostname(config)# interface range fa0/6 - 10
hostname(config-if-range)# switchport mode access
hostname(config-if-range)# switchport access vlan 20
```

### Configure Trunk Port (switch-to-switch or switch-to-router)
```bash
hostname(config)# interface fa0/24
hostname(config-if)# switchport trunk encapsulation dot1q   # older switches
hostname(config-if)# switchport mode trunk
```

### Inter-VLAN Routing — Router-on-a-Stick
```bash
# On router: create sub-interfaces per VLAN
hostname(config)# interface g0/0.10
hostname(config-subif)# encapsulation dot1Q 10
hostname(config-subif)# ip address 192.168.10.1 255.255.255.0

hostname(config)# interface g0/0.20
hostname(config-subif)# encapsulation dot1Q 20
hostname(config-subif)# ip address 192.168.20.1 255.255.255.0
```

### MAC Table Management
```bash
show mac address-table              # View learned MACs
clear mac address-table dynamic     # Clear dynamic entries
```
