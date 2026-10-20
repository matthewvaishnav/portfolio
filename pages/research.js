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
          Paired-Acquisition Neural Factorization (PA-NF) is the name
          of my complete computational pathology research pipeline.
          The name began with a neural model for paired scanner
          observations, but the published work extends from image
          representations to whole-slide predictions and then to
          learning across institutions. TransnnMIL, PathologyFL and
          FAIR-WEIGHTS-H are parts of that same programme.
        </Paragraph>
        <Paragraph>
          I designed these methods and the software used to test them.
          The studies below evaluate different stages of PA-NF;
          results from one stage are not treated as validation of
          the others.
        </Paragraph>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Paired-acquisition model: SCORPION and canine SCC
          </Heading>
          <Paragraph>
            I developed the paired-acquisition model to examine
            changes caused by scanning the same tissue on different
            instruments. It learns tissue-oriented and scanner-related
            representations, then uses both to reconstruct image
            features. Matching the same physical regions across
            scanners makes the proposed separation testable.
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
            Independent experiments using five-scanner canine
            squamous cell carcinoma (SCC) tissue test the model
            outside SCORPION, while allocation experiments examine
            the effect of choosing and repeating tissue pairs.
            Simpler scanner corrections have matched or exceeded
            PA-NF on some endpoints. Its strongest established
            advantage is therefore the registered SCORPION neural
            comparison, not universal superiority or proof of
            independent control over acquisition.
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
            Patch-classification foundation: PCam
          </Heading>
          <Paragraph>
            For the patch-classification stage of the PA-NF
            programme, I trained a ResNet18-based model with a
            transformer encoder on PatchCamelyon (PCam). It achieved an ROC AUC of 0.9394 and
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
            Whole-slide modeling: TransnnMIL and PANDA
          </Heading>
          <Paragraph>
            TransnnMIL is the custom whole-slide architecture
            developed within PA-NF. It combines two approaches
            to selecting and aggregating information from
            image patches, and includes experimental spatial
            extensions. Its PANDA studies use 10,611 readable
            prostate pathology slides. The corrected architecture
            has been implemented, but a matched evaluation
            establishing its advantage over competing whole-slide
            methods remains pending.
          </Paragraph>
          <Box mt={5}>
            <ResearchLink href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/results/panda-slide-level-baselines.md">
              PANDA experiments
            </ResearchLink>
          </Box>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Institutional learning: PathologyFL and FAIR-WEIGHTS-H
          </Heading>
          <Paragraph>
            PathologyFL is the institutional-learning framework
            developed within PA-NF. It provides a way to study
            training across participating sites, while
            FAIR-WEIGHTS-H examines how much influence a site
            should have when its data become less reliable.
            PANDA experiments use simulated sites and test
            when changing institutional weights improves
            performance under controlled corruption.
          </Paragraph>
          <Paragraph>
            CAMELYON17 provides a different setting with
            455,954 image patches from five real centres.
            In one frozen-feature comparison, equal weighting
            of the training centres increased held-out-centre
            accuracy from 0.8312 to 0.9132 relative to
            sample-proportional weighting. This was a
            centralized experiment on institutional influence,
            not a deployed multi-hospital system.
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
            I develop and audit the software used throughout
            PA-NF, including data preparation, model training,
            controlled comparisons and reproducible releases.
            The research record preserves negative results,
            implementation corrections and exact evidence
            for the claims retained in the manuscript.
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
