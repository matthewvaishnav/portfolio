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
          I develop and test computational methods for digital pathology.
          A central question is how to tell the difference between information
          about tissue and changes caused by the way that tissue is imaged.
          Repeated observations of the same specimen provide a way to test
          that distinction directly.
        </Paragraph>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Paired-Acquisition Neural Factorization
          </Heading>
          <Paragraph>
            I developed Paired-Acquisition Neural Factorization (PA-NF), a
            custom neural model that learns separate tissue-oriented and
            acquisition-related representations. It uses both to reconstruct
            the original image features. The training and evaluation framework
            was built around matched scans of the same physical tissue, so
            changes attributed to acquisition can be tested against changes
            actually observed between instruments.
          </Paragraph>
          <Paragraph>
            A registered study used 48 human H&amp;E slides scanned on five
            instruments. Across 175 controlled model fits, PA-NF reduced
            recoverable scanner identity in its tissue-oriented representation
            by 31.1 percentage points relative to an equal-capacity neural
            control, while maintaining same-region retrieval within the
            prespecified margin. Independent canine tissue studies and
            comparisons with simpler scanner corrections test how far that
            result extends.
          </Paragraph>
          <Paragraph>
            Further experiments examine whether changing the acquisition
            representation produces an accurate prediction of another scan.
            Reducing scanner predictability is not enough to establish
            biological preservation or full separation; those remain distinct
            questions in the research.
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
            Whole-slide and institutional learning
          </Heading>
          <Paragraph>
            My broader pipeline extends beyond paired scanner studies. I
            developed a custom approach to combining information from image
            patches across whole slides, alongside software for studying
            learning across institutions. The work includes the 10,611-slide
            PANDA prostate pathology collection, patch-level experiments and
            CAMELYON17 data from five centres.
          </Paragraph>
          <Paragraph>
            These studies examine how information is combined across a slide
            and how differences between institutions affect models. Each
            component has its own experiments and conclusions, rather than
            borrowing evidence from another part of the pipeline.
          </Paragraph>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Experimental software and reproducibility
          </Heading>
          <Paragraph>
            I build the systems used to train, compare and audit these models.
            The work includes controlled comparisons, consistent data splits,
            checks against misleading results and the ability to reproduce
            reported findings from saved models and experimental records.
            Results that fail stronger tests remain part of the record.
          </Paragraph>
          <Text color={muted} fontSize="sm" mt={5} lineHeight="1.8">
            Methods, manuscripts and supporting evidence are available
            through the public links above.
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Research
