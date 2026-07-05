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
  <BlogLayout title="Early computational pathology research notes">
    <Box>
      <Box fontSize="xs" color="purple.400" mb={4} textTransform="uppercase" letterSpacing="wider">
        EARLIER RESEARCH
      </Box>

      <Heading as="h1" {...articleHeadingProps}>
        Early computational pathology research notes
      </Heading>

      <Text {...leadTextProps}>
        My early work explored public benchmark datasets, multiple-instance learning
        architectures, and pathology ML evaluation. It should be understood as research-only
        learning and prototyping, not clinical diagnosis or patient-care validation.
      </Text>

      <Flex align="center" wrap="wrap" gap={3} mb={8}>
        <Avatar size="sm" name="Matthew Vaishnav" src="/portfolio/images/matthew.jpg" />
        <Box>
          <Text fontSize="sm" fontWeight={600}>Matthew Vaishnav</Text>
          <Text fontSize="sm" color="gray.400">18 Jan 2025 | Revised July 2026 | 6 min read</Text>
        </Box>
      </Flex>

      <Divider mb={8} borderColor="whiteAlpha.200" />

      <Box fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7" color="gray.200">
        <Heading as="h2" {...sectionHeadingProps}>
          Where I Started
        </Heading>

        <P>
          I began working with computational pathology in late 2024, starting from public
          benchmark datasets and open-source tooling. The goal was to learn the fundamentals
          of whole-slide image modeling, multiple-instance learning, and pathology ML
          evaluation — not to build clinical software.
        </P>

        <P>
          The early project, which I called HistoCore, was a research learning vehicle. It
          went through many iterations as I learned PyTorch, WSI processing pipelines, MIL
          architectures (AttentionMIL, CLAM, TransMIL), and the challenges of working with
          gigapixel pathology images on consumer hardware.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          What I Explored
        </Heading>

        <P>
          The work covered several areas that remain relevant to my research today:
        </P>

        <P>
          <strong>PCam benchmark.</strong> The PatchCamelyon dataset provided a manageable
          starting point for learning patch-level classification, data loading, training
          loops, and evaluation. Results: 95.37% validation AUC, 85.26% test accuracy
          (0.9394 AUC) on the full 32,768-sample test set with bootstrap confidence intervals.
        </P>

        <P>
          <strong>PANDA prostate grading.</strong> Moving from patches to whole-slide images
          required learning HDF5-based feature extraction, slide-level aggregation, and
          multi-class ordinal regression. Using mean-pooled Phikon features and gated
          AttentionMIL, I achieved QWK 0.8100. TransnnMIL experiments reached QWK 0.8155–0.8225
          in repeated-seed runs.
        </P>

        <P>
          <strong>Training optimization.</strong> On an RTX 4070 laptop GPU, I learned to use
          torch.compile, mixed precision (AMP), channels-last memory format, and persistent
          DataLoader workers. GPU utilization improved from ~17% to ~85%, and PCam training
          time dropped from 20–40 hours to 2–3 hours. These optimization patterns carry forward
          into my current work.
        </P>

        <P>
          <strong>Federated learning simulations.</strong> I built a simulation framework to
          study how FedAvg behaves under realistic pathology-lab conditions: uneven site sizes,
          label noise concentrated at dominant sites, and systematic grading bias. The key
          finding — that FedAvg becomes vulnerable when the largest simulated client is
          unreliable — was a genuine research result, though it came from simulations, not
          real hospital deployments.
        </P>

        <P>
          <strong>Infrastructure testing.</strong> Property-based testing with Hypothesis and
          systematic evaluation pipelines taught me the difference between model evaluation
          and infrastructure verification. This discipline now underlies how I structure
          experiments and validate results.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          Important Context
        </Heading>

        <P>
          In earlier versions of these pages, I used language that overstated what this work
          was. Phrases like &ldquo;AI framework for cancer detection,&rdquo;
          &ldquo;production-ready,&rdquo; &ldquo;clinical PACS integration,&rdquo; and
          &ldquo;HIPAA compliance&rdquo; were inaccurate. I have corrected that language.
        </P>

        <P>
          This work was and is: research-only learning and prototyping on public benchmark
          datasets. Not diagnostic software. Not clinically validated. Not deployed in any
          hospital. Not a medical device. Not used for patient care.
        </P>

        <P>
          The value of this period was the engineering experience it built: how to structure
          reproducible experiments, how to validate data pipelines, how to run systematic
          hyperparameter studies, and how to write honest research claims with clear boundaries.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          Performance Notes (Research Benchmarks)
        </Heading>

        <CodeBlock>
{`PCam Test Set (32,768 samples, public benchmark)
- Accuracy: 85.26% (95% CI: 84.83%-85.63%)
- AUC: 0.9394 (95% CI: 0.9369-0.9418)
- F1: 0.8507 (95% CI: 0.8464-0.8543)
- Bootstrap: 1,000 resamples
- Hardware: RTX 4070 Laptop (8 GB VRAM)

Research infrastructure notes:
- GPU utilization improved from 17% to 85%
- Training time reduced from 20-40 hours to 2-3 hours
- Property-based testing for data pipeline correctness
- All results on public benchmark data only`}
        </CodeBlock>

        <Heading as="h2" {...sectionHeadingProps}>
          Current Direction
        </Heading>

        <P>
          My research has evolved from general-purpose pathology ML infrastructure to a
          focused investigation of Paired-Acquisition Neural Factorization. The question is
          whether paired acquisitions of the same tissue (different scanners, same block) can
          be used to reduce scanner/acquisition signal in pathology foundation-model embeddings
          while preserving tissue identity.
        </P>

        <P>
          That work — across SCORPION, canine SCC, cross-backbone checks, baseline stress
          tests, pair-repeat allocation, and mechanism audits — is documented in the main
          research repository.
        </P>

        <P>
          Full documentation:{' '}
          <a href="https://matthewvaishnav.github.io/computational-pathology-research/"
             target="_blank" rel="noopener noreferrer"
             style={{ color: '#9F7AEA', textDecoration: 'underline' }}>
            matthewvaishnav.github.io/computational-pathology-research
          </a>
        </P>
      </Box>
    </Box>
  </BlogLayout>
)

export default Post
