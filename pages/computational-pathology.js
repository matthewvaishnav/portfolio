import NextLink from 'next/link'
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
    display="inline-flex"
    alignItems="center"
    gap={2}
  >
    {children} <ExternalLinkIcon boxSize={3} />
  </Link>
)

const ComputationalPathology = () => {
  const rule = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <Layout title="Computational Pathology">
      <Container maxW="full" px={0}>
        <Heading as="h1" variant="page-title" mb={5}>
          Computational pathology
        </Heading>
        <Paragraph>
          My research studies what digital pathology models learn from tissue
          images and how imaging conditions can affect their conclusions.
          I developed an end-to-end experimental pipeline to investigate
          acquisition effects alongside whole-slide analysis and differences
          between institutions.
        </Paragraph>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Paired-Acquisition Neural Factorization
          </Heading>
          <Paragraph>
            PA-NF is a custom neural model that learns separate representations
            of tissue-oriented and acquisition-related information, then
            reconstructs image features using both. By training and testing
            with repeated scans of the same physical tissue, I can investigate
            whether predicted scanner changes match observed differences.
          </Paragraph>
          <Paragraph>
            The registered five-scanner human study established a controlled
            advantage over an equally sized neural model on its defined
            separation objective. Independent canine studies, conventional
            correction methods and direct acquisition-change experiments
            provide additional tests of the model and its limits.
          </Paragraph>
          <Box mt={5}>
            <ResearchLink href="https://matthewvaishnav.github.io/computational-pathology-research/">
              Read the PA-NF manuscript
            </ResearchLink>
          </Box>
          <Box mt={3}>
            <ResearchLink href="https://github.com/matthewvaishnav/computational-pathology-research">
              Public methods and evidence
            </ResearchLink>
          </Box>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Whole-slide and multi-institutional research
          </Heading>
          <Paragraph>
            The broader pipeline includes custom whole-slide modeling and
            software for examining how models behave across institutions.
            Research on the PANDA, CAMELYON17 and patch-level datasets
            investigates different parts of this process through separate
            experiments.
          </Paragraph>
        </Box>

        <Box mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Text fontSize="sm">
            A fuller discussion of the research appears on the{' '}
            <Link as={NextLink} href="/research" color="teal.500">
              Research page
            </Link>.
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default ComputationalPathology
