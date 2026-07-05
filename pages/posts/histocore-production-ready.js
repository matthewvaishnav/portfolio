import { Container, Heading, Text, Box, Avatar, Flex, Divider } from '@chakra-ui/react'
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
  <BlogLayout title="Research infrastructure lessons">
    <Box>
      <Box fontSize="xs" color="purple.400" mb={4} textTransform="uppercase" letterSpacing="wider">
        RETROSPECTIVE
      </Box>

      <Heading as="h1" {...articleHeadingProps}>
        Research infrastructure lessons from an early medical-AI prototype
      </Heading>

      <Text {...leadTextProps}>
        Earlier prototype work exploring computational pathology infrastructure taught me about
        reliability, security, data flow, and ML engineering. It was not production medical AI,
        not HIPAA-compliant, not diagnostic software, and not hospital-ready.
      </Text>

      <Flex align="center" wrap="wrap" gap={3} mb={8}>
        <Avatar size="sm" name="Matthew Vaishnav" src="/portfolio/images/matthew.jpg" />
        <Box>
          <Text fontSize="sm" fontWeight={600}>Matthew Vaishnav</Text>
          <Text fontSize="sm" color="gray.400">6 May 2026 | Revised July 2026 | 5 min read</Text>
        </Box>
      </Flex>

      <Divider mb={8} borderColor="whiteAlpha.200" />

      <Box fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7" color="gray.200">
        <Heading as="h2" {...sectionHeadingProps}>
          What This Was
        </Heading>

        <P>
          Between late 2024 and early 2026, I built an early computational pathology research
          prototype called HistoCore. The goal was to create infrastructure for whole-slide
          histopathology experiments: data loading, multiple-instance learning model training,
          evaluation pipelines, and federated learning simulations.
        </P>

        <P>
          It was a research learning project. I was teaching myself PyTorch, WSI processing,
          MIL architectures, and the engineering challenges of computational pathology. The
          prototype achieved some solid research results on public benchmarks like PCam and
          PANDA, and the federated learning simulations produced interesting findings about
          dominant-site failure modes.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          What I Learned
        </Heading>

        <P>
          The most valuable outcome was not any single benchmark number. It was learning how to
          build reliable ML infrastructure: reproducible data pipelines, systematic evaluation,
          property-based testing, and the discipline of separating research claims from
          deployment claims.
        </P>

        <P>
          I learned that training optimization matters for iteration speed. Moving GPU utilization
          from 17% to 85% through torch.compile, mixed precision, and data-loader tuning meant
          I could run experiments in hours instead of days. That faster feedback loop made
          everything else possible.
        </P>

        <P>
          I learned that testing at the infrastructure level is different from model evaluation.
          Property-based testing with Hypothesis caught edge cases I would never have found
          manually. Federated learning has subtle failure modes that only appear under specific
          client-dropout or Byzantine conditions, and systematic testing surfaced them.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          What It Was Not
        </Heading>

        <P>
          This is the part that matters most now. The prototype was <strong>not</strong>:
        </P>

        <P>
          Not production medical AI. Not HIPAA-compliant. Not diagnostic software. Not
          hospital-ready. Not clinically validated. Not a medical device. Not FDA/CE-ready.
          Not deployed in any clinical setting. Not used for patient care.
        </P>

        <P>
          The PACS integration components were research prototypes exploring DICOM data flow
          patterns, not production-grade clinical integrations. The federated learning system
          was a simulation framework for studying algorithmic behavior, not a deployed
          multi-hospital training network. The &ldquo;clinical threshold&rdquo; experiments
          were exploratory sensitivity/specificity tradeoff analyses on public benchmark data,
          not clinical decision thresholds.
        </P>

        <P>
          In earlier versions of this portfolio, I used language like &ldquo;production-ready,&rdquo;
          &ldquo;clinical PACS integration,&rdquo; and &ldquo;HIPAA-compliant audit logging.&rdquo;
          That language was inaccurate and I have removed it. The work was research infrastructure
          built by a student learning the field — and that is valuable on its own terms without
          overclaiming.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          Research Results That Survive
        </Heading>

        <P>
          Some results from this period remain valid as research findings:
        </P>

        <CodeBlock>
{`PCam Benchmark (public dataset, research evaluation)
- Validation AUC: 95.37%
- Test accuracy: 85.26% (95% CI: 84.83%-85.63%)
- Test AUC: 0.9394 (95% CI: 0.9369-0.9418)
- 1,000 bootstrap resamples

PANDA Slide-Level Experiments (public dataset)
- 10,611 readable Phikon slide feature vectors
- Gated AttentionMIL QWK: 0.8100
- Tuned TransnnMIL QWK: 0.8155 / 0.8225 / 0.8086

Federated Stress Tests (simulated federations)
- FedAvg dominant-site vulnerability identified
- Cross-site blending improved robustness
- Research-only; not real hospital federated deployments`}
        </CodeBlock>

        <Heading as="h2" {...sectionHeadingProps}>
          Where I Am Now
        </Heading>

        <P>
          My current research has moved to Paired-Acquisition Neural Factorization: testing
          whether paired acquisitions of the same tissue can reduce scanner/acquisition signal
          in pathology embeddings while preserving tissue identity. That work, plus external
          canine SCC validation, pair-repeat allocation, and mechanism audits, is my strongest
          current research line.
        </P>

        <P>
          The early infrastructure work was necessary — it built the engineering instincts and
          experimental discipline I use now. But the framing matters. It was research
          infrastructure and learning, not a production medical AI platform.
        </P>

        <P>
          Current research:{' '}
          <a href="https://github.com/matthewvaishnav/computational-pathology-research"
             target="_blank" rel="noopener noreferrer"
             style={{ color: '#9F7AEA', textDecoration: 'underline' }}>
            github.com/matthewvaishnav/computational-pathology-research
          </a>
        </P>
      </Box>
    </Box>
  </BlogLayout>
)

export default Post
