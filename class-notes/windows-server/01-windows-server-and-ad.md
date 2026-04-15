# Windows Server & Active Directory
> INFO2375 Windows Server Administration | Conestoga College — Matthew Vaishnav

---

## Windows Server Overview

Windows Server is an OS designed for server hardware — purpose-built for reliability,
performance, and 24/7 operation. All practical work is virtualized.

### Server 2019 Editions

| Edition | VM Support | Notes |
|---------|-----------|-------|
| **Standard** | 2 VMs | Most common — full feature set |
| **Datacenter** | Unlimited VMs | ~$7,500 for 16 cores |
| **Essentials** | Limited | Max 25 users / 50 devices |
| **Core** | — | No GUI — reduced attack surface, less overhead |
| **Nano** | — | Remote management only — tiny footprint |

**Licensing:** Per-core model — minimum 16 cores per server.
Standard ~$1,200 / Datacenter ~$7,500 for 16 cores + ~$45 per user/device CAL.

**Server Core vs Full:**
- Core has no GUI — managed entirely via PowerShell/remote tools
- Smaller attack surface, lower memory/CPU footprint
- Ideal for virtualization (VMs managed via scripting)

### Server Hardware
- Multiple CPU sockets, many RAM slots (e.g., 12 slots per CPU)
- Designed for long-term continuous operation
- Hot-swap drives and redundant PSUs common
- Rack-mounted (1U, 2U, 4U) in data centres

---

## Deployment Methods

| Method | Description |
|--------|-------------|
| **Install Media** | Bootable USB/DVD — manual, time-consuming |
| **WDS (Windows Deployment Services)** | Network deployment — deploy images to physical/virtual machines |
| **Unattended** | Answer file (unattend.xml) — automated hands-off install |
| **Cloud Deployment** | Azure/AWS VM — automated via templates |
| **Standardization** | Master image (like VMware clone) — deploy consistently at scale |

---

## Post-Installation Configuration

After a fresh install, complete these steps before putting a server into service:

```powershell
# 1. Install VMware Tools (if VM) — requires reboot

# 2. Set hostname
Rename-Computer -NewName "SRV-DC01" -Restart

# 3. Set static IP
New-NetIPAddress -InterfaceAlias "Ethernet0" -IPAddress "10.0.0.10" -PrefixLength 24 -DefaultGateway "10.0.0.1"
Set-DnsClientServerAddress -InterfaceAlias "Ethernet0" -ServerAddresses "10.0.0.10"

# 4. Set timezone
Set-TimeZone -Name "Eastern Standard Time"

# 5. Fix firewall network category (required for RDP)
Get-NetConnectionProfile
Set-NetConnectionProfile -Name "<NetworkName>" -NetworkCategory Private

# 6. Enable RDP
Set-ItemProperty -Path 'HKLM:\System\CurrentControlSet\Control\Terminal Server' -Name "fDenyTSConnections" -Value 0
Enable-NetFirewallRule -DisplayGroup "Remote Desktop"

# 7. Allow inbound ICMP (ping)
New-NetFirewallRule -Name "Allow-ICMPv4" -DisplayName "Allow ICMPv4" -Protocol ICMPv4 -IcmpType 8 -Direction Inbound -Action Allow
```

---

## Management Tools

### Local Management
- **Server Manager** — add/remove roles and features, view events, monitor services
- **PowerShell** — primary admin tool

### Remote Management
- **Server Manager** — manage remote servers from your workstation
- **RSAT (Remote Server Administration Tools)** — manage Windows Server from Windows 10/11
- **RDP (Remote Desktop Protocol)** — connect to server desktop (one server at a time)
- **PowerShell Remoting** — run scripts against multiple servers simultaneously

**Best practice:** Administer servers remotely — avoid RDP as it's one server at a time.
PowerShell remoting scales to many servers with a single script.

**PAW (Privileged Access Workstation):** Locked-down computer used only for server admin.
Reduces risk of malware on admin's machine compromising servers.

---

## Server Manager Dashboard (SMD)

| Section | Purpose |
|---------|---------|
| **Manageability** | Is the server online and reporting? |
| **Events** | Alerts by severity level |
| **Services** | Are any services stopped or in error state? |
| **Performance** | High CPU/memory/network alerts |
| **BPA** | Best Practices Analyzer — configuration recommendations |

Adding roles: **Manage → Add Roles and Features**

---

## Active Directory Domain Services (ADDS)

AD is a centralized database of all objects in your organization —
users, computers, groups, printers, and more.

**Think of AD as:** A phone book + security policy engine for your entire network.

### What AD Stores
- Users and their passwords (hashed)
- Computer accounts
- Security groups
- Printer objects
- Group Policy Objects (GPOs)

### How Objects Are Organized
- **OU (Organizational Unit):** Like folders — used to organize and apply policies
- **Domain:** Logical group of objects sharing admin, security, and replication settings
- **Tree:** Multiple domains in a hierarchy sharing a namespace
- **Forest:** Collection of trees — the top-level AD boundary

### Domain Controller (DC)
- Windows Server with ADDS role installed
- Handles: user authentication, authorization, name resolution, centralized management
- **When does a server become a DC?** When ADDS is installed and the server is promoted
- Best practice: Always have at least 2 DCs for redundancy

### Domain Requirements
- Windows Server hardware
- DNS (installed automatically during ADDS setup)
- Static IP address
- ADDS role

### Domain vs Workgroup
| | Workgroup (P2P) | Domain (Client-Server) |
|--|----------------|----------------------|
| Authentication | Local only | Centralized (AD) |
| Management | Per-machine | Centralized |
| Scale | Small (< 10 devices) | Enterprise |
| Policy | None | GPOs pushed from DC |

---

## DNS and AD

DNS is **required** for Active Directory. AD uses DNS for:
- Locating domain controllers (SRV records)
- Name resolution throughout the domain
- DNS is automatically installed with ADDS

**DNS Forwarders:** When your internal DNS can't resolve a name, it forwards the query
to another DNS server (e.g., your ISP's DNS or 8.8.8.8).

---

## ADDS Setup Commands (PowerShell)

```powershell
# Install ADDS role
Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools

# Promote server to first DC in new forest
Install-ADDSForest `
  -DomainName "corp.local" `
  -DomainNetBiosName "CORP" `
  -ForestMode "WinThreshold" `
  -DomainMode "WinThreshold" `
  -InstallDns:$true `
  -Force:$true
```

---

## Common ADDS Management Commands

```powershell
# Create new AD user
New-ADUser -Name "Matthew Vaishnav" -SamAccountName "mvaishnav" -UserPrincipalName "mvaishnav@corp.local" -Enabled $true

# Create OU
New-ADOrganizationalUnit -Name "IT" -Path "DC=corp,DC=local"

# Add user to group
Add-ADGroupMember -Identity "IT-Admins" -Members "mvaishnav"

# Get all domain users
Get-ADUser -Filter *

# Get domain controllers
Get-ADDomainController -Filter *
```
