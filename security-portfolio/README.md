# Matthew Vaishnav - Security Portfolio

Computer Systems Technician student at Conestoga College. Building security tools and infrastructure on an 18-node home lab.

**Contact:** matthew.vaishnav@gmail.com  
**Portfolio:** [matthewvaishnav.github.io/security-portfolio](https://matthewvaishnav.github.io/security-portfolio)  
**Location:** Kitchener-Waterloo, ON

---

## What This Is

A security portfolio built with Next.js and React, showcasing defensive security projects, CTF writeups, and infrastructure automation. The portfolio demonstrates hands-on experience with threat detection, log analysis, and security operations.

Every project here was tested against running systems in an 18-node home lab with pfSense routing traffic between 6 isolated VLANs and Security Onion monitoring everything on a SPAN port.

---

## Key Projects

**Log Correlation Engine**  
Python tool that parses auth.log and web access logs to detect attack patterns. Identifies brute-force attempts followed by successful logins, scanner-to-admin-path reconnaissance, and credential stuffing. Maps all findings to MITRE ATT&CK techniques. Processed 14,822 log entries and generated 3 high-severity alerts with zero false positives on first run.

**Sigma Detection Rules**  
Detection rules written after executing each attack in the lab. Process: run the attack, capture logs, write the rule, validate it triggers, document false positive rate. Current coverage includes SSH brute force to root (T1110.001), DCSync attacks (T1003.006), and sudo interpreter abuse (T1548.003).

**DevSecOps Pipeline**  
GitHub Actions workflow that runs on every commit: ESLint → Bandit SAST → Trivy container scan → Terraform validate → deploy. Pipeline fails on any vulnerability with CVSS ≥ 7. Caught 6 critical CVEs before they reached production.

**AWS Infrastructure**  
Terraform code that deploys a hardened VPC across multiple availability zones. Includes NAT gateway, bastion host with key-only SSH, least-privilege security groups, VPC Flow Logs to CloudWatch, and encrypted S3 buckets for log storage. Deployed in ca-central-1.

---

## CTF Writeups

Each writeup documents the full attack chain: reconnaissance, initial access, privilege escalation, and post-exploitation. Every writeup includes a detection section showing how to identify the attack in logs and which Sigma rules to deploy.

| Challenge | Platform | Difficulty | Techniques |
|-----------|----------|------------|------------|
| Blue — EternalBlue | TryHackMe | Easy | T1190, T1003.002, T1543 |
| Linux PrivEsc Arena | TryHackMe | Medium | T1548.003, T1053.003 |
| Attacktive Directory | TryHackMe | Hard | T1558.004, T1003.006, T1550.002 |
| OWASP Top 10 | TryHackMe | Medium | T1190, T1059.007, T1083 |

---

## Technical Stack

**Frontend:** Next.js, React, TypeScript, Chakra UI, Framer Motion  
**Security:** Security Onion, Elastic SIEM, Suricata, Zeek, Sigma, Splunk, MITRE ATT&CK  
**DevOps:** Terraform, Ansible, Docker, GitHub Actions, pfSense, AWS, Azure Sentinel  
**Languages:** Python, Bash, PowerShell, TypeScript  
**Systems:** Linux, Windows Server 2019

---

## Lab Architecture

```
                    ┌─────────────────────┐
                    │   pfSense Router    │
                    └──────────┬──────────┘
                               │
       ┌───────────┬───────────┼───────────┬───────────┐
       │           │           │           │           │
  VLAN 10     VLAN 20     VLAN 30     VLAN 40     VLAN 50
  Management  Security    Monitoring  Victim Net  Services
```

18 nodes across 6 VLANs. All traffic monitored. Infrastructure as code.

---

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

---

Available for co-op starting Summer/Fall 2026.