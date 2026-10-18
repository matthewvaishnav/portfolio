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
          My research examines how the act of observing tissue affects its
          computational representation. Digital pathology makes it possible
          to analyze the same specimen at scale, but differences in imaging
          conditions can be difficult to distinguish from differences in
          biological material. That ambiguity is a methodological problem,
          not merely a source of model error.
        </Paragraph>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Paired-Acquisition Neural Factorization
          </Heading>
          <Paragraph>
            I developed PA-NF to study this problem through repeated scans
            of the same physical tissue. Its custom experimental pipeline
            and neural factorization model treat acquisition as an observable
            source of variation. The framework makes it possible to examine
            whether a change in acquisition can be represented independently
            of the information retained about a specimen.
          </Paragraph>
          <Paragraph>
            The work has been evaluated using paired human H&amp;E
            acquisitions and an independent five-scanner canine study.
            Comparisons with conventional scanner correction are important
            to its interpretation: a useful learned representation need not
            imply that a more complicated correction is necessary, and
            scanner invariance is not itself proof of preserved biology.
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
            Quantitative measurement
          </Heading>
          <Paragraph>
            Related work on nuclear measurements addresses a different
            aspect of the same epistemic problem. When a reported feature
            depends on the computational setting in which it was measured,
            its apparent relationship to tissue structure requires additional
            scrutiny. My work with NucleoScope investigates that dependence.
          </Paragraph>
          <Box mt={5}>
            <ResearchLink href="https://github.com/matthewvaishnav/nucleoscope">
              Nuclear measurement research
            </ResearchLink>
          </Box>
        </Box>

        <Box mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Text fontSize="sm">
            A fuller discussion of the research and its limitations appears on the{' '}
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
