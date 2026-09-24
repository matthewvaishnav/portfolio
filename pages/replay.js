import {
  Badge,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="replay">
    <Container>
      <Title>
        replay <Badge>2026</Badge>
      </Title>
      <P>
        A shell-session-to-infrastructure tool: record a local or SSH session, discard inspection
        noise, and convert state-changing commands into an idempotent Ansible playbook.
      </P>

      <Heading as="h3" size="sm" mt={7} mb={3}>
        Translation layer
      </Heading>
      <List ml={4} spacing={2}>
        <ListItem>Maps package installs, services, users, groups, files, links, Git clones, downloads, UFW/iptables, sysctl, cron, and common configuration edits to Ansible modules.</ListItem>
        <ListItem>Skips read-only commands such as <code>ls</code>, <code>cat</code>, <code>ps</code>, <code>df</code>, and inspection-only HTTP requests.</ListItem>
        <ListItem>Retains unsupported operations as explicit shell tasks instead of silently dropping them.</ListItem>
        <ListItem>Deduplicates and reorders generated tasks into a more coherent provisioning sequence.</ListItem>
      </List>

      <Heading as="h3" size="sm" mt={7} mb={3}>
        Input modes
      </Heading>
      <P>
        replay can wrap a live PTY/SSH session, record a local shell, translate a command file, or
        consume recent shell history. The project is aimed at the gap between “I fixed it manually”
        and “we have a reproducible configuration for the next machine.”
      </P>

      <List ml={4} my={6} spacing={2}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/matthewvaishnav/replay" target="_blank" rel="noopener noreferrer">
            GitHub repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, PTY/SSH capture, Ansible, YAML</span>
        </ListItem>
        <ListItem>
          <Meta>Verification</Meta>
          <Text as="span">Repository includes an automated pytest suite; historical “time savings” and command-mapping percentages are not presented here as validated outcome metrics.</Text>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
