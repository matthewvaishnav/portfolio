import {
  Container,
  Badge,
  Link,
  VStack,
  HStack,
  Text,
  Box,
  Divider,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Code
} from '@chakra-ui/react'
import { ExternalLinkIcon, StarIcon, DownloadIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../components/work'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="SENTINEL">
    <Container maxW="5xl" py={12}>
      <Title>
        SENTINEL <Badge colorScheme="red" ml={3} fontSize="md">Security Platform</Badge>
      </Title>
      
      <Text fontSize="xl" color="gray.200" mb={6} lineHeight="relaxed" fontWeight="medium">
        A hardened anti-DDoS system built around fast detection,
        distributed state, and production-style deployment.
      </Text>

      <Text fontSize="md" color="gray.400" mb={10} lineHeight="tall">
        Designed to keep request handling responsive while heavy analysis runs off the main path.
        Features adaptive filtering, P2P threat sharing, and cross-platform deployment.
      </Text>

      <SimpleGrid columns={[1, 2, 3]} gap={8} mb={10}>
        <Stat bg="gray.800" p={4} borderRadius="lg" border="1px solid" borderColor="gray.700">
          <StatLabel color="gray.400">Detection Speed</StatLabel>
          <StatNumber color="green.400">~2ms</StatNumber>
          <StatHelpText color="gray.500">Average response time</StatHelpText>
        </Stat>
        <Stat bg="gray.800" p={4} borderRadius="lg" border="1px solid" borderColor="gray.700">
          <StatLabel color="gray.400">Threat Sharing</StatLabel>
          <StatNumber color="blue.400">P2P Mesh</StatNumber>
          <StatHelpText color="gray.500">Distributed intelligence</StatHelpText>
        </Stat>
        <Stat bg="gray.800" p={4} borderRadius="lg" border="1px solid" borderColor="gray.700">
          <StatLabel color="gray.400">Deployment</StatLabel>
          <StatNumber color="purple.400">Cross-Platform</StatNumber>
          <StatHelpText color="gray.500">Ready for production</StatHelpText>
        </Stat>
      </SimpleGrid>

      <VStack align="stretch" spacing={6} mb={10}>
        <HStack justify="space-between" p={4} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <HStack>
            <Meta>Repository</Meta>
            <Link href="https://github.com/matthewvaishnav/sentinel" color="blue.400" _hover={{ color: "blue.300" }} fontWeight="medium">
              github.com/matthewvaishnav/sentinel <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
          <HStack spacing={4}>
            <HStack color="gray.400">
              <StarIcon />
              <Text fontSize="sm">Watch</Text>
            </HStack>
            <HStack color="gray.400">
              <DownloadIcon />
              <Text fontSize="sm">Clone</Text>
            </HStack>
          </HStack>
        </HStack>
        
        <SimpleGrid columns={[1, 2]} gap={6}>
          <Box p={4} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
            <Text fontWeight="semibold" mb={2} color="gray.200">Platform Support</Text>
            <HStack wrap="wrap" spacing={2}>
              <Code colorScheme="green">Linux</Code>
              <Code colorScheme="blue">macOS</Code>
              <Code colorScheme="purple">Windows</Code>
            </HStack>
          </Box>
          <Box p={4} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
            <Text fontWeight="semibold" mb={2} color="gray.200">Technology Stack</Text>
            <HStack wrap="wrap" spacing={2}>
              <Code colorScheme="yellow">Node.js</Code>
              <Code colorScheme="red">Redis</Code>
              <Code colorScheme="teal">WebSockets</Code>
            </HStack>
          </Box>
        </SimpleGrid>
      </VStack>

      <Divider borderColor="gray.700" mb={8} />

      <WorkImage src="/portfolio/images/works/sentinel-logo.svg" alt="SENTINEL logo" />
      <WorkImage src="/portfolio/images/works/sentinel-hero.svg" alt="SENTINEL overview" />
      <WorkImage src="/portfolio/images/works/sentinel-detail.svg" alt="SENTINEL architecture" />
    </Container>
  </Layout>
)

export default Work
