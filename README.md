# Matthew Vaishnav - Comprehensive Portfolio

Computational systems engineer and security researcher building high fidelity labs to study how complex systems fail. Specializing in computational pathology, machine learning pipelines, defensive security operations, and infrastructure automation.

**Contact:** matthew.vaishnav@gmail.com  
**Portfolio:** [matthewvaishnav.github.io/portfolio](https://matthewvaishnav.github.io/portfolio)  
**Location:** Kitchener-Waterloo, ON

---

## What This Is

A comprehensive portfolio showcasing the intersection of programming and security skills. Built with Next.js, React, and Three.js for interactive 3D experiences. Features both computational pathology research and defensive security projects, all tested on an 18-node home lab.

---

## Key Projects

### Programming Projects

**HistoCore - Computational Pathology Framework**  
Production-grade PyTorch framework for whole-slide image analysis achieving 85.26% accuracy (0.9394 AUC) on PatchCamelyon benchmark. Features 8-12x training optimization (torch.compile, AMP, GPU optimization), attention-based MIL models (AttentionMIL, CLAM, TransMIL), first open-source federated learning for digital pathology with differential privacy, and production-ready PACS integration with DICOM/FHIR support. Comprehensive testing: 1,448 tests with 55% coverage. Validated on 262K training samples with bootstrap confidence intervals for clinical deployment readiness.

**drift**  
Real-time data processing system for computational pathology workflows. Handles high-throughput image analysis with distributed computing. Features automatic scaling, fault tolerance, and comprehensive monitoring with Prometheus and Grafana.

**SENTINEL**  
Infrastructure monitoring and alerting system. Tracks system health, performance metrics, and failure patterns across distributed environments. Provides predictive analytics for system reliability and automated incident response.

### Security Projects

**Log Correlation Engine**  
Python tool that parses auth.log and web access logs to detect attack patterns. Identifies brute-force attempts, reconnaissance, and credential stuffing. Maps findings to MITRE ATT&CK techniques with 0 false positives across 14,822 log entries.

**Sigma Detection Rules**  
15+ detection rules covering T1110.001, T1003.006, T1548.003. Each rule written after executing attacks in the lab environment. Process: run attack, capture logs, write rule, validate triggers, document false positive rate.

**DevSecOps Pipeline**  
GitHub Actions workflow with ESLint → Bandit SAST → Trivy container scan → Terraform validate → deploy. Pipeline fails on any vulnerability with CVSS ≥ 7. Caught 6 critical CVEs before production.

**AWS Infrastructure**  
Terraform code deploying hardened VPC with NAT gateway, bastion host, least-privilege security groups, VPC Flow Logs, and encrypted S3 buckets. Deployed in ca-central-1 with zero security findings.

---

## Lab Infrastructure

**18-Node Home Lab**  
- pfSense routing traffic between 6 isolated VLANs
- Security Onion monitoring everything on SPAN port
- 24/7 monitoring with Prometheus and Grafana
- Version-controlled with Ansible and Terraform
- Rebuilds in minutes if host fails

**Security Testing Environment**  
Every security project tested against running systems with real attack scenarios. Lab simulates enterprise infrastructure for realistic threat detection and response testing.

---

## Technical Stack

**Languages:** Python, JavaScript, TypeScript, Bash  
**Frameworks:** Next.js, React, Three.js, FastAPI, Flask  
**ML/AI:** PyTorch, TensorFlow, scikit-learn, OpenCV, MLflow  
**Security:** SIEM, Sigma Rules, MITRE ATT&CK, Security Onion, pfSense  
**Infrastructure:** Docker, Kubernetes, Terraform, Ansible  
**Cloud:** AWS, Azure, Google Cloud Platform  
**Databases:** PostgreSQL, MongoDB, Redis  
**Monitoring:** Prometheus, Grafana, ELK Stack

---

## Education

Computer Systems Technician, Conestoga College (2025-2027)  
Focus: Systems programming, network infrastructure, computational methods, and security operations

---

Available for co-op starting Summer/Fall 2026.
