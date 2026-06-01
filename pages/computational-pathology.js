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
        A research and engineering framework for whole-slide histopathology modeling, multiple-instance learning, federated oncology validation, benchmark automation, failure-mode analysis, and mathematical validation tooling.
      </P>

      <P>
        The goal is not just to train a model, but to build the surrounding infrastructure needed to make computational pathology experiments reproducible, inspectable, and extensible.
      </P>

      <P>
        Current work includes PANDA prostate cancer grading with Phikon features, PCam benchmark validation, TransnnMIL model development, PathologyFL federated learning experiments, dominance-aware aggregation research, threshold analysis, and reproducible documentation.
      </P>

      <Heading as="h4" size="md" mt={6}>Key Results</Heading>
      <List ml={4} my={4}>
        <ListItem><Meta>PCam</Meta><span>95.37% validation AUC; 85.26% test accuracy and 0.9394 test AUC on the full 32,768-sample test set</span></ListItem>
        <ListItem><Meta>PANDA data</Meta><span>10,611 readable slide-level Phikon feature vectors after HDF5 read verification; 768-dimensional mean-pooled embeddings</span></ListItem>
        <ListItem><Meta>PANDA baseline</Meta><span>Mean-pooled Phikon + MLP: QWK 0.7274</span></ListItem>
        <ListItem><Meta>AttentionMIL</Meta><span>Gated AttentionMIL: QWK 0.8100</span></ListItem>
        <ListItem><Meta>TransnnMIL</Meta><span>Tuned repeated-seed QWK: 0.8155 / 0.8225 / 0.8086</span></ListItem>
        <ListItem><Meta>FedAvg failure</Meta><span>15-seed full-PANDA stress studies show FedAvg becomes vulnerable when the dominant simulated site is unreliable</span></ListItem>
        <ListItem><Meta>Label-noise stress</Meta><span>Cross-site blending significantly improves global QWK at 25% and 35% dominant-site label corruption and worst-site QWK at 45%</span></ListItem>
        <ListItem><Meta>Threshold-shift stress</Meta><span>Under systematic conservative dominant-site grading bias, cross-site blending improves global QWK, worst-site QWK, mean-site QWK, accuracy, and macro-F1 across 25%, 35%, and 45% shift levels</span></ListItem>
        <ListItem><Meta>Detector switch</Meta><span>Clean-calibrated FedAvg validation diagnostics can trigger dominance-aware switching away from sample-size weighting in unsafe regimes</span></ListItem>
      </List>

      <Heading as="h4" size="md" mt={6}>Research Components</Heading>
      <List ml={4} my={4}>
        <ListItem><Meta>TransnnMIL</Meta><span>Custom multiple-instance learning architecture direction for WSI modeling</span></ListItem>
        <ListItem><Meta>PathologyFL</Meta><span>Federated learning infrastructure for pathology experiments</span></ListItem>
        <ListItem><Meta>Dominance-aware FL</Meta><span>FedAvg failure-mode analysis, cross-site blending, oracle switches, observable detector switches, and threshold-shift transfer tests</span></ListItem>
        <ListItem><Meta>FAIR-WEIGHTS-H</Meta><span>Institutional weighting research with contribution, ordinal harm, entropy, effective-institution diagnostics, and null-result analysis</span></ListItem>
        <ListItem><Meta>Validation</Meta><span>PCam patch validation → PANDA slide-level validation → simulated federated robustness → planned Camelyon16/17 multi-center validation</span></ListItem>
      </List>

      <Heading as="h4" size="md" mt={6}>Current Research Claim</Heading>
      <P>
        On full PANDA-derived Phikon slide features, FedAvg is strongest when sites are clean but becomes unsafe when the largest simulated client becomes less reliable. Cross-site blending and dominance-aware switching reduce dependence on raw sample count and improve robustness under dominant-site label noise and systematic conservative ordinal grading bias. This is a research result from simulated federations, not clinical validation.
      </P>

      <Heading as="h4" size="md" mt={6}>Claim Boundary</Heading>
      <P>
        Research-only at this stage. Not clinically validated, not diagnostic software, and not currently used for patient care. The PANDA studies are simulated-federation experiments over real pathology-derived feature vectors, not real hospital federated deployments. Long-term goal is responsible clinical translation after proper validation, regulatory review, security review, usability testing, and deployment testing.
      </P>

      <Heading as="h4" size="md" mt={6}>Links</Heading>
      <List ml={4} my={4}>
        <ListItem><Meta>Docs</Meta><Link href="https://matthewvaishnav.github.io/computational-pathology-research/">Research documentation <ExternalLinkIcon mx="2px"/></Link></ListItem>
        <ListItem><Meta>GitHub</Meta><Link href="https://github.com/matthewvaishnav/computational-pathology-research">Repository <ExternalLinkIcon mx="2px"/></Link></ListItem>
        <ListItem><Meta>Dominance switch</Meta><Link href="https://matthewvaishnav.github.io/computational-pathology-research/results/dominance-aware-switch-full-panda">Full PANDA dominance-aware switch results <ExternalLinkIcon mx="2px"/></Link></ListItem>
        <ListItem><Meta>PANDA</Meta><Link href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/results/panda-slide-level-baselines.md">Slide-level baseline results <ExternalLinkIcon mx="2px"/></Link></ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work