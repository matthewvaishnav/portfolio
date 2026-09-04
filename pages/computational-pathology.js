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
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const FLAGSHIP_PDF =
  'https://matthewvaishnav.github.io/computational-pathology-research/paired-acquisition-neural-factorization-pipeline.pdf'

const Work = () => {
  const muted = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const cardBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const cardShadow = useColorModeValue('0 12px 28px rgba(15, 23, 42, 0.06)', 'none')

  return (
    <Layout title="Paired-Acquisition Neural Factorization">
      <Container px={0}>
        <Title>
          Paired-Acquisition Neural Factorization <Badge>2025–present</Badge>
        </Title>

        <Heading as="h2" size="md" mt={2} mb={3}>
          End-to-End Computational Pathology Pipeline
        </Heading>
        <P>
          Paired-Acquisition Neural Factorization (PA-NF) is the name of my computational pathology
          pipeline. It connects three levels of the learning problem: scanner-aware representation
          formation, whole-slide neural aggregation, and multi-institutional learning. The central
          question is how acquisition and site structure enters the representation, propagates through
          slide-level models, and changes learning across institutions.
        </P>
        <P>
          The pipeline is built around a paired-acquisition factorization stage, TransnnMIL for
          whole-slide multiple-instance learning, and PathologyFL for federated and site-aware
          optimization. Its current real-data program spans SCORPION, an independent multi-scanner
          canine SCC cohort, PANDA, CAMELYON17/WILDS, and PatchCamelyon.
        </P>

        <Flex gap={3} flexWrap="wrap" my={{ base: 6, md: 7 }}>
          <Button
            as={Link}
            href={FLAGSHIP_PDF}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="teal"
            rightIcon={<ExternalLinkIcon />}
          >
            Read Flagship Paper
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
            Open Repository
          </Button>
        </Flex>

        <Heading as="h2" size="md" mt={8} mb={3}>
          Pipeline Architecture
        </Heading>
        <List ml={{ base: 0, md: 4 }} my={4} spacing={5}>
          <ListItem>
            <Meta>Stage I — Paired representation</Meta>
            <span>
              Aligned scans of the same tissue across scanners provide the supervision for a
              tissue-oriented branch and an acquisition-oriented branch. The goal is structured
              separation rather than pretending scanner effects can be removed by a single universal
              normalization step.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stage II — TransnnMIL</Meta>
            <span>
              Whole-slide multiple-instance learning over patch embeddings, evaluated on PANDA with
              mean pooling, AttentionMIL, and the repaired TransnnMIL family under a broad
              stabilization grid.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stage III — PathologyFL</Meta>
            <span>
              A custom federated-learning framework with coordinator/client training, FedAvg,
              FedProx, FedAdam, weighted aggregation, differential-privacy engines, secure
              aggregation, asynchronous execution, compression, and pathology-specific site-aware
              policies.
            </span>
          </ListItem>
        </List>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Experimental Program
        </Heading>
        <List ml={{ base: 0, md: 4 }} my={4} spacing={4}>
          <ListItem>
            <Meta>SCORPION</Meta>
            <span>
              48 human H&amp;E slides, 480 aligned tissue regions, five scanners, and 2,400 images.
              Frozen DINOv2, Phikon, and ResNet50 feature families are used to test scanner signal,
              tissue structure, and same-region retrieval.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Independent canine SCC</Meta>
            <span>
              44 biological samples and 805 geometry-qualified complete five-view regions across five
              scanners, evaluated with biological-sample-blocked folds and strong linear removal
              baselines.
            </span>
          </ListItem>
          <ListItem>
            <Meta>PANDA</Meta>
            <span>
              10,611 readable 768-dimensional Phikon slide feature bags for prostate grading,
              whole-slide MIL, and simulated multi-site stress experiments.
            </span>
          </ListItem>
          <ListItem>
            <Meta>CAMELYON17/WILDS</Meta>
            <span>
              455,954 examples from five centers, preserving the WILDS source/validation/test center
              split for held-out-center weighting and center-subspace studies.
            </span>
          </ListItem>
          <ListItem>
            <Meta>PatchCamelyon</Meta>
            <span>
              Full patch-level training and evaluation on the official test split as a complete
              benchmark and engineering substrate.
            </span>
          </ListItem>
        </List>

        <Heading as="h2" size="md" mt={9} mb={4}>
          Selected Results
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
              <StatLabel>PatchCamelyon</StatLabel>
              <StatNumber>0.9394 AUC</StatNumber>
              <StatHelpText mb={0} color={muted}>
                Accuracy 0.8526 and F1 0.8507 on the official 32,768-patch test split.
              </StatHelpText>
            </Stat>
          </SimpleGrid>
        </Box>

        <Heading as="h2" size="md" mt={9} mb={3}>
          What the Results Mean
        </Heading>
        <P>
          The strongest representation-level result is comparative: PA-NF beats the registered
          equal-capacity neural control on the SCORPION structured-separation objective while
          preserving retrieval. The independent canine study is deliberately more demanding and shows
          that centroid, QR, and paired-linear removal remain strong competitors; I therefore do not
          claim universal neural superiority over every harmonization method.
        </P>
        <P>
          At the institutional level, PathologyFL&apos;s site-aware policies outperform FedAvg under
          specified simulated-site stress regimes, and the fixed dominance detector transfers to a
          different ordinal-shift mechanism without retuning. CAMELYON17 source-weighting experiments
          provide a natural-center mechanism study, but they are centralized frozen-feature proxies
          rather than a completed real-world federated deployment.
        </P>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Whole-Slide Status
        </Heading>
        <P>
          TransnnMIL is implemented, repaired, and stable across the current PANDA learning-rate grid.
          Its current results are competitive within the project, but I do not claim that it is
          state-of-the-art or conclusively superior to AttentionMIL, TransMIL, or nnMIL. That
          comparison remains a separate matched-model question.
        </P>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Public Research Record
        </Heading>
        <List ml={{ base: 0, md: 4 }} my={4} spacing={3}>
          <ListItem>
            <Meta>Flagship paper</Meta>
            <Link href={FLAGSHIP_PDF} target="_blank" rel="noopener noreferrer">
              Paired-Acquisition Neural Factorization: An End-to-End Computational Pathology Pipeline{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Focused representation paper</Meta>
            <Link
              href="https://matthewvaishnav.github.io/computational-pathology-research/paired-acquisition-neural-factorization.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supporting PA-NF representation manuscript <ExternalLinkIcon mx="2px" />
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
            <Meta>GitHub</Meta>
            <Link
              href="https://github.com/matthewvaishnav/computational-pathology-research"
              target="_blank"
              rel="noopener noreferrer"
            >
              Main research repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Scope
        </Heading>
        <P>
          Research-only. Not clinically validated. Not diagnostic software. Results are bounded to
          the stated datasets, feature backbones, comparators, folds, and simulated-site conditions.
          The pipeline does not establish complete scanner invariance, universal architecture
          superiority, real-world federated deployment, clinical safety, or improved patient outcomes.
        </P>
      </Container>
    </Layout>
  )
}

export default Work
