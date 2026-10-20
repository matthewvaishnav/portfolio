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
          My computational pathology research spans individual image patches,
          whole-slide analysis and learning across institutions. I develop
          neural models and the experimental software needed to determine
          what each method actually learns and whether its results hold
          under controlled evaluation.
        </Paragraph>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Paired-Acquisition Neural Factorization
          </Heading>
          <Paragraph>
            I developed Paired-Acquisition Neural Factorization (PA-NF) to
            separate tissue-oriented information from changes introduced by
            scanning. The model learns two representations and uses them
            together to reconstruct the original image features. Its
            experimental pipeline uses repeated scans of the same physical
            tissue, allowing predicted acquisition changes to be compared
            with differences actually observed between scanners.
          </Paragraph>
          <Paragraph>
            A registered study of 48 human H&amp;E slides scanned on five
            instruments completed 175 controlled model fits. PA-NF reduced
            recoverable scanner identity by 31.1 percentage points relative
            to an equal-capacity neural control while keeping same-region
            retrieval within the predefined margin. Independent canine
            tissue experiments, comparisons with simpler corrections and
            tests using different image models examine the limits of
            this result.
          </Paragraph>
          <Paragraph>
            Further experiments test whether the model can predict the
            effect of changing scanners while retaining useful tissue
            information. These are stronger requirements than simply
            making scanner identity difficult to predict.
          </Paragraph>
          <Box mt={5}>
            <ResearchLink href="https://matthewvaishnav.github.io/computational-pathology-research/">
              Read the PA-NF manuscript
            </ResearchLink>
          </Box>
          <Box mt={3}>
            <ResearchLink href="https://github.com/matthewvaishnav/computational-pathology-research">
              Examine the public research record
            </ResearchLink>
          </Box>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Patch classification and whole-slide modeling
          </Heading>
          <Paragraph>
            In PCam, I evaluated classification of small pathology image
            patches. The model achieved an ROC AUC of 0.9394 and 85.26%
            accuracy on one official test split. This is a patch-level
            benchmark, not a clinical validation.
          </Paragraph>
          <Paragraph>
            Whole-slide analysis asks a different question: how to combine
            information from thousands of patches to assess an entire slide.
            I developed a custom model that brings together two ways of
            summarizing those patches, with training and evaluation
            experiments on the 10,611-slide PANDA prostate pathology
            collection. Controlled comparisons of the repaired model
            remain in progress.
          </Paragraph>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Learning across institutions
          </Heading>
          <Paragraph>
            I built research software to study how models should use data
            contributed by different institutions. With PANDA, I tested
            how different ways of weighting participating sites respond
            to corrupted data and changes in grading. Related CAMELYON17
            experiments examine how the influence of source centres
            affects performance on a held-out centre, using a centralized
            experimental setup rather than a deployed hospital network.
          </Paragraph>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Experimental software and reproducibility
          </Heading>
          <Paragraph>
            I develop the training and evaluation systems behind these
            studies, including controls for misleading comparisons,
            consistent data splits and records that allow results to be
            checked against saved models and original experiments.
            Findings that fail stronger tests remain in the research
            record rather than being replaced by more favourable numbers.
          </Paragraph>
          <Text color={muted} fontSize="sm" mt={5} lineHeight="1.8">
            The manuscript, software and supporting evidence are available
            through the public links above.
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Research
