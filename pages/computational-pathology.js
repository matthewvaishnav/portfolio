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
        Production-grade PyTorch framework for whole-slide image analysis achieving 85.26% accuracy (0.9394 AUC) on PatchCamelyon benchmark. 
        Features 8-12x training optimization (torch.compile, AMP, GPU optimization), attention-based MIL models (AttentionMIL, CLAM, TransMIL), 
        first open-source federated learning for digital pathology with differential privacy, and production-ready PACS integration with DICOM/FHIR support.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/matthewvaishnav/computational-pathology-research">
            Repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Performance</Meta>
          <span>85.26% accuracy, 0.9394 AUC on 262K training samples</span>
        </ListItem>
        <ListItem>
          <Meta>Optimization</Meta>
          <span>8-12x training speedup with torch.compile, AMP, GPU optimization</span>
        </ListItem>
        <ListItem>
          <Meta>Models</Meta>
          <span>AttentionMIL, CLAM, TransMIL with attention visualization</span>
        </ListItem>
        <ListItem>
          <Meta>Testing</Meta>
          <span>1,448 tests with 55% coverage, bootstrap confidence intervals</span>
        </ListItem>
        <ListItem>
          <Meta>Clinical</Meta>
          <span>PACS integration, DICOM/FHIR support, federated learning with differential privacy</span>
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
