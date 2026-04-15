import NextLink from 'next/link'
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Button,
  SimpleGrid,
  Heading,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { Title, WorkImage, Meta } from '../../components/work'

const Sentinel = () => (
  <Layout title="SENTINEL">
    <Container>
      <Title>
        SENTINEL <Badge>2026</Badge>
      </Title>

      <Paragraph>
        SENTINEL is a hardened anti-DDoS system built around fast detection,
        distributed state, and a production-style deployment story. The project
        is designed to keep request handling responsive while heavy analysis runs
        off the main path.
      </Paragraph>

      <Paragraph>
        The idea is simple: detect malicious traffic early, share threat state
        across nodes, and reduce the usual tradeoff between aggressive filtering
        and false positives for real users.
      </Paragraph>

      <List ml={4} my={6} spacing={3}>
        <ListItem>
          <Meta>Type</Meta>
          Security platform
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          Node.js, Redis, WebSockets, packaging pipeline
        </ListItem>
        <ListItem>
          <Meta>Focus</Meta>
          DDoS detection, distributed threat sharing, deployment readiness
        </ListItem>
        <ListItem>
          <Meta>Repo</Meta>
          <Link
            href="https://github.com/matthewvaishnav/sentinel"
            target="_blank"
          >
            github.com/matthewvaishnav/sentinel <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={8}>
        <Button
          as={Link}
          href="https://github.com/matthewvaishnav/sentinel"
          target="_blank"
          colorScheme="teal"
          rightIcon={<ExternalLinkIcon />}
          mr={3}
        >
          View Repository
        </Button>
        <Button
          as={NextLink}
          href="/programming-works"
          scroll={false}
          variant="outline"
          rightIcon={<ChevronRightIcon />}
        >
          Back to Works
        </Button>
      </Box>

      <WorkImage
        src="/programming-portfolio/images/works/sentinel-hero.svg"
        alt="SENTINEL overview"
      />

      <Heading as="h4" fontSize={16} mb={3}>
        Why I Built It
      </Heading>
      <Paragraph>
        A lot of security tooling looks impressive in diagrams but falls apart on
        the operational details: event-loop blocking, noisy thresholds, weak state
        sharing, and unclear deployment paths. SENTINEL pushes against that by
        treating detection, scaling, and packaging as one system instead of three
        separate ideas.
      </Paragraph>

      <SimpleGrid columns={[1, 1, 2]} gap={6} my={6}>
        <Box>
          <Heading as="h5" fontSize={15} mb={2}>
            Architecture
          </Heading>
          <List spacing={2}>
            <ListItem>Asynchronous math worker pool for heavy analysis</ListItem>
            <ListItem>Redis-backed shared state for horizontal scaling</ListItem>
            <ListItem>Z-score and EMA style adaptive filtering</ListItem>
            <ListItem>P2P threat sharing through a gossip-style mesh</ListItem>
          </List>
        </Box>
        <Box>
          <Heading as="h5" fontSize={15} mb={2}>
            Product Thinking
          </Heading>
          <List spacing={2}>
            <ListItem>Pre-built binaries and installer workflow</ListItem>
            <ListItem>Cross-platform packaging for real distribution</ListItem>
            <ListItem>Benchmark story tied to a known dataset</ListItem>
            <ListItem>Security project presented like a usable platform</ListItem>
          </List>
        </Box>
      </SimpleGrid>

      <WorkImage
        src="/programming-portfolio/images/works/sentinel-detail.svg"
        alt="SENTINEL architecture and benchmark callouts"
      />

      <Heading as="h4" fontSize={16} mb={3}>
        What Stands Out
      </Heading>
      <Paragraph>
        The part I like most about SENTINEL is that it goes past “cool detection
        idea” and into operational shape. There is a clear path from architecture
        to packaging to release. That makes it a stronger portfolio piece than a
        pure prototype.
      </Paragraph>

      <Paragraph>
        It also fits my broader pattern as a builder: security, systems, and
        automation projects that try to be usable by real people instead of
        stopping at proof-of-concept.
      </Paragraph>
    </Container>
  </Layout>
)

export default Sentinel
