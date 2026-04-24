import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="drift">
    <Container>
      <Title>
        drift <Badge>2026</Badge>
      </Title>
      <P>
        A Git-like server state tracker for people who want to know what
        changed, when it changed, and how to get back to a known-good state.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/matthewvaishnav/drift">
            GitHub repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux/macOS/Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, CLI tooling</span>
        </ListItem>
      </List>

      <WorkImage src="/portfolio/images/works/drift-hero.svg" alt="drift" />
      <WorkImage src="/portfolio/images/works/drift-detail.svg" alt="drift" />
    </Container>
  </Layout>
)

export default Work
