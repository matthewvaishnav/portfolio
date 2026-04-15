# Infrastructure Services — File Sharing
> INFO1555 Infrastructure Services Administration | Conestoga College — Matthew Vaishnav

---

## File Server Overview

A file server is a centralized repository of files accessible to network clients.
Provides: shared storage, centralized backup, version control, and access control.

**Windows file sharing uses SMB (Server Message Block)**
**Linux file sharing uses Samba (SMB compatible) or NFS**

---

## Windows File Sharing

### SMB — Server Message Block
- Native Windows file sharing protocol
- **Port TCP 445**
- Files accessed via UNC (Universal Naming Convention) paths: `\\ServerName\ShareName`
- Managed through **File and Storage Services** role (auto-installed with Windows Server)

### Permissions

Two separate permission layers exist in Windows — **both apply**:

| Type | Levels | Scope |
|------|--------|-------|
| **Share Permissions** | Read, Change, Full Control | Applied at the share level (network access) |
| **NTFS Permissions** | Full Control, Modify, Read & Execute, etc. | Applied at the file/folder level |

**Effective permission = most restrictive of share + NTFS**

**Best practice:** Give **Everyone Full Control** at the share level, then control access
with NTFS permissions on the actual folder. This simplifies management.

### User and Group Management
- Permissions assigned to **users** or **groups** (security principals)
- Always assign permissions to **groups**, not individual users
  - Exception: When only one person needs access

### Creating a Share (PowerShell)

```powershell
# Create a new SMB share
New-SmbShare -Name "Marketing" -Path "C:\Shares\Marketing" -FullAccess "CORP\marketing-admins" -ReadAccess "CORP\marketing-staff"

# View existing shares
Get-SmbShare

# View share permissions
Get-SmbShareAccess -Name "Marketing"

# Set NTFS permissions
$acl = Get-Acl "C:\Shares\Marketing"
$rule = New-Object System.Security.AccessControl.FileSystemAccessRule("CORP\marketing-staff", "Modify", "ContainerInherit,ObjectInherit", "None", "Allow")
$acl.SetAccessRule($rule)
Set-Acl "C:\Shares\Marketing" $acl
```

### Accessing a Share from Client

```powershell
# Map a network drive
net use Z: \\SRV-FILES\Marketing /persistent:yes

# Or via PowerShell
New-PSDrive -Name "Z" -PSProvider FileSystem -Root "\\SRV-FILES\Marketing" -Persist
```

---

## Linux File Sharing — Samba

Samba implements the SMB protocol on Linux, enabling native Windows client access.

```
\\samba-server\sharename    ← Windows clients connect using UNC paths
```

Samba maintains a **separate password database** from Linux system passwords.

### Install Samba

```bash
dnf install -y samba
systemctl enable --now smb nmb
```

### Create Users and Groups

```bash
# Create local Linux users
useradd alice
useradd bob
useradd carol

# Set Linux passwords
echo "Secret55" | passwd --stdin alice

# Create a group
groupadd marketing

# Add users to group
usermod -aG marketing alice
usermod -aG marketing bob

# Verify group membership
id alice
id bob
```

### Add Users to Samba Password Database

```bash
# Samba has its own password store — must add users separately
smbpasswd -a alice
smbpasswd -a bob
smbpasswd -a carol

# Enable a Samba user
smbpasswd -e alice
```

### Create Shared Folders

```bash
# Individual user shares
mkdir -p /srv/samba/users/alice
mkdir -p /srv/samba/users/bob
mkdir -p /srv/samba/users/carol

# Shared group folder
mkdir -p /srv/samba/marketing

# Set ownership — each user owns their own folder
chown alice:alice /srv/samba/users/alice
chown bob:bob /srv/samba/users/bob
chown carol:carol /srv/samba/users/carol

# Group folder owned by root, group = marketing
chown root:marketing /srv/samba/marketing

# Permissions: user folders private (700), group folder group-writable (770)
chmod 700 /srv/samba/users/alice
chmod 700 /srv/samba/users/bob
chmod 700 /srv/samba/users/carol
chmod 770 /srv/samba/marketing
```

### Samba Config: `/etc/samba/smb.conf`

```ini
[global]
   workgroup = CORP
   server string = Samba Server
   security = user

[marketing]
   path = /srv/samba/marketing
   valid users = @marketing
   writable = yes
   browseable = yes

[alice]
   path = /srv/samba/users/alice
   valid users = alice
   writable = yes
   browseable = no
```

### Validate and Restart

```bash
testparm                          # Validate smb.conf syntax
systemctl restart smb
```

### Firewall for Samba

```bash
firewall-cmd --add-service=samba --permanent
firewall-cmd --reload
```

---

## NFS — Network File System

NFS is the Linux/Unix native file sharing protocol.
Best for Linux-to-Linux file sharing.

```bash
# Install NFS server
dnf install -y nfs-utils

# Export a directory — edit /etc/exports
echo "/srv/nfs/data 192.168.10.0/24(rw,sync,no_root_squash)" >> /etc/exports

# Apply export changes
exportfs -r

# Start and enable NFS
systemctl enable --now nfs-server

# Firewall
firewall-cmd --add-service=nfs --permanent
firewall-cmd --reload
```

### Mount NFS Share on Client

```bash
mount -t nfs server:/srv/nfs/data /mnt/data
# Or in /etc/fstab for persistent mount:
# server:/srv/nfs/data /mnt/data nfs defaults 0 0
```

---

## Samba vs NFS Comparison

| Feature | Samba (SMB) | NFS |
|---------|-------------|-----|
| Protocol | SMB/CIFS | NFS |
| Windows compatibility | Native | Requires NFS client |
| Linux compatibility | Requires Samba client | Native |
| Authentication | Username/password | IP-based (or Kerberos) |
| Use case | Mixed Windows/Linux | Linux/Unix only |
| Config file | `/etc/samba/smb.conf` | `/etc/exports` |
