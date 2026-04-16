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
  <Layout title="SENTINEL">
    <Container maxW="4xl" py={8}>
      <Title>
        SENTINEL <Badge colorScheme="red" ml={3}>2026</Badge>
      </Title>
      
      <Text fontSize="lg" color="gray.300" mb={8} lineHeight="tall">
        A hardened anti-DDoS system built around fast detection,
        distributed state, and production-style deployment. Designed to keep
        request handling responsive while heavy analysis runs off the main path.
      </Text>

      <VStack align="stretch" spacing={4} mb={8}>
        <HStack>
          <Meta>Repository</Meta>
          <Link href="https://github.com/matthewvaishnav/sentinel" color="blue.400" _hover={{ color: "blue.300" }}>
            github.com/matthewvaishnav/sentinel <ExternalLinkIcon mx="2px" />
          </Link>
        </HStack>
        <HStack>
          <Meta>Platform</Meta>
          <Text color="gray.400">Linux/macOS/Windows</Text>
        </HStack>
        <HStack>
          <Meta>Stack</Meta>
          <Text color="gray.400">Node.js, Redis, WebSockets</Text>
        </HStack>
      </VStack>

      <WorkImage src="/portfolio/images/works/sentinel-hero.svg" alt="SENTINEL overview" />
      <WorkImage src="/portfolio/images/works/sentinel-detail.svg" alt="SENTINEL architecture" />
    </Container>
  </Layout>
)

export default Work
