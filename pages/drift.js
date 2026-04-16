import {
  Container,
  Badge,
  Link,
  VStack,
  HStack,
  Text,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../components/work'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="drift">
    <Container maxW="4xl" py={8}>
      <Title>
        drift <Badge colorScheme="purple" ml={3}>2026</Badge>
      </Title>
      
      <Text fontSize="lg" color="gray.300" mb={8} lineHeight="tall">
        A Git-like server state tracker for people who want to know what
        changed, when it changed, and how to get back to a known-good state.
      </Text>

      <VStack align="stretch" spacing={4} mb={8}>
        <HStack>
          <Meta>Repository</Meta>
          <Link href="https://github.com/matthewvaishnav/drift" color="blue.400" _hover={{ color: "blue.300" }}>
            github.com/matthewvaishnav/drift <ExternalLinkIcon mx="2px" />
          </Link>
        </HStack>
        <HStack>
          <Meta>Platform</Meta>
          <Text color="gray.400">Linux/macOS/Windows</Text>
        </HStack>
        <HStack>
          <Meta>Stack</Meta>
          <Text color="gray.400">Python, CLI tooling</Text>
        </HStack>
      </VStack>

      <WorkImage src="/portfolio/images/works/drift-hero.svg" alt="drift overview" />
      <WorkImage src="/portfolio/images/works/drift-detail.svg" alt="drift architecture" />
    </Container>
  </Layout>
)

export default Work
