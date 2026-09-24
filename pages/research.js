import {
  AspectRatio,
  Badge,
  Box,
  Container,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

const programs = [
  {
    title: 'Paired Acquisition & Representation Identifiability',
    type: 'Representation research',
    date: '2026',
    description:
      'PA-NF and the surrounding paired-acquisition program: pair structure, biological/acquisition branch separation, scanner and center subspaces, transfer under scanner and sample shift, bottleneck allocation, factor swapping, representation geometry, and strong linear controls.',
    metric: 'SCORPION · canine SCC · paired interventions',
    image: '/portfolio/images/research/scorpion-cover.webp',
    href: 'https://matthewvaishnav.github.io/computational-pathology-research/'
  },
  {
    title: 'TransnnMIL & Whole-Slide MIL',
    type: 'Whole-slide architecture research',
    date: '2026',
    description:
      'PANDA whole-slide research across mean pooling, gated AttentionMIL, nnMIL, CLAM, TransMIL-style controls, authored TransnnMIL variants, branch fusion, topology, hierarchical pooling, pruning, graph caching, and repaired matched reruns.',
    metric: '10,611 verified PANDA feature bags',
    image: '/portfolio/images/research/allocation-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'WSI-NCA / Whole-Slide Tissue Dynamics',
    type: 'Spatial dynamics research',
    date: '2026',
    description:
      'Local state-update dynamics over tissue structure with topology, recurrence, history, construction, leakage, and translation controls. Synthetic mechanism tests are paired with a frozen PANDA-300 Phase A that did not support recurrence- or topology-dependent predictive benefit.',
    metric: 'Synthetic mechanism · PANDA negative · SICAP audit',
    image: '/portfolio/images/research/allocation-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'PathologyFL',
    type: 'Federated pathology systems',
    date: '2026',
    description:
      'A pathology-specific federated research stack spanning FedAvg/FedProx/FedAdam and robust aggregation, privacy and secure aggregation, gRPC/TLS communication, asynchronous training, compression, monitoring, checkpointing, reconnection, and fault tolerance.',
    metric: 'Aggregation · privacy · async · fault tolerance',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'Institutional Weighting & Site-Signal Alignment',
    type: 'Generalization and aggregation research',
    date: '2026',
    description:
      'FAIR-WEIGHTS-H, dominant-site corruption and ordinal-shift studies, detector transfer, CAMELYON17/WILDS held-out-center weighting, center-subspace projection, communication accounting, privacy-noise stress, and infrastructure-friction experiments.',
    metric: 'PANDA · PCam · CAMELYON17/WILDS',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/dominant-site-federated-pathology-paper.md'
  },
  {
    title: 'PANDA / SICAP Acquisition & Provenance',
    type: 'Scanner and provenance research',
    date: '2026',
    description:
      'Physical-slide identity, scanner inventory, assignment reproducibility, public-dataset provenance, transport audits, and the PAR same-glass scanner intervention with frozen cross-fitted mechanism analysis.',
    metric: '24,235 / 24,235 SICAP assignments reproduced',
    image: '/portfolio/images/research/scorpion-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'Benchmark & Audit Instruments',
    type: 'Scientific measurement systems',
    date: '2026',
    description:
      'The Oncology Identity Benchmark and runnable Identity Audit, measurement-validation protocols, the Paired Scanner Counterfactual Benchmark, and scanner-invariant residual-provenance work that tests what invariance fails to identify.',
    metric: 'Identity · counterfactuals · collapse · provenance',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'NucleoScope',
    type: 'Quantitative nuclear pathology',
    date: '2026',
    description:
      'Active collaboration spanning repeated-context measurement mechanics, falsified law candidates, ordinal nucleus-versus-tissue regularities, adversarial null construction, and the current H12/G6 estimand-preserving context-control qualification program.',
    metric: 'Measurement mechanics · falsification · H12/G6',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://nucleoscope.ai/'
  },
  {
    title: 'SERA',
    type: 'Independent machine-learning research',
    date: '2026',
    description:
      'Evidence-governed adaptive computation across formation stability (SFS), neural rematch and mechanism localization (NRM), causal-specificity transport, strong System-One controls, and the CRAS exact-rank / lifecycle comparator program.',
    metric: 'SFS · NRM · CRAS · structural lifecycle',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: null
  },
  {
    title: 'Scientific Compiler & Evidence Systems',
    type: 'Scientific computing',
    date: '2026',
    description:
      'Pathology Pipeline Language, typed Evidence<T>, identity hierarchies, units, provenance, run legality, immutable evidence packages, release registries, claim boundaries, and fail-closed scientific validation.',
    metric: '15/15 pipeline · 35/35 unit/adversarial tests',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'Accountable Neural Aggregation',
    type: 'Program integration and reproducibility',
    date: '2026',
    description:
      'The named program-level project connecting acquisition-aware representation work, whole-slide aggregation, institutional learning, provenance, and compile-time scientific auditability while keeping every component\'s evidence boundary separate.',
    metric: 'Program architecture · evidence boundaries',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  }
]

const researchGroups = [
  {
    title: 'Representation, acquisition, and identifiability',
    items: [
      'Paired-scanner experimental design and broken-pair / random-pair controls',
      'Paired-Acquisition Neural Factorization (PA-NF)',
      'Locked adversarial site-invariance confirmation: lower site leakage without tumor-prediction gain',
      'Factorized/subtraction falsification: unconditional nuisance subtraction removed tumor-predictive signal',
      'SCORPION five-scanner paired-acquisition study',
      'Independent multi-scanner canine SCC fixed-estimand audit',
      'Scanner and center subspace methods: centroid, QR, PCA, paired-linear, adversarial, and projection controls',
      'Cross-backbone PA-NF evaluation across DINOv2, Phikon, and ResNet feature families',
      'Synthetic crossed-factor identifiability and two-resource phase maps',
      'Biological bottleneck capacity-allocation factorials',
      'Pair-repeat / unique-anchor allocation studies',
      'Paired-consensus linear anchor',
      'Routed paired-consensus biological bottleneck',
      'Crossed-target scanner-prototype factorization',
      'Task-defined biological sufficiency benchmark',
      'Task-benchmark instrument-power audit',
      'Finite-sample whitening identifiability audit',
      'Residual-probe nonlinear-capacity calibration',
      'Real bottleneck representation recovery',
      'Unseen-identity representation geometry and calibrated geometry v2',
      'Crossed-target and unseen-identity generalization',
      'FEATMAP / affine, Procrustes, DANN, and other comparator protocols',
      'Pair-structure boundary ladder and cross-backbone pair-integrity falsification',
      'Biological/acquisition branch audit and biological-label preservation audit',
      'Scanner-heldout biological-label transfer audit',
      'Sample-disjoint scanner-heldout transfer audit',
      'Scanner-confounded label-robustness stress test',
      'Acquisition bottleneck capacity-constrained separation comparison',
      'Acquisition-factor swapping through branch and decoder space',
      'Baseline murder tests against PCA and scanner-subspace removal',
      '450-fit canine dimensionality × cross-covariance factorial with retained negative result',
      'Prospective paired-affine and orthogonal-Procrustes comparator program',
      'Scanner-invariant residual provenance / invariance-blind-spot feasibility audit',
      'Crossed-preparation identifiability and preparation/workflow metadata-readiness work',
      'CPTAC human histopathology metadata-first transfer discovery (TCIA/GDC; active, no outcome claim)',
      'Synthetic benchmark self-audit: oracle power, validation power, and representation evidence adjudicated separately',
      'Fixed-estimand real feature-space adjudication and exact artifact-recovery replay'
    ]
  },
  {
    title: 'Benchmark foundations and evaluation infrastructure',
    items: [
      'PCam patch benchmark foundation and full-test evaluation infrastructure',
      'PANDA 10,611-slide readable Phikon feature-bag pipeline',
      'PANDA baseline hierarchy and model-comparison infrastructure',
      'CAMELYON17/WILDS 455,954-example multi-center evaluation substrate',
      'SCORPION and canine SCC paired-scanner manifests and blocked-fold evaluation',
      'DINOv2, Phikon, ResNet, and pathology-foundation feature pipelines',
      'Threshold, calibration, bootstrap, failure-asymmetry, and cross-validation tooling',
      'Dataset and split manifests that separate software fixtures from scientific evidence'
    ]
  },
  {
    title: 'Identity and counterfactual benchmark instruments',
    items: [
      'Paired-Acquisition Neural Factorization Oncology Identity Benchmark',
      'Runnable frozen-representation Identity Audit CLI',
      'Measurement Validation Protocol for shortcut suppression, biology preservation, utility, collapse, and blocked inference',
      'Paired Scanner Counterfactual Benchmark: feature-space, decoder-space, and future pixel-space layers',
      'Scanner-invariant residual provenance feasibility audit',
      'Category-plus-geometry and other stupid-baseline controls',
      'Random-label, broken-pair, scanner-balanced-random, collapse, and leakage controls',
      'Sample-/slide-/client-blocked inference contracts for representation claims'
    ]
  },
  {
    title: 'Whole-slide modeling and representation coupling',
    items: [
      'Mean-pooled Phikon whole-slide baselines',
      'Gated AttentionMIL',
      'nnMIL',
      'CLAM-style multiple-instance learning',
      'TransMIL-style global-attention controls',
      'TransnnMIL multibranch whole-slide architecture',
      'Branch-token, concat, gate, and learned branch-attention fusion controls',
      'Hierarchical pooling, topology/GNN branches, graph caching, and adaptive pruning',
      'Repeated-seed TransnnMIL stability and matched-rerun program',
      'WSI-NCA local state-update dynamics',
      'Real-versus-shuffled topology and tied-versus-untied recurrence',
      'History transport and mechanism-specific spatial falsifiers',
      'PANDA representation coupling and state canonicalization',
      'SICAP transport and seed-excluded backbone tests',
      'K5 coupling hierarchy and failed gauge / phenotype-transport branches'
    ]
  },
  {
    title: 'Federated pathology and institutional generalization',
    items: [
      'PathologyFL coordinator, client, aggregation, monitoring, async, and fault-tolerance infrastructure',
      'FedAvg, FedProx, FedAdam, weighted, and robustness-oriented aggregation',
      'FAIR-WEIGHTS-H institutional weighting',
      'PANDA institutional-shift and ordinal-learning studies',
      'Dominant-site and site-signal alignment studies on PANDA-derived features',
      'Fixed detector transfer from label corruption to ordinal threshold shift',
      'Detector diagnostic ablation and calibration sensitivity',
      'CAMELYON17/WILDS held-out-center validation',
      'CAMELYON17 center-subspace projection and leakage diagnostics',
      'Adversarial/subtractive center-removal failures followed by a partially successful supervised linear center-subspace projection',
      'PCam heterogeneous-site informative null: different aggregation weights without measurable performance differentiation',
      'Equal-client and dominant-source weighting studies',
      'Four federated failure pillars: heterogeneity, communication, privacy, and infrastructure',
      'Feature/head communication accounting and bounded communication-resolution study',
      'Privacy-noise robustness probes',
      'Infrastructure-friction, dropout, speed, and straggler simulations',
      'Historical DMI / CPI / IMR / MKN federated architecture lineage'
    ]
  },
  {
    title: 'Scanner provenance and intervention',
    items: [
      'PANDA scanner inventory and metadata census',
      'SICAP assignment-stability audit',
      'Public-dataset provenance discovery',
      'Physical-slide identity and no-content-read preregistration gates',
      'PAR same-glass scanner intervention across Grundium, Hamamatsu, and Leica',
      'Branch-conditioned scale-by-gauge acquisition mechanism',
      'Frozen transport protocol for genuinely new paired-acquisition cohorts',
      'Paired-acquisition provenance manifests and archive-lineage audits'
    ]
  },
  {
    title: 'NucleoScope research',
    items: [
      'Repeated-context primitive-response experiments',
      'R, S, RSi, and C measurement stability',
      'Primitive-level sigma-rho and G response analysis',
      'Cross-tile repeated detections and matched-pair structure',
      'Tie-aware finite-multiset nulls for quantized intensities',
      'GTEx 73-slide primitive and allometry audit',
      'Ambient-rank nuclear-versus-tissue regularity',
      'Exact-spectrum phase-topology candidate, archived after falsification',
      'Quartic-law falsification and partial-context selection',
      'Ordinal compartment audit',
      'Ordinal-persistence compartment law candidate',
      'H_R versus H_P coordinate-identification preregistration',
      'Finite-scale ordinal variogram-crossover candidate',
      'Object-selection, segmentation, tile-context, and smooth-field artifact adversaries',
      'Nuclear-versus-nearby-tissue matched geometry tests',
      'Independent Branch B law discovery and A/B/C research firewall',
      'H9/H10/G4/G5 frozen falsification programs',
      'H11/G5: fresh false-law suppression passed, planted-power preservation failed, terminating the overconditioned control line',
      'H12/G6: context-conditioned and matched empirical null development that preserves the original nucleus-vs-local-tissue estimand',
      'Fresh G6 qualification with unseen adversaries, independent planted-power/stress gates, and biology still locked',
      'Cross-preparation and untouched-cohort validation planning'
    ]
  },
  {
    title: 'SERA research',
    items: [
      'Self-expanding relational and evidence-governed structural learning',
      'Primitive formation, birth, reuse, composition, repair, consolidation, and retirement',
      'PMC evidence-limited self-formation line',
      'CBB closure-before-birth headroom falsifier',
      'PBE primitive-basis equilibrium program',
      'Evidence transport and provenance-concentration mechanisms',
      'Temporal-history and difference-field mechanisms',
      'T127 / reconstructed authority frontier',
      'SFS numerical-stability, parent-portability, canonicalization, and exact-replay studies',
      'NRM neural-rematch, residual-authority, plasticity, compatibility, and transport ladder',
      'NRM-043 held-out causal-specificity transport',
      'CRAS matched-null, exact-rank, and lifecycle comparator program',
      'CRAS-Q1C exact-rank authorization with null calibration and diagnostic release',
      'CRAS-Q2 A→B→A lifecycle qualification for stop, continue, retire, recycle, and replacement policies',
      'System-One-style decomposition, fan-out, support-authority, and learned-composition controls',
      'Negative mechanisms and retired branches preserved as part of the scientific record'
    ]
  },
  {
    title: 'Research-engineering and platform lineage',
    items: [
      'Historical HistoCore computational-pathology framework',
      'Universal and streaming whole-slide image handling',
      'Real-time / incremental WSI aggregation prototypes',
      'Foundation-model adapters and feature-extraction pipelines for Phikon, DINOv2, ResNet, and related encoders',
      'Research APIs, model registry, model serving, ONNX, and TorchScript tooling',
      'DICOM, PACS, and FHIR-style integration prototypes',
      'Docker, Kubernetes, cloud, monitoring, and deployment scaffolds',
      'Federated privacy, secure-aggregation, async, fault-tolerance, and monitoring infrastructure',
      'Security, authorization, observability, and reproducibility tooling around the research stack',
      'Historical DMI, CPI, IMR, and MKN architecture experiments',
      'Tested multimodal fusion/datasets, temporal reasoning, stain-normalization transformer, and foundation-model compatibility',
      'Grad-CAM, failure-analysis, feature-importance, and interpretability dashboard tooling',
      'Implemented causal inference utilities: IPW, doubly robust estimation, T-/X-learners, DAG and refutation helpers',
      'Implemented cell/TME graphs and GNNs, survival-aware subtype discovery, multiscale MIL, multi-omics factorization, and segmentation/spatial utilities; implementation capability, not promoted empirical findings'
    ]
  },
  {
    title: 'Scientific language, provenance, and research infrastructure',
    items: [
      'Pathology Pipeline Language / epistemic compiler',
      'Typed Evidence<T> and bounded claim evaluation',
      'Patient, specimen, slide, region, acquisition, and run identity hierarchies',
      'Physical units, split integrity, paired-acquisition legality, and control requirements',
      'Metamorphic scientific-legality benchmarks',
      'Immutable evidence packages and exact artifact recovery',
      'Living claim-boundary contracts and retained negative results',
      'Hugging Face release registry and fail-closed publishing tools',
      'Scientific audit remediation and hostile-review ledgers',
      'Program-level publication and reproducibility architecture'
    ]
  }
]


const evidenceStates = [
  {
    title: 'Supported / current',
    items: [
      'SCORPION registered capacity-matched PA-NF effect with retrieval noninferiority and an explicit scanner-bearing acquisition branch',
      'Corrected canine fixed-estimand evidence, including the bounded negative comparison against strong simple scanner-removal baselines',
      'PANDA dominant-site / ordinal-shift stress studies and tuned detector transfer under simulated institutional corruption',
      'CAMELYON17 held-out-center weighting and supervised center-subspace diagnostics, bounded as centralized feature-level proxies',
      'Scientific-language, provenance, release, and fail-closed validation infrastructure under explicit tests'
    ]
  },
  {
    title: 'Negative / mixed / falsified',
    items: [
      'Early site-invariance study reduced recoverable site information without improving held-out tumor prediction',
      'Unconditional nuisance subtraction removed tumor-predictive information instead of cleanly isolating nuisance',
      'Canine B32/B64 did not establish a neural feature-space increment over every strong simple scanner-removal baseline',
      'Synthetic capacity effects did not transport into a corrected real-data category-accessibility gain',
      'WSI-NCA synthetic propagation did not translate into a recurrence/topology-dependent PANDA-300 advantage',
      'FAIR-WEIGHTS-H PCam heterogeneous benchmark produced distinct weights but no performance differentiation',
      'NucleoScope H11/G5 suppressed fresh false laws but also erased planted projective signal and was terminated',
      'Historical unified separation rankings were withdrawn because incompatible datasets/protocols had been collapsed into one scoreboard'
    ]
  },
  {
    title: 'Active but unpromoted',
    items: [
      'Paired affine comparison: centroid translation, orthogonal Procrustes, unregularized affine, ridge affine, and PA-NF on frozen SCORPION folds',
      'Crossed-target scanner-prototype and identity-disjoint synthetic generalization studies',
      'Repaired TransnnMIL matched PANDA rerun across seven architecture/control families and five seeds',
      'CPTAC human-histopathology metadata and scanner inventory for a future external-human transfer layer',
      'Scanner-invariant residual-provenance / crossed-preparation identifiability work',
      'NucleoScope H12/G6 fresh qualification; biological interpretation remains locked behind control gates',
      'SERA CRAS-Q2 lifecycle qualification under strong conventional controls'
    ]
  },
  {
    title: 'Withdrawn / historical only',
    items: [
      'Historical TransnnMIL fusion/topology QWK interpretations pending the repaired matched rerun',
      'Historical canine category metrics affected by leakage or incompatible estimands',
      'Slide-independent SCORPION sign-flip inference and overconfident pseudoreplication-era statistics',
      'PCam state-of-the-art, clinical, deployment, and diagnoses-saved language from the pre-audit platform era',
      'Cosine similarity as proof of biological preservation',
      'Historical production/hospital-readiness claims inferred from the existence of PACS, FHIR, privacy, security, or deployment modules'
    ]
  }
]
const ProgramCard = ({ record }) => {
  const muted = useColorModeValue('gray.600', 'whiteAlpha.700')
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const hoverBg = useColorModeValue('white', 'whiteAlpha.100')
  const hoverBorder = useColorModeValue('teal.300', 'teal.500')
  const accent = useColorModeValue('teal.600', 'teal.200')
  const shadow = useColorModeValue('0 12px 28px rgba(15, 23, 42, 0.06)', 'none')

  return (
    <LinkBox
      as="article"
      role="group"
      display="flex"
      flexDirection="column"
      h="100%"
      p={3}
      border="1px solid"
      borderColor={border}
      borderRadius="2xl"
      bg={cardBg}
      boxShadow={shadow}
      transition="transform 180ms ease, border-color 180ms ease, background 180ms ease"
      _hover={{ transform: 'translateY(-4px)', borderColor: hoverBorder, bg: hoverBg }}
    >
      <AspectRatio
        ratio={16 / 9}
        overflow="hidden"
        border="1px solid"
        borderColor={border}
        borderRadius="xl"
        bg="white"
      >
        <Box
          as="img"
          src={record.image}
          alt={`Cover image for ${record.title}`}
          objectFit="cover"
          objectPosition="top"
          transition="transform 280ms ease"
          _groupHover={{ transform: 'scale(1.025)' }}
        />
      </AspectRatio>

      <Stack flex={1} px={2} pt={4} pb={2} spacing={3}>
        <Stack direction="row" justify="space-between" align="center" spacing={3}>
          <Badge
            colorScheme="teal"
            variant="subtle"
            borderRadius="full"
            px={2.5}
            py={1}
            textTransform="none"
            letterSpacing="normal"
          >
            {record.type}
          </Badge>
          <Text fontSize="xs" color={muted}>
            {record.date}
          </Text>
        </Stack>

        <Heading as="h2" fontSize="xl" lineHeight="1.3" letterSpacing="-0.015em">
          {record.href ? (
            <LinkOverlay href={record.href} target="_blank" rel="noopener noreferrer">
              {record.title}
            </LinkOverlay>
          ) : (
            record.title
          )}
        </Heading>

        <Text color={muted} lineHeight="1.7" fontSize="sm">
          {record.description}
        </Text>

        <Stack direction="row" justify="space-between" align="center" pt={1} mt="auto" fontSize="sm">
          <Text color={muted}>{record.metric}</Text>
          <Box display="inline-flex" alignItems="center" gap={1} color={accent} fontWeight={600}>
            {record.href ? (
              <>
                Open <ArrowForwardIcon />
              </>
            ) : (
              'Private research'
            )}
          </Box>
        </Stack>
      </Stack>
    </LinkBox>
  )
}

const ResearchLink = ({ label, description, href }) => {
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const muted = useColorModeValue('gray.600', 'whiteAlpha.700')

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      py={4}
      borderBottom="1px solid"
      borderColor={border}
      _hover={{ textDecoration: 'none' }}
    >
      <Box>
        <Text fontWeight={700}>{label}</Text>
        <Text color={muted} fontSize="sm" mt={1} lineHeight="1.7">
          {description}
        </Text>
      </Box>
      <ExternalLinkIcon flexShrink={0} />
    </Link>
  )
}

const Research = () => {
  const bodyText = useColorModeValue('gray.700', 'whiteAlpha.800')
  const subtleText = useColorModeValue('gray.600', 'whiteAlpha.700')
  const noteBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const noteBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const groupBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <Layout title="Research">
      <Container px={0}>
        <Heading as="h3" fontSize={20} mb={4}>
          Research
        </Heading>

        <Text color={bodyText} lineHeight="1.8" mb={3}>
          My research asks what a computational system actually knows, where that information came
          from, and whether the scientific conclusion survives when the shortcuts are removed.
        </Text>
        <Text color={subtleText} lineHeight="1.75" mb={7}>
          The programs below attack that question at different levels: representations, whole-slide
          aggregation, institutional weighting, quantitative measurement, adaptive computation, and
          scientific evidence itself. They are not stages of one pipeline, but they share the same
          requirement that the claimed mechanism and interpretation survive explicit controls.
        </Text>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {programs.map(record => (
            <ProgramCard key={record.title} record={record} />
          ))}
        </SimpleGrid>

        <Box as="section" pt={12}>
          <Heading as="h3" fontSize={20} mb={2}>
            Research-line inventory
          </Heading>
          <Text color={subtleText} lineHeight="1.75" mb={6}>
            Current, historical, negative, and exploratory lines are kept distinct rather than
            disappearing when a headline result changes.
          </Text>

          <Stack spacing={7}>
            {researchGroups.map(group => (
              <Box
                key={group.title}
                borderTop="1px solid"
                borderColor={groupBorder}
                pt={5}
              >
                <Heading as="h4" fontSize="md" mb={3}>
                  {group.title}
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={8} spacingY={2}>
                  {group.items.map(item => (
                    <Text key={item} color={subtleText} fontSize="sm" lineHeight="1.7">
                      {item}
                    </Text>
                  ))}
                </SimpleGrid>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box as="section" pt={12}>
          <Heading as="h3" fontSize={20} mb={2}>
            Evidence state
          </Heading>
          <Text color={subtleText} lineHeight="1.75" mb={6}>
            A line stays visible when it fails. Current evidence, negative results, active
            prospective work, and withdrawn historical claims are separated rather than blended
            into one leaderboard.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {evidenceStates.map(group => (
              <Box
                key={group.title}
                border="1px solid"
                borderColor={groupBorder}
                borderRadius="xl"
                p={5}
              >
                <Heading as="h4" fontSize="md" mb={3}>
                  {group.title}
                </Heading>
                <Stack spacing={2}>
                  {group.items.map(item => (
                    <Text key={item} color={subtleText} fontSize="sm" lineHeight="1.7">
                      {item}
                    </Text>
                  ))}
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box as="section" pt={12} pb={6}>
          <Heading as="h3" fontSize={20} mb={2}>
            Public research record
          </Heading>
          <Text color={subtleText} lineHeight="1.75" mb={4}>
            Public code, manuscripts, study repositories, and evidence packages. SERA and the
            NucleoScope collaboration also contain private research records that are not linked here.
          </Text>

          <ResearchLink
            label="Computational pathology research hub"
            description="Program repository, manuscripts, methods, evidence, claim boundaries, and research history."
            href="https://github.com/matthewvaishnav/computational-pathology-research"
          />
          <ResearchLink
            label="PA-NF canonical manuscript"
            description="Current public manuscript and evidence entry point."
            href="https://matthewvaishnav.github.io/computational-pathology-research/"
          />
          <ResearchLink
            label="SCORPION paired-acquisition study"
            description="Five-scanner matched-acquisition study repository."
            href="https://github.com/matthewvaishnav/paired-acquisition-factorization-scorpion"
          />
          <ResearchLink
            label="Canine SCC paired-scanner audit"
            description="Independent multi-scanner fixed-estimand evaluation."
            href="https://github.com/matthewvaishnav/paired-acquisition-factorization-caninescc"
          />
          <ResearchLink
            label="Pair-repeat allocation study"
            description="Paired-acquisition allocation and unique-anchor research."
            href="https://github.com/matthewvaishnav/paired-acquisition-factorization-allocation"
          />
          <ResearchLink
            label="Whole-slide model documentation"
            description="AttentionMIL, nnMIL, CLAM, TransMIL-style controls, TransnnMIL, and related WSI work."
            href="https://github.com/matthewvaishnav/computational-pathology-research/tree/main/docs/models"
          />
          <ResearchLink
            label="Site-signal alignment research"
            description="Dominant-site federated pathology, detector transfer, and external-center validation."
            href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/dominant-site-federated-pathology-paper.md"
          />
          <ResearchLink
            label="PathologyFL documentation"
            description="Federated pathology implementation and validation boundary."
            href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/federated/pathologyfl.md"
          />
          <ResearchLink
            label="PA-NF evidence release"
            description="Versioned public evidence package."
            href="https://huggingface.co/datasets/MatthewVaishnav/paired-acquisition-factorization-evidence"
          />
          <ResearchLink
            label="PA-NF model release"
            description="Verified registered SCORPION model family and fold-specific preprocessing objects."
            href="https://huggingface.co/MatthewVaishnav/paired-acquisition-neural-factorization"
          />
          <ResearchLink
            label="Authoritative claim boundary"
            description="Current supported, withdrawn, and pending claim status for the computational-pathology repository."
            href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/CLAIM_BOUNDARY.md"
          />
        </Box>

        <Box
          mt={8}
          mb={4}
          p={{ base: 5, md: 6 }}
          border="1px solid"
          borderColor={noteBorder}
          borderRadius="xl"
          bg={noteBg}
        >
          <Text
            fontSize="sm"
            color={subtleText}
            lineHeight="1.8"
            textAlign="center"
            maxW="64ch"
            mx="auto"
          >
            Research-only. Evidence status differs by line: some results are public and validated
            under frozen protocols, some are active or private, and some are retained negative or
            historical results.
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Research
