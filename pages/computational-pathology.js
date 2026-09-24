import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const CANONICAL_PA_NF =
  'https://matthewvaishnav.github.io/computational-pathology-research/'

const Work = () => {
  const muted = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const cardBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const cardShadow = useColorModeValue('0 12px 28px rgba(15, 23, 42, 0.06)', 'none')

  return (
    <Layout title="Computational Pathology Research">
      <Container px={0}>
        <Title>
          Computational Pathology Research <Badge>2025–present</Badge>
        </Title>

        <Heading as="h2" size="md" mt={2} mb={3}>
          Program Scope
        </Heading>
        <P>
          My computational pathology work spans representation learning, paired acquisition,
          whole-slide multiple-instance learning, spatial dynamics, federated learning, quantitative
          measurement, scanner provenance, external-center validation, and scientific research
          infrastructure.
        </P>
        <P>
          Some lines introduce new models. Others study representations, measurements, acquisition
          mechanisms, institutional effects, or the validity of the evidence itself. They share a
          reproducibility standard, but they are not stages of one model and their claims remain
          separate.
        </P>

        <Flex gap={3} flexWrap="wrap" my={{ base: 6, md: 7 }}>
          <Button
            as={Link}
            href={CANONICAL_PA_NF}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="teal"
            rightIcon={<ExternalLinkIcon />}
          >
            Read PA-NF Manuscript
          </Button>
          <Button
            as={Link}
            href="https://github.com/matthewvaishnav/computational-pathology-research"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="teal"
            variant="outline"
            rightIcon={<ExternalLinkIcon />}
          >
            Open Program Repository
          </Button>
        </Flex>

        <Heading as="h2" size="md" mt={8} mb={3}>
          Research Lines
        </Heading>
        <List ml={{ base: 0, md: 4 }} my={4} spacing={5}>
          <ListItem>
            <Meta>Paired-Acquisition Neural Factorization</Meta>
            <span>
              Representation learning from aligned acquisitions of the same tissue across scanners.
              PA-NF learns a tissue-oriented branch alongside an explicit acquisition branch and is
              evaluated through registered scanner-recoverability, retrieval, capacity-matched, and
              strong linear-removal controls.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Why PA-NF exists</Meta>
            <span>
              Earlier site-invariance experiments were retained as negative evidence. A locked
              gradient-reversal study reduced recoverable site information without improving
              held-out tumor prediction, and unconditional subtraction of a learned site-associated
              component removed tumor-predictive signal. Those failures motivated conditional
              separation with an explicit acquisition branch rather than blind nuisance deletion.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Paired-acquisition mechanism audits</Meta>
            <span>
              The PA-NF record includes pair-structure ladders, acquisition-branch audits,
              biological-label preservation, scanner-heldout transfer, sample-disjoint scanner
              transfer, scanner-category confounding stress, bottleneck comparisons, cross-backbone
              pair-integrity tests, and factor swapping through the decoder. Several are deliberate
              honesty checks where simple linear removal remains competitive.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Identity and counterfactual benchmark instruments</Meta>
            <span>
              A reusable Oncology Identity Benchmark and runnable Identity Audit measure scanner,
              site, stain, client, and biological identity with random-label, collapse, leakage, and
              blocking controls. A separate Paired Scanner Counterfactual Benchmark formalizes
              feature-space, decoder-space, and future pixel-space interventions.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Invariance-blind-spot / residual provenance research</Meta>
            <span>
              Scanner suppression does not identify everything left in the representation as biology:
              preparation, staining, sectioning, site, and other pre-scanner variables can remain
              fixed across paired scans. The current feasibility audit can detect residual structure,
              while non-biological attribution remains blocked until crossed provenance variation is
              available.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Representation identifiability and scanner / center subspaces</Meta>
            <span>
              A broader line studying what scanner, center, biological-task, and identity information
              remains accessible in learned representations. It includes centroid and QR removal,
              PCA, paired-linear controls, supervised center projection, nonlinear probes,
              representation-geometry calibration, and unseen-identity tests.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Synthetic identifiability and capacity studies</Meta>
            <span>
              Controlled latent-factor experiments separate ordinary observations, unique paired
              anchors, repeated paired exposure, bottleneck capacity, and crossed-target
              supervision. The program also audits its own instruments: oracle power, validation
              power, nonlinear-probe capacity, whitening, and task sufficiency are adjudicated
              separately so an underpowered benchmark cannot be mistaken for a representation
              failure.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Pair-repeat resource allocation</Meta>
            <span>
              A matched-budget synthetic study separates paired-exposure quantity from unique
              biological-pair diversity. In the tested grid, broader pair diversity improved the
              biological/factor-separation score more than concentrating the same budget into a very
              small repeated anchor set, with diminishing returns beyond the middle allocation.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Real bottleneck transport and fixed-estimand adjudication</Meta>
            <span>
              Synthetic capacity gains were carried into a parameter-matched canine B32/B64 study,
              then subjected to exact artifact recovery and a no-training corrected five-category
              adjudication. The real-data result did not establish a neural feature-space increment
              over every strong simple scanner-removal baseline.
            </span>
          </ListItem>
          <ListItem>
            <Meta>NucleoScope measurement research</Meta>
            <span>
              Active nucleus-level measurement work asking whether quantitative values are properties
              of the biological object or of the computational context in which that object was
              detected. Repeated detections, reruns, and artifact controls come before biological
              interpretation.
            </span>
          </ListItem>
          <ListItem>
            <Meta>AttentionMIL / whole-slide baselines</Meta>
            <span>
              Gated AttentionMIL, mean pooling, nnMIL, CLAM-style, and TransMIL-style comparators form
              the controlled whole-slide benchmark layer. They are treated as substantive reference
              models rather than decorative baselines.
            </span>
          </ListItem>
          <ListItem>
            <Meta>TransnnMIL</Meta>
            <span>
              An authored multibranch whole-slide multiple-instance learning architecture evaluated
              on the same PANDA substrate. Its architectural claim depends on whether it survives
              repeated-seed comparison against AttentionMIL and the other matched MIL controls.
            </span>
          </ListItem>
          <ListItem>
            <Meta>PathologyFL</Meta>
            <span>
              A pathology-specific federated-learning program that tests how institutional
              imbalance, dominance, and shift change distributed learning. Site-aware policies are
              evaluated under controlled stress and transfer rather than inferred from aggregate
              performance alone.
            </span>
          </ListItem>
          <ListItem>
            <Meta>FAIR-WEIGHTS-H</Meta>
            <span>
              An auditable hybrid institutional-weighting protocol developed within the federated
              research line, with explicit stability and safety mechanisms and bounded claims about
              when weighting policies help under controlled site imbalance and shift.
            </span>
          </ListItem>
          <ListItem>
            <Meta>FAIR-WEIGHTS-H validation boundary</Meta>
            <span>
              The heterogeneous PCam benchmark produced different institutional weight trajectories
              without measurable performance differentiation. Later PANDA stress experiments support
              conditional harm-aware or dominance-aware switching under simulated corruption, not a
              universal claim that FAIR-WEIGHTS-H replaces FedAvg.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Site-signal alignment and dominant-site studies</Meta>
            <span>
              PANDA-derived federations test when sample-volume authority becomes unsafe under
              site-specific label-process shift, including fixed detector transfer, diagnostic
              ablations, and conservative ordinal-threshold stress.
            </span>
          </ListItem>
          <ListItem>
            <Meta>CAMELYON17 / WILDS external-center studies</Meta>
            <span>
              Natural multi-center experiments test source weighting, held-out-center generalization,
              center leakage, and explicit center-subspace projection using frozen and
              pathology-trained feature substrates.
            </span>
          </ListItem>
          <ListItem>
            <Meta>CAMELYON17 center-removal mechanism sequence</Meta>
            <span>
              Adversarial and subtractive nuisance-removal variants failed to materially reduce
              post-hoc center leakage and retained tumor-rich nuisance components. A supervised
              linear center-subspace projection then partially reduced center decodability while
              leaving the measured tumor AUC essentially unchanged, establishing a cleaner baseline
              without implying complete center invariance.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Scientific provenance and audit</Meta>
            <span>
              Scientific compiler and evidence infrastructure that makes identities, units,
              controls, provenance, admissible claims, and failure conditions machine-checkable. The
              goal is to make unsupported scientific statements fail as early as invalid code.
            </span>
          </ListItem>
          <ListItem>
            <Meta>WSI-NCA / Factorized Tissue Dynamics</Meta>
            <span>
              Experimental whole-slide dynamics research asking whether topology, history, and local
              spatial updates are genuinely necessary. A synthetic mechanism signal did not
              translate into a recurrence- or topology-dependent predictive advantage in the frozen
              PANDA-300 Phase A; that negative result remains part of the research record while
              larger and better-powered validation remains separate.
            </span>
          </ListItem>
          <ListItem>
            <Meta>CPTAC human transfer discovery</Meta>
            <span>
              A metadata-first external-human validation layer inventories TCIA and GDC CPTAC
              pathology availability, patient structure, scanner metadata, and label readiness
              before any image download or transfer claim. It is active discovery work, not a
              completed validation result.
            </span>
          </ListItem>
          <ListItem>
            <Meta>PANDA / SICAP provenance and scanner validation</Meta>
            <span>
              Provenance-complete work on scanner inventory, assignment stability, transport
              reproducibility, and acquisition mechanisms before downstream whole-slide claims are
              promoted.
            </span>
          </ListItem>
          <ListItem>
            <Meta>PAR same-glass scanner intervention</Meta>
            <span>
              A scanner-intervention study using paired same-glass acquisitions to test acquisition
              operators directly, including falsification of a universal shared gauge and a
              cross-fitted branch-conditioned scale-by-gauge mechanism.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Research-engineering lineage</Meta>
            <span>
              Historical HistoCore-era work includes WSI processing and streaming, foundation-model
              adapters, research APIs and model serving, DICOM/PACS/FHIR-style integration
              prototypes, deployment scaffolds, monitoring, security, and federated infrastructure.
              These are engineering and prototype contributions, not claims of clinical deployment.
            </span>
          </ListItem>
        </List>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Experimental Substrates
        </Heading>
        <List ml={{ base: 0, md: 4 }} my={4} spacing={4}>
          <ListItem>
            <Meta>SCORPION</Meta>
            <span>
              48 human H&amp;E slides, 480 aligned tissue regions, five scanners, and 2,400 images.
              Frozen DINOv2, Phikon, and ResNet50 feature families are used to test scanner signal,
              tissue structure, same-region retrieval, and the registered PA-NF structured-separation
              objective.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Independent canine SCC</Meta>
            <span>
              44 biological samples and 805 geometry-qualified complete five-view regions across five
              scanners, evaluated with biological-sample-blocked folds and strong centroid, QR, and
              paired-linear scanner-removal baselines. The public release is downsampled to roughly
              4 µm per source pixel, so this is coarse tissue-context evidence rather than native
              cellular- or nuclear-scale scanner invariance.
            </span>
          </ListItem>
          <ListItem>
            <Meta>NucleoScope measurement audit</Meta>
            <span>
              Repeated detections and controlled reruns are used to test computational-context
              dependence before residual structure is interpreted as tissue organization or biology.
            </span>
          </ListItem>
          <ListItem>
            <Meta>PANDA</Meta>
            <span>
              10,611 readable 768-dimensional Phikon slide feature bags supporting whole-slide MIL,
              prostate grading, simulated institutional stress experiments, and controlled
              architecture evaluation.
            </span>
          </ListItem>
          <ListItem>
            <Meta>CAMELYON17/WILDS</Meta>
            <span>
              455,954 examples from five centers, preserving the WILDS source/validation/test center
              split for held-out-center weighting, center-subspace studies, and site-structure
              mechanism experiments.
            </span>
          </ListItem>
          <ListItem>
            <Meta>PatchCamelyon</Meta>
            <span>
              Full patch-level training and evaluation on the official test split as a complete
              benchmark, engineering substrate, and reproducibility check independent of the
              whole-slide and federated research lines.
            </span>
          </ListItem>
        </List>

        <Heading as="h2" size="md" mt={9} mb={4}>
          Selected Controlled Results
        </Heading>
        <Box
          bg={cardBg}
          borderWidth="1px"
          borderColor={cardBorder}
          borderRadius="xl"
          p={{ base: 5, md: 6 }}
          boxShadow={cardShadow}
        >
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
            <Stat>
              <StatLabel>SCORPION capacity-matched effect</StatLabel>
              <StatNumber>-0.3108</StatNumber>
              <StatHelpText mb={0} color={muted}>
                Tissue-branch scanner balanced accuracy relative to an equal-capacity neural control;
                95% CI [-0.3346, -0.2858].
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>PAR scanner intervention</StatLabel>
              <StatNumber>+0.026644</StatNumber>
              <StatHelpText mb={0} color={muted}>
                Cross-fitted branch-conditioned scale-by-gauge improvement; 5/5 folds positive,
                95% CI [0.017510, 0.035991].
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>TransnnMIL</StatLabel>
              <StatNumber>Matched rerun</StatNumber>
              <StatHelpText mb={0} color={muted}>
                Repaired canonical implementation; historical fusion/topology scores remain withdrawn
                until matched reruns against AttentionMIL, TransMIL, nnMIL, and fusion controls.
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Site-signal detector transfer</StatLabel>
              <StatNumber>+0.01053 QWK</StatNumber>
              <StatHelpText mb={0} color={muted}>
                Global QWK gain at 45% ordinal shift without retuning; macro-F1 +0.01512 and
                worst-site QWK +0.01290.
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>CAMELYON held-out-center proxy</StatLabel>
              <StatNumber>0.8312 → 0.9132</StatNumber>
              <StatHelpText mb={0} color={muted}>
                Sample-proportional to equal-client weighting on frozen ImageNet ResNet18 features.
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Scientific compiler</StatLabel>
              <StatNumber>15 / 15 · 35 / 35</StatNumber>
              <StatHelpText mb={0} color={muted}>
                Pipeline benchmarks and unit/adversarial tests at the current v0.3.0 language frontier.
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Retained negative evidence</StatLabel>
              <StatNumber>Not hidden</StatNumber>
              <StatHelpText mb={0} color={muted}>
                Canine all-simple-baseline increment, WSI-NCA PANDA Phase A, benchmark-power failures,
                and withdrawn historical rankings remain visible in the record.
              </StatHelpText>
            </Stat>
          </SimpleGrid>
        </Box>

        <Heading as="h2" size="md" mt={9} mb={3}>
          What the Results Mean
        </Heading>
        <P>
          The representation program did not begin with a successful factorizer. It began with two
          failures: making site identity harder to decode did not improve the held-out tumor task,
          and subtracting a learned nuisance component deleted tumor-predictive information. PA-NF
          was built in response to that problem: acquisition-associated information must be
          accounted for explicitly while tissue information is protected, not simply erased.
        </P>
        <P>
          That later program contains both supporting and limiting evidence. SCORPION supports a
          registered capacity-matched structured-separation effect and cross-backbone transfer on the
          same paired slides. The corrected canine study confirms strong scanner suppression and
          tissue retrieval under its coarse-resolution public release, but strong simple linear
          scanner-removal baselines remain competitive and the B32/B64 transport experiment did not
          establish a universal neural feature-space increment.
        </P>
        <P>
          The synthetic line is used as mechanism work, not as a substitute for pathology evidence.
          It separates pair diversity from repeated exposure, tests crossed-target and unseen-identity
          behavior, and audits the power of its own probes and positive controls. When an oracle or
          benchmark instrument is underpowered, the representation-level conclusion is restricted
          rather than promoted.
        </P>
        <P>
          Whole-slide and institutional results are handled the same way. Historical TransnnMIL
          fusion/topology scores are withdrawn pending the repaired matched rerun. WSI-NCA retained
          its synthetic propagation result but failed to show a topology- or recurrence-dependent
          benefit in the frozen PANDA-300 Phase A. PathologyFL and FAIR-WEIGHTS-H are substantial
          research infrastructure, while their current empirical claims remain bounded to simulated
          institutional stress and centralized multi-center proxies.
        </P>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Scientific self-correction
        </Heading>
        <P>
          The public record keeps failed and superseded analyses instead of silently replacing them.
          That includes pseudoreplication corrections, leakage-prone canine estimands, capacity-
          mismatched controls, the withdrawn cross-protocol separation scoreboard, historical
          TransnnMIL fusion/topology interpretations, unsupported PCam clinical or superiority
          language, and the claim that cosine similarity by itself proves biological preservation.
        </P>
        <P>
          Exact artifact recovery, immutable manifests, claim ledgers, hostile-review documents, and
          fail-closed execution are part of the research contribution because they make it possible
          to narrow a conclusion without rewriting the experimental history.
        </P>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Active but not promoted as established evidence
        </Heading>
        <List ml={{ base: 0, md: 4 }} my={4} spacing={3}>
          <ListItem>
            <Meta>Paired affine / Procrustes comparator</Meta>
            <span>
              Prospective centroid-translation, orthogonal-Procrustes, affine, ridge-affine, and
              neural comparison on frozen SCORPION folds.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Crossed-target and unseen-identity synthetic work</Meta>
            <span>
              Scanner-prototype counterfactual factorization, geometry calibration, task-sufficiency
              and instrument-power audits whose earlier closed gates remain immutable.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Repaired TransnnMIL matched rerun</Meta>
            <span>
              Seven architecture/control families across five seeds on the same PANDA substrate,
              including AttentionMIL, nnMIL, TransMIL, repaired TransnnMIL, and matched fusion
              controls.
            </span>
          </ListItem>
          <ListItem>
            <Meta>CPTAC external-human transfer</Meta>
            <span>
              Metadata and scanner-readiness discovery only; no human-transfer outcome is claimed
              until the dataset and estimand gates are satisfied.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Crossed preparation / residual provenance</Meta>
            <span>
              Tests the blind spot left by scanner-only intervention: preparation, staining, site,
              sectioning, and other scanner-constant provenance require their own crossed designs.
            </span>
          </ListItem>
        </List>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Public Research Record
        </Heading>
        <List ml={{ base: 0, md: 4 }} my={4} spacing={3}>
          <ListItem>
            <Meta>PA-NF canonical manuscript</Meta>
            <Link href={CANONICAL_PA_NF} target="_blank" rel="noopener noreferrer">
              Paired-Acquisition Neural Factorization <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>PA-NF SCORPION study</Meta>
            <Link
              href="https://github.com/matthewvaishnav/paired-acquisition-factorization-scorpion"
              target="_blank"
              rel="noopener noreferrer"
            >
              Study-specific paired-acquisition repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>PA-NF canine SCC audit</Meta>
            <Link
              href="https://github.com/matthewvaishnav/paired-acquisition-factorization-caninescc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Independent multi-scanner audit repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>PathologyFL transfer study</Meta>
            <Link
              href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/dominance-detector-transfer-results.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dominance-detector transfer results <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Program repository</Meta>
            <Link
              href="https://github.com/matthewvaishnav/computational-pathology-research"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computational pathology research hub <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Scope
        </Heading>
        <P>
          Research-only. Not clinically validated. Not diagnostic software. Each result is bounded to
          its stated dataset, feature backbone, comparator, fold, protocol, and simulated-site
          condition. The program does not claim complete scanner invariance, pure biological
          disentanglement, universal architecture superiority, real-world federated deployment,
          clinical safety, or improved patient outcomes.
        </P>
      </Container>
    </Layout>
  )
}

export default Work
