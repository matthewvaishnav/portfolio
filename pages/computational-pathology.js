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
        Production-grade PyTorch framework for computational pathology research building
        ML infrastructure with attention-based MIL models, federated learning with
        differential privacy, and clinical PACS integration for hospital deployment.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://matthewvaishnav.github.io/computational-pathology-research/">
            Documentation <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Testing</Meta>
          <span>3,006 tests with comprehensive property-based validation</span>
        </ListItem>
        <ListItem>
          <Meta>Performance</Meta>
          <span>8-12x training optimization, 93.94% AUC on PCam in 2.25 hours</span>
        </ListItem>
        <ListItem>
          <Meta>Clinical</Meta>
          <span>PACS integration, real-time inference (&lt;5s), production-ready</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PyTorch 2.0+, Federated Learning, DICOM/FHIR, OpenSlide</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
