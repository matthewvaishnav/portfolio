import { Heading, Text, Box, Avatar, Flex, Divider, Link } from '@chakra-ui/react'
import BlogLayout from '../../components/layouts/blog'
import P from '../../components/paragraph'
import CodeBlock from '../../components/code-block'

const articleHeadingProps = {
  fontSize: { base: '2xl', md: '4xl' },
  mb: 4,
  fontWeight: 600,
  lineHeight: '1.2',
  letterSpacing: '-0.02em'
}

const leadTextProps = {
  fontSize: { base: 'lg', md: 'xl' },
  mb: 8,
  lineHeight: '1.7',
  color: 'gray.300'
}

const sectionHeadingProps = {
  fontSize: { base: 'xl', md: '2xl' },
  mt: 12,
  mb: 4,
  fontWeight: 600,
  letterSpacing: '-0.01em'
}

const Post = () => (
  <BlogLayout title="Dominance-Aware Federated Pathology">
    <Box>
      <Box fontSize="xs" color="purple.400" mb={4} textTransform="uppercase" letterSpacing="wider">
        RESEARCH RESULT
      </Box>

      <Heading as="h1" {...articleHeadingProps}>
        Finding a FedAvg failure mode in computational pathology
      </Heading>

      <Text {...leadTextProps}>
        I tested federated pathology learning on 10,611 PANDA-derived Phikon slide features and found a clear failure mode: FedAvg is safe when sites are clean, but vulnerable when the largest simulated site becomes unreliable.
      </Text>

      <Flex align="center" wrap="wrap" gap={3} mb={8}>
        <Avatar size="sm" name="Matthew Vaishnav" src="/portfolio/images/matthew.jpg" />
        <Box>
          <Text fontSize="sm" fontWeight={600}>Matthew Vaishnav</Text>
          <Text fontSize="sm" color="gray.400">1 Jun 2026 | 6 min read</Text>
        </Box>
      </Flex>

      <Divider mb={8} borderColor="whiteAlpha.200" />

      <Box fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7" color="gray.200">
        <P>
          Federated learning usually treats sample count as trust. In FedAvg, the largest client gets the most influence because it contributes the most examples. That assumption is reasonable when bigger also means better. It becomes dangerous when a high-volume site is systematically less reliable.
        </P>

        <P>
          I tested that mechanism in a computational pathology setting using PANDA-derived Phikon features. The experiment simulates a multi-site federation from real slide-level feature vectors and stresses the largest simulated site.
        </P>

        <CodeBlock>
{`Dataset and setup
├── 10,611 readable PANDA-derived slide feature vectors
├── 768-dimensional mean-pooled Phikon embeddings
├── 5 simulated sites
├── 15 random seeds
├── Task: ISUP grade prediction, classes 0-5
└── Metrics: global QWK, worst-site QWK, mean-site QWK, accuracy, macro-F1`}
        </CodeBlock>

        <Heading as="h2" {...sectionHeadingProps}>
          The failure mode
        </Heading>

        <P>
          The stress test is simple: keep validation labels clean, but make the largest simulated training site unreliable. Then compare ordinary FedAvg against a cross-site blending strategy that reduces dependence on raw sample volume.
        </P>

        <CodeBlock>
{`Mechanism
FedAvg:
  more samples -> more aggregation influence

Failure condition:
  largest site becomes less reliable

Consequence:
  sample count remains high, but trust should be lower

Alternative:
  blend sample-size weighting with cross-site contribution signals`}
        </CodeBlock>

        <Heading as="h2" {...sectionHeadingProps}>
          Label-corruption result
        </Heading>

        <P>
          Under clean conditions, cross-site blending is not universally better. That matters. The result is conditional, not just a method that happens to win everywhere.
        </P>

        <CodeBlock>
{`15-seed full-PANDA label-noise stress
0% noise:
  FedAvg and cross-site blending are essentially tied globally
  FedAvg retains better clean worst-site QWK

25% dominant-site label corruption:
  cross-site global QWK +0.0083 vs FedAvg
  95% CI: [+0.0016, +0.0150]

35% dominant-site label corruption:
  cross-site global QWK +0.0083 vs FedAvg
  95% CI: [+0.0051, +0.0115]

45% dominant-site label corruption:
  cross-site worst-site QWK +0.0111 vs FedAvg
  95% CI: [+0.0011, +0.0211]`}
        </CodeBlock>

        <Heading as="h2" {...sectionHeadingProps}>
          A more pathology-like stress test
        </Heading>

        <P>
          Random label corruption is useful for exposing the mechanism, but pathology disagreement is often more systematic. So I also tested ordinal threshold shift: a dominant site grades more aggressively or more conservatively by shifting selected training labels up or down by one ISUP grade.
        </P>

        <P>
          The strongest transfer result came from conservative grading bias. Cross-site blending improved every major metric at 25%, 35%, and 45% conservative threshold shift.
        </P>

        <CodeBlock>
{`15-seed conservative threshold-shift stress
25% shift:
  global QWK +0.0057
  worst-site QWK +0.0053
  macro-F1 +0.0088

35% shift:
  global QWK +0.0060
  worst-site QWK +0.0071
  macro-F1 +0.0102

45% shift:
  global QWK +0.0116
  worst-site QWK +0.0141
  macro-F1 +0.0199`}
        </CodeBlock>

        <Heading as="h2" {...sectionHeadingProps}>
          Dominance-aware switching
        </Heading>

        <P>
          Cross-site blending helps under corrupted regimes, but using it all the time can create clean-regime costs. The better idea is a switch: use FedAvg when FedAvg validation behavior looks normal, and switch away from sample-size dominance when diagnostics become abnormal.
        </P>

        <CodeBlock>
{`Dominance-aware switch
1. Calibrate normal FedAvg diagnostics on clean validation runs
2. Track global QWK, worst-site QWK, site-QWK spread, ordinal error, severe error
3. If enough diagnostics leave the clean-calibrated range, switch to cross-site blending
4. Otherwise keep FedAvg`}
        </CodeBlock>

        <P>
          On label-noise stress, a tuned observable detector reduced clean false switching to 6.7% while preserving significant global-QWK gains at 25% and 35% dominant-site noise. On conservative threshold shift, the detector transferred strongly in corrupted regimes, but clean false-trigger control still needs improvement.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          What I claim, and what I do not claim
        </Heading>

        <P>
          The claim is not that hospitals commonly have 45% random label noise. The claim is that sample volume and client reliability can diverge, and FedAvg has no built-in way to notice when the largest client should no longer be trusted the most.
        </P>

        <CodeBlock>
{`Supported
- FedAvg has a dominant-site reliability failure mode in simulated pathology federations
- Cross-site blending helps when the largest simulated site is unreliable
- The effect transfers from random label corruption to systematic conservative ordinal grading bias
- Observable detector switches can recover much of the benefit under label noise and conservative threshold shift

Not yet supported
- real hospital federated validation
- clinical deployment
- diagnostic use
- proof that one detector calibration works across every failure mode`}
        </CodeBlock>

        <P>
          This is research infrastructure and simulated-federation evidence, not clinical software. The next validation step is to test the same idea on real multi-center pathology benchmarks like Camelyon17 and on additional site-shift patterns.
        </P>

        <P>
          Full documentation is available at{' '}
          <Link href="https://matthewvaishnav.github.io/computational-pathology-research/results/dominance-aware-switch-full-panda" target="_blank" rel="noopener noreferrer" color="purple.300" textDecoration="underline">
            the dominance-aware switch results page
          </Link>
          . The source code lives at{' '}
          <Link href="https://github.com/matthewvaishnav/computational-pathology-research" target="_blank" rel="noopener noreferrer" color="purple.300" textDecoration="underline">
            github.com/matthewvaishnav/computational-pathology-research
          </Link>
          .
        </P>
      </Box>
    </Box>
  </BlogLayout>
)

export default Post