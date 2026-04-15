# Matthew Vaishnav

Computer Systems Technician student at Conestoga College. Building security tools and infrastructure.

**Contact:** matthew.vaishnav@gmail.com  
**Portfolio:** [matthewvaishnav.github.io/cst-portfolio](https://matthewvaishnav.github.io/cst-portfolio)  
**Location:** Kitchener-Waterloo, ON

---

## What This Is

A security portfolio built on an 18-node home lab running VMware Workstation. The lab simulates enterprise infrastructure with pfSense routing traffic between 6 isolated VLANs and Security Onion monitoring everything on a SPAN port.

Every project here was tested against running systems. The entire lab is version-controlled with Ansible and Terraform—if the host fails, it rebuilds in minutes.

---

## Repository Structure

| Directory | Contents |
|-----------|----------|
| `soc/` | Log correlation, threat hunting, Splunk queries, incident response playbooks |
| `sigma-rules/` | Detection rules covering attack techniques from lab exercises |
| `devops/` | Terraform (AWS), Ansible (hardening), Docker, CI/CD pipelines |
| `scripting/` | Python recon tools, Bash hardening scripts, PowerShell AD audits |
| `networking/` | pfSense configurations, firewall rules, subnet calculator |
| `monitoring/` | Prometheus + Grafana + Loki stack |
| `data-analysis/` | Log correlation engine with MITRE ATT&CK mapping |
| `ctf-writeups/` | TryHackMe and HackTheBox solutions with detection coverage |

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

**Monitoring Stack**  
Docker Compose configuration with Prometheus (metrics), Grafana (dashboards), Loki (logs), AlertManager (notifications), and Node Exporter (system metrics). Includes pre-configured alerting rules for CPU, memory, and disk usage. Deploys with one command.

**Linux Hardening**  
Bash script that implements CIS Benchmark Level 1 controls for Ubuntu 22.04. Hardens SSH, disables unused services, configures firewall rules, sets file permissions, and enforces password policies. Includes --dry-run flag and backs up all configs before making changes.

**Windows Audit**  
PowerShell script that audits Windows security posture. Checks local accounts, privilege group membership, scheduled tasks, open ports, patch status, Windows Defender configuration, and Active Directory enumeration. Outputs a formatted HTML report with pass/fail results.

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

## Skills

**Security:** Security Onion, Elastic SIEM, Suricata, Zeek, Sigma, Splunk, MITRE ATT&CK  
**DevOps:** Terraform, Ansible, Docker, GitHub Actions, pfSense, AWS, Azure Sentinel  
**Languages:** Python, Bash, PowerShell  
**Systems:** Linux, Windows Server 2019

---

## Certifications

- CompTIA Security+ (in progress)
- TryHackMe SOC Level 2 (in progress)
- TryHackMe Pre-Security (complete)
- Cisco Networking Essentials (complete)

---

Available for co-op starting Summer/Fall 2026.
