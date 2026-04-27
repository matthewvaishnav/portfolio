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
        HistoCore has grown from a research MIL framework into a production-oriented
        pathology platform for real-time whole slide image streaming. Recent updates
        added validated PCam benchmarks, a 1,483-test suite, and an in-progress
        foundation-model track built around Phikon, UNI, and CONCH.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://matthewvaishnav.github.io/computational-pathology-research/">
            Documentation <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Status</Meta>
          <span>Real-time WSI streaming complete; foundation-model benchmarking in progress</span>
        </ListItem>
        <ListItem>
          <Meta>Validation</Meta>
          <span>85.26% PCam accuracy, 0.9394 AUC, 1,483 tests</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux/macOS/Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PyTorch, OpenSlide, FastAPI, DICOM/HL7 FHIR</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
