import { Container, Badge, Link, List, ListItem, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="Computational Pathology">
    <Container>
      <Title>
        Computational Pathology, Federated Oncology Learning, and Mathematical Validation Infrastructure <Badge>2025–</Badge>
      </Title>

      <P>
        My flagship research and engineering project: a computational pathology platform combining whole-slide image AI, benchmark validation, federated oncology learning, mathematical weighting diagnostics, and deployment-oriented research infrastructure.
      </P>

      <P>
        The work includes TransnnMIL v2.0 model development, PathologyFL federated learning experiments, FAIR-WEIGHTS-H institutional weighting, PCam validation, threshold optimization, benchmark automation, and reproducible documentation.
      </P>

      <Heading as="h4" size="md" mt={6}>Key Results</Heading>
      <List ml={4} my={4}>
        <ListItem><Meta>PCam</Meta><span>85.26% test accuracy, 0.9394 AUC, 32,768-sample test set</span></ListItem>
        <ListItem><Meta>Ranking</Meta><span>#1 by AUC among 11 compared methods</span></ListItem>
        <ListItem><Meta>Training</Meta><span>262,144 training samples, 1,000 bootstrap confidence interval resamples</span></ListItem>
        <ListItem><Meta>Threshold</Meta><span>61.7% reduction in missed tumor predictions after threshold optimization</span></ListItem>
        <ListItem><Meta>Federated</Meta><span>Balanced + heterogeneous PCam benchmarks with FAIR-WEIGHTS-H diagnostics</span></ListItem>
      </List>

      <Heading as="h4" size="md" mt={6}>Research Components</Heading>
      <List ml={4} my={4}>
        <ListItem><Meta>TransnnMIL v2.0</Meta><span>Custom multiple-instance learning architecture direction for WSI modeling</span></ListItem>
        <ListItem><Meta>PathologyFL</Meta><span>Federated learning infrastructure for pathology experiments</span></ListItem>
        <ListItem><Meta>FAIR-WEIGHTS-H</Meta><span>Institutional weighting with entropy, N_eff, fairness, and contribution diagnostics</span></ListItem>
        <ListItem><Meta>Validation</Meta><span>Synthetic → PCam → Federated → Heterogeneous → Camelyon17 ladder</span></ListItem>
      </List>

      <Heading as="h4" size="md" mt={6}>Links</Heading>
      <List ml={4} my={4}>
        <ListItem><Meta>Docs</Meta><Link href="https://matthewvaishnav.github.io/computational-pathology-research/">Research documentation <ExternalLinkIcon mx="2px"/></Link></ListItem>
        <ListItem><Meta>GitHub</Meta><Link href="https://github.com/matthewvaishnav/computational-pathology-research">Repository <ExternalLinkIcon mx="2px"/></Link></ListItem>
        <ListItem><Meta>Benchmarks</Meta><span>PCam, federated pathology, threshold optimization, validation reports</span></ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work