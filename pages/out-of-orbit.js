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
  <Layout title="Out of Orbit">
    <Container>
      <Title>
        Out of Orbit <Badge>2025</Badge>
      </Title>
      <P>
        A C++ arcade shoot-em-up built with Raylib, featuring fixed-size object pools, multiple ship archetypes, escalating waves, bosses, and a data-driven upgrade loop.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/matthewvaishnav/out-of-orbit" target="_blank" rel="noopener noreferrer">
            GitHub repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux; portable C++17/Raylib codebase</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++17, Raylib</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
