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
        Production-grade PyTorch framework for computational pathology research with
        validated benchmarks on PatchCamelyon and CAMELYON16. Features 8-12x training
        optimization, federated learning with differential privacy, production-ready
        PACS integration, and comprehensive testing infrastructure.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://matthewvaishnav.github.io/computational-pathology-research/">
            Documentation <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Performance</Meta>
          <span>100% validation AUC (epoch 10), 85.26% test accuracy, 0.9394 AUC on 32K test samples</span>
        </ListItem>
        <ListItem>
          <Meta>Optimization</Meta>
          <span>8-12x faster training (2-3 hours vs 20-40 hours), 85% GPU utilization</span>
        </ListItem>
        <ListItem>
          <Meta>Testing</Meta>
          <span>1,448 tests with 55% coverage, 100+ property-based correctness tests</span>
        </ListItem>
        <ListItem>
          <Meta>Clinical</Meta>
          <span>PACS integration, HIPAA compliance, real-time inference (&lt;5s)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PyTorch 2.0+, OpenSlide, DICOM/FHIR, Federated Learning</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
