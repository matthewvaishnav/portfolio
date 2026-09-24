import { Button, Container, Heading, Link, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

const Security = () => (
  <Layout title="Security">
    <Container px={0}>
      <Heading as="h1" size="lg" mb={4}>
        Defensive Security Archive
      </Heading>
      <Text mb={3} lineHeight="1.8">
        Earlier defensive-security, infrastructure, and home-lab work is preserved as a separate
        portfolio archive so the main site can stay focused on current research.
      </Text>
      <Text mb={6} lineHeight="1.8" fontSize="sm" color="gray.500">
        This is a historical portfolio snapshot. Its older performance, uptime, compliance,
        production-readiness, CVE-reduction, and similar impact statements were not revalidated
        under the evidence standards used by my current research record and should not be read as
        current verified claims.
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
