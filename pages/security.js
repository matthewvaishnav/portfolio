import { Button, Container, Heading, Link, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

const Security = () => (
  <Layout title="Security">
    <Container px={0}>
      <Heading as="h1" size="lg" mb={4}>
        Defensive Security Archive
      </Heading>
      <Text mb={6} lineHeight="1.8">
        Earlier defensive-security, infrastructure, and home-lab work is preserved as a separate
        portfolio archive so the main site can stay focused on current research.
      </Text>
      <Button
        as={Link}
        href="/portfolio/defensive-security.html"
        rightIcon={<ExternalLinkIcon />}
        colorScheme="teal"
        _hover={{ textDecoration: 'none' }}
      >
        Open security archive
      </Button>
    </Container>
  </Layout>
)

export default Security
