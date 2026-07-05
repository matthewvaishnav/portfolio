import { Container, Badge, Link, List, ListItem, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="Paired-Acquisition Neural Factorization for Computational Pathology">
    <Container>
      <Title>
        Paired-Acquisition Neural Factorization <Badge>2025–</Badge>
      </Title>

      <Heading as="h4" size="md" mt={2}>Overview</Heading>
      <P>
        Research-only computational pathology experiments centered on testing whether paired
        acquisitions of the same tissue can reduce scanner/acquisition signal in pathology
        foundation-model embeddings while preserving tissue identity. The work spans SCORPION
        (human prostate), external canine SCC validation, cross-backbone checks, baseline stress
        tests, pair-repeat allocation, and mechanism-hardening audits.
      </P>

      <P>
        The core approach, Paired-Acquisition Neural Factorization, uses paired same-region
        acquisitions (different scanners, same tissue block) to train a factorization that
        separates biological signal from acquisition/scanner signal in frozen foundation-model
        feature spaces. This is a research investigation, not a clinical tool.
      </P>

      <Heading as="h4" size="md" mt={6}>Current Research Packages</Heading>
      <List ml={4} my={4} spacing={2}>
        <ListItem>
          <Meta>Main index</Meta>
          <Link href="https://matthewvaishnav.github.io/computational-pathology-research/" target="_blank">
            Research documentation and results index <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Canine SCC</Meta>
          <Link href="https://matthewvaishnav.github.io/paired-acquisition-factorization-caninescc/paired-acquisition-factorization-caninescc.pdf" target="_blank">
            External multi-scanner validation PDF <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Allocation</Meta>
          <Link href="https://matthewvaishnav.github.io/paired-acquisition-factorization-allocation/paired-acquisition-factorization-allocation.pdf" target="_blank">
            Pair-repeat allocation study PDF <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>SCORPION</Meta>
          <Link href="https://github.com/matthewvaishnav/paired-acquisition-factorization-scorpion" target="_blank">
            GitHub repository <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/matthewvaishnav/computational-pathology-research" target="_blank">
            Main research repository <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" size="md" mt={6}>Key Results</Heading>
      <List ml={4} my={4} spacing={2}>
        <ListItem>
          <Meta>SCORPION DINOv2</Meta>
          <span>Scanner-probe accuracy reduced from 0.7825 to 0.3989 while mean paired cosine improved from 0.8476 to 0.8789.</span>
        </ListItem>
        <ListItem>
          <Meta>Canine SCC DINOv2</Meta>
          <span>Scanner-probe accuracy reduced from 0.7529 to 0.3614 while paired cosine improved from 0.6960 to 0.7300.</span>
        </ListItem>
        <ListItem>
          <Meta>Cross-backbone</Meta>
          <span>Phikon and ResNet50 backbones reproduce the scanner-suppression / tissue-preservation pattern.</span>
        </ListItem>
        <ListItem>
          <Meta>Baseline stress</Meta>
          <span>Linear scanner projection and PCA do not match the scanner-suppression / tissue-preservation tradeoff.</span>
        </ListItem>
        <ListItem>
          <Meta>Acquisition-branch audit</Meta>
          <span>Acquisition branch retains higher scanner recoverability while carrying much lower tissue-identity retrieval than biological branch.</span>
        </ListItem>
        <ListItem>
          <Meta>Pair-structure boundary</Meta>
          <span>True same-region pairs preserve tissue identity best. Looser/random pairings suppress scanner but do not preserve tissue identity as well.</span>
        </ListItem>
      </List>

      <Heading as="h4" size="md" mt={6}>Mechanism-Hardening Audits</Heading>
      <P>
        Post-freeze audits strengthen the mechanism interpretation without expanding the claim
        surface. The acquisition-branch audit confirms that branch separation is measurable:
        the acquisition branch retains higher scanner recoverability while the biological branch
        preserves tissue-identity retrieval. The pair-structure boundary test shows that
        biological pairing structure matters: true same-region pairs preserve tissue identity
        best, and looser or random pairings do not recover true-pair behavior even though they
        can still suppress scanner signal.
      </P>
      <P>
        These are research findings under controlled experimental conditions. They support the
        interpretation that the factorization is doing more than simple scanner suppression, but
        they do not prove full factorization or establish clinical validity.
      </P>

      <Heading as="h4" size="md" mt={6}>Earlier Work</Heading>
      <List ml={4} my={4} spacing={2}>
        <ListItem><Meta>PANDA</Meta><span>10,611 readable slide-level Phikon feature vectors. Gated AttentionMIL QWK 0.8100. Tuned TransnnMIL QWK 0.8155 / 0.8225 / 0.8086.</span></ListItem>
        <ListItem><Meta>PCam</Meta><span>95.37% validation AUC. 85.26% test accuracy and 0.9394 test AUC on the full 32,768-sample test set.</span></ListItem>
        <ListItem><Meta>Federated stress</Meta><span>15-seed simulated-federation PANDA studies of FedAvg under dominant-site label corruption and systematic ordinal threshold bias. Cross-site blending improved robustness when the dominant simulated site became unreliable.</span></ListItem>
        <ListItem><Meta>TransnnMIL</Meta><span>Custom multiple-instance learning architecture direction for WSI modeling — earlier slide-level MIL research prototype work.</span></ListItem>
      </List>

      <Heading as="h4" size="md" mt={6}>Claim Boundary</Heading>
      <P>
        Research-only. Not clinically validated. Not diagnostic software. Not intended for
        clinical deployment, patient care, or medical decision-making. Results are from
        controlled experiments on specific datasets (SCORPION, canine SCC, PANDA, PCam) with
        specific foundation-model backbones (DINOv2, Phikon, ResNet50). Findings use language
        like &ldquo;supports,&rdquo; &ldquo;suggests,&rdquo; and &ldquo;across audited
        settings&rdquo; — they do not prove, solve, or establish clinical validity. Simulated
        federated experiments are not real hospital deployments.
      </P>

      <Heading as="h4" size="md" mt={6}>Links</Heading>
      <List ml={4} my={4}>
        <ListItem><Meta>Research docs</Meta><Link href="https://matthewvaishnav.github.io/computational-pathology-research/" target="_blank">Research documentation index <ExternalLinkIcon mx="2px"/></Link></ListItem>
        <ListItem><Meta>GitHub</Meta><Link href="https://github.com/matthewvaishnav/computational-pathology-research" target="_blank">Main repository <ExternalLinkIcon mx="2px"/></Link></ListItem>
        <ListItem><Meta>SCORPION</Meta><Link href="https://github.com/matthewvaishnav/paired-acquisition-factorization-scorpion" target="_blank">SCORPION package <ExternalLinkIcon mx="2px"/></Link></ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
