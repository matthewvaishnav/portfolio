# Matthew Vaishnav — Portfolio

Computational pathology / ML research engineer building controlled experiments around identifiability, measurement reliability, institutional generalization, and auditable scientific evidence.

**Contact:** matthew.vaishnav@gmail.com  
**LinkedIn:** [linkedin.com/in/matthew-vaishnav-594312403](https://www.linkedin.com/in/matthew-vaishnav-594312403/)  
**Portfolio:** [matthewvaishnav.github.io/portfolio](https://matthewvaishnav.github.io/portfolio)  
**Location:** Kitchener-Waterloo, ON

---

## Research

My research is organized as several independent programs with different technical questions and evidence boundaries.

- **Paired-Acquisition Neural Factorization (PA-NF):** matched multi-scanner representation learning with explicit tissue/acquisition factorization and preservation controls.
- **Whole-slide MIL:** gated **AttentionMIL**, authored **TransnnMIL**, and matched MIL baselines on PANDA.
- **WSI-NCA / whole-slide tissue dynamics:** topology-, history-, and recurrence-aware spatial modeling under explicit falsification controls.
- **PathologyFL / FAIR-WEIGHTS-H:** federated pathology, institutional weighting, dominance detection, privacy-aware training, and shift robustness.
- **NucleoScope collaboration:** nucleus-level quantitative measurement, repeated-detection structure, computational-context effects, and tissue-organization law discovery.
- **SERA:** evidence-governed adaptive computation in which learned structure can be born, reused, composed, repaired, consolidated, and retired.
- **Scientific compiler / evidence DSL:** typed identities, units, controls, provenance, evidence objects, and machine-checkable claim boundaries.

Public datasets and evaluation substrates include **SCORPION**, an independent five-scanner canine SCC cohort, **PANDA**, **CAMELYON17/WILDS**, and **PatchCamelyon**.

Selected controlled results include:

- **SCORPION:** 48 H&E slides, 480 aligned tissue regions, five scanners, and 2,400 images. In the registered 175-fit capacity-matched campaign, PA-NF reduced tissue-branch scanner balanced accuracy by **0.3108** relative to an equal-capacity neural control while preserving same-region retrieval within the registered noninferiority margin.
- **Independent canine SCC:** 44 biological samples and 805 complete five-view regions across five scanners. The external study confirmed strong scanner suppression while showing that centroid, QR, and paired-linear removal remain strong baselines.
- **PANDA / TransnnMIL:** 10,611 readable Phikon slide feature bags; the stabilization grid reached mean best validation QWK **0.8257** at learning rate 1e-4 and a best observed run of **0.8455**.
- **PathologyFL:** a fixed dominance detector transferred without retuning to ordinal site shift; at the strongest tested shift it improved global QWK by **0.01053**, macro-F1 by **0.01512**, and worst-site QWK by **0.01290**.
- **CAMELYON17/WILDS:** 455,954 examples across five centers. In a centralized frozen-feature held-out-center proxy, equal-client weighting improved accuracy from **0.8312 to 0.9132** relative to sample-proportional weighting.
- **PatchCamelyon:** ROC AUC **0.9394**, accuracy **0.8526**, and F1 **0.8507** on the official 32,768-patch test split.

**Canonical PA-NF manuscript:** [Current public manuscript](https://matthewvaishnav.github.io/computational-pathology-research/)

**Research repository:** [matthewvaishnav/computational-pathology-research](https://github.com/matthewvaishnav/computational-pathology-research)

Research-only. Not clinically validated or intended for patient-care use. Results are bounded to the stated datasets, comparators, folds, feature backbones, and simulated-site settings.

---

## Other Projects

### drift
Git-like Linux server-state tracking for packages, services, ports, users, cron jobs, kernel parameters, and other operational state.

### SENTINEL
Anti-DDoS research and engineering project built around asynchronous analysis, distributed state, and threat-sharing mechanisms.

### replay / whoops
Infrastructure tooling for converting shell sessions into Ansible playbooks and intercepting destructive commands before execution.

### Out of Orbit
C++17/Raylib arcade shooter with fixed-size object pools, wave progression, bosses, and data-driven upgrades.

### Security Research
The portfolio also includes defensive-security work, detection engineering, infrastructure automation, and an 18-node home lab built around Security Onion and pfSense.

---

## Technical Stack

**Languages:** Python, C++, JavaScript, Bash  
**Machine learning / scientific:** PyTorch, scikit-learn, NumPy, SciPy, pandas, representation learning, multiple-instance learning, federated learning  
**Web / visualization:** Next.js, React, Chakra UI, Three.js  
**Infrastructure:** Git, GitHub Actions, Docker, Ansible, Linux, SSH  
**Security / lab:** Security Onion, pfSense, Sigma, MITRE ATT&CK, Prometheus, Grafana

---

## Education

**Computer Programming, Conestoga College — Fall 2026**  
Waterloo, Ontario
