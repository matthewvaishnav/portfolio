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
  <BlogLayout title="Building HistoCore">
    <Box>
      <Box fontSize="xs" color="purple.400" mb={4} textTransform="uppercase" letterSpacing="wider">
        RESEARCH
      </Box>
      
      <Heading as="h1" {...articleHeadingProps}>
        I built an AI framework for cancer detection
      </Heading>
      
      <Text {...leadTextProps}>
        Fifteen months after I first wrote about HistoCore, the project has grown from an
        accessible cancer-detection framework into a broader computational pathology platform
        with validated benchmarks, clinical threshold tuning, and workflow pieces designed for
        real hospital data.
      </Text>
      
      <Flex align="center" wrap="wrap" gap={3} mb={{ base: 8, md: 12 }}>
        <Avatar size="sm" name="Matthew Vaishnav" src="/portfolio/images/matthew.jpg" />
        <Box>
          <Text fontSize="sm" fontWeight={600}>Matthew Vaishnav</Text>
          <Text fontSize="sm" color="gray.400">18 Jan 2025 | Updated 27 Apr 2026 | 7 min read</Text>
        </Box>
      </Flex>

      <Box fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
        <P>
          Cancer still kills because we find it too late. The promise of AI in pathology has
          never really been the model alone. The hard part is turning scattered research code,
          giant whole-slide images, and fragile evaluation pipelines into something a researcher
          can actually run, trust, and extend.
        </P>

        <P>
          That was the problem I set out to solve when I started HistoCore. I wanted the path
          from data to model to clinical-style evaluation to feel less like bespoke lab glue
          and more like real engineering.
        </P>

        <P>
          Since then, the project has become a lot more concrete. The recent work is no longer
          just about getting a model to train. It is about proving performance on real data,
          tightening the workflow around missed tumors, and building the surrounding tooling
          needed for reproducible computational pathology research.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          What Changed Recently
        </Heading>

        <P>
          The biggest update is that HistoCore now achieves 100% validation AUC at epoch 10
          on real histopathology data with 262K training samples. The framework has been
          optimized 8-12x through torch.compile, mixed precision training, and advanced GPU
          optimizations, reducing training time from 20-40 hours to just 2-3 hours on
          consumer hardware like the RTX 4070.
        </P>

        <P>
          Beyond performance, the project now includes production-ready features: a federated
          learning system with differential privacy (ε ≤ 1.0), PACS integration with
          multi-vendor support and HIPAA compliance, and comprehensive testing with 1,448
          tests covering 55% of the codebase plus 100+ property-based correctness tests.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          What The Results Look Like Now
        </Heading>

        <P>
          The current benchmark results demonstrate production-grade performance:
        </P>

        <CodeBlock>
{`PCam Validation Performance (Epoch 10)
- Validation AUC: 100%
- Training samples: 262,144
- GPU utilization: 85% (up from 17%)
- Training time: 2-3 hours (down from 20-40 hours)
- Hardware: RTX 4070 Laptop (8GB VRAM)`}
        </CodeBlock>

        <P>
          On the full test set of 32,768 samples, the framework achieves:
        </P>

        <CodeBlock>
{`PCam Test Set Results
- Accuracy: 85.26% (95% CI: 84.83%-85.63%)
- AUC: 0.9394 (95% CI: 0.9369-0.9418)
- F1: 0.8507 (95% CI: 0.8464-0.8543)
- Bootstrap samples: 1,000 resamples
- Inference time: <5 seconds (production-ready)`}
        </CodeBlock>

        <P>
          Those numbers matter because they come with failure analysis and operating-threshold
          work, which is where medical AI gets real. At the default threshold, tumor recall was
          too conservative. The updated pipeline now includes a threshold-optimization stage for
          screening use cases.
        </P>

        <CodeBlock>
{`Clinical screening threshold (recommended)
- Threshold: 0.051
- Sensitivity: 90.0%
- Specificity: 80.3%
- Missed tumors: 1,639 instead of 4,276
- Net effect: 2,637 fewer missed tumor cases`}
        </CodeBlock>

        <P>
          That tradeoff matters. In screening, missing cancer is usually more expensive than
          sending more slides for review. Recent HistoCore work explicitly bakes that decision
          into the tooling instead of pretending a single default threshold is enough.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          What HistoCore Does Today
        </Heading>

        <P>
          HistoCore is now a comprehensive computational pathology platform that spans the
          full stack from research to clinical deployment. The framework includes attention-based
          multiple instance learning (AttentionMIL, CLAM, TransMIL), production-grade training
          optimizations, and clinical workflow integration.
        </P>

        <P>
          Key capabilities include federated learning with differential privacy for multi-site
          training across hospitals, PACS integration with DICOM C-FIND/C-MOVE/C-STORE
          operations and multi-vendor support, model interpretability tools with Grad-CAM and
          attention visualizations, and comprehensive testing infrastructure with property-based
          validation.
        </P>

        <P>
          The framework achieves 85% GPU utilization through torch.compile, mixed precision
          (AMP), channels_last memory format, and persistent workers. It includes 1,448 tests
          with 55% coverage, plus 100+ property-based correctness tests validating federated
          learning (8/8 properties) and PACS integration (40/48 properties).
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          The Technical Shape
        </Heading>

        <P>
          At a high level, the project now looks less like a single training script and more
          like a pathology platform:
        </P>

        <CodeBlock>
{`src/
├── clinical/       # PACS integration, DICOM/FHIR, patient tracking
├── data/           # PCam/CAMELYON16 loaders, WSI processing
├── evaluation/     # Bootstrap CI, threshold analysis, metrics
├── federated/      # Federated learning with differential privacy
├── models/         # AttentionMIL, CLAM, TransMIL architectures
├── training/       # Optimized training loops (torch.compile, AMP)
└── visualization/  # Grad-CAM, attention maps, interpretability`}
        </CodeBlock>

        <P>
          This architecture reflects the evolution from research prototype to production
          system. The federated learning module enables privacy-preserving multi-site training,
          the PACS integration provides hospital connectivity, and the optimized training
          pipeline makes the framework practical for researchers without expensive GPU clusters.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          Getting Started
        </Heading>

        <P>
          The onboarding path is still simple if you already work in Python:
        </P>

        <CodeBlock>
{`git clone https://github.com/matthewvaishnav/computational-pathology-research.git
cd computational-pathology-research
pip install -r requirements.txt
pip install -e .
python experiments/train_pcam.py --config experiments/configs/pcam_rtx4070_laptop.yaml
python experiments/evaluate_pcam.py --config experiments/configs/pcam_rtx4070_laptop.yaml`}
        </CodeBlock>

        <P>
          If you want the clinically tuned version of the output, the repo now also includes
          a dedicated threshold optimization step after evaluation. That is the sort of update
          I wanted HistoCore to grow into: less demo, more decision support.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          Why I Still Care About It
        </Heading>

        <P>
          I still believe the original point of the project. Better pathology AI should not be
          locked behind closed platforms, fragile notebooks, or expensive institutional tooling.
        </P>

        <P>
          The difference now is that HistoCore has become a production-grade system with
          validated performance, comprehensive testing, and real clinical deployment
          capabilities. The 8-12x training optimization makes it practical for researchers,
          the federated learning enables privacy-preserving collaboration, and the PACS
          integration provides a path to hospital deployment.
        </P>

        <P>
          The framework now achieves 100% validation AUC with 85% GPU utilization, includes
          1,448 tests with property-based validation, and supports real-time inference under
          5 seconds. These aren't just research metrics—they're the foundation for a system
          that can actually be used in clinical settings.
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

        <P>Have a productive day building better tools for healthcare.</P>
      </Box>
    </Box>
  </BlogLayout>
)

export default Post
