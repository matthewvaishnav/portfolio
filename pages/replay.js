import {
  Container,
  Badge,
  Text,
  Box,
  HStack,
  VStack,
  Code,
  Divider
} from '@chakra-ui/react'
import { Title, WorkImage } from '../components/work'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="replay">
    <Container maxW="5xl" py={12}>
      <Title>
        replay <Badge colorScheme="orange" ml={3} fontSize="md">DevOps Tool</Badge>
      </Title>
      
      <Text fontSize="xl" color="gray.200" mb={6} lineHeight="relaxed" fontWeight="medium">
        Record terminal sessions and automatically generate Ansible playbooks from your actions.
      </Text>

      <VStack align="stretch" spacing={6} mb={10}>
        <Box p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <Text fontWeight="semibold" mb={4} color="gray.200" fontSize="lg">Core Functionality</Text>
          <VStack align="stretch" spacing={3} color="gray.300">
            <Text>• Session recording with command tracking</Text>
            <Text>• Automatic Ansible playbook generation</Text>
            <Text>• Idempotent task conversion</Text>
            <Text>• Infrastructure as code automation</Text>
          </VStack>
        </Box>

        <Box p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <Text fontWeight="semibold" mb={4} color="gray.200" fontSize="lg">Technology</Text>
          <HStack wrap="wrap" spacing={2}>
            <Code colorScheme="blue">Python</Code>
            <Code colorScheme="red">Ansible</Code>
            <Code colorScheme="yellow">YAML</Code>
            <Code colorScheme="gray">Shell</Code>
          </HStack>
        </Box>
      </VStack>

      <Divider borderColor="gray.700" mb={8} />
    </Container>
  </Layout>
)

export default Work
