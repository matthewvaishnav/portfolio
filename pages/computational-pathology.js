import { Container, Badge, Link, List, ListItem, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="Independent Computational Pathology Research">
    <Container>
      <Title>
        Independent Computational Pathology Research <Badge>2025–</Badge>
      </Title>

      <Heading as="h4" size="md" mt={2}>Overview</Heading>
      <P>
        I am building an independent computational pathology research framework for whole-slide
        histopathology modeling, multiple-instance learning, scanner and acquisition robustness,
        representation identifiability, and reproducible healthcare-AI research infrastructure.
      </P>
      <P>
        My primary research line is Paired-Acquisition Neural Factorization. It uses multiple scans
        of the same underlying tissue region to factor frozen pathology embeddings into a
        scanner-suppressed tissue factor and an acquisition-specific factor. The central question is
        whether paired acquisitions can reduce linearly recoverable scanner identity while
        preserving same-tissue information. This is a deliberately narrower claim than proving
        disease biology or perfect biological/acquisition disentanglement.
      </P>

      <Heading as="h4" size="md" mt={6}>Current Research</Heading>
      <List ml={4} my={4} spacing={3}>
        <ListItem>
          <Meta>Paired acquisition</Meta>
          <span>Paired-Acquisition Neural Factorization on the five-scanner SCORPION benchmark.</span>
        </ListItem>
        <ListItem>
          <Meta>External validation</Meta>
          <span>Locked multi-scanner validation on an independent canine cutaneous squamous-cell carcinoma dataset.</span>
        </ListItem>
        <ListItem>
          <Meta>Allocation</Meta>
          <span>Matched-budget experiments testing unique biological pair diversity against repeated exposure to fewer tissue anchors.</span>
        </ListItem>
        <ListItem>
          <Meta>Center leakage</Meta>
          <span>CAMELYON17 center-subspace projection studies that attenuate source-center information while auditing tumor-signal preservation.</span>
        </ListItem>
        <ListItem>
          <Meta>Whole-slide MIL</Meta>
          <span>PANDA slide-level grading with mean pooling, gated AttentionMIL, and TransnnMIL over frozen pathology features.</span>
        </ListItem>
        <ListItem>
          <Meta>Patch classification</Meta>
          <span>PatchCamelyon convolutional classification and full validation/test evaluation.</span>
        </ListItem>
        <ListItem>
          <Meta>Federated pathology</Meta>
          <span>Controlled feature-level simulations of aggregation, dominant-site corruption, ordinal bias, and held-out-center generalization.</span>
        </ListItem>
      </List>

      <Heading as="h4" size="md" mt={6}>Selected Results</Heading>
      <List ml={4} my={4} spacing={3}>
        <ListItem>
          <Meta>SCORPION scale</Meta>
          <span>48 original human H&amp;E slides, 480 aligned tissue regions, five scanners, and 2,400 real-human-tissue patches evaluated across DINOv2-Base, Phikon, and ImageNet ResNet50 features.</span>
        </ListItem>
        <ListItem>
          <Meta>SCORPION DINOv2</Meta>
          <span>Scanner-probe accuracy reduced from 0.7825 to 0.3989 while mean paired cosine improved from 0.8476 to 0.8789, with near-perfect tissue retrieval retained.</span>
        </ListItem>
        <ListItem>
          <Meta>Cross-backbone transfer</Meta>
          <span>The frozen objective reproduced the scanner-suppression and tissue-preservation pattern on Phikon and ResNet50, arguing against a DINOv2-specific explanation.</span>
        </ListItem>
        <ListItem>
          <Meta>Canine SCC scale</Meta>
          <span>44 biological samples, five scanners, 805 complete five-view regions, and 4,025 image views in the geometry-qualified public subset.</span>
        </ListItem>
        <ListItem>
          <Meta>Canine SCC validation</Meta>
          <span>Locked five-fold DINOv2-Base validation reduced scanner-probe accuracy from 0.7529 to 0.3614 while paired cosine improved from 0.6960 to 0.7300 and same-region retrieval was preserved.</span>
        </ListItem>
        <ListItem>
          <Meta>Pair-repeat allocation</Meta>
          <span>Matched budgets of 6,400 and 12,800 pair presentations supported broader biological pair diversity over repeatedly presenting fewer anchors, with additional gains from doubling the total budget.</span>
        </ListItem>
        <ListItem>
          <Meta>CAMELYON17</Meta>
          <span>Supervised center-subspace projection reduced center accuracy from 0.8946 to 0.7636 while preserving tumor AUC near 0.9903.</span>
        </ListItem>
        <ListItem>
          <Meta>PatchCamelyon</Meta>
          <span>95.37% validation AUC, with 85.26% test accuracy and 0.9394 test AUC on the full 32,768-sample test set.</span>
        </ListItem>
        <ListItem>
          <Meta>PANDA data</Meta>
          <span>Validated feature readability across 10,611 slide-level Phikon feature files before downstream MIL evaluation.</span>
        </ListItem>
        <ListItem>
          <Meta>PANDA MIL</Meta>
          <span>Mean-pooled Phikon plus MLP reached QWK 0.7274; gated AttentionMIL reached 0.8100; tuned TransnnMIL repeated-seed runs reached 0.8155, 0.8225, and 0.8086.</span>
        </ListItem>
      </List>

      <Heading as="h4" size="md" mt={6}>Research Reliability Infrastructure</Heading>
      <P>
        The framework includes immutable provenance identifiers, SHA-256 artifact bindings,
        dataset/split/configuration/environment/command/commit lineage, corruption tests,
        resumable factorial execution, preregistered smoke grids, fail-closed release validators,
        and dedicated GitHub Actions gates. Large raw images, feature archives, checkpoints, and
        generated run directories remain outside Git, while public repositories contain the code,
        frozen protocols, evidence tables, reports, and validation contracts needed to audit each
        supported claim.
      </P>

      <Heading as="h4" size="md" mt={6}>Public Research Packages</Heading>
      <List ml={4} my={4} spacing={2}>
        <ListItem>
          <Meta>Main index</Meta>
          <Link href="https://matthewvaishnav.github.io/computational-pathology-research/" target="_blank" rel="noopener noreferrer">
            Research documentation and results index <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>SCORPION</Meta>
          <Link href="https://matthewvaishnav.github.io/paired-acquisition-factorization-scorpion/paired-acquisition-factorization-scorpion.pdf" target="_blank" rel="noopener noreferrer">
            Core paired-acquisition study PDF <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Canine SCC</Meta>
          <Link href="https://matthewvaishnav.github.io/paired-acquisition-factorization-caninescc/paired-acquisition-factorization-caninescc.pdf" target="_blank" rel="noopener noreferrer">
            External multi-scanner validation PDF <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Allocation</Meta>
          <Link href="https://matthewvaishnav.github.io/paired-acquisition-factorization-allocation/paired-acquisition-factorization-allocation.pdf" target="_blank" rel="noopener noreferrer">
            Pair-repeat allocation study PDF <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/matthewvaishnav/computational-pathology-research" target="_blank" rel="noopener noreferrer">
            Main research repository <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" size="md" mt={6}>Claim Boundary</Heading>
      <P>
        Research-only. Not clinically validated. Not diagnostic software. Not intended for clinical
        deployment, patient care, or medical decision-making. Results come from controlled studies
        on specific datasets, feature backbones, folds, and preprocessing conditions. Simulated
        federated experiments are not real hospital deployments. The paired-acquisition results
        support scanner-suppressed tissue representation and factor-separation interpretations
        across audited settings; they do not prove disease biology, perfect disentanglement,
        diagnostic equivalence, clinical safety, or improved patient outcomes.
      </P>
    </Container>
  </Layout>
)

export default Work
