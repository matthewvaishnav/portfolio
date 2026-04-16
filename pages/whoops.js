import {
  Container,
  Badge,
  Text,
  Box,
  HStack,
  VStack,
  Code,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../components/work'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="whoops">
    <Container maxW="5xl" py={12}>
      <Title>
        whoops <Badge colorScheme="yellow" ml={3} fontSize="md">Safety Tool</Badge>
      </Title>
      
      <Text fontSize="xl" color="gray.200" mb={6} lineHeight="relaxed" fontWeight="medium">
        Intercepts dangerous shell commands before execution. Your last line of defense against terminal mistakes.
      </Text>

      <Alert status="warning" bg="yellow.900" borderColor="yellow.700" mb={8}>
        <AlertIcon color="yellow.400" />
        <Box>
          <AlertTitle color="yellow.200">Command Interception</AlertTitle>
          <AlertDescription color="yellow.300">
            Catches destructive commands like rm -rf, dd, and mkfs before they execute.
          </AlertDescription>
        </Box>
      </Alert>

      <VStack align="stretch" spacing={6} mb={10}>
        <Box p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <HStack mb={4}>
            <WarningIcon color="yellow.400" />
            <Text fontWeight="semibold" color="gray.200" fontSize="lg">Protection Features</Text>
          </HStack>
          <VStack align="stretch" spacing={3} color="gray.300">
            <Text>• Real-time command pattern matching</Text>
            <Text>• Confirmation prompts for dangerous operations</Text>
            <Text>• Whitelist for trusted commands</Text>
            <Text>• Minimal performance overhead</Text>
          </VStack>
        </Box>

        <Box p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <Text fontWeight="semibold" mb={4} color="gray.200" fontSize="lg">Technology</Text>
          <HStack wrap="wrap" spacing={2}>
            <Code colorScheme="blue">Python</Code>
            <Code colorScheme="gray">Shell Hooks</Code>
            <Code colorScheme="yellow">Regex</Code>
            <Code colorScheme="green">Bash</Code>
          </HStack>
        </Box>
      </VStack>

      <Divider borderColor="gray.700" mb={8} />

      <Box maxW="400px" mx="auto" mb={8}>
        <WorkImage src="/portfolio/images/works/whoops-logo.svg" alt="whoops logo" />
      </Box>
    </Container>
  </Layout>
)

export default Work
