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
    type: 'Published research',
    date: '2026',
    description:
      'Holds tissue identity fixed across matched scanner acquisitions and asks whether acquisition information can be reduced without destroying tissue structure. Evaluated with capacity-matched, retrieval, and strong linear-removal controls.',
    metric: '-0.3108 scanner BA vs control',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://matthewvaishnav.github.io/computational-pathology-research/'
  },
  {
    title: 'SCORPION Paired-Acquisition Study',
    type: 'Representation study',
    date: '2026',
    description:
      'Five-scanner H&E study in which the same underlying tissue is observed under different acquisitions. The registered campaign tests scanner suppression and tissue preservation under slide-blocked evaluation.',
    metric: '175 / 175 registered fits',
    image: '/portfolio/images/research/scorpion-cover.webp',
    href: 'https://github.com/matthewvaishnav/paired-acquisition-factorization-scorpion'
  },
  {
    title: 'Multi-Scanner Canine SCC Audit',
    type: 'External audit',
    date: '2026',
    description:
      'Independent five-scanner audit that keeps the hard result visible: PA-NF suppresses scanner signal, but strong centroid, QR, and paired-linear alternatives remain serious comparators under a fixed estimand.',
    metric: '44 samples · 5 scanners',
    image: '/portfolio/images/research/canine-scc-cover.webp',
    href: 'https://github.com/matthewvaishnav/paired-acquisition-factorization-caninescc'
  },
  {
    title: 'NucleoScope Nuclear Measurement',
    type: 'Active collaboration',
    date: '2026',
    description:
      'Tests whether a nucleus-level measurement is stable to the computational context in which the same object is detected. Repeated detections, reruns, and artifact controls separate measurement behavior from biological interpretation.',
    metric: 'Repeated-context measurement audit',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://nucleoscope.ai/'
  },
  {
    title: 'Whole-Slide Modeling',
    type: 'Whole-slide learning',
    date: '2026',
    description:
      'TransnnMIL tests slide-level aggregation; WSI-NCA asks whether topology, history, and spatial update mechanisms remain necessary after matched baselines, shuffled structure, and mechanism-specific falsifiers.',
    metric: '10,611 PANDA slide bags',
    image: '/portfolio/images/research/allocation-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'PathologyFL',
    type: 'Separate research line',
    date: '2026',
    description:
      'Tests how institutional imbalance and shift change distributed pathology learning, including fixed dominance detection and site-aware weighting under controlled stress rather than assuming aggregate performance implies robustness.',
    metric: '+0.01053 QWK at 45% shift',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/dominance-detector-transfer-results.md'
  },
  {
    title: 'Scientific Compiler / Evidence DSL',
    type: 'Research tooling',
    date: '2026',
    description:
      'Compiles scientific constraints into executable checks: identities, units, controls, evidence provenance, admissible claims, and fail-closed validation when the experiment does not support the statement.',
    metric: '175 / 175 metamorphic checks',
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
          <LinkOverlay href={record.href} target="_blank" rel="noopener noreferrer">
            {record.title}
          </LinkOverlay>
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
            Open <ArrowForwardIcon />
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
          My research is built around controlled falsification. Each line asks a different question,
          but the standard is the same: expose the hidden variable that could explain the result,
          change it while preserving what should remain, and see whether the claimed signal survives.
          The projects stay separate because their evidence and claim boundaries are different.
        </Text>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {records.map(record => (
            <RecordCard key={record.title} record={record} />
          ))}
        </SimpleGrid>

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
