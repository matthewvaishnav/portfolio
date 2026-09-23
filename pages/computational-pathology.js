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
          Research Thesis
        </Heading>
        <P>
          I use computational pathology to ask a harder question than whether a model can score well:
          what signal produced the result, and does it survive when the competing explanation is
          deliberately changed?
        </P>
        <P>
          Across paired acquisitions, whole-slide models, institutional shift, quantitative
          measurement, and scientific tooling, the method is the same: hold the relevant identity
          fixed, perturb the suspected nuisance or mechanism, compare against matched controls,
          preserve what should remain, and narrow the claim to what survives.
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
              strong linear-removal controls rather than being treated as a generic normalization
              method.
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
            <Meta>TransnnMIL</Meta>
            <span>
              An authored multibranch whole-slide multiple-instance learning architecture. The
              important question is not only whether it predicts well, but whether its architectural
              advantage survives matched MIL baselines and controlled reruns on the same slide
              substrate.
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
              <StatLabel>Same-region retrieval</StatLabel>
              <StatNumber>Noninferior</StatNumber>
              <StatHelpText mb={0} color={muted}>
                Mean and worst-pair retrieval remained within the registered 0.02 noninferiority
                margin in the primary SCORPION comparison.
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
          PA-NF is strongest where the experiment fixes biology and changes acquisition. In the
          registered SCORPION comparison, scanner recoverability falls relative to an equal-capacity
          neural control while same-region retrieval remains inside the preservation margin. The
          independent canine audit keeps the claim honest: strong simple removal baselines remain
          competitive, so the evidence supports structured separation rather than universal neural
          superiority.
        </P>
        <P>
          The whole-slide and federated results follow the same standard. TransnnMIL is evaluated
          against matched aggregation baselines, while WSI-NCA treats shuffled topology and competing
          mechanisms as falsifiers. PathologyFL asks whether site-aware behavior transfers under
          controlled institutional shift; CAMELYON17 is useful natural-center evidence, but not a
          substitute for a completed real-world federated deployment.
        </P>
        <P>
          Nucleus-level measurement and the scientific compiler push the audit one level deeper:
          first ask whether the measurement itself is stable, then ask whether the experiment is
          legally capable of supporting the sentence written about it. Negative results, failed
          mechanisms, and narrower claim boundaries remain part of the public research record.
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
