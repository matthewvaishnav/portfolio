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
  <Layout title="replay">
    <Container>
      <Title>
        replay <Badge>2026</Badge>
      </Title>
      <P>
        Record terminal sessions and automatically generate Ansible playbooks from your actions.
      </P>
      <ListItem>
          <Meta>Platform</Meta>
          <span>Linux/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Ansible, YAML</span>
        </ListItem>
      </List>

      <WorkImage src="/portfolio/images/works/replay-hero.svg" alt="replay" />
    </Container>
  </Layout>
)

export default Work
