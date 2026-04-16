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
  <Layout title="Out of Orbit">
    <Container>
      <Title>
        Out of Orbit <Badge>2025</Badge>
      </Title>
      <P>
        Vaporwave-themed arcade shooter with optimized object pooling and retro aesthetics.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity, C#, Shader Graph</span>
        </ListItem>
      </List>

      <WorkImage src="/portfolio/images/works/orbit-hero.svg" alt="Out of Orbit" />
    </Container>
  </Layout>
)

export default Work
