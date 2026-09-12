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

const FLAGSHIP_PDF =
  'https://matthewvaishnav.github.io/computational-pathology-research/accountable-neural-aggregation-in-computational-pathology.pdf'

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
          Independent Research Program
        </Heading>
        <P>
          I am building an independent computational pathology research program spanning
          representation learning, whole-slide neural aggregation, institutional aggregation, and
          scientific provenance. The work is organized as distinct research lines with their own
          methods, experiments, evidence, and claim boundaries rather than as one model or one
          three-stage pipeline.
        </P>
        <P>
          Paired-Acquisition Neural Factorization (PA-NF) is the paired-acquisition representation
          learning line. TransnnMIL is a separate authored whole-slide multiple-instance learning
          architecture. PathologyFL is a separate pathology-specific federated-learning and
          institutional-aggregation framework. FAIR-WEIGHTS-H studies auditable institutional
          weighting, while the program-level provenance layer handles registered experiments,
          immutable evidence, exact lineage, hostile review, and fail-closed claim validation. These
          systems can be studied together, but none of them is a rename or substage of the others.
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
            Read Foundations Paper
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
            <Meta>TransnnMIL</Meta>
            <span>
              An authored multibranch whole-slide multiple-instance learning architecture for
              aggregating patch-level representations into slide-level predictions. PANDA is the main
              whole-slide evaluation substrate, with matched baselines and repaired controlled reruns
              kept separate from the PA-NF representation question.
            </span>
          </ListItem>
          <ListItem>
            <Meta>PathologyFL</Meta>
            <span>
              A pathology-specific federated-learning and institutional-aggregation framework with
              coordinator/client training, FedAvg, FedProx, FedAdam, weighted aggregation,
              differential-privacy engines, secure aggregation, asynchronous execution, compression,
              and site-aware policies. Its central question is how heterogeneous institutional
              structure changes distributed learning and aggregation.
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
              Program-level research infrastructure for immutable evidence packages, dataset/split/
              configuration/environment/command/commit lineage, preregistered analyses, corruption
              tests, exact artifact recovery, hostile review, and fail-closed release validation.
            </span>
          </ListItem>
          <ListItem>
            <Meta>WSI-NCA / Factorized Tissue Dynamics</Meta>
            <span>
              Experimental whole-slide dynamics research exploring topology-aware local state updates
              and falsifiable spatial mechanisms. It remains an experimental frontier rather than a
              promoted pathology claim.
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
          The representation-level evidence belongs to PA-NF. The registered SCORPION campaign
          establishes a controlled comparative advantage over the equal-capacity two-branch neural
          control on the structured-separation objective while preserving retrieval. The independent
          canine fixed-estimand audit asks a harder external question and does not establish an
          additional neural feature-space increment over every strong simple scanner-removal baseline.
        </P>
        <P>
          The institutional-learning evidence belongs to PathologyFL, not to PA-NF. Under specified
          simulated-site stress regimes, fixed site-aware policies improve over FedAvg, including a
          detector transfer result at 45% ordinal shift without retuning. CAMELYON17 source-weighting
          experiments provide a natural-center mechanism study, but they remain centralized
          frozen-feature proxies rather than a completed real-world federated deployment.
        </P>
        <P>
          The whole-slide question is separate again. TransnnMIL is an authored aggregation
          architecture whose current repaired implementation is evaluated against matched MIL
          baselines. Historical fusion and topology interpretations are not used as evidence until
          clean controlled reruns support them.
        </P>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Public Research Record
        </Heading>
        <List ml={{ base: 0, md: 4 }} my={4} spacing={3}>
          <ListItem>
            <Meta>Program foundations paper</Meta>
            <Link href={FLAGSHIP_PDF} target="_blank" rel="noopener noreferrer">
              Accountable Neural Aggregation in Computational Pathology: From Paired-Acquisition
              Representations to Whole-Slide and Institutional Learning <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Focused PA-NF manuscript</Meta>
            <Link
              href="https://matthewvaishnav.github.io/computational-pathology-research/paired-acquisition-neural-factorization.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paired-Acquisition Neural Factorization representation manuscript{' '}
              <ExternalLinkIcon mx="2px" />
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
