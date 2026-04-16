import {
  Container,
  Badge,
  Link,
  VStack,
  HStack,
  Text,
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Code,
  Divider,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon, CheckCircleIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../components/work'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="PathML Framework">
    <Container maxW="5xl" py={12}>
      <Title>
        PathML Framework <Badge colorScheme="teal" ml={3} fontSize="md">ML Research</Badge>
      </Title>
      
      <Text fontSize="xl" color="gray.200" mb={6} lineHeight="relaxed" fontWeight="medium">
        A production-grade PyTorch framework for computational pathology research.
        Built for whole slide image analysis with attention-based MIL models.
      </Text>

      <Text fontSize="md" color="gray.400" mb={10} lineHeight="tall">
        Comprehensive WSI processing pipelines, 1,083 tests, and reproducible research infrastructure
        for histopathology image analysis and machine learning.
      </Text>

      <SimpleGrid columns={[1, 2, 3]} gap={8} mb={10}>
        <Stat bg="gray.800" p={4} borderRadius="lg" border="1px solid" borderColor="gray.700">
          <StatLabel color="gray.400">Test Coverage</StatLabel>
          <StatNumber color="green.400">1,083</StatNumber>
          <StatHelpText color="gray.500">Comprehensive test suite</StatHelpText>
        </Stat>
        <Stat bg="gray.800" p={4} borderRadius="lg" border="1px solid" borderColor="gray.700">
          <StatLabel color="gray.400">Framework</StatLabel>
          <StatNumber color="orange.400">PyTorch</StatNumber>
          <StatHelpText color="gray.500">Production-grade ML</StatHelpText>
        </Stat>
        <Stat bg="gray.800" p={4} borderRadius="lg" border="1px solid" borderColor="gray.700">
          <StatLabel color="gray.400">Architecture</StatLabel>
          <StatNumber color="purple.400">Attention MIL</StatNumber>
          <StatHelpText color="gray.500">State-of-the-art models</StatHelpText>
        </Stat>
      </SimpleGrid>

      <SimpleGrid columns={[1, 2]} gap={8} mb={10}>
        <Box p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <Text fontWeight="semibold" mb={4} color="gray.200" fontSize="lg">Core Features</Text>
          <VStack align="stretch" spacing={3}>
            <HStack>
              <CheckCircleIcon color="green.400" />
              <Text color="gray.300">WSI tile extraction & preprocessing</Text>
            </HStack>
            <HStack>
              <CheckCircleIcon color="green.400" />
              <Text color="gray.300">Attention-based MIL models</Text>
            </HStack>
            <HStack>
              <CheckCircleIcon color="green.400" />
              <Text color="gray.300">Feature extraction pipelines</Text>
            </HStack>
            <HStack>
              <CheckCircleIcon color="green.400" />
              <Text color="gray.300">Reproducible experiment tracking</Text>
            </HStack>
          </VStack>
        </Box>

        <Box p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <Text fontWeight="semibold" mb={4} color="gray.200" fontSize="lg">Technology Stack</Text>
          <VStack align="stretch" spacing={3}>
            <HStack wrap="wrap" spacing={2}>
              <Code colorScheme="orange">PyTorch</Code>
              <Code colorScheme="blue">Python</Code>
              <Code colorScheme="green">NumPy</Code>
            </HStack>
            <HStack wrap="wrap" spacing={2}>
              <Code colorScheme="purple">OpenSlide</Code>
              <Code colorScheme="red">scikit-learn</Code>
              <Code colorScheme="teal">pandas</Code>
            </HStack>
            <HStack wrap="wrap" spacing={2}>
              <Code colorScheme="cyan">pytest</Code>
              <Code colorScheme="yellow">MLflow</Code>
            </HStack>
          </VStack>
        </Box>
      </SimpleGrid>

      <Box p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700" mb={8}>
        <HStack justify="space-between" mb={4}>
          <HStack>
            <Meta>Documentation</Meta>
            <Link href="https://matthewvaishnav.github.io/computational-pathology-research/" color="blue.400" _hover={{ color: "blue.300" }} fontWeight="medium">
              View Full Documentation <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
        </HStack>
        <Text color="gray.400" fontSize="sm">
          Complete API reference, tutorials, and research methodology documentation
        </Text>
      </Box>

      <Divider borderColor="gray.700" mb={8} />

      <Box maxW="400px" mx="auto" mb={8}>
        <WorkImage src="/portfolio/images/works/pathml-logo.svg" alt="PathML Framework logo" />
      </Box>
    </Container>
  </Layout>
)

export default Work
