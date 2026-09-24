import {
  AspectRatio,
  Badge,
  Box,
  Container,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

const records = [
  {
    title: 'Paired-Acquisition Neural Factorization',
    type: 'Representation learning',
    date: '2026',
    description:
      'Matched multi-scanner representation learning that separates tissue-oriented and acquisition-oriented information while explicitly testing preservation, leakage, collapse, and strong scanner-removal alternatives.',
    metric: '-0.3108 scanner BA vs control',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://matthewvaishnav.github.io/computational-pathology-research/'
  },
  {
    title: 'Whole-Slide MIL: AttentionMIL & TransnnMIL',
    type: 'Whole-slide learning',
    date: '2026',
    description:
      'PANDA whole-slide modeling with gated AttentionMIL, TransnnMIL, and matched MIL comparators. The emphasis is repeated-seed stability and isolating whether architectural changes earn their claimed advantage.',
    metric: '0.8100 / 0.8257 QWK',
    image: '/portfolio/images/research/allocation-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'WSI-NCA / Whole-Slide Tissue Dynamics',
    type: 'Spatial modeling',
    date: '2026',
    description:
      'Iterative local-state modeling over whole-slide tissue structure, with real-versus-shuffled topology, history controls, tied/untied dynamics, and mechanism-specific falsifiers.',
    metric: 'Topology and history falsification',
    image: '/portfolio/images/research/allocation-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'PathologyFL / FAIR-WEIGHTS-H',
    type: 'Federated pathology',
    date: '2026',
    description:
      'Federated and site-aware pathology learning with institutional weighting, dominance detection, privacy-aware training, robustness controls, and transfer under explicit multi-site shift.',
    metric: '+0.01053 QWK at 45% shift',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/dominance-detector-transfer-results.md'
  },
  {
    title: 'NucleoScope Nuclear Measurement',
    type: 'Active collaboration',
    date: '2026',
    description:
      'Nucleus-level quantitative pathology research on repeated detections, computational-context effects, measurement stability, and candidate tissue-organization laws subjected to explicit artifact attacks.',
    metric: 'Measurement and law discovery',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://nucleoscope.ai/'
  },
  {
    title: 'SERA',
    type: 'Independent ML research',
    date: '2026',
    description:
      'An evidence-governed structural control plane over learned computation, studying when computational structure should be born, reused, composed, repaired, consolidated, or retired under increasingly strong conventional neural controls.',
    metric: 'Validation-stage structural learning',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: null
  },
  {
    title: 'PANDA / SICAP Provenance & Scanner Validation',
    type: 'Provenance and acquisition',
    date: '2026',
    description:
      'Dataset provenance, scanner inventory, assignment reproducibility, transport validation, and same-glass acquisition intervention work designed to make downstream whole-slide and scanner claims physically and computationally auditable.',
    metric: '24,235 SICAP assignments reproduced',
    image: '/portfolio/images/research/scorpion-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'Scientific Compiler / Evidence DSL',
    type: 'Scientific systems',
    date: '2026',
    description:
      'Typed scientific infrastructure that makes identities, units, controls, provenance, evidence objects, and admissible claims machine-checkable instead of leaving scientific legality implicit.',
    metric: '175 / 175 metamorphic checks',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'Accountable Computational Pathology Program',
    type: 'Program-level research record',
    date: '2026',
    description:
      'The program-level evidence and reproducibility layer connecting representation, whole-slide, federated, provenance, and scientific-audit work while keeping the claims of each line separately testable.',
    metric: 'Evidence ledger and claim boundaries',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  }
]

const RecordCard = ({ record }) => {
  const muted = useColorModeValue('gray.600', 'whiteAlpha.700')
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const hoverBg = useColorModeValue('white', 'whiteAlpha.100')
  const hoverBorder = useColorModeValue('teal.300', 'teal.500')
  const accent = useColorModeValue('teal.600', 'teal.200')
  const shadow = useColorModeValue('0 12px 28px rgba(15, 23, 42, 0.06)', 'none')

  return (
    <LinkBox
      as="article"
      role="group"
      display="flex"
      flexDirection="column"
      h="100%"
      p={3}
      border="1px solid"
      borderColor={border}
      borderRadius="2xl"
      bg={cardBg}
      boxShadow={shadow}
      transition="transform 180ms ease, border-color 180ms ease, background 180ms ease"
      _hover={{ transform: 'translateY(-4px)', borderColor: hoverBorder, bg: hoverBg }}
    >
      <AspectRatio
        ratio={16 / 9}
        overflow="hidden"
        border="1px solid"
        borderColor={border}
        borderRadius="xl"
        bg="white"
      >
        <Box
          as="img"
          src={record.image}
          alt={`Cover image for ${record.title}`}
          objectFit="cover"
          objectPosition="top"
          transition="transform 280ms ease"
          _groupHover={{ transform: 'scale(1.025)' }}
        />
      </AspectRatio>

      <Stack flex={1} px={2} pt={4} pb={2} spacing={3}>
        <Stack direction="row" justify="space-between" align="center" spacing={3}>
          <Badge
            colorScheme="teal"
            variant="subtle"
            borderRadius="full"
            px={2.5}
            py={1}
            textTransform="none"
            letterSpacing="normal"
          >
            {record.type}
          </Badge>
          <Text fontSize="xs" color={muted} textAlign="right">
            {record.date}
          </Text>
        </Stack>

        <Heading as="h2" fontSize="xl" lineHeight="1.3" letterSpacing="-0.015em">
          {record.href ? (
            <LinkOverlay href={record.href} target="_blank" rel="noopener noreferrer">
              {record.title}
            </LinkOverlay>
          ) : (
            record.title
          )}
        </Heading>

        <Text color={muted} lineHeight="1.7" fontSize="sm">
          {record.description}
        </Text>

        <Stack
          direction="row"
          justify="space-between"
          align="center"
          pt={1}
          mt="auto"
          color={muted}
          fontSize="sm"
        >
          <Text>{record.metric}</Text>
          <Box display="inline-flex" alignItems="center" gap={1} color={accent} fontWeight={600}>
            {record.href ? (
              <>
                Open <ArrowForwardIcon />
              </>
            ) : (
              'Private research record'
            )}
          </Box>
        </Stack>
      </Stack>
    </LinkBox>
  )
}

const ResearchLink = ({ label, description, href }) => {
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const muted = useColorModeValue('gray.600', 'whiteAlpha.700')

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      py={4}
      borderBottom="1px solid"
      borderColor={border}
      _hover={{ textDecoration: 'none' }}
    >
      <Box>
        <Text fontWeight={700}>{label}</Text>
        <Text color={muted} fontSize="sm" mt={1} lineHeight="1.7">
          {description}
        </Text>
      </Box>
      <ExternalLinkIcon flexShrink={0} />
    </Link>
  )
}

const Research = () => {
  const bodyText = useColorModeValue('gray.700', 'whiteAlpha.800')
  const subtleText = useColorModeValue('gray.600', 'whiteAlpha.700')
  const noteBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const noteBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <Layout title="Research">
      <Container px={0}>
        <Heading as="h3" fontSize={20} mb={4}>
          Research
        </Heading>

        <Text color={bodyText} lineHeight="1.8" mb={6}>
          I run several independent research programs rather than one model stack. They span
          paired-acquisition representations, whole-slide MIL and spatial dynamics, federated
          pathology, quantitative nuclear measurement, adaptive relational learning, and scientific
          evidence tooling. Each has its own experiments, comparators, and claim boundary.
        </Text>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {records.map(record => (
            <RecordCard key={record.title} record={record} />
          ))}
        </SimpleGrid>

        <Box as="section" pt={12}>
          <Heading as="h3" fontSize={20} mb={2}>
            Major studies, models, and validation lines
          </Heading>
          <Text color={subtleText} lineHeight="1.75" mb={5}>
            These are substantial parts of the research record that sit inside or across the
            top-level programs above. They are shown explicitly so they are not hidden behind a
            single umbrella label.
          </Text>

          <Stack spacing={5}>
            <Box>
              <Text fontWeight={700}>Paired-acquisition studies</Text>
              <Text color={subtleText} fontSize="sm" mt={1} lineHeight="1.75">
                SCORPION five-scanner study; independent canine SCC fixed-estimand audit; pair-repeat
                allocation study; capacity-matched PA-NF campaign; public evidence and model releases.
              </Text>
            </Box>
            <Box>
              <Text fontWeight={700}>Whole-slide model family</Text>
              <Text color={subtleText} fontSize="sm" mt={1} lineHeight="1.75">
                Mean pooling, gated AttentionMIL, nnMIL, CLAM-style MIL, TransMIL-style controls,
                TransnnMIL, Phikon feature bags, and foundation-encoder comparisons on PANDA and
                related pathology benchmarks.
              </Text>
            </Box>
            <Box>
              <Text fontWeight={700}>Spatial whole-slide dynamics</Text>
              <Text color={subtleText} fontSize="sm" mt={1} lineHeight="1.75">
                WSI-NCA, real-versus-shuffled topology, tied and untied recurrence, history transport,
                local update rules, homophily checks, SICAP transport, and PANDA spatial-feature
                validation.
              </Text>
            </Box>
            <Box>
              <Text fontWeight={700}>Federated and institutional learning</Text>
              <Text color={subtleText} fontSize="sm" mt={1} lineHeight="1.75">
                PathologyFL, FAIR-WEIGHTS-H, dominance and DMI-style site-influence work, FedAvg /
                FedProx / FedAdam infrastructure, privacy and secure-aggregation hooks, simulated-site
                stress tests, and CAMELYON17/WILDS held-out-center analysis.
              </Text>
            </Box>
            <Box>
              <Text fontWeight={700}>Provenance and scanner-intervention studies</Text>
              <Text color={subtleText} fontSize="sm" mt={1} lineHeight="1.75">
                PANDA scanner inventory, SICAP assignment reproduction, public-dataset provenance,
                same-glass PAR intervention, branch-conditioned scale-by-gauge analysis, and frozen
                transport protocols for new acquisition cohorts.
              </Text>
            </Box>
            <Box>
              <Text fontWeight={700}>NucleoScope measurement program</Text>
              <Text color={subtleText} fontSize="sm" mt={1} lineHeight="1.75">
                Repeated-detection and computational-context measurement audits, primitive-level
                response analysis, tie-aware nulls, cross-tile matching, artifact adversaries,
                ordinal spatial statistics, and frozen candidate-law tests.
              </Text>
            </Box>
            <Box>
              <Text fontWeight={700}>SERA structural-learning program</Text>
              <Text color={subtleText} fontSize="sm" mt={1} lineHeight="1.75">
                Self-expanding relational structure, evidence-governed birth and authority,
                composition and consolidation, provenance-bearing transport, NRM falsification
                ladders, and CRAS / System-One-style conventional comparator programs.
              </Text>
            </Box>
            <Box>
              <Text fontWeight={700}>Scientific language and evidence infrastructure</Text>
              <Text color={subtleText} fontSize="sm" mt={1} lineHeight="1.75">
                Pathology Pipeline Language, typed Evidence&lt;T&gt;, run identity and hierarchy
                checks, units, admissible-claim evaluation, immutable evidence packages, release
                registries, hostile review, and fail-closed validation.
              </Text>
            </Box>
            <Box>
              <Text fontWeight={700}>Benchmark and external-validation substrates</Text>
              <Text color={subtleText} fontSize="sm" mt={1} lineHeight="1.75">
                PatchCamelyon, PANDA, CAMELYON17/WILDS, SCORPION, canine SCC, SICAP, and frozen
                feature / manifest infrastructure used to separate software validation from
                scientific evidence.
              </Text>
            </Box>
          </Stack>
        </Box>

        <Box as="section" pt={12} pb={6}>
          <Heading as="h3" fontSize={20} mb={2}>
            Canonical research links
          </Heading>
          <Text color={subtleText} lineHeight="1.75" mb={4}>
            Current manuscripts, code, study-specific audits, and versioned evidence packages for
            inspecting the experiments behind the claims.
          </Text>

          <ResearchLink
            label="PA-NF canonical manuscript"
            description="Current public manuscript and release entry point."
            href="https://matthewvaishnav.github.io/computational-pathology-research/"
          />
          <ResearchLink
            label="Computational pathology research hub"
            description="Main public codebase, experiments, claim boundaries, documentation, and evidence ledger."
            href="https://github.com/matthewvaishnav/computational-pathology-research"
          />
          <ResearchLink
            label="PA-NF SCORPION study"
            description="Study-specific repository for the paired-acquisition SCORPION experiments."
            href="https://github.com/matthewvaishnav/paired-acquisition-factorization-scorpion"
          />
          <ResearchLink
            label="PA-NF canine SCC audit"
            description="Study-specific repository for the independent multi-scanner canine evaluation."
            href="https://github.com/matthewvaishnav/paired-acquisition-factorization-caninescc"
          />
          <ResearchLink
            label="PA-NF pair-repeat allocation study"
            description="Study-specific repository for paired-acquisition allocation and repeat structure."
            href="https://github.com/matthewvaishnav/paired-acquisition-factorization-allocation"
          />
          <ResearchLink
            label="Whole-slide model documentation"
            description="AttentionMIL, TransnnMIL, CLAM, TransMIL-style controls, and related WSI model documentation."
            href="https://github.com/matthewvaishnav/computational-pathology-research/tree/main/docs/models"
          />
          <ResearchLink
            label="PathologyFL documentation"
            description="Federated pathology infrastructure and institutional-learning research."
            href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/federated/pathologyfl.md"
          />
          <ResearchLink
            label="PA-NF evidence release"
            description="Versioned public evidence package for the paired-acquisition study."
            href="https://huggingface.co/datasets/MatthewVaishnav/paired-acquisition-factorization-evidence"
          />
        </Box>

        <Box
          mt={8}
          mb={4}
          p={{ base: 5, md: 6 }}
          border="1px solid"
          borderColor={noteBorder}
          borderRadius="xl"
          bg={noteBg}
        >
          <Text
            fontSize="sm"
            color={subtleText}
            lineHeight="1.8"
            textAlign="center"
            maxW="60ch"
            mx="auto"
          >
            Research-only work. Results are bounded to the stated datasets, comparators, and
            protocols; active projects are presented as work in progress rather than as established
            biological or clinical conclusions.
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Research
