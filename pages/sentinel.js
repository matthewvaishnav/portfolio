import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="SENTINEL">
    <Container>
      <Title>
        SENTINEL <Badge>2026</Badge>
      </Title>
      <P>
        An anti-DDoS systems-engineering project built around asynchronous analysis, distributed
        state, dynamic behavioral filtering, and peer threat sharing. Its automated test suite
        exercises the implementation, while the headline detection metrics in the repository come
        from a deterministic CIC-DDoS2019-inspired synthetic benchmark rather than the real
        CIC-DDoS2019 corpus.
      </P>
      <P>
        I treat the synthetic benchmark as a reproducible engineering stress test, not evidence of
        real-world DDoS detection accuracy or production deployment readiness.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/matthewvaishnav/sentinel">
            GitHub repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux/macOS/Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, Redis, WebSockets</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
