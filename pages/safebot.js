import {
  Container,
  Badge,
  Link,
  Text,
  Box,
  HStack,
  VStack,
  Code,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon, LockIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../components/work'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="SafeBot v2">
    <Container maxW="5xl" py={12}>
      <Title>
        SafeBot v2 <Badge colorScheme="green" ml={3} fontSize="md">AI Agent</Badge>
      </Title>
      
      <Text fontSize="xl" color="gray.200" mb={6} lineHeight="relaxed" fontWeight="medium">
        Local AI web agent that runs entirely on your machine. No API keys, no cloud dependencies.
      </Text>

      <HStack spacing={4} mb={10} flexWrap="wrap">
        <HStack p={3} bg="gray.800" borderRadius="lg" border="1px solid" borderColor="green.700">
          <LockIcon color="green.400" />
          <Text color="green.300" fontWeight="medium">100% Local</Text>
        </HStack>
        <HStack p={3} bg="gray.800" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <Text color="gray.400">No API Keys Required</Text>
        </HStack>
        <HStack p={3} bg="gray.800" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <Text color="gray.400">Privacy-First Design</Text>
        </HStack>
      </HStack>

      <VStack align="stretch" spacing={6} mb={10}>
        <Box p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <Text fontWeight="semibold" mb={4} color="gray.200" fontSize="lg">Key Features</Text>
          <VStack align="stretch" spacing={3} color="gray.300">
            <Text>• Autonomous web navigation and interaction</Text>
            <Text>• Local LLM integration (Ollama, LM Studio)</Text>
            <Text>• Browser automation with Playwright</Text>
            <Text>• Zero external API dependencies</Text>
          </VStack>
        </Box>

        <Box p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <Text fontWeight="semibold" mb={4} color="gray.200" fontSize="lg">Technology</Text>
          <HStack wrap="wrap" spacing={2}>
            <Code colorScheme="blue">Python</Code>
            <Code colorScheme="purple">Playwright</Code>
            <Code colorScheme="green">Local LLMs</Code>
            <Code colorScheme="orange">Ollama</Code>
          </HStack>
        </Box>
      </VStack>

      <Divider borderColor="gray.700" mb={8} />

      <Box maxW="400px" mx="auto" mb={8}>
        <WorkImage src="/portfolio/images/works/safebot-logo.svg" alt="SafeBot v2 logo" />
      </Box>
    </Container>
  </Layout>
)

export default Work
