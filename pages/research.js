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

const papers = [
  {
    title: 'Paired-Acquisition Neural Factorization for Computational Pathology',
    type: 'Technical report',
    date: '2026',
    description:
      'The research-program paper: a biology-preserving approach to separating tissue signal from scanner and acquisition signal in frozen pathology representations.',
    metric: '2,400 images · 5 scanners',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href:
      'https://matthewvaishnav.github.io/computational-pathology-research/computational-pathology-research-platform-for-federated-oncology.pdf'
  },
  {
    title: 'Paired-Acquisition Neural Factorization on SCORPION',
    type: 'Core study',
    date: '2026',
    description:
      'The primary paired-scanner study across DINOv2, Phikon, and ResNet50, with original-slide blocking and frozen cross-backbone transfer.',
    metric: '48 slides · 480 regions',
    image: '/portfolio/images/research/scorpion-cover.webp',
    href:
      'https://matthewvaishnav.github.io/paired-acquisition-factorization-scorpion/paired-acquisition-factorization-scorpion.pdf'
  },
  {
    title: 'External Paired-Scanner Validation on Canine SCC',
    type: 'External validation',
    date: '2026',
    description:
      'A locked transfer of the SCORPION configuration to an independent five-scanner canine squamous cell carcinoma benchmark.',
    metric: '44 samples · 805 regions',
    image: '/portfolio/images/research/canine-scc-cover.webp',
    href:
      'https://matthewvaishnav.github.io/paired-acquisition-factorization-caninescc/paired-acquisition-factorization-caninescc.pdf'
  },
  {
    title: 'Pair-Repeat Allocation Effects',
    type: 'Allocation study',
    date: '2026',
    description:
      'A matched-budget study of whether paired-acquisition learning benefits more from additional biological pair diversity or repeated anchor exposure.',
    metric: '6,400 / 12,800 budgets',
    image: '/portfolio/images/research/allocation-cover.webp',
    href:
      'https://matthewvaishnav.github.io/paired-acquisition-factorization-allocation/paired-acquisition-factorization-allocation.pdf'
  }
]

const PaperCard = ({ paper }) => {
  const muted = useColorModeValue('gray.600', 'whiteAlpha.700')
  const border = useColorModeValue('blackAlpha.300', 'whiteAlpha.300')
  const cardBg = useColorModeValue('whiteAlpha.600', 'whiteAlpha.50')

  return (
    <LinkBox
      as="article"
      role="group"
      display="flex"
      flexDirection="column"
      h="100%"
      p={3}
      border="1px solid"
      borderColor="transparent"
      borderRadius="2xl"
      bg={cardBg}
      transition="transform 180ms ease, border-color 180ms ease, background 180ms ease"
      _hover={{
        transform: 'translateY(-4px)',
        borderColor: border,
        bg: useColorModeValue('whiteAlpha.900', 'whiteAlpha.100')
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
          src={paper.image}
          alt={`First page of ${paper.title}`}
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
            {paper.type}
          </Badge>
          <Text fontSize="sm" color={muted}>
            {paper.date}
          </Text>
        </Stack>

        <Heading as="h2" fontSize="xl" lineHeight="1.25" letterSpacing="-0.015em">
          <LinkOverlay href={paper.href} target="_blank" rel="noopener noreferrer">
            {paper.title}
          </LinkOverlay>
        </Heading>

        <Text color={muted} lineHeight="1.65" fontSize="sm">
          {paper.description}
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
          <Text>{paper.metric}</Text>
          <Box
            display="inline-flex"
            alignItems="center"
            gap={1}
            color={useColorModeValue('teal.600', 'teal.200')}
            fontWeight={600}
          >
            Read PDF <ArrowForwardIcon />
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
        <Text color={muted} fontSize="sm" mt={1}>
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
  const claimBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const claimBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <Layout title="Research">
      <Box
        as="header"
        position="relative"
        w="100vw"
        minH={{ base: '270px', md: '330px' }}
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
          px={{ base: 6, md: 2 }}
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
            A curated index of the research I{' '}
            <Box as="span" color={useColorModeValue('teal.700', 'teal.200')}>
              publish
            </Box>
          </Heading>
        </Box>
      </Box>

      <Box pt={{ base: 9, md: 12 }} pb={5}>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color={bodyText}
          lineHeight="1.85"
          maxW="700px"
        >
          My working papers and reproducibility packages focus on computational pathology,
          paired-acquisition representation learning, scanner robustness, whole-slide modeling,
          and rigorous ML evaluation. This is the public reading layer: each paper links directly
          to its PDF, with the underlying code and frozen evidence available in the research
          repositories.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 7 }} py={6}>
        {papers.map(paper => (
          <PaperCard key={paper.title} paper={paper} />
        ))}
      </SimpleGrid>

      <Box as="section" pt={{ base: 10, md: 14 }} pb={6}>
        <Heading as="h2" fontSize="2xl" mb={2}>
          Open research record
        </Heading>
        <Text color={subtleText} lineHeight="1.7" mb={4}>
          The papers are the readable layer. Protocols, code, result artifacts, and explicit
          claim boundaries remain public alongside them.
        </Text>

        <ResearchLink
          label="Computational pathology research repository"
          description="Main codebase, documentation, evidence ledger, and technical-report source."
          href="https://github.com/matthewvaishnav/computational-pathology-research"
        />
        <ResearchLink
          label="Study package index"
          description="Focused SCORPION, external canine SCC, and pair-allocation packages."
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
        <Text fontSize="sm" color={subtleText} lineHeight="1.75">
          <Box as="span" fontWeight={800} color={bodyText}>
            Claim boundary.
          </Box>{' '}
          This is research-only work under controlled experimental conditions. It is not
          clinically validated, diagnostic software, or intended for patient-care decisions.
        </Text>
      </Box>
    </Layout>
  )
}

export default Research
