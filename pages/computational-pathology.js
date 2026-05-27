import { Container, Badge, Link, List, ListItem, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="Computational Pathology AI Research Framework">
    <Container>
      <Title>
        Computational Pathology AI Research Framework <Badge>2025–</Badge>
      </Title>

      <P>
        A research and engineering framework for whole-slide histopathology modeling, multiple-instance learning, federated oncology validation, benchmark automation, and mathematical validation tooling.
      </P>

      <P>
        The goal is not just to train a model, but to build the surrounding infrastructure needed to make computational pathology experiments reproducible, inspectable, and extensible.
      </P>

      <P>
        Current work includes PANDA prostate cancer grading with Phikon features, PCam benchmark validation, TransnnMIL model development, PathologyFL federated learning experiments, FAIR-WEIGHTS-H institutional weighting research, threshold analysis, and reproducible documentation.
      </P>

      <Heading as="h4" size="md" mt={6}>Key Results</Heading>
      <List ml={4} my={4}>
        <ListItem><Meta>PCam</Meta><span>95.37% validation AUC; 85.26% test accuracy and 0.9394 test AUC on the full 32,768-sample test set</span></ListItem>
        <ListItem><Meta>PANDA data</Meta><span>10,611 readable slide-level Phikon feature files after HDF5 read verification</span></ListItem>
        <ListItem><Meta>PANDA baseline</Meta><span>Mean-pooled Phikon + MLP: QWK 0.7274</span></ListItem>
        <ListItem><Meta>AttentionMIL</Meta><span>Gated AttentionMIL: QWK 0.8100</span></ListItem>
        <ListItem><Meta>TransnnMIL</Meta><span>Tuned repeated-seed QWK: 0.8155 / 0.8225 / 0.8086</span></ListItem>
        <ListItem><Meta>Ablation</Meta><span>High learning rate reduced TransnnMIL to QWK 0.7403, showing optimization sensitivity</span></ListItem>
      </List>

      <Heading as="h4" size="md" mt={6}>Research Components</Heading>
      <List ml={4} my={4}>
        <ListItem><Meta>TransnnMIL</Meta><span>Custom multiple-instance learning architecture direction for WSI modeling</span></ListItem>
        <ListItem><Meta>PathologyFL</Meta><span>Federated learning infrastructure for pathology experiments</span></ListItem>
        <ListItem><Meta>FAIR-WEIGHTS-H</Meta><span>Institutional weighting research with contribution, uncertainty, subgroup, entropy, and effective-institution diagnostics</span></ListItem>
        <ListItem><Meta>Validation</Meta><span>PCam patch validation → PANDA slide-level validation → planned Camelyon16/17 multi-center validation</span></ListItem>
      </List>

      <Heading as="h4" size="md" mt={6}>Claim Boundary</Heading>
      <P>
        Research-only at this stage. Not clinically validated, not diagnostic software, and not currently used for patient care. Long-term goal is responsible clinical translation after proper validation, regulatory review, security review, usability testing, and deployment testing.
      </P>

      <Heading as="h4" size="md" mt={6}>Links</Heading>
      <List ml={4} my={4}>
        <ListItem><Meta>Docs</Meta><Link href="https://matthewvaishnav.github.io/computational-pathology-research/">Research documentation <ExternalLinkIcon mx="2px"/></Link></ListItem>
        <ListItem><Meta>GitHub</Meta><Link href="https://github.com/matthewvaishnav/computational-pathology-research">Repository <ExternalLinkIcon mx="2px"/></Link></ListItem>
        <ListItem><Meta>PANDA</Meta><Link href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/results/panda-slide-level-baselines.md">Slide-level baseline results <ExternalLinkIcon mx="2px"/></Link></ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
