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
    title: 'Paired-Acquisition Neural Factorization',
    type: 'Flagship preprint',
    date: 'September 4, 2026',
    description:
      'End-to-end computational pathology pipeline spanning paired-scanner representation learning, TransnnMIL whole-slide aggregation, and PathologyFL multi-institutional learning.',
    metric: 'Flagship paper',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href:
      'https://matthewvaishnav.github.io/computational-pathology-research/paired-acquisition-neural-factorization-pipeline.pdf'
  },
  {
    title: 'Focused PA-NF Representation Paper',
    type: 'Supporting manuscript',
    date: '2026',
    description:
      'Focused manuscript for the paired-acquisition representation stage, including the corrected SCORPION and independent multi-scanner evidence.',
    metric: 'Representation stage',
    image: '/portfolio/images/research/scorpion-cover.webp',
    href:
      'https://matthewvaishnav.github.io/computational-pathology-research/paired-acquisition-neural-factorization.pdf'
  },
  {
    title: 'Capacity-Matched SCORPION Campaign',
    type: 'Experimental evidence',
    date: '2026',
    description:
      'Seven variants across five folds and five seeds. PA-NF reduced tissue-branch scanner balanced accuracy by 0.3108 relative to an equal-capacity two-branch neural control while preserving registered retrieval noninferiority.',
    metric: '175 / 175 fits',
    image: '/portfolio/images/research/scorpion-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/tree/main/evidence/paired_acquisition/scorpion-capacity-matched-20260726'
  },
  {
    title: 'Independent Multi-Scanner Canine SCC Study',
    type: 'External validation',
    date: '2026',
    description:
      'Biological-sample-blocked evaluation across five scanners. The study confirmed strong scanner suppression but also showed that simple centroid, QR, and paired-linear controls remain formidable baselines.',
    metric: '44 samples / 5 scanners',
    image: '/portfolio/images/research/canine-scc-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/tree/main/evidence/paired_acquisition/corrected-20260726'
  },
  {
    title: 'PANDA Whole-Slide TransnnMIL Program',
    type: 'Whole-slide learning',
    date: '2026',
    description:
      'Slide-level prostate grading with 10,611 readable Phikon feature bags. The stabilization grid reached mean best validation QWK 0.8257 at 1e-4 and a best run of 0.8455.',
    metric: '10,611 slides',
    image: '/portfolio/images/research/allocation-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'PathologyFL Dominance-Aware Site Learning',
    type: 'Federated learning',
    date: '2026',
    description:
      'A fixed dominance detector transferred without retuning from label-noise calibration to ordinal site shift, improving global QWK, macro-F1, and worst-site QWK at the strongest tested shift.',
    metric: '+0.01053 global QWK',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/dominance-detector-transfer-results.md'
  },
  {
    title: 'CAMELYON17/WILDS Center-Shift Studies',
    type: 'Multi-center mechanism study',
    date: '2026',
    description:
      'Frozen-feature source-weighting and center-subspace experiments across 455,954 examples from five centers. Equal-client and dominant-center-adjusted policies materially outperformed sample-proportional weighting in the held-out-center proxy.',
    metric: '455,954 examples',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'PatchCamelyon Benchmark',
    type: 'Patch-level benchmark',
    date: '2026',
    description:
      'Complete patch-level training and evaluation path on PCam, reaching ROC AUC 0.9394 and accuracy 0.8526 on the official 32,768-patch test split.',
    metric: '0.9394 ROC AUC',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research'
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
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, #d8eee9 0%, #e9d9e9 50%, #f3dfca 100%)',
    'linear-gradient(135deg, #122725 0%, #24182c 52%, #2d2017 100%)'
  )
  const heroAccent = useColorModeValue('teal.700', 'teal.200')
  const noteBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const noteBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

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
            Research library
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight={600}
            lineHeight="1.08"
            letterSpacing="-0.035em"
          >
            Papers, experiments, and{' '}
            <Box as="span" color={heroAccent}>
              working systems
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
          The PA-NF flagship is the primary synthesis of my computational pathology work. The records
          below expose the main experimental components behind it: paired-scanner representation
          learning, whole-slide aggregation, multi-institutional learning, and the supporting public
          benchmarks.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 7 }} py={6}>
        {records.map(record => (
          <RecordCard key={record.title} record={record} />
        ))}
      </SimpleGrid>

      <Box as="section" pt={{ base: 10, md: 14 }} pb={6}>
        <Heading as="h2" fontSize="2xl" mb={2}>
          Public research links
        </Heading>
        <Text color={subtleText} lineHeight="1.75" mb={4}>
          Papers are backed by the public repository, experiment packages, implementation notes, and
          result tables used to build the current research program.
        </Text>

        <ResearchLink
          label="PA-NF flagship preprint"
          description="The end-to-end paper spanning representation, whole-slide, and institutional learning."
          href="https://matthewvaishnav.github.io/computational-pathology-research/paired-acquisition-neural-factorization-pipeline.pdf"
        />
        <ResearchLink
          label="Computational pathology research repository"
          description="Main codebase, experiments, documentation, and public result artifacts."
          href="https://github.com/matthewvaishnav/computational-pathology-research"
        />
        <ResearchLink
          label="Focused PA-NF representation manuscript"
          description="Supporting paper for the paired-acquisition representation stage."
          href="https://matthewvaishnav.github.io/computational-pathology-research/paired-acquisition-neural-factorization.pdf"
        />
        <ResearchLink
          label="PathologyFL detector-transfer results"
          description="Fixed site-dominance detector transferred without retuning to ordinal site shift."
          href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/dominance-detector-transfer-results.md"
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
          This is research-only work under controlled experimental conditions. Results are specific to
          the stated datasets, feature backbones, folds, comparators, and simulated-site settings; the
          work is not clinical software and does not imply universal model superiority.
        </Text>
      </Box>
    </Layout>
  )
}

export default Research
