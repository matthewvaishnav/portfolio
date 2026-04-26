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
  <Layout title="whoops">
    <Container>
      <Title>
        whoops <Badge>2026</Badge>
      </Title>
      <P>
        Intercepts dangerous shell commands before execution. Your last line of defense against terminal mistakes.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Shell Hooks, Bash</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
