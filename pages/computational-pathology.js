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
          Paired-Acquisition Neural Factorization (PA-NF)
          is the end-to-end computational pathology pipeline
          I developed, spanning scanner acquisition, patch
          classification, whole-slide analysis and learning
          across institutions. Its components are supported
          by distinct evaluations within the same programme.
        </Paragraph>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            PA-NF acquisition stage: SCORPION and canine SCC
          </Heading>
          <Paragraph>
            The paired-acquisition model within PA-NF separates
            tissue-oriented and acquisition-related image
            information using a custom neural architecture. The
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
            PA-NF patch and whole-slide stages: PCam and TransnnMIL
          </Heading>
          <Paragraph>
            The PCam patch-classification work achieved an ROC AUC
            of 0.9394 on its official test split. The
            PA-NF whole-slide component is TransnnMIL,
            which brings together two methods of combining
            patch information. The PANDA research uses
            10,611 slides; new controlled evaluation of
            the repaired architecture remains in progress.
          </Paragraph>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            PA-NF institutional stage: PathologyFL and FAIR-WEIGHTS-H
          </Heading>
          <Paragraph>
            The PA-NF pipeline incorporates PathologyFL and
            FAIR-WEIGHTS-H to study collaborative model training
            and differences between institutions. Related experiments use
            simulated site changes in PANDA and actual
            centre differences in CAMELYON17.
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
