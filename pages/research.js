import {
  AspectRatio,
  Badge,
  Box,
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
    title: 'Current Claim Boundary',
    type: 'Authoritative record',
    date: 'Updated July 2026',
    description:
      'The current supported claims, withdrawn interpretations, active evidence families, and required next evidence for the research program.',
    metric: 'Start here',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/blob/main/CLAIM_BOUNDARY.md'
  },
  {
    title: 'Corrected Paired-Acquisition Evidence',
    type: 'Promoted evidence',
    date: 'July 26, 2026',
    description:
      'The forward-valid corrected release for fold-aware SCORPION inference and the corrected fixed-estimand canine SCC audit.',
    metric: 'Corrected release',
    image: '/portfolio/images/research/scorpion-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/tree/main/evidence/paired_acquisition/corrected-20260726'
  },
  {
    title: 'Capacity-Matched SCORPION Ablations',
    type: 'Promoted evidence',
    date: 'July 26, 2026',
    description:
      'A seven-variant, five-fold, five-seed campaign using a true equal-capacity two-branch control and registered objective ablations.',
    metric: '175 / 175 fits',
    image: '/portfolio/images/research/scorpion-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/tree/main/evidence/paired_acquisition/scorpion-capacity-matched-20260726'
  },
  {
    title: 'Dimensionality × Cross-Covariance Factorial',
    type: 'Promoted evidence',
    date: 'July 27, 2026',
    description:
      'A preregistered canine SCC factorial that found no universal dimensionality effect or stable operating point under the tested protocol.',
    metric: '450 / 450 cells',
    image: '/portfolio/images/research/canine-scc-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/tree/main/evidence/paired_acquisition/dimensionality-xcov-factorial-20260726'
  },
  {
    title: 'Pair-Repeat Allocation Effects',
    type: 'Active study',
    date: '2026',
    description:
      'A matched-budget study of whether paired-acquisition learning benefits more from biological pair diversity or repeated anchor exposure.',
    metric: '6,400 / 12,800 budgets',
    image: '/portfolio/images/research/allocation-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/studies/index.md'
  },
  {
    title: 'Prospective Paired Affine Comparison',
    type: 'Preregistered protocol',
    date: 'July 29, 2026',
    description:
      'A leakage-resistant comparison of neural factorization with centroid translation, orthogonal Procrustes, affine least squares, and ridge affine controls. No result is claimed yet.',
    metric: 'Execution pending',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/featmap-affine-comparison-protocol.md'
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
      _hover={{
        transform: 'translateY(-4px)',
        borderColor: hoverBorder,
        bg: hoverBg
      }}
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
          <Box
            display="inline-flex"
            alignItems="center"
            gap={1}
            color={accent}
            fontWeight={600}
          >
            Open record <ArrowForwardIcon />
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
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, #d8eee9 0%, #e9d9e9 50%, #f3dfca 100%)',
    'linear-gradient(135deg, #122725 0%, #24182c 52%, #2d2017 100%)'
  )
  const heroAccent = useColorModeValue('teal.700', 'teal.200')
  const claimBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const claimBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <Layout title="Research">
      <Box
        as="header"
        position="relative"
        w="100vw"
        minH={{ base: '250px', md: '310px' }}
        ml="calc(50% - 50vw)"
        display="flex"
        alignItems="center"
        overflow="hidden"
        bg={heroBg}
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          opacity: 0.45,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.09) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'linear-gradient(to bottom, black, transparent)'
        }}
        _after={{
          content: '""',
          position: 'absolute',
          width: { base: '240px', md: '420px' },
          height: { base: '240px', md: '420px' },
          right: { base: '-110px', md: '6vw' },
          top: { base: '-100px', md: '-190px' },
          borderRadius: 'full',
          bg: 'rgba(255,255,255,.12)',
          filter: 'blur(2px)'
        }}
      >
        <Box
          position="relative"
          zIndex={1}
          w="100%"
          maxW="container.md"
          mx="auto"
          px={{ base: 6, md: 8 }}
          textAlign="center"
        >
          <Text
            fontSize="xs"
            fontWeight={800}
            textTransform="uppercase"
            letterSpacing="0.22em"
            mb={5}
          >
            Research record
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight={600}
            lineHeight="1.08"
            letterSpacing="-0.035em"
          >
            Current evidence, protocols, and{' '}
            <Box as="span" color={heroAccent}>
              claim boundaries
            </Box>
          </Heading>
        </Box>
      </Box>

      <Box pt={{ base: 9, md: 12 }} pb={{ base: 4, md: 6 }}>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color={bodyText}
          lineHeight="1.85"
          maxW="710px"
        >
          This page points to the current public research record rather than treating older papers as
          automatically authoritative. Start with the claim boundary, then follow the promoted
          evidence packages, preregistered protocols, and reproducibility records for each result.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 7 }} py={6}>
        {records.map(record => (
          <RecordCard key={record.title} record={record} />
        ))}
      </SimpleGrid>

      <Box as="section" pt={{ base: 10, md: 14 }} pb={6}>
        <Heading as="h2" fontSize="2xl" mb={2}>
          Open research record
        </Heading>
        <Text color={subtleText} lineHeight="1.75" mb={4}>
          The repository contains the code, frozen protocols, result artifacts, provenance records,
          and explicit boundaries needed to audit the active claims.
        </Text>

        <ResearchLink
          label="Computational pathology research repository"
          description="Main codebase, current README, evidence packages, technical documentation, and reproducibility infrastructure."
          href="https://github.com/matthewvaishnav/computational-pathology-research"
        />
        <ResearchLink
          label="Research-engineering brief"
          description="A concise explanation of Paired-Acquisition Neural Factorization, its design, current evidence, and limitations."
          href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/paired-acquisition-research-engineering-brief.md"
        />
        <ResearchLink
          label="Scientific audit remediation ledger"
          description="The corrections, withdrawals, reruns, and evidence-promotion status behind the current public record."
          href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/scientific-audit-remediation-20260725.md"
        />
        <ResearchLink
          label="Study package index"
          description="Focused SCORPION, external canine SCC, and pair-allocation repositories and documents."
          href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/studies/index.md"
        />
      </Box>

      <Box
        mt={8}
        mb={4}
        p={{ base: 5, md: 6 }}
        border="1px solid"
        borderColor={claimBorder}
        borderRadius="xl"
        bg={claimBg}
      >
        <Text fontSize="sm" color={subtleText} lineHeight="1.8">
          <Box as="span" fontWeight={800} color={bodyText}>
            Claim boundary.
          </Box>{' '}
          This is research-only work under controlled experimental conditions. It is not clinically
          validated, diagnostic software, or intended for patient-care decisions. The public paper
          remains on scientific-audit hold; the repository claim boundary and promoted evidence
          packages are authoritative when older summaries conflict.
        </Text>
      </Box>
    </Layout>
  )
}

export default Research
