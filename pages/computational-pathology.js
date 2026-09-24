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
              Controlled latent-factor experiments isolate when paired supervision is sufficient,
              when biological and acquisition factors remain non-identifiable, how bottleneck
              capacity is allocated, and whether benchmark instruments can detect the information
              they are intended to measure.
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
              spatial updates are genuinely necessary. Real-versus-shuffled structure and
              mechanism-specific falsifiers are treated as part of the model test, not optional
              interpretation.
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
              paired-linear scanner-removal baselines.
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
              <StatLabel>TransnnMIL stabilization</StatLabel>
              <StatNumber>0.8257</StatNumber>
              <StatHelpText mb={0} color={muted}>
                Mean best validation QWK at learning rate 1e-4 across three seeds; best observed run
                across the grid was 0.8455.
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>PathologyFL detector transfer</StatLabel>
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
              <StatNumber>175 / 175</StatNumber>
              <StatHelpText mb={0} color={muted}>
                Metamorphic benchmark cases matched expected scientific-legality outcomes.
              </StatHelpText>
            </Stat>
          </SimpleGrid>
        </Box>

        <Heading as="h2" size="md" mt={9} mb={3}>
          What the Results Mean
        </Heading>
        <P>
          The representation program contains both positive and negative evidence. PA-NF shows a
          registered capacity-matched structured-separation effect on SCORPION, while the canine
          fixed-estimand audit retains strong simple scanner-removal baselines. Scanner and
          center-subspace studies, synthetic identifiability experiments, and representation-geometry
          audits answer related but separate questions.
        </P>
        <P>
          The whole-slide program includes conventional MIL baselines, AttentionMIL, TransnnMIL, and
          WSI-NCA rather than one preferred architecture. The institutional program similarly spans
          PathologyFL infrastructure, FAIR-WEIGHTS-H, dominant-site stress, CAMELYON17 external-center
          studies, communication accounting, privacy-noise probes, and infrastructure-friction
          experiments.
        </P>
        <P>
          Acquisition and provenance work sits beside the modeling work, not underneath it. PANDA /
          SICAP audits and PAR study physical slide identity, scanner metadata, assignment stability,
          and acquisition-linked representation structure. NucleoScope and the scientific compiler
          extend the program into quantitative measurement and machine-checkable scientific evidence.
        </P>

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
