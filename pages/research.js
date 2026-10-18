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
          My work in computational pathology begins with the distinction between
          the tissue being observed and the imaging system used to observe it.
          A slide may be scanned on several devices without changing the specimen,
          yet the resulting digital representations can differ. Understanding those
          differences is essential before treating a model&apos;s learned features
          as measurements of tissue biology.
        </Paragraph>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Paired-Acquisition Neural Factorization
          </Heading>
          <Paragraph>
            I developed Paired-Acquisition Neural Factorization (PA-NF) as a custom
            research framework organized around repeated observations of the same
            physical tissue. Its experimental design makes acquisition a variable
            that can be investigated directly, rather than an unexplained difference
            between unrelated datasets.
          </Paragraph>
          <Paragraph>
            PA-NF combines a purpose-built neural model with an experimental pipeline
            that tests how tissue information behaves when acquisition changes.
            The central question is whether useful biological structure can be
            retained while acquisition-related variation is represented separately.
            That question is investigated through controlled comparisons, not assumed
            from a reduction in scanner predictability.
          </Paragraph>
          <Paragraph>
            The public work includes matched acquisitions from 48 human H&amp;E slides
            and an independent five-scanner canine study. Together they provide
            distinct experimental settings for evaluating what the representation
            captures and how far its interpretation can reasonably extend.
          </Paragraph>
          <Box mt={5}>
            <ResearchLink href="https://matthewvaishnav.github.io/computational-pathology-research/">
              Read the PA-NF manuscript
            </ResearchLink>
          </Box>
          <Box mt={3}>
            <ResearchLink href="https://github.com/matthewvaishnav/computational-pathology-research">
              Explore the public research repository
            </ResearchLink>
          </Box>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Measurement in digital pathology
          </Heading>
          <Paragraph>
            Alongside PA-NF, I have investigated how the computational conditions
            used to analyze tissue images can influence quantitative nuclear
            measurements. The work with NucleoScope considers the reliability of
            a measurement before interpreting its relationship to tissue morphology.
          </Paragraph>
          <Box mt={5}>
            <ResearchLink href="https://github.com/matthewvaishnav/nucleoscope">
              View the NucleoScope research repository
            </ResearchLink>
          </Box>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Research methodology
          </Heading>
          <Paragraph>
            I develop experimental software as part of the research itself.
            In paired-acquisition studies, the identity of the specimen determines
            which comparisons are meaningful. A credible method must account for
            that structure when it is trained and when its behavior is evaluated.
            This is why the public repositories document the experiments alongside
            their resulting evidence.
          </Paragraph>
          <Text color={muted} fontSize="sm" mt={5} lineHeight="1.8">
            The published work is research-stage. Its results should be interpreted
            within the datasets and experimental designs in which they were obtained.
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Research
