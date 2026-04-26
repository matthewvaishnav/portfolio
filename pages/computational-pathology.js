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
  <Layout title="HistoCore">
    <Container>
      <Title>
        HistoCore <Badge>2025-</Badge>
      </Title>
      <P>
        A production-grade PyTorch framework for computational pathology research.
        Built for whole slide image analysis with attention-based MIL models and 1,448 tests.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://matthewvaishnav.github.io/computational-pathology-research/">
            Documentation <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux/macOS/Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PyTorch, Python, OpenSlide</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
