# Computer Systems — Windows Installation & Drivers
> WA-WMB-3G05 Computer Systems Fundamentals | Conestoga College — Matthew Vaishnav

---

## Windows OS Architecture

### User Mode
Where applications run — isolated from direct hardware access.

- **User Applications:** Browsers, games, productivity software
- **Win32 API Libraries:**
  - `Kernel32.dll` — Core system functions (memory, I/O)
  - `User32.dll` — Window management, user input
  - `GDI32.dll` — Graphics rendering
- **NTDLL.dll** — Bridge between user mode and kernel mode (NT system calls)
- **User Mode System Processes:**
  - `SMSS.exe` — Session Manager — initializes sessions and environment variables
  - `Winlogon.exe` — Handles login, authentication, and Ctrl+Alt+Del

### Kernel Mode
Full hardware access — manages everything "under the hood".

- **Executive Services:** I/O Manager, Cache Manager, File System Manager, Device Drivers
- **System Services:** Process/Thread Manager, Object Manager, Virtual Memory Manager
- **Kernel:** Lowest layer — schedules tasks, manages interrupts, CPU usage
- **HAL (Hardware Abstraction Layer):** Abstracts hardware differences — lets Windows
  run on various platforms without rewriting the kernel

### Win32K.sys
Hybrid kernel-mode driver bridging user and kernel mode.
Handles: Window Manager, GDI (fonts, shapes, images), Graphics Device Drivers.

---

## Device Drivers

A driver is a specialized program that interfaces the OS with a specific piece of hardware.
Think of drivers as extensions of the OS kernel for specific hardware.

### Windows Generic vs Manufacturer Drivers
- Windows includes generic drivers — basic functionality only, dated to OS release
- **Always prefer manufacturer drivers** — full functionality, latest updates, often include GUI management tools
- **Only source drivers from Microsoft or the hardware manufacturer** — never third-party sites

### Driver Signing
- Windows 10+ requires **signed drivers** before installation
- A signed driver has a checksum verified and encrypted by Microsoft
- Protects against **rootkits** (malware at the kernel level)
- Unsigned drivers will be blocked

---

## Windows Boot Process

```
1. POST (Power On Self Test)
   ├── Checks RAM amount
   ├── Detects attached disk drives
   ├── Finds bootable drive (default: drive 0)
   └── Locates Master Boot Record (MBR) or EFI partition

2. Windows Boot Manager
   ├── Checks for multiple installed OSes
   └── Loads Windows OS Loader (winload.exe)

3. Windows OS Loader
   ├── Loads critical drivers
   └── Loads NT Kernel

4. NT Kernel
   ├── Loads registry settings and additional drivers
   └── Initializes all kernel requirements

5. Session Initialization (SMSS.exe, Csrss.exe)
   ├── Session Manager manages all user sessions
   └── Client/Server Runtime SubSystem provides user environment

6. Winlogon Initialization (dwm.exe, wininit.exe)
   ├── Desktop Window Manager — the GUI
   └── Windows Initialize — supports installers/uninstallers

7. Explorer Initialization
   └── Windows Explorer — desktop, file manager, taskbar
```

### Boot Media Options
- Disk/SSD (default)
- USB drive
- CD/DVD
- **PXE (Pixie Boot)** — Network boot

### PXE — Preboot Execution Environment
- Boots from network instead of local storage
- Requires: PXE-capable NIC + DHCP server + TFTP server
- Process:
  1. Client broadcasts DHCP Discover with PXE options
  2. DHCP server responds with network config + TFTP server location
  3. Client downloads **NBP (Network Bootstrap Program)** via TFTP
  4. NBP loads a minimal OS (Windows PE or Linux kernel)
  5. Full OS installation files retrieved via HTTP, CIFS, or NFS
- Used for: mass OS deployment, disaster recovery, diskless workstations

---

## ISO Files

ISO = disk image file based on ISO 9660 standard.
Contains everything that would be written to a CD/DVD — bootable.

### Windows ISO Structure
Key file: `install.wim` — the core of Windows, contains all edition variants.
Drivers can be injected into the ISO before deployment.

---

## Windows Setup Process

### Installation Phases
1. **WindowsPE:** Copies files from ISO into correct NTFS locations
2. **offlineServicing:** Applies drivers
3. **Specialize:** First reboot — applies SIDs, network settings
4. **OOBE (Out-of-Box Experience):** Creates user accounts, language settings
5. **Windows Welcome:** User-specific settings

**SID (Security Identifier):** Unique, immutable value assigned to each user/group in Windows.
Used for access control and incident troubleshooting.

### Automated Installation
- Windows setup can be scripted with an **answer file** (unattend.xml)
- Allows unattended install — walk away while it configures itself
- Can also be automated via **WDS (Windows Deployment Services)**

---

## Windows File System Layout

| Location | Contents |
|----------|----------|
| `C:\Users\` | User home directories + Public shared folder |
| `C:\Program Files\` | Installed 64-bit applications |
| `C:\Program Files (x86)\` | Installed 32-bit applications |
| `C:\Windows\` | OS files |
| `C:\Windows\System32\` | Core OS system files |
| `C:\Windows\WinSxS\` | Component store — all optional features compressed here |
| `C:\Windows\Boot\` | Boot configuration files |

### Key Management Tools
- **Disk Management:** View partitions — healthy EFI = boot partition
- **Device Manager:** Shows all hardware + their drivers
- **Task Manager:** Running processes and resource utilization
