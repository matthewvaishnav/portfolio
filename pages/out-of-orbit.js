import {
  Container,
  Badge,
  List,
  ListItem
} from '@chakra-ui/react'
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
          <Meta>Source</Meta>
          <span>Private repository; this page is the public project summary</span>
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
