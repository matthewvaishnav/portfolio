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
      'Paired-scanner representation learning from matched acquisitions of the same tissue. The primary SCORPION campaign uses a capacity-matched neural control and slide-blocked evaluation.',
    metric: '175 registered fits',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://matthewvaishnav.github.io/computational-pathology-research/'
  },
  {
    title: 'SCORPION Paired-Acquisition Study',
    type: 'Representation study',
    date: '2026',
    description:
      'Five-scanner H&E study with 48 slides and 480 aligned tissue regions. The current evidence package contains the registered capacity-matched comparison, fold-aware analysis, and reproducible artifacts.',
    metric: '48 slides · 480 regions · 5 scanners',
    image: '/portfolio/images/research/scorpion-cover.webp',
    href: 'https://github.com/matthewvaishnav/paired-acquisition-factorization-scorpion'
  },
  {
    title: 'Multi-Scanner Canine SCC Audit',
    type: 'External audit',
    date: '2026',
    description:
      'Biological-sample-blocked evaluation across five scanners and 44 samples, including direct comparison with centroid, QR, and paired-linear scanner-removal baselines.',
    metric: '44 samples · 5 scanners',
    image: '/portfolio/images/research/canine-scc-cover.webp',
    href: 'https://github.com/matthewvaishnav/paired-acquisition-factorization-caninescc'
  },
  {
    title: 'NucleoScope Nuclear Measurement',
    type: 'Active collaboration',
    date: '2026',
    description:
      'Technical collaboration on nucleus-level H&E measurement, repeated-detection structure, computational-context effects, and the search for stable tissue organization that survives explicit artifact controls.',
    metric: 'Measurement and law discovery',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://nucleoscope.ai/'
  },
  {
    title: 'Whole-Slide Modeling',
    type: 'Whole-slide learning',
    date: '2026',
    description:
      'Authored TransnnMIL work and ongoing whole-slide spatial-model research on aggregation, topology, and tissue dynamics, evaluated with matched baselines and falsification controls.',
    metric: '10,611 PANDA slide bags',
    image: '/portfolio/images/research/allocation-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'PathologyFL',
    type: 'Separate research line',
    date: '2026',
    description:
      'Federated and site-aware pathology learning with explicit dominance detection, weighting policies, and simulated-site stress tests. PathologyFL is separate from PA-NF rather than a stage inside it.',
    metric: 'Federated pathology research',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/dominance-detector-transfer-results.md'
  },
  {
    title: 'Scientific Compiler / Evidence DSL',
    type: 'Research tooling',
    date: '2026',
    description:
      'Typed scientific infrastructure for making experimental legality explicit: units, acquisition identities, controls, evidence objects, admissible claims, and fail-closed validation.',
    metric: 'Reproducibility systems',
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
          I work across several distinct research lines rather than one umbrella pipeline. PA-NF is
          the paired-acquisition representation project. Whole-slide modeling, PathologyFL,
          NucleoScope measurement research, and scientific-compiler work are separate programs with
          their own experiments and evidence boundaries.
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
            These links point to the current research record rather than older standalone PDFs or
            superseded analysis pages.
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
          <Text fontSize="sm" color={subtleText} lineHeight="1.8">
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
