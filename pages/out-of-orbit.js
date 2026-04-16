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
  <Layout title="Out of Orbit">
    <Container maxW="5xl" py={12}>
      <Title>
        Out of Orbit <Badge colorScheme="pink" ml={3} fontSize="md">Game Dev</Badge>
      </Title>
      
      <Text fontSize="xl" color="gray.200" mb={6} lineHeight="relaxed" fontWeight="medium">
        Vaporwave-themed arcade shooter with optimized object pooling and retro aesthetics.
      </Text>

      <VStack align="stretch" spacing={6} mb={10}>
        <Box p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <Text fontWeight="semibold" mb={4} color="gray.200" fontSize="lg">Game Features</Text>
          <VStack align="stretch" spacing={3} color="gray.300">
            <Text>• Object pooling for performance optimization</Text>
            <Text>• Vaporwave visual style and soundtrack</Text>
            <Text>• Arcade-style scoring system</Text>
            <Text>• Smooth 60 FPS gameplay</Text>
          </VStack>
        </Box>

        <Box p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <Text fontWeight="semibold" mb={4} color="gray.200" fontSize="lg">Technology</Text>
          <HStack wrap="wrap" spacing={2}>
            <Code colorScheme="orange">Unity</Code>
            <Code colorScheme="purple">C#</Code>
            <Code colorScheme="blue">Object Pooling</Code>
            <Code colorScheme="pink">Shader Graph</Code>
          </HStack>
        </Box>
      </VStack>

      <Divider borderColor="gray.700" mb={8} />
    </Container>
  </Layout>
)

export default Work
