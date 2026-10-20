import {
  Box,
  Container,
  Heading,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'

const ResearchLink = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    color="teal.500"
    fontWeight="medium"
    display="inline-flex"
    alignItems="center"
    gap={2}
    _hover={{ textDecoration: 'underline' }}
  >
    {children}
    <ExternalLinkIcon boxSize={3} />
  </Link>
)

const Research = () => {
  const muted = useColorModeValue('gray.600', 'gray.400')
  const rule = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <Layout title="Research">
      <Container maxW="full" px={0}>
        <Heading as="h1" variant="page-title" mb={5}>
          Research
        </Heading>
        <Paragraph>
          I develop computational pathology methods spanning image
          acquisition, patch classification, whole-slide analysis and
          learning across institutions. Each part of the pipeline has
          its own experimental design and evaluation.
        </Paragraph>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            PA-NF: SCORPION and independent paired-scanner studies
          </Heading>
          <Paragraph>
            Paired-Acquisition Neural Factorization (PA-NF) is my custom
            neural model for separating tissue-oriented information
            from effects introduced during scanning. It learns
            representations for each and reconstructs image features
            using both. Paired scans of the same physical tissue make
            it possible to test changes attributed to acquisition.
          </Paragraph>
          <Paragraph>
            SCORPION provides 48 human H&amp;E slides, 480 matched
            tissue regions and five scanner views per region.
            Across 175 registered model fits, PA-NF reduced
            recoverable scanner identity by 31.1 percentage points
            relative to an equal-capacity neural control, with
            same-region retrieval preserved within the predefined
            margin. I also tested the objective on DINOv2,
            Phikon and ResNet50 representations.
          </Paragraph>
          <Paragraph>
            Independent experiments on the five-scanner canine
            squamous cell carcinoma (SCC) dataset test how the
            method transfers to other tissue. A separate study
            examines the trade-off between using more distinct
            tissue pairs and repeating a smaller number of pairs.
            Comparisons with simpler scanner correction methods
            test what the neural factorization adds, while ongoing
            experiments examine whether it can accurately predict
            scanner changes without losing tissue information.
          </Paragraph>
          <Box mt={5}>
            <ResearchLink href="https://matthewvaishnav.github.io/computational-pathology-research/">
              Full research manuscript
            </ResearchLink>
          </Box>
          <Box mt={3}>
            <ResearchLink href="https://github.com/matthewvaishnav/paired-acquisition-factorization-scorpion">
              SCORPION study
            </ResearchLink>
          </Box>
          <Box mt={3}>
            <ResearchLink href="https://github.com/matthewvaishnav/paired-acquisition-factorization-caninescc">
              Canine SCC study
            </ResearchLink>
          </Box>
          <Box mt={3}>
            <ResearchLink href="https://github.com/matthewvaishnav/paired-acquisition-factorization-allocation">
              Pair-repeat allocation study
            </ResearchLink>
          </Box>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            PCam: patch classification
          </Heading>
          <Paragraph>
            I trained a ResNet18-based model with a transformer
            encoder on PatchCamelyon (PCam) to classify tissue
            patches. It achieved an ROC AUC of 0.9394 and
            85.26% accuracy on the official test split. This
            is a patch-level result, distinct from whole-slide
            or clinical validation.
          </Paragraph>
          <Box mt={5}>
            <ResearchLink href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/results/pcam-results.md">
              PCam results
            </ResearchLink>
          </Box>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            PANDA: whole-slide modeling and TransnnMIL
          </Heading>
          <Paragraph>
            I developed TransnnMIL, a model that combines
            transformer-based and gated-attention approaches to
            analyzing whole slides. My PANDA experiments use
            10,611 readable prostate pathology slides and
            compare different ways of combining patch features.
            The repaired TransnnMIL architecture is implemented,
            with fresh controlled evaluations still in progress;
            earlier scores are not used as evidence of its
            superiority.
          </Paragraph>
          <Box mt={5}>
            <ResearchLink href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/results/panda-slide-level-baselines.md">
              PANDA experiments
            </ResearchLink>
          </Box>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            PathologyFL, FAIR-WEIGHTS-H and CAMELYON17
          </Heading>
          <Paragraph>
            PathologyFL is my research framework for training
            models across institutions while keeping data at
            their respective sites. Within it, FAIR-WEIGHTS-H
            investigates how institutions should contribute
            when their datasets differ in size and reliability.
            PANDA provides controlled experiments with simulated
            site differences.
          </Paragraph>
          <Paragraph>
            CAMELYON17 provides a separate test of variation
            between real centres. My experiments examine how
            the weighting of source centres affects results
            at a held-out centre, using a dataset with
            455,954 image patches from five centres.
            This is research on institutional variation,
            not a deployed multi-hospital training system.
          </Paragraph>
          <Box mt={5}>
            <ResearchLink href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/federated/pathologyfl.md">
              PathologyFL
            </ResearchLink>
          </Box>
          <Box mt={3}>
            <ResearchLink href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/fair-weights-h-stress-result.md">
              FAIR-WEIGHTS-H study
            </ResearchLink>
          </Box>
          <Box mt={3}>
            <ResearchLink href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/camelyon17-external-center-validation-note.md">
              CAMELYON17 study
            </ResearchLink>
          </Box>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Experimental software and reproducibility
          </Heading>
          <Paragraph>
            I develop the software needed to train models,
            verify the original data and reproduce the results.
            The experimental record includes controlled
            comparisons, independent checks and results
            that challenge the proposed methods.
          </Paragraph>
          <Text color={muted} fontSize="sm" mt={5} lineHeight="1.8">
            Methods, manuscripts and evidence are linked above.
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Research
