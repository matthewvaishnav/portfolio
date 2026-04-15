# Windows CLI — CMD & PowerShell
> IT Documentation / Computer Systems | Conestoga College — Matthew Vaishnav

---

## Command Prompt (cmd.exe)

**Open:** Right-click Windows symbol → Run → `CMD`
or: Windows Symbol → Windows System → Command Prompt

---

## Information Commands

| Command | Description |
|---------|-------------|
| `whoami` | Current logged-in account name |
| `msinfo32` | Detailed system information window |
| `systeminfo` | System info in CLI |
| `cls` | Clear screen |

---

## Networking Commands

| Command | Description |
|---------|-------------|
| `ipconfig` | View current IP configuration |
| `ipconfig /all` | Detailed — shows MAC address, DHCP status, DNS |
| `ipconfig /release` | Release DHCP lease |
| `ipconfig /renew` | Renew DHCP lease |
| `ping <host>` | Test connectivity — uses ICMP echo |
| `tracert <host>` | Trace route — shows each hop to destination |
| `pathping <host>` | Combines ping + tracert — shows packet loss per hop |
| `netstat` | Active network connections |
| `netstat -an` | All connections with port numbers |
| `arp -a` | View ARP cache (IP → MAC mappings) |
| `nslookup <domain>` | DNS lookup — test DNS resolution |

---

## Management Commands

| Command | Description |
|---------|-------------|
| `shutdown /s` | Shutdown system |
| `shutdown /r` | Restart system |
| `mmc` | Microsoft Management Console |
| `chkdsk` | Check disk for errors |
| `defrag` | Defragment disk (HDDs) |
| `tasklist` | Show running processes (like Task Manager) |
| `robocopy` | Robust file copy — resumes on network interruption |
| `fc` | File compare (`/c` = ignore case, `/b` = binary) |
| `powercfg /energy` | Diagnose power/battery issues |
| `powercfg /lastwake` | Show what last woke the computer |

Full reference: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands

---

## PowerShell

**Open:** Right-click Windows symbol → Windows PowerShell (admin)
or: Windows Symbol → Windows PowerShell → PowerShell or PowerShell ISE

- Available in x86 (32-bit) or x64 versions
- Can be run with elevated (admin) authority
- **PowerShell Core 6+:** Cross-platform — runs on Windows, Mac, and Linux

---

## Why PowerShell?

- Object-oriented CLI — commands return structured objects, not plain text
- Powerful scripting language — automate complex tasks
- Optimized for structured data (JSON, CSV, XML)
- Supports piping — chain commands together
- Before PowerShell, VBScript and Python were the only Windows automation options
- Goal: All Microsoft admin functions will eventually be in PowerShell

---

## PowerShell Syntax — Verb-Noun

All cmdlets follow `Verb-Noun` pattern:

```powershell
Get-Service          # List all services
Get-ChildItem        # List files in directory (like ls/dir)
Stop-Process         # Stop a running process
Get-NetAdapter       # List network adapters
```

---

## PowerShell Networking Commands

```powershell
# View network adapters
Get-NetAdapter

# Set static IP address
New-NetIPAddress -InterfaceAlias "Ethernet0" -IPAddress "10.171.29.17" -PrefixLength 24 -DefaultGateway "10.171.29.1"

# Set DNS servers
Set-DnsClientServerAddress -InterfaceAlias "Ethernet0" -ServerAddresses "8.8.8.8","8.8.4.4"

# Get current IP config
Get-NetIPAddress

# Change firewall network category (required for RDP on private networks)
Get-NetConnectionProfile                             # get current profile name
Set-NetConnectionProfile -Name "Network" -NetworkCategory Private
```

---

## Netsh (Legacy Network Config)

```powershell
# Set static IP via netsh
netsh interface ip set address "Ethernet0" static 10.171.21.20 255.255.255.0 10.171.21.1

# View IP config
netsh interface ip show config
```

---

## Object-Oriented Concepts in PowerShell

Everything in PowerShell is an object:

| Term | Networking Analogy | Example |
|------|--------------------|---------|
| **Class** | Blueprint | "Vehicle" |
| **Object** | Instance of class | "Car", "Truck" |
| **Instance** | Specific object | VIN number |
| **Property** | Attribute | Tire size, fuel type |
| **Method** | Action | `Start()`, `Stop()` |

```powershell
# Get object properties
Get-NetAdapter | Get-Member           # Shows all properties and methods
Get-NetAdapter | Select-Object Name, Status, LinkSpeed  # Select specific properties
```

---

## Piping in PowerShell

Output from one command becomes input for the next:

```powershell
Get-Process | Where-Object {$_.CPU -gt 10} | Sort-Object CPU -Descending
Get-Service | Where-Object {$_.Status -eq "Stopped"}
Get-ChildItem C:\Windows | Select-Object Name, Length | Sort-Object Length
```

---

## PowerShell Execution Policy

Controls whether scripts can run:

```powershell
Get-ExecutionPolicy                        # Check current policy
Set-ExecutionPolicy RemoteSigned           # Allow local scripts + signed remote scripts
Set-ExecutionPolicy Unrestricted           # Allow all (not recommended)
```

---

## PowerShell ISE

Integrated Scripting Environment — IDE for writing and debugging PowerShell scripts.
Open via: Windows Symbol → Windows PowerShell → PowerShell ISE
