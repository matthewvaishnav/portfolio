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
  <Layout title="drift">
    <Container>
      <Title>
        drift <Badge>2026</Badge>
      </Title>
      <P>
        A Git-like history layer for Linux server state: take snapshots, diff them, search them,
        and correlate changes with SSH activity instead of reconstructing an incident from shell
        history and scattered logs.
      </P>

      <Heading as="h3" size="sm" mt={7} mb={3}>
        What it tracks
      </Heading>
      <List ml={4} spacing={2}>
        <ListItem>Packages across apt/dpkg, yum/rpm, pip, snap, npm, and gem.</ListItem>
        <ListItem>systemd services, listening TCP/UDP ports, users, groups, cron, sysctl, mounts, environment state, and kernel modules.</ListItem>
        <ListItem>Content-addressed SHA-256 snapshots stored in an append-only history with gzip compression.</ListItem>
        <ListItem><code>drift blame</code> correlates a change window with SSH login/logout activity.</ListItem>
      </List>

      <Heading as="h3" size="sm" mt={7} mb={3}>
        Operational model
      </Heading>
      <P>
        drift can run manually, on an hourly systemd daemon, or through a PAM hook around SSH
        sessions. The useful part is not just detecting that a file changed; it preserves the
        surrounding machine state so a package upgrade, new service, opened port, account change,
        and kernel-setting change can be examined as one event history.
      </P>

      <List ml={4} my={6} spacing={2}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/matthewvaishnav/drift" target="_blank" rel="noopener noreferrer">
            GitHub repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux; Windows through WSL</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, systemd, PAM, Linux state collectors</span>
        </ListItem>
        <ListItem>
          <Meta>Verification</Meta>
          <Text as="span">Repository includes an automated pytest suite; this page does not promote the older unverified accuracy/MTTR percentages from the security archive.</Text>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
