# Infrastructure Services — DNS
> INFO1555 Infrastructure Services Administration | Conestoga College — Matthew Vaishnav

---

## What is DNS?

DNS (Domain Name System) translates human-readable domain names into IP addresses.
Without DNS, you'd need to memorize IP addresses for every website.

```
www.google.com → 142.251.33.163
www.conestogac.on.ca → 142.156.90.163
```

---

## URL Anatomy

```
https://www.conestogac.on.ca:443/fulltime?query=hello#section
│       │                    │   │        │            │
Scheme  Domain/Authority     Port Path    Parameters  Anchor
```

| Part | Example | Purpose |
|------|---------|---------|
| **Scheme** | `https://` | Protocol to use |
| **Domain** | `www.conestogac.on.ca` | Which server to contact |
| **Port** | `:443` | Gate to access the resource (omitted if standard) |
| **Path** | `/fulltime` | Location of resource on the server |
| **Parameters** | `?query=hello` | Key-value pairs sent to server |
| **Anchor** | `#section` | Bookmark within the page |

---

## DNS Resolution Process

1. **Client** queries its local **Recursive Resolver** (usually your ISP or org's DNS server)
2. **Recursive Resolver** checks its cache — if found, returns answer immediately
3. If not cached, resolver queries **Root Hint** (`.` at end of domain)
4. Root Hint refers resolver to the appropriate **TLD Server** (`.com`, `.ca`, `.org`)
5. TLD Server refers resolver to the **Authoritative Nameserver** for the domain
6. **Authoritative Nameserver** returns the IP address
7. Resolver caches the result and returns it to the client

```
Client → Recursive Resolver → Root Servers → TLD Server → Authoritative NS → Answer
         (iterative queries between DNS servers)
         (recursive query between client and resolver)
```

### Query Types
- **Recursive query:** Client asks resolver to do all the work and return a final answer
- **Iterative query:** DNS server returns the best answer it has (referral to next server)
  - DNS-to-DNS communication = iterative

### Caching
- Resolvers cache answers to speed up future lookups
- Cache duration controlled by **TTL (Time to Live)** on each DNS record

---

## DNS Server Types

| Type | Role | Example Tools |
|------|------|--------------|
| **Recursive Resolver** | Handles client queries, follows referrals | Unbound, Windows DNS |
| **Authoritative NS** | Holds actual DNS records, answers definitively | NSD, Windows DNS, BIND9 |
| **Root Server** | Top of DNS hierarchy, knows all TLD servers | 13 root server clusters globally |

### Windows DNS vs Linux DNS

| Feature | Windows DNS | Linux NSD + Unbound | Linux BIND9 |
|---------|------------|--------------------|-----------:|
| AD Integration | Yes | No | No |
| Management | GUI + PowerShell | Config files | Config files |
| Setup difficulty | Easy | Medium | Hard |
| Modern/separation | No | Yes (best practice) | Combined |

**Enterprise best practice:** Run NSD (authoritative) and Unbound (recursive) on separate servers.
Both are modern, widely used by ISPs, TLD operators, and root servers.

---

## Key DNS Record Types

| Record | Purpose | Example |
|--------|---------|---------|
| **A** | Maps hostname → IPv4 address | `www.corp.local → 10.0.0.5` |
| **AAAA** | Maps hostname → IPv6 address | `www.corp.local → ::1` |
| **CNAME** | Alias — maps one name to another | `mail → exchange01.corp.local` |
| **MX** | Mail server for domain | `corp.local → mail.corp.local` |
| **PTR** | Reverse lookup — IP → hostname | `10.0.0.5 → www.corp.local` |
| **NS** | Nameserver for zone | `corp.local → ns1.corp.local` |
| **SOA** | Start of Authority — zone metadata | Admin contact, serial, TTL |
| **SRV** | Service locator — used by AD | `_ldap._tcp.corp.local` |
| **TXT** | Text records — SPF, DKIM, verification | `v=spf1 include:...` |

---

## DNS in Windows Server

DNS role is **automatically installed with ADDS** — required for AD to function.
AD uses SRV records so clients can locate domain controllers.

### DNS Forwarders
When your DNS server can't resolve a name internally, it forwards to another server:

```powershell
# Add a DNS forwarder
Add-DnsServerForwarder -IPAddress "8.8.8.8"
Add-DnsServerForwarder -IPAddress "1.1.1.1"

# View forwarders
Get-DnsServerForwarder
```

### Common DNS PowerShell Commands

```powershell
# Test DNS resolution
Resolve-DnsName www.google.com
nslookup www.conestogac.on.ca

# View DNS zones
Get-DnsServerZone

# Create A record
Add-DnsServerResourceRecordA -ZoneName "corp.local" -Name "webserver" -IPv4Address "10.0.0.50"

# View all records in a zone
Get-DnsServerResourceRecord -ZoneName "corp.local"

# Flush DNS cache on client
ipconfig /flushdns

# View DNS cache
ipconfig /displaydns
```

### Linux DNS (dig command)

```bash
# Basic lookup
dig www.google.com

# Query specific DNS server
dig @8.8.8.8 www.google.com

# Reverse lookup
dig -x 142.251.33.163

# Look up MX records
dig mx google.com
```
