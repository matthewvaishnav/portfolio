import {
  Container,
  Badge,
  Link,
  VStack,
  HStack,
  Text,
  Box,
  Flex,
  Icon,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Code,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon, TimeIcon, RepeatIcon, ViewIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../components/work'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="drift">
    <Container maxW="5xl" py={12}>
      <Title>
        drift <Badge colorScheme="purple" ml={3} fontSize="md">Infrastructure Tool</Badge>
      </Title>
      
      <Text fontSize="xl" color="gray.200" mb={6} lineHeight="relaxed" fontWeight="medium">
        A Git-like server state tracker for people who want to know what
        changed, when it changed, and how to get back to a known-good state.
      </Text>

      <Alert status="info" bg="blue.900" borderColor="blue.700" mb={8}>
        <AlertIcon color="blue.400" />
        <Box>
          <AlertTitle color="blue.200">Version Control for Infrastructure</AlertTitle>
          <AlertDescription color="blue.300">
            Track server drift like code changes - snapshot, diff, and restore with confidence.
          </AlertDescription>
        </Box>
      </Alert>

      <Flex direction={["column", "row"]} gap={8} mb={10}>
        <Box flex="1" p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <HStack mb={4}>
            <Icon as={TimeIcon} color="purple.400" />
            <Text fontWeight="semibold" color="gray.200">Snapshot System</Text>
          </HStack>
          <UnorderedList spacing={2} color="gray.400">
            <ListItem>Capture complete server state</ListItem>
            <ListItem>Track packages, services, configs</ListItem>
            <ListItem>Timestamped history</ListItem>
          </UnorderedList>
        </Box>
        
        <Box flex="1" p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <HStack mb={4}>
            <Icon as={RepeatIcon} color="green.400" />
            <Text fontWeight="semibold" color="gray.200">Diff & Compare</Text>
          </HStack>
          <UnorderedList spacing={2} color="gray.400">
            <ListItem>Visual state differences</ListItem>
            <ListItem>Highlight meaningful changes</ListItem>
            <ListItem>Filter noise from signal</ListItem>
          </UnorderedList>
        </Box>

        <Box flex="1" p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
          <HStack mb={4}>
            <Icon as={ViewIcon} color="blue.400" />
            <Text fontWeight="semibold" color="gray.200">Investigation</Text>
          </HStack>
          <UnorderedList spacing={2} color="gray.400">
            <ListItem>Root cause analysis</ListItem>
            <ListItem>Rollback planning</ListItem>
            <ListItem>Change attribution</ListItem>
          </UnorderedList>
        </Box>
      </Flex>

      <Box p={6} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700" mb={8}>
        <HStack justify="space-between" mb={4}>
          <HStack>
            <Meta>Repository</Meta>
            <Link href="https://github.com/matthewvaishnav/drift" color="blue.400" _hover={{ color: "blue.300" }} fontWeight="medium">
              github.com/matthewvaishnav/drift <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
          <HStack spacing={4}>
            <Code colorScheme="purple">Python</Code>
            <Code colorScheme="gray">CLI</Code>
          </HStack>
        </HStack>
        <Text color="gray.400" fontSize="sm">
          Cross-platform support: Linux, macOS, Windows
        </Text>
      </Box>

      <Divider borderColor="gray.700" mb={8} />

      <Box maxW="400px" mx="auto" mb={8}>
        <WorkImage src="/portfolio/images/works/drift-logo.svg" alt="drift logo" />
      </Box>
      <Box maxW="400px" mx="auto" mb={8}>
        <WorkImage src="/portfolio/images/works/drift-logo.svg" alt="drift logo" />
      </Box>
      <WorkImage src="/portfolio/images/works/drift-hero.svg" alt="drift overview" />
      <WorkImage src="/portfolio/images/works/drift-detail.svg" alt="drift architecture" />
    </Container>
  </Layout>
)

export default Work
