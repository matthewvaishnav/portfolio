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
          I develop computational pathology models and the experiments
          needed to evaluate them, from small tissue-image patches to
          whole-slide analysis and data collected across institutions.
          A recurring question is whether a result reflects tissue
          biology, image acquisition or the way a model was tested.
        </Paragraph>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Paired-Acquisition Neural Factorization
          </Heading>
          <Paragraph>
            PA-NF learns separate tissue-oriented and acquisition-related
            representations, then reconstructs image features from both.
            Matched scans of the same physical tissue make it possible
            to test whether predicted changes between scanners correspond
            to observed ones.
          </Paragraph>
          <Paragraph>
            Its registered five-scanner human study established a controlled
            advantage over an equally sized neural model on a defined
            separation objective. Independent canine studies, different
            image models and simpler scanner-correction methods provide
            additional tests.
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
            Patch and whole-slide studies
          </Heading>
          <Paragraph>
            On the PCam patch-classification benchmark, my model achieved
            an ROC AUC of 0.9394 on the official test split. My whole-slide
            research develops a custom approach to combining patch
            information, with experiments using 10,611 PANDA slides.
            These are distinct evaluations with different outcomes.
          </Paragraph>
        </Box>

        <Box as="section" mt={10} pt={6} borderTop="1px solid" borderColor={rule}>
          <Heading as="h2" size="md" mb={4}>
            Institutional differences
          </Heading>
          <Paragraph>
            My multi-institutional work examines how sites contribute
            to model training and what happens when their data differ.
            I study simulated site changes in PANDA and real
            centre-to-centre variation in CAMELYON17. These experiments
            assess research methods, not a deployed clinical system.
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
