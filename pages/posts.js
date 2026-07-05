import { Heading, Box, Link, Text, Container } from '@chakra-ui/react'
import BlogLayout from '../components/layouts/blog'
import NextLink from 'next/link'

const PostCard = ({ href, tag, title, description, date }) => (
  <Box as="article" mb={{ base: 10, md: 16 }}>
    <Link
      as={NextLink}
      href={href}
      style={{ textDecoration: 'none' }}
      display="block"
      p={{ base: 6, md: 8 }}
      borderRadius="lg"
      border="1px solid"
      borderColor="whiteAlpha.200"
      bg="whiteAlpha.50"
      transition="all 0.2s"
      _hover={{
        borderColor: "whiteAlpha.300",
        bg: "whiteAlpha.100",
        transform: "translateY(-2px)"
      }}
    >
      <Box fontSize="xs" color="purple.400" mb={3} fontWeight={600} textTransform="uppercase" letterSpacing="wider">
        {tag}
      </Box>
      <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={3} fontWeight={600} lineHeight="1.3" letterSpacing="-0.01em">
        {title}
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }} mb={4} lineHeight="1.7" color="gray.300">
        {description}
      </Text>
      <Text fontSize="sm" color="gray.500">
        {date}
      </Text>
    </Link>
  </Box>
)

const Posts = () => (
  <BlogLayout title="Posts">
    <Container maxW="container.md" px={{ base: 4, md: 6 }}>
      <Box mb={{ base: 12, md: 16 }} pt={{ base: 8, md: 12 }}>
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} mb={3} fontWeight={600} letterSpacing="-0.02em">
          Technical Writing
        </Heading>
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.400">
          Research updates, mechanism audits, and lab notes
        </Text>
      </Box>

      <PostCard
        href="/posts/deepseek-v4-architecture-notes"
        tag="ML Notes"
        title="What I found interesting about DeepSeek-V4 architecture"
        description="A personal technical reading note on MoE scaling, long-context inference,
        KV-cache pressure, and architecture/hardware co-design."
        date="Reading note"
      />

      <PostCard
        href="https://github.com/matthewvaishnav/paired-acquisition-factorization-scorpion"
        tag="Current Research"
        title="Paired-Acquisition Neural Factorization: scanner signal and tissue identity"
        description="Testing whether paired acquisitions of the same tissue can reduce scanner/acquisition
        signal in pathology embeddings while preserving tissue identity. SCORPION, cross-backbone checks,
        and baseline stress tests."
        date="2025–2026"
      />

      <PostCard
        href="https://matthewvaishnav.github.io/paired-acquisition-factorization-caninescc/paired-acquisition-factorization-caninescc.pdf"
        tag="External Validation"
        title="External multi-scanner validation on canine SCC"
        description="Independent canine SCC dataset validates the scanner-suppression / tissue-preservation
        pattern: scanner-probe accuracy reduced from 0.7529 to 0.3614 while paired cosine improved from
        0.6960 to 0.7300."
        date="2026"
      />

      <PostCard
        href="https://matthewvaishnav.github.io/paired-acquisition-factorization-allocation/paired-acquisition-factorization-allocation.pdf"
        tag="Allocation Study"
        title="Pair-repeat allocation: unique pair diversity vs repeated exposure"
        description="Investigating how allocation of paired acquisitions across unique pairs versus repeated
        exposures affects factorization quality and tissue-identity preservation."
        date="2026"
      />

      <PostCard
        href="https://github.com/matthewvaishnav/computational-pathology-research"
        tag="Mechanism Audit"
        title="Baseline stress tests: scanner suppression is not enough"
        description="Linear scanner projection and PCA baselines demonstrate that simple dimensionality
        reduction does not match the scanner-suppression / tissue-preservation tradeoff achieved by
        Paired-Acquisition Neural Factorization."
        date="2026"
      />

      <PostCard
        href="https://github.com/matthewvaishnav/computational-pathology-research"
        tag="Mechanism Audit"
        title="Acquisition-branch audit: branch separation is measurable"
        description="Post-freeze audit confirming that the acquisition branch retains higher scanner
        recoverability while carrying much lower tissue-identity retrieval than the biological branch."
        date="2026"
      />

      <PostCard
        href="https://github.com/matthewvaishnav/computational-pathology-research"
        tag="Mechanism Audit"
        title="Pair-structure boundary test: biological pairing structure matters"
        description="True same-region paired acquisitions preserve tissue identity best. Looser or random
        pairings can still suppress scanner signal but do not preserve tissue identity as well."
        date="2026"
      />

      <PostCard
        href="/posts/histocore-framework"
        tag="Earlier Research"
        title="Earlier: PANDA / TransnnMIL / AttentionMIL experiments"
        description="Early computational pathology research exploring public benchmark datasets, PCam,
        PANDA prostate grading, multiple-instance learning architectures, and pathology ML evaluation.
        Research-only learning and prototyping."
        date="2025"
      />

      <PostCard
        href="/posts/dominance-aware-federated-pathology"
        tag="Earlier Research"
        title="Earlier: simulated federated pathology stress testing"
        description="Simulated-federation PANDA studies of FedAvg under dominant-site label corruption and
        systematic ordinal threshold bias. Cross-site blending and dominance-aware switching explored as
        robustness mechanisms."
        date="2025–2026"
      />

      <PostCard
        href="/posts/histocore-production-ready"
        tag="Retrospective"
        title="Research infrastructure lessons from an early medical-AI prototype"
        description="Earlier prototype work taught me about reliability, security, data flow, and ML
        infrastructure. It was not production medical AI, not HIPAA-compliant, not diagnostic software,
        and not hospital-ready."
        date="2026"
      />

      <PostCard
        href="/posts/home-lab-setup"
        tag="Security"
        title="Building an 18-node security research lab"
        description="Most people collect stamps or build model trains. I decided to build a full-scale
        security research lab with 18 nodes, 6 VLANs, and comprehensive attack infrastructure."
        date="15 Jan 2025"
      />
    </Container>
  </BlogLayout>
)

export default Posts
