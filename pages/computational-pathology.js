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
          Paired-Acquisition Neural Factorization (PA-NF) is my
          end-to-end computational pathology research pipeline.
          It begins with paired-scanner representation learning,
          continues through whole-slide modeling and examines
          how differences between institutions affect the
          models they train. The components are connected
          by one research framework but tested through
          separate experiments.
        </Paragraph>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Paired-acquisition representation learning
          </Heading>
          <Paragraph>
            The first PA-NF stage uses a custom neural model
            to learn tissue-oriented and acquisition-related
            image representations. The
            SCORPION study examines 48 human H&amp;E slides across
            five scanners and establishes a controlled improvement
            on its defined separation objective. Independent
            canine SCC experiments, comparisons across DINOv2,
            Phikon and ResNet50, and pair-repeat allocation
            studies test other aspects of the method.
          </Paragraph>
          <Box mt={5}>
            <ResearchLink href="https://github.com/matthewvaishnav/paired-acquisition-factorization-scorpion">
              SCORPION study
            </ResearchLink>
          </Box>
          <Box mt={3}>
            <ResearchLink href="https://github.com/matthewvaishnav/paired-acquisition-factorization-caninescc">
              Canine SCC study
            </ResearchLink>
          </Box>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Patch and whole-slide research: PCam, PANDA, TransnnMIL
          </Heading>
          <Paragraph>
            PCam provides an independently measured patch
            benchmark, with ROC AUC 0.9394 on its official
            test split. TransnnMIL is the custom whole-slide
            architecture within PA-NF, studied using
            10,611 readable PANDA slides. The corrected
            architecture still requires a matched
            performance evaluation.
          </Paragraph>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Institutional learning: PathologyFL and FAIR-WEIGHTS-H
          </Heading>
          <Paragraph>
            PA-NF includes PathologyFL and FAIR-WEIGHTS-H
            for studying training and influence across
            institutions. PANDA experiments test
            controlled changes in simulated sites,
            while CAMELYON17 supplies a real five-centre
            setting for separate source-weighting tests.
            These results do not constitute a
            clinical federated deployment.
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
