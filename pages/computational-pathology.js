import {
  Badge,
  Box,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const Work = () => {
  const muted = useColorModeValue('gray.600', 'gray.400')
  const statusBg = useColorModeValue('teal.50', 'whiteAlpha.50')
  const statusBorder = useColorModeValue('teal.200', 'whiteAlpha.200')

  return (
    <Layout title="Independent Computational Pathology Research">
      <Container px={0}>
        <Title>
          Independent Computational Pathology Research <Badge>2025–present</Badge>
        </Title>

        <Heading as="h2" size="md" mt={2} mb={3}>
          Overview
        </Heading>
        <P>
          I am building an independent computational pathology research framework for whole-slide
          histopathology modeling, multiple-instance learning, scanner and acquisition robustness,
          representation auditing, and reproducible healthcare-AI research infrastructure.
        </P>
        <P>
          My primary research line is Paired-Acquisition Neural Factorization. It uses multiple scans
          of the same underlying tissue region to learn a tissue-oriented representation with reduced
          linearly recoverable scanner identity and an acquisition representation that retains scanner
          information. The current evidence supports partial structured separation under the tested
          conditions, not pure biological factors or perfect biological/acquisition disentanglement.
        </P>

        <Box
          my={{ base: 7, md: 8 }}
          p={{ base: 5, md: 6 }}
          border="1px solid"
          borderColor={statusBorder}
          borderRadius="xl"
          bg={statusBg}
        >
          <Text fontWeight="bold" mb={2}>
            Current scientific status
          </Text>
          <Text fontSize="sm" color={muted} lineHeight="1.75">
            Corrected paired-acquisition evidence was promoted on July 26, 2026. The SCORPION
            capacity-matched campaign and canine dimensionality × cross-covariance factorial are
            complete and promoted within the repository&apos;s claim boundary. The public paper remains
            on scientific-audit hold, and historical TransnnMIL fusion claims remain withdrawn pending
            clean controlled reruns.
          </Text>
        </Box>

        <Heading as="h2" size="md" mt={8} mb={3}>
          Current Research
        </Heading>
        <List ml={{ base: 0, md: 4 }} my={4} spacing={4}>
          <ListItem>
            <Meta>Paired acquisition</Meta>
            <span>Corrected fold-aware Paired-Acquisition Neural Factorization evaluation on the five-scanner SCORPION benchmark.</span>
          </ListItem>
          <ListItem>
            <Meta>Capacity-matched ablations</Meta>
            <span>A 175-fit campaign with a true equal-capacity two-branch control and registered objective ablations.</span>
          </ListItem>
          <ListItem>
            <Meta>External validation</Meta>
            <span>Biological-sample-blocked canine SCC validation with a corrected fixed five-category audit.</span>
          </ListItem>
          <ListItem>
            <Meta>Factorial analysis</Meta>
            <span>A completed 450-cell canine SCC dimensionality × cross-covariance study with fold-aware aggregate analysis.</span>
          </ListItem>
          <ListItem>
            <Meta>Prospective baselines</Meta>
            <span>Preregistered paired affine and orthogonal-Procrustes comparisons; no comparative result is claimed before execution and promotion.</span>
          </ListItem>
          <ListItem>
            <Meta>Allocation</Meta>
            <span>Matched-budget experiments testing unique biological pair diversity against repeated exposure to fewer tissue anchors.</span>
          </ListItem>
          <ListItem>
            <Meta>Center leakage</Meta>
            <span>CAMELYON17 center-subspace projection studies that attenuate source-center information while auditing tumor signal.</span>
          </ListItem>
          <ListItem>
            <Meta>Whole-slide MIL</Meta>
            <span>PANDA slide-level modeling with mean pooling, gated AttentionMIL, and a repaired TransnnMIL implementation awaiting matched reruns.</span>
          </ListItem>
        </List>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Selected Evidence
        </Heading>
        <List ml={{ base: 0, md: 4 }} my={4} spacing={4}>
          <ListItem>
            <Meta>SCORPION scale</Meta>
            <span>48 original human H&amp;E slides, 480 aligned tissue regions, five scanners, and 2,400 image patches across DINOv2-Base, Phikon, and ImageNet ResNet50 features.</span>
          </ListItem>
          <ListItem>
            <Meta>SCORPION scanner signal</Meta>
            <span>On the documented DINOv2 protocol, scanner-probe accuracy in the tissue-oriented representation decreased from 0.7825 to 0.3989 while same-region retrieval remained largely preserved.</span>
          </ListItem>
          <ListItem>
            <Meta>Capacity-matched campaign</Meta>
            <span>All 175 registered fits were validated under the equal-capacity design, with objective-level conclusions bounded to the preregistered controls.</span>
          </ListItem>
          <ListItem>
            <Meta>Canine SCC factorial</Meta>
            <span>All 450 registered cells were validated. The analysis found no universal dimensionality effect or stable operating point; cross-covariance regularization reduced measured branch cross-covariance without a uniform scanner/category benefit.</span>
          </ListItem>
          <ListItem>
            <Meta>Cross-backbone transfer</Meta>
            <span>The frozen SCORPION objective reproduced the scanner-suppression and tissue-structure pattern across DINOv2-Base, Phikon, and ResNet50 under the tested protocol.</span>
          </ListItem>
          <ListItem>
            <Meta>Pair-repeat allocation</Meta>
            <span>Matched budgets of 6,400 and 12,800 pair presentations supported broader biological pair diversity over repeatedly presenting fewer anchors, within that study&apos;s own protocol.</span>
          </ListItem>
          <ListItem>
            <Meta>CAMELYON17</Meta>
            <span>Center-subspace projection reduced center recoverability while tumor AUC remained near 0.9903 in a centralized frozen-feature mechanism study.</span>
          </ListItem>
          <ListItem>
            <Meta>PatchCamelyon</Meta>
            <span>The documented model achieved 0.9394 ROC AUC and 0.8526 accuracy on one official patch-level test split.</span>
          </ListItem>
          <ListItem>
            <Meta>PANDA data</Meta>
            <span>Feature readability was validated across 10,611 slide-level Phikon feature files before downstream MIL evaluation.</span>
          </ListItem>
          <ListItem>
            <Meta>Whole-slide architecture status</Meta>
            <span>Historical TransnnMIL QWK values remain records of the old execution path and are not used as evidence that fusion or topology improved performance. Repaired matched reruns are required.</span>
          </ListItem>
        </List>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Research Reliability Infrastructure
        </Heading>
        <P>
          The framework includes immutable provenance identifiers, SHA-256 artifact bindings,
          dataset/split/configuration/environment/command/commit lineage, corruption tests,
          resumable factorial execution, preregistered analyses, fail-closed release validators, and
          dedicated GitHub Actions gates. Large raw images, feature archives, checkpoints, and
          generated run directories remain outside Git, while the public repository contains the
          code, frozen protocols, evidence tables, reports, and validation contracts needed to audit
          each supported claim.
        </P>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Public Research Record
        </Heading>
        <List ml={{ base: 0, md: 4 }} my={4} spacing={3}>
          <ListItem>
            <Meta>Claim boundary</Meta>
            <Link
              href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/CLAIM_BOUNDARY.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Authoritative current claims and exclusions <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Corrected evidence</Meta>
            <Link
              href="https://github.com/matthewvaishnav/computational-pathology-research/tree/main/evidence/paired_acquisition/corrected-20260726"
              target="_blank"
              rel="noopener noreferrer"
            >
              Forward-valid paired-acquisition evidence package <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Capacity matched</Meta>
            <Link
              href="https://github.com/matthewvaishnav/computational-pathology-research/tree/main/evidence/paired_acquisition/scorpion-capacity-matched-20260726"
              target="_blank"
              rel="noopener noreferrer"
            >
              Validated 175-fit SCORPION package <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Factorial</Meta>
            <Link
              href="https://github.com/matthewvaishnav/computational-pathology-research/tree/main/evidence/paired_acquisition/dimensionality-xcov-factorial-20260726"
              target="_blank"
              rel="noopener noreferrer"
            >
              Validated 450-cell dimensionality × cross-covariance package <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Study index</Meta>
            <Link
              href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/studies/index.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Focused study repositories and documents <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link
              href="https://github.com/matthewvaishnav/computational-pathology-research"
              target="_blank"
              rel="noopener noreferrer"
            >
              Main research repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <Heading as="h2" size="md" mt={9} mb={3}>
          Claim Boundary
        </Heading>
        <P>
          Research-only. Not clinically validated. Not diagnostic software. Not intended for clinical
          deployment, patient care, or medical decision-making. Results come from controlled studies
          on specific datasets, feature backbones, folds, preprocessing conditions, and simulated
          settings. The paired-acquisition evidence supports partial structured separation under the
          tested conditions; it does not prove pure biological factors, complete scanner invariance,
          disease biology, diagnostic equivalence, clinical safety, or improved patient outcomes.
        </P>
      </Container>
    </Layout>
  )
}

export default Work
