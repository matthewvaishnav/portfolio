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
          Digital histopathology depends on a sequence of observations and
          computational decisions. A change in the resulting representation
          need not correspond to a change in the tissue. My research examines
          that distinction, particularly where repeated observations of the
          same specimen make it possible to test.
        </Paragraph>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Paired acquisition as an experiment
          </Heading>
          <Paragraph>
            When a physical tissue region is scanned repeatedly, specimen
            identity remains fixed while the acquisition conditions change.
            This correspondence provides an unusually direct way to investigate
            the effect of imaging on a learned representation. It also gives
            a model a stricter test: a proposed acquisition transformation can
            be compared with the change actually observed for that tissue.
          </Paragraph>
          <Paragraph>
            I developed Paired-Acquisition Neural Factorization (PA-NF) as a
            complete experimental framework organized around this setting.
            The framework and its neural factorization model were designed
            together for paired observations. A tissue-oriented representation
            and an acquisition representation are learned separately, but the
            scientific question is whether those components remain meaningful
            when acquisition is changed rather than merely when scanner
            identity is predicted.
          </Paragraph>
          <Paragraph>
            The public studies include matched observations from 48 human
            H&amp;E slides acquired on five scanners and an independent
            multi-scanner canine dataset. Their purpose is to test the
            proposed separation against observed scanner changes and simpler
            explanations. Suppressing scanner information alone does not
            establish that biological information has been preserved, and
            the performance of conventional scanner corrections limits what
            can be claimed for a more complicated model.
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
            Measurement in digital pathology
          </Heading>
          <Paragraph>
            A related line of research concerns the reliability of
            quantitative measurements obtained from tissue images. In work
            with NucleoScope, I examine how changes in computational context
            can alter reported nuclear measurements, even when the underlying
            tissue observation is held fixed. Such effects matter because a
            numerical difference cannot be interpreted as biological until
            its dependence on the measurement procedure is understood.
          </Paragraph>
          <Box mt={5}>
            <ResearchLink href="https://github.com/matthewvaishnav/nucleoscope">
              View the NucleoScope research repository
            </ResearchLink>
          </Box>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Evidence and interpretation
          </Heading>
          <Paragraph>
            The research record retains comparisons that challenge the
            proposed method, including cases in which simpler models are
            competitive. I regard those outcomes as necessary constraints on
            interpretation. The current results concern the stated specimens,
            acquisition systems and evaluation protocols; they do not
            constitute clinical validation.
          </Paragraph>
          <Text color={muted} fontSize="sm" mt={5} lineHeight="1.8">
            Methods, manuscripts and reproducible evidence are available
            through the public links above.
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Research
