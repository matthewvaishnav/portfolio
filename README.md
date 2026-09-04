# Matthew Vaishnav — Portfolio

Applied machine-learning / computational pathology research engineer working on representation learning, whole-slide neural aggregation, federated learning, scientific computing, and systems engineering.

**Contact:** matthew.vaishnav@gmail.com  
**LinkedIn:** [linkedin.com/in/matthew-vaishnav-594312403](https://www.linkedin.com/in/matthew-vaishnav-594312403/)  
**Portfolio:** [matthewvaishnav.github.io/portfolio](https://matthewvaishnav.github.io/portfolio)  
**Location:** Kitchener-Waterloo, ON

---

## Flagship Research

### Paired-Acquisition Neural Factorization (PA-NF)

PA-NF is an end-to-end computational pathology pipeline spanning three levels of the learning problem:

1. **Paired-acquisition representation learning** — aligned scans of the same tissue across scanners are used to learn tissue-oriented and acquisition-oriented representations.
2. **Whole-slide neural aggregation** — TransnnMIL operates on slide-level pathology feature bags for multiple-instance learning.
3. **Multi-institutional learning** — PathologyFL provides federated optimization, privacy/security mechanisms, and pathology-specific site-aware policies.

The real-data research program spans **SCORPION**, an independent five-scanner canine SCC cohort, **PANDA**, **CAMELYON17/WILDS**, and **PatchCamelyon**.

Selected results include:

- **SCORPION:** 48 H&E slides, 480 aligned tissue regions, five scanners, and 2,400 images. In the registered 175-fit capacity-matched campaign, PA-NF reduced tissue-branch scanner balanced accuracy by **0.3108** relative to an equal-capacity neural control while preserving same-region retrieval within the registered noninferiority margin.
- **Independent canine SCC:** 44 biological samples and 805 complete five-view regions across five scanners. The external study confirmed strong scanner suppression while showing that centroid, QR, and paired-linear removal remain strong baselines.
- **PANDA / TransnnMIL:** 10,611 readable Phikon slide feature bags; the stabilization grid reached mean best validation QWK **0.8257** at learning rate 1e-4 and a best observed run of **0.8455**.
- **PathologyFL:** a fixed dominance detector transferred without retuning to ordinal site shift; at the strongest tested shift it improved global QWK by **0.01053**, macro-F1 by **0.01512**, and worst-site QWK by **0.01290**.
- **CAMELYON17/WILDS:** 455,954 examples across five centers. In a centralized frozen-feature held-out-center proxy, equal-client weighting improved accuracy from **0.8312 to 0.9132** relative to sample-proportional weighting.
- **PatchCamelyon:** ROC AUC **0.9394**, accuracy **0.8526**, and F1 **0.8507** on the official 32,768-patch test split.

**Flagship preprint:** [Paired-Acquisition Neural Factorization: An End-to-End Computational Pathology Pipeline](https://matthewvaishnav.github.io/computational-pathology-research/paired-acquisition-neural-factorization-pipeline.pdf)

**Research repository:** [matthewvaishnav/computational-pathology-research](https://github.com/matthewvaishnav/computational-pathology-research)

Research-only. Not clinically validated or intended for patient-care use. Results are bounded to the stated datasets, comparators, folds, feature backbones, and simulated-site settings.

---

## Other Projects

### drift
Real-time data processing system for computational pathology workflows. Handles high-throughput image analysis with distributed computing, fault tolerance, and monitoring.

### SENTINEL
Infrastructure monitoring and alerting system for distributed environments.

### Security Research
The portfolio also includes defensive-security work, detection engineering, infrastructure automation, and an 18-node home lab built around Security Onion and pfSense.

---

## Technical Stack

**Languages:** Python, JavaScript, TypeScript, Bash  
**Machine learning:** PyTorch, TensorFlow, scikit-learn, OpenCV, MLflow  
**Scientific / pathology:** representation learning, multiple-instance learning, federated learning, whole-slide analysis, pathology foundation-model features  
**Web:** Next.js, React, Three.js, FastAPI, Flask  
**Security:** SIEM, Sigma Rules, MITRE ATT&CK, Security Onion, pfSense  
**Infrastructure:** Docker, Kubernetes, Terraform, Ansible  
**Cloud:** AWS, Azure, Google Cloud Platform  
**Monitoring:** Prometheus, Grafana, ELK Stack

---

## Education

**Computer Programming, Conestoga College — Fall 2026**  
Waterloo, Ontario
