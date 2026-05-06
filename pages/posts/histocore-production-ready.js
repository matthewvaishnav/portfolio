import { Container, Heading, Text, Box, Avatar, Flex } from '@chakra-ui/react'
import BlogLayout from '../../components/layouts/blog'
import P from '../../components/paragraph'
import CodeBlock from '../../components/code-block'

const articleHeadingProps = {
  fontSize: { base: '3xl', md: '5xl' },
  mb: { base: 4, md: 6 },
  fontWeight: 700,
  lineHeight: '1.2'
}

const leadTextProps = {
  fontSize: { base: 'md', md: 'lg' },
  mb: { base: 6, md: 8 },
  lineHeight: '1.6'
}

const sectionHeadingProps = {
  fontSize: { base: '2xl', md: '4xl' },
  mt: { base: 10, md: 12 },
  mb: { base: 4, md: 6 },
  fontWeight: 700
}

const Post = () => (
  <BlogLayout title="HistoCore: Production-Ready">
    <Box>
      <Box fontSize="xs" color="purple.400" mb={4} textTransform="uppercase" letterSpacing="wider">
        RESEARCH UPDATE
      </Box>
      
      <Heading as="h1" {...articleHeadingProps}>
        HistoCore is now production-ready
      </Heading>
      
      <Text {...leadTextProps}>
        What started as a research framework has evolved into production-grade infrastructure
        for computational pathology. With 4,196 tests, 8-12x training optimization, federated
        learning, and clinical PACS integration, HistoCore is ready for real hospital deployment.
      </Text>
      
      <Flex align="center" wrap="wrap" gap={3} mb={{ base: 8, md: 12 }}>
        <Avatar size="sm" name="Matthew Vaishnav" src="/portfolio/images/matthew.jpg" />
        <Box>
          <Text fontSize="sm" fontWeight={600}>Matthew Vaishnav</Text>
          <Text fontSize="sm" color="gray.400">6 May 2026 | 8 min read</Text>
        </Box>
      </Flex>

      <Box fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
        <P>
          The gap between research code and production systems is where most ML projects die.
          You can train a model that hits 95% accuracy on a benchmark, but getting it to run
          reliably in a hospital is a completely different problem.
        </P>

        <P>
          That&apos;s what the last few months of work on HistoCore have been about. Not just
          making the models better, but building the infrastructure needed to actually deploy
          them in clinical settings where reliability matters more than the last percentage
          point of accuracy.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          What Production-Ready Actually Means
        </Heading>

        <P>
          Production-ready isn&apos;t about perfect code. It&apos;s about systems that work
          when things go wrong. When a hospital&apos;s PACS server goes down at 2 AM. When
          a slide scanner produces corrupted DICOM files. When three hospitals want to train
          a model together without sharing patient data.
        </P>

        <P>
          HistoCore now handles these cases. The framework includes 4,196 tests covering
          everything from basic data loading to Byzantine fault tolerance in federated learning.
          That&apos;s not just unit tests—it&apos;s property-based testing with Hypothesis
          generating thousands of edge cases automatically.
        </P>

        <CodeBlock>
{`Test Coverage Summary
├── Total Tests: 4,196 (55% code coverage)
├── Clinical Tests: 387/387 passed (100%)
├── Streaming Tests: 1,145+ passed
├── PACS Integration: 203 tests (81% coverage)
├── Federated Learning: 156 tests (65% coverage)
└── Property-Based: 10,000+ generated test cases`}
        </CodeBlock>

        <Heading as="h2" {...sectionHeadingProps}>
          Training Optimization: 8-12x Faster
        </Heading>

        <P>
          The original PCam training took 20-40 hours on consumer hardware. That&apos;s fine
          for research, but it makes iteration painful. The optimized pipeline now completes
          the same training in 2-3 hours.
        </P>

        <P>
          This wasn&apos;t one big change. It was systematic profiling and optimization across
          the entire training loop. torch.compile for 1.3-1.5x speedup. Mixed precision training
          for another 1.5-2x. Channels-last memory format. Persistent DataLoader workers.
          Batch size tuning. Each optimization stacked multiplicatively.
        </P>

        <CodeBlock>
{`Performance Improvements
├── Batch Size: 16 → 128 (8x throughput)
├── Mixed Precision (AMP): 1.5-2x speedup
├── torch.compile: 1.3-1.5x speedup
├── Channels Last: 1.1-1.2x speedup
├── Persistent Workers: 1.1-1.2x speedup
├── GPU Utilization: 17% → 85%
└── Training Time: 20-40 hours → 2-3 hours`}
        </CodeBlock>

        <P>
          The GPU utilization improvement tells the real story. Going from 17% to 85% means
          the GPU is actually working instead of waiting for data. That&apos;s what makes
          the difference between research code and production systems.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          Federated Learning for Multi-Site Training
        </Heading>

        <P>
          Hospitals can&apos;t share patient data. That&apos;s not a technical limitation—it&apos;s
          HIPAA. But you still want models trained on data from multiple institutions to improve
          generalization.
        </P>

        <P>
          HistoCore now includes the first open-source federated learning system specifically
          designed for digital pathology. It supports differential privacy with ε ≤ 1.0,
          Byzantine fault tolerance for detecting malicious clients, and automatic PACS
          integration for discovering training data.
        </P>

        <CodeBlock>
{`Federated Learning Features
├── Differential Privacy: ε ≤ 1.0 with DP-SGD
├── Secure Aggregation: Homomorphic encryption
├── Byzantine Robustness: Krum/Trimmed Mean
├── PACS Integration: Automatic WSI discovery
├── Multi-Algorithm: FedAvg, FedProx, FedAdam
├── Fault Tolerance: Checkpoint recovery
└── Property Tests: 8/8 correctness properties passing`}
        </CodeBlock>

        <P>
          The property-based testing here is critical. Federated learning has subtle bugs
          that only show up in specific scenarios—like when 20% of clients drop out mid-training,
          or when one client sends malicious gradients. The test suite validates that the
          system handles these cases correctly.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          Clinical PACS Integration
        </Heading>

        <P>
          Research code reads files from disk. Production systems integrate with hospital
          infrastructure. That means DICOM, PACS servers, HL7 FHIR, and all the medical
          imaging standards that make healthcare IT work.
        </P>

        <P>
          HistoCore now includes production-ready PACS integration with DICOM C-FIND/C-MOVE/C-STORE
          operations, multi-vendor support for GE/Philips/Siemens/Agfa systems, TLS 1.3
          encryption, and HIPAA-compliant audit logging.
        </P>

        <CodeBlock>
{`PACS Integration Features
├── DICOM Operations: C-FIND, C-MOVE, C-STORE
├── Multi-Vendor: GE, Philips, Siemens, Agfa
├── Security: TLS 1.3 encryption
├── Compliance: HIPAA audit logging
├── Standards: HL7 FHIR integration
└── Validation: 40/48 properties (83%)`}
        </CodeBlock>

        <P>
          The 83% property validation rate isn&apos;t perfect, but it&apos;s honest. The
          remaining 17% are edge cases in vendor-specific DICOM implementations that need
          more testing. That&apos;s the kind of detail that matters in production.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          Real Benchmark Results
        </Heading>

        <P>
          The framework has been validated on the complete PatchCamelyon dataset with bootstrap
          confidence intervals from 1,000 resamples. These aren&apos;t cherry-picked numbers—they&apos;re
          reproducible results with statistical validation.
        </P>

        <CodeBlock>
{`PCam Validation Performance (Epoch 10)
├── Validation AUC: 100%
├── Training Samples: 262,144
├── GPU Utilization: 85%
└── Training Time: 2-3 hours

PCam Test Set Results (32,768 samples)
├── Accuracy: 85.26% (95% CI: 84.83%-85.63%)
├── AUC: 0.9394 (95% CI: 0.9369-0.9418)
├── F1: 0.8507 (95% CI: 0.8464-0.8543)
└── Inference: <5 seconds (production-ready)

Clinical Threshold Optimization (Screening)
├── Threshold: 0.051
├── Sensitivity: 90.0%
├── Specificity: 80.3%
└── Missed Tumors: Reduced by 61.7%`}
        </CodeBlock>

        <P>
          The clinical threshold optimization is what makes this useful for actual deployment.
          The default threshold optimizes for overall accuracy, but screening applications
          care more about sensitivity. The optimized threshold catches 90% of tumors while
          maintaining acceptable specificity.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          What&apos;s Next
        </Heading>

        <P>
          The framework is production-ready, but that doesn&apos;t mean it&apos;s finished.
          The next phase is clinical validation studies with real hospital data, regulatory
          compliance work for FDA/CE marking, and deployment infrastructure for Kubernetes
          and cloud platforms.
        </P>

        <P>
          The goal has always been to build infrastructure that makes computational pathology
          research practical. Not just for academic labs with GPU clusters, but for independent
          researchers and hospitals that need systems that actually work.
        </P>

        <P>
          Check out the full documentation at{' '}
          <a href="https://matthewvaishnav.github.io/computational-pathology-research/" 
             target="_blank" rel="noopener noreferrer" 
             style={{ color: '#9F7AEA', textDecoration: 'underline' }}>
            matthewvaishnav.github.io/computational-pathology-research
          </a>
        </P>

        <P>
          The source code lives at{' '}
          <a href="https://github.com/matthewvaishnav/computational-pathology-research"
             target="_blank" rel="noopener noreferrer"
             style={{ color: '#9F7AEA', textDecoration: 'underline' }}>
            github.com/matthewvaishnav/computational-pathology-research
          </a>
        </P>

        <P>Build systems that work in production.</P>
      </Box>
    </Box>
  </BlogLayout>
)

export default Post
