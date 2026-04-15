# Email, Exchange & Messaging
> INFO2260 Mobile & Messaging | Conestoga College — Matthew Vaishnav

---

## Email Protocols

### Sending — SMTP (Simple Mail Transfer Protocol)
- Port **25** (server-to-server) / Port **587** (client submission)
- Only used to **send** email
- Transfers messages between mail servers and from client to server
- Each server waits for an acknowledgement before the next hop
- **No authentication in base SMTP** — modern configs use STARTTLS + AUTH

### Receiving — Client Retrieval Protocols

| Protocol | Port | Description |
|----------|------|-------------|
| **POP3** | 110 / 995 (SSL) | Downloads email, typically deletes from server — single device |
| **IMAP** | 143 / 993 (SSL) | Syncs email on server — accessible from multiple devices |
| **MAPI** | 135+ | Microsoft proprietary — full Exchange feature access (Outlook) |

**POP3 vs IMAP:** Most enterprise/cloud environments use IMAP or MAPI.
POP3 is mostly legacy — downloading to one device only.

---

## Mail Flow Overview

```
Sender's Outlook (MAPI)
        ↓
Exchange Server (Hub Transport)
        ↓
Edge Transport (DMZ) ← filters inbound/outbound internet mail
        ↓
Receiving Exchange Server
        ↓
Recipient's Inbox
```

---

## Microsoft Exchange Server

Enterprise email and collaboration platform integrated with Active Directory.

**Versions:** Exchange 2010, 2013, 2016, 2019, Exchange Online (Microsoft 365)
Newer features only available in Exchange Online.

### Requirements
- **Active Directory is required** — all config and recipient info stored in AD
- AD schema must be extended before Exchange installation
- DNS (for mail routing and autodiscover)

### Key Components

| Component | Role |
|-----------|------|
| **Mailbox Server** | Stores and manages mailbox databases |
| **Hub Transport** | Routes email internally between mailboxes |
| **Edge Transport** | Handles all internet inbound/outbound — lives in DMZ |
| **Client Access** | Handles client connections (Outlook, OWA, ActiveSync) |

### Edge Transport
- Installed in the **perimeter network (DMZ)** — not joined to AD
- Accesses AD info via **EdgeSync** (one-way AD LDS replication)
- Filters spam, applies transport rules for external mail

---

## Mailbox Types

| Type | Description | Use Case |
|------|-------------|---------|
| **User Mailbox** | Assigned to individual user | Standard email |
| **Archive Mailbox** | Stores older inactive items | Reduces primary mailbox size |
| **Linked Mailbox** | User and Exchange in different AD forests | Mergers/acquisitions |
| **Room Mailbox** | Represents a meeting room | Auto-accept calendar requests |
| **Equipment Mailbox** | Represents equipment (projector, car) | Resource booking |
| **Shared Mailbox** | Multiple users access same mailbox | Team inbox (support@, info@) |
| **Discovery Mailbox** | Used for e-discovery/legal holds | Legal and compliance |

### Disconnected Mailboxes
- Occurs when user account is deleted but mailbox remains
- Retained for **30 days** in Exchange before permanent deletion
- Used to recover terminated employee email

### Mailbox Delegation
| Permission | What It Allows |
|------------|---------------|
| **Full Access** | Read and modify all items in mailbox |
| **Send As** | Send email as the mailbox owner — recipient sees owner's name |
| **Send on Behalf** | Send on behalf of owner — recipient sees "on behalf of" |

---

## Mailbox Databases & High Availability

### DAG — Database Availability Group
- Multiple Exchange servers with **active** and **passive** copies of mailbox databases
- Databases replicated between active and passive copies (synchronous)
- Maximum **16 Exchange servers** per DAG, minimum 3
- One server can be a **Witness Server** (tie-breaker, doesn't run Exchange)
- If active copy fails, passive copy is automatically promoted

---

## Exchange PowerShell

```powershell
# Get all mailboxes
Get-Mailbox

# Create new mailbox
New-Mailbox -Name "Matthew Vaishnav" -UserPrincipalName "mvaishnav@corp.local" -Password (Read-Host -AsSecureString)

# Set mailbox size limits
Set-Mailbox "mvaishnav" -ProhibitSendReceiveQuota 10GB -ProhibitSendQuota 9GB

# Grant Full Access permission
Add-MailboxPermission -Identity "shared@corp.local" -User "mvaishnav" -AccessRights FullAccess

# Grant Send As permission
Add-ADPermission -Identity "shared@corp.local" -User "mvaishnav" -ExtendedRights "Send As"

# Check mail queue
Get-Queue

# View message tracking logs
Get-MessageTrackingLog -Sender "mvaishnav@corp.local" -Start (Get-Date).AddDays(-1)
```

---

## Microsoft 365 & Exchange Online

Cloud-hosted Exchange. Key differences from on-premises:

| Feature | On-Premises | Exchange Online |
|---------|------------|----------------|
| Infrastructure | Your hardware | Microsoft's data centres |
| Updates | Manual | Automatic |
| Licensing | Server + CALs | Per-user subscription |
| Newer features | Delayed | First to get them |
| Mailbox migrations | Local | Cloud |

### Exchange Online Administration
- **Microsoft 365 Admin Center** — user management, licensing
- **Exchange Admin Center (EAC)** — mailbox, transport rules, connectors
- **PowerShell** — Exchange Online PowerShell module

```powershell
# Connect to Exchange Online
Connect-ExchangeOnline -UserPrincipalName admin@corp.onmicrosoft.com

# Same cmdlets as on-premises once connected
Get-Mailbox
Set-Mailbox
```

---

## MDM — Mobile Device Management

Managing company data on mobile devices (phones, tablets).

### Key Concerns
- **Enrollment:** Device must enroll before it can access company resources
- **Policies:** Enforce PIN, encryption, remote wipe capability
- **Apps:** Deploy required apps, block unauthorized apps
- **Privacy:** Balance company security vs employee privacy

### Policy Examples
- Require screen lock PIN (minimum 6 digits)
- Require device encryption
- Block jailbroken/rooted devices
- Remote wipe capability (on lost/stolen devices)
- Conditional access — only compliant devices access email

### MDM Tools
- **Microsoft Intune** (part of M365) — most common in Windows environments
- **Jamf** — Apple-focused (iOS, macOS)
- **VMware Workspace ONE** — cross-platform enterprise

### Enrollment Methods
- User self-enrollment (BYOD — Bring Your Own Device)
- Corporate deployment (IT pre-enrolls company-owned devices)
- Apple Business Manager / Google Zero-touch Enrollment
