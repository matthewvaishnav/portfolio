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

const Drift = () => (
  <Layout title="drift">
    <Container>
      <Title>
        drift <Badge>2026</Badge>
      </Title>

      <Paragraph>
        drift is a Git-like server state tracker for people who want to know what
        changed, when it changed, and how to get back to a known-good state.
      </Paragraph>

      <Paragraph>
        Instead of treating server drift like a surprise after something breaks,
        drift treats infrastructure state like versioned history: snapshot,
        compare, explain, restore.
      </Paragraph>

      <List ml={4} my={6} spacing={3}>
        <ListItem>
          <Meta>Type</Meta>
          Infrastructure tooling
        </ListItem>
        <ListItem>
          <Meta>Focus</Meta>
          Server state snapshots, diffs, rollback thinking
        </ListItem>
        <ListItem>
          <Meta>Why</Meta>
          Make config drift visible before it becomes downtime
        </ListItem>
        <ListItem>
          <Meta>Repo</Meta>
          <Link
            href="https://github.com/matthewvaishnav/drift"
            target="_blank"
          >
            github.com/matthewvaishnav/drift <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={8}>
        <Button
          as={Link}
          href="https://github.com/matthewvaishnav/drift"
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
        src="/programming-portfolio/images/works/drift-hero.svg"
        alt="drift hero overview"
      />

      <Heading as="h4" fontSize={16} mb={3}>
        What It Does
      </Heading>
      <Paragraph>
        drift watches the shape of a server over time and turns invisible change
        into something inspectable. The goal is simple: if a package version,
        service state, port exposure, file hash, or config value moves, you
        should be able to ask what changed and get a clear answer.
      </Paragraph>

      <SimpleGrid columns={[1, 1, 2]} gap={6} my={6}>
        <Box>
          <Heading as="h5" fontSize={15} mb={2}>
            Core Ideas
          </Heading>
          <List spacing={2}>
            <ListItem>Snapshot system state into a repeatable record</ListItem>
            <ListItem>Diff one snapshot against another</ListItem>
            <ListItem>Highlight meaningful drift instead of raw noise</ListItem>
            <ListItem>Make rollback and investigation easier</ListItem>
          </List>
        </Box>
        <Box>
          <Heading as="h5" fontSize={15} mb={2}>
            Why It Matters
          </Heading>
          <List spacing={2}>
            <ListItem>Faster root-cause analysis after changes</ListItem>
            <ListItem>Better ops hygiene for homelab and small teams</ListItem>
            <ListItem>Version-control thinking applied to infrastructure</ListItem>
            <ListItem>Less guessing when something suddenly breaks</ListItem>
          </List>
        </Box>
      </SimpleGrid>

      <WorkImage
        src="/programming-portfolio/images/works/drift-detail.svg"
        alt="drift snapshot diff flow"
      />

      <Heading as="h4" fontSize={16} mb={3}>
        Portfolio Angle
      </Heading>
      <Paragraph>
        I like projects that make systems easier to reason about. drift fits that
        pattern well: it takes a messy operational problem and gives it a clean
        mental model. The project sits at the intersection of infrastructure,
        observability, and developer experience.
      </Paragraph>

      <Paragraph>
        It is the kind of tool I would keep pushing into a stronger CLI and
        dashboard over time: better diff views, clearer rollback plans, and
        cleaner history for real servers.
      </Paragraph>
    </Container>
  </Layout>
)

export default Drift
