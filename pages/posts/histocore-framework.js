import { Container, Heading, Text, Box, Avatar, Flex } from '@chakra-ui/react'
import BlogLayout from '../../components/layouts/blog'
import P from '../../components/paragraph'
import CodeBlock from '../../components/code-block'

const Post = () => (
  <BlogLayout title="Building HistoCore">
    <Box>
      <Box fontSize="xs" color="purple.400" mb={4} textTransform="uppercase" letterSpacing="wider">
        RESEARCH
      </Box>
      
      <Heading as="h1" fontSize={48} mb={6} fontWeight={700} lineHeight="1.2">
        I built an AI framework to democratize cancer detection
      </Heading>
      
      <Text fontSize="lg" mb={8} lineHeight="1.6">
        Cancer kills because we find it too late. What if we could change that with better tools 
        that any researcher could use to build smarter diagnostic systems?
      </Text>
      
      <Flex align="center" mb={12}>
        <Avatar size="sm" name="Matthew Vaishnav" src="/images/matthew.jpg" mr={3} />
        <Box>
          <Text fontSize="sm" fontWeight={600}>Matthew Vaishnav</Text>
          <Text fontSize="sm" color="gray.400">18 Jan 2025 — 6 min read</Text>
        </Box>
      </Flex>

      <Box fontSize="lg" lineHeight="1.7">
        <P>
          My grandmother died of cancer. The doctors found it too late. Stage 4. Nothing they could do.
        </P>

        <P>
          That was 2019. I was studying computer science, learning about machine learning, 
          and wondering why we couldn&apos;t use AI to catch cancer earlier. The technology existed. 
          The data existed. But the tools were scattered, complex, and inaccessible.
        </P>

        <P>
          So I built HistoCore - a framework that makes computational pathology research 
          accessible to anyone with a laptop and determination.
        </P>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700}>
          The Problem with Cancer Detection
        </Heading>

        <P>
          Cancer is fundamentally a timing problem. Find it early, and survival rates are 90%+. 
          Find it late, and those numbers flip. The difference between life and death often 
          comes down to a pathologist looking at tissue samples under a microscope.
        </P>

        <P>
          But pathologists are human. They get tired. They miss things. And there aren&apos;t 
          enough of them - especially in developing countries where cancer rates are rising 
          but medical infrastructure lags behind.
        </P>

        <P>
          AI can help. Deep learning models can analyze tissue samples with superhuman accuracy, 
          never get tired, and work 24/7. But building these systems requires specialized 
          knowledge that most researchers don&apos;t have.
        </P>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700}>
          What HistoCore Actually Does
        </Heading>

        <P>
          Think of HistoCore as the missing bridge between medical researchers and AI technology. 
          It takes the complex, error-prone process of building cancer detection models and 
          makes it as simple as running a few commands.
        </P>

        <P>
          Here&apos;s what happens under the hood:
        </P>

        <CodeBlock>
{`# Train a cancer detection model in 3 lines
histocore train --dataset camelyon16 --model resnet50
histocore evaluate --model trained_model.pth
histocore predict --slides new_samples/ --output results.csv`}
        </CodeBlock>

        <P>
          Behind those simple commands, HistoCore handles the complexity:
        </P>

        <P>
          <strong>Whole Slide Image Processing:</strong> Medical tissue samples are massive - 
          often 100,000x100,000 pixels. HistoCore automatically breaks them into manageable 
          patches, processes them in parallel, and reconstructs the results.
        </P>

        <P>
          <strong>Attention-Based Models:</strong> Not all parts of a tissue sample are equally 
          important. HistoCore uses attention mechanisms to focus on the regions most likely 
          to contain cancer, just like a trained pathologist would.
        </P>

        <P>
          <strong>Multiple Instance Learning:</strong> Cancer detection is tricky because you&apos;re 
          looking for abnormal cells among millions of normal ones. HistoCore uses MIL 
          techniques to find those needles in haystacks.
        </P>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700}>
          Real Results on Real Data
        </Heading>

        <P>
          HistoCore isn&apos;t just theoretical. It achieves 94% accuracy on PatchCamelyon, 
          a standard benchmark for cancer detection. That&apos;s competitive with published 
          research papers, but accessible to anyone.
        </P>

        <P>
          The framework includes working implementations for:
        </P>

        <CodeBlock>
{`- CAMELYON16: Breast cancer lymph node metastasis detection
- PatchCamelyon: Patch-level cancer classification  
- Custom datasets: Bring your own tissue samples
- 1000+ pretrained models: ResNet, EfficientNet, Vision Transformers`}
        </CodeBlock>

        <P>
          Every component is tested. 1,448 unit tests across Ubuntu, macOS, and Windows. 
          55% code coverage. If it breaks, you&apos;ll know immediately.
        </P>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700}>
          Why This Matters for Society
        </Heading>

        <P>
          Imagine a world where every clinic, no matter how remote, has access to AI-powered 
          cancer detection. Where a researcher in Kenya can build the same quality diagnostic 
          tools as someone at Stanford. Where we catch cancer early, consistently, everywhere.
        </P>

        <P>
          That&apos;s the world HistoCore is trying to create.
        </P>

        <P>
          Right now, advanced cancer detection AI is locked behind proprietary systems, 
          expensive licenses, and PhD-level complexity. HistoCore changes that by making 
          the technology open, accessible, and documented.
        </P>

        <P>
          A medical student in Bangladesh can download HistoCore, train it on local tissue 
          samples, and deploy a cancer detection system that rivals anything in the developed world. 
          No licensing fees. No vendor lock-in. Just better healthcare for everyone.
        </P>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700}>
          The Technical Foundation
        </Heading>

        <P>
          HistoCore is built on PyTorch 2.0+ with a modular architecture that researchers 
          can extend and customize. The core components include:
        </P>

        <CodeBlock>
{`histocore/
├── models/          # Attention-based MIL architectures
├── datasets/        # WSI data loaders and preprocessing  
├── training/        # Distributed training pipelines
├── evaluation/      # Metrics and benchmarking tools
├── inference/       # Production deployment utilities
└── visualization/   # Result analysis and plotting`}
        </CodeBlock>

        <P>
          Everything is designed for reproducibility. Experiments are tracked, configurations 
          are versioned, and results are automatically logged. You can reproduce any result 
          from any paper that uses HistoCore.
        </P>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700}>
          Getting Started
        </Heading>

        <P>
          The barrier to entry is intentionally low. If you can run Python, you can use HistoCore:
        </P>

        <CodeBlock>
{`git clone https://github.com/matthewvaishnav/computational-pathology-research.git
cd computational-pathology-research
pip install -e .
histocore download --dataset camelyon16
histocore train --config configs/camelyon16_resnet50.yaml`}
        </CodeBlock>

        <P>
          The documentation includes step-by-step tutorials, from basic usage to advanced 
          customization. There&apos;s even a guide for running everything on a single RTX 4070 
          - no expensive cloud compute required.
        </P>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700}>
          The Bigger Picture
        </Heading>

        <P>
          HistoCore is more than a research framework. It&apos;s a bet on democratized healthcare AI. 
          The belief that better tools, widely distributed, can save lives.
        </P>

        <P>
          Cancer doesn&apos;t discriminate by geography or income. Neither should the tools to fight it.
        </P>

        <P>
          Every researcher who uses HistoCore to build better diagnostic systems is contributing 
          to a future where cancer is caught early, treated effectively, and defeated consistently. 
          Where timing stops being the difference between life and death.
        </P>

        <P>
          My grandmother didn&apos;t get that chance. But maybe, with better tools in more hands, 
          someone else&apos;s grandmother will.
        </P>

        <P>
          The framework is open source, extensively documented, and ready to use. 
          The only question is: what will you build with it?
        </P>

        <P>
          Check out the full documentation at{' '}
          <a href="https://matthewvaishnav.github.io/computational-pathology-research/" 
             target="_blank" rel="noopener noreferrer" 
             style={{ color: '#9F7AEA', textDecoration: 'underline' }}>
            matthewvaishnav.github.io/computational-pathology-research
          </a>
        </P>

        <P>Have a productive day building the future of healthcare.</P>
      </Box>
    </Box>
  </BlogLayout>
)

export default Post