# Matthew Vaishnav — Portfolio

Computational pathology / ML research engineer studying what models and measurements actually encode, where apparent signal comes from, and which conclusions survive controlled nuisance shifts, mechanism falsification, and reproducibility audit.

**Contact:** matthew.vaishnav@gmail.com  
**LinkedIn:** [linkedin.com/in/matthew-vaishnav-594312403](https://www.linkedin.com/in/matthew-vaishnav-594312403/)  
**Portfolio:** [matthewvaishnav.github.io/portfolio](https://matthewvaishnav.github.io/portfolio)  
**Location:** Kitchener-Waterloo, ON

---

## Research

The portfolio contains multiple independent research programs, but they share one scientific requirement: a model, measurement, or claim should survive the controls needed to rule out easier alternative explanations.

- **Paired acquisition and representation identifiability:** PA-NF, SCORPION, canine SCC, pair-structure and pair-integrity controls, cross-backbone transfer, scanner-heldout and sample-disjoint transfer, scanner-confounding stress, factor swapping, pair-repeat allocation, bottleneck/capacity studies, representation geometry, synthetic identifiability, instrument-power audits, and crossed-preparation work.
- **Identity and counterfactual benchmark instruments:** the Oncology Identity Benchmark and runnable Identity Audit, measurement-validation protocols, the Paired Scanner Counterfactual Benchmark, and scanner-invariant residual-provenance / invariance-blind-spot audits.
- **Whole-slide learning:** mean pooling, AttentionMIL, nnMIL, CLAM, TransMIL-style controls, TransnnMIL, branch fusion, topology, hierarchical pooling, pruning, graph caching, and repaired matched PANDA evaluation.
- **WSI-NCA / whole-slide tissue dynamics:** local spatial dynamics, topology/history/recurrence falsification, PANDA Phase A, SICAP assignment stability, representation coupling, and state canonicalization.
- **PathologyFL:** federated pathology infrastructure spanning aggregation, privacy/secure aggregation, asynchronous training, communication, compression, monitoring, checkpointing, reconnection, and fault tolerance.
- **Institutional weighting and site-signal alignment:** FAIR-WEIGHTS-H, dominant-site corruption and ordinal-shift studies, detector transfer, CAMELYON17/WILDS held-out-center weighting, center-subspace diagnostics, communication accounting, privacy-noise probes, and infrastructure-friction studies.
- **Scanner provenance and intervention:** PANDA/SICAP provenance, scanner inventory, assignment reproducibility, public-dataset provenance discovery, CPTAC metadata-first transfer discovery, and the PAR same-glass intervention.
- **NucleoScope:** repeated-context measurement mechanics, primitive-response analysis, cross-tile matching, falsified law candidates, ordinal nucleus-versus-tissue regularities, adversarial null construction, and the current H12/G6 context-control qualification program.
- **SERA:** SFS formation stability, NRM neural rematch/mechanism localization, causal-specificity transport, structural authority/composition/repair, strong System-One controls, and the CRAS exact-rank/lifecycle program.
- **Scientific compiler and evidence systems:** Pathology Pipeline Language, typed Evidence<T>, identities, units, split and provenance legality, immutable evidence packages, release registries, hostile review, and fail-closed claim validation.
- **Accountable Neural Aggregation:** a named program-level map connecting representation, whole-slide aggregation, institutional aggregation, and scientific audit while keeping each evidence boundary separate.
- **Program-level reproducibility and self-correction:** claim ledgers, retained negative results, exact artifact recovery, versioned public evidence, withdrawn/superseded claim tracking, and explicit evidence boundaries.
- **Research-engineering lineage:** historical HistoCore work on WSI processing/streaming, multimodal and temporal modeling, stain normalization, foundation-model adapters, interpretability tooling, research APIs/model serving, DICOM/PACS/FHIR-style prototypes, causal/cell/TME/subtype/multiscale/omics modules, Docker/Kubernetes/cloud scaffolding, monitoring, security, and federated systems. Implementation is not presented as clinical or empirical validation.

The public computational-pathology record also includes **PCam**, **PANDA**, **CAMELYON17/WILDS**, **SCORPION**, **canine SCC**, **SICAP**, and curated Hugging Face evidence/model releases. On PCam, the recorded full-test result is **0.9394 ROC AUC / 0.8526 accuracy / 0.8507 F1** on 32,768 official test patches; 0.9394 was numerically higher than every external AUC in the historical 10-value comparison table, while the unmatched cross-paper protocols prevent treating that ordering as a controlled statistical superiority test.

**Public research hub:** [matthewvaishnav/computational-pathology-research](https://github.com/matthewvaishnav/computational-pathology-research)

**PA-NF manuscript:** [Current public manuscript](https://matthewvaishnav.github.io/computational-pathology-research/)

Research-only. Evidence status differs by research line; active, negative, historical, and validation-stage results are kept distinct.

### Evidence-state rule

The portfolio deliberately separates:
- **supported/current evidence** from architecture or infrastructure implementation;
- **negative and mixed results** from execution failures;
- **active but unpromoted studies** from established findings; and
- **withdrawn historical claims** from current evidence.

Examples retained in the public record include the canine no-universal-neural-increment result, the WSI-NCA PANDA Phase A negative result, partially instrument-valid synthetic benchmarks, FAIR-WEIGHTS-H informative nulls, and withdrawn historical TransnnMIL/unified-scoreboard interpretations.

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

### Open-source Contributions
- **awesome-sysadmin:** VictoriaMetrics catalog contribution, merged upstream in PR #720.
- **NextUI:** open PR #674 adding a safe cross-platform Clear Recently Played tool.
- **awesome-selfhosted-data:** open PR #2312 adding Olares metadata.
- **Knulli/Batocera distribution fork:** authored batocera-config-sentinel for last-known-good config validation/recovery and startup integration; fork contribution, not represented as upstream-merged.
- **MustardOS:** closed/unmerged PR #699 proposing an emergency critical-battery power-saving mode.

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
