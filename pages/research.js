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

const programs = [
  {
    title: 'Paired Acquisition & Representation Identifiability',
    type: 'Representation research',
    date: '2026',
    description:
      'PA-NF sits inside a broader paired-acquisition program covering scanner and center subspaces, representation geometry, capacity allocation, unseen-identity generalization, pair structure, and strong linear and neural controls.',
    metric: 'SCORPION · canine SCC · paired controls',
    image: '/portfolio/images/research/scorpion-cover.webp',
    href: 'https://matthewvaishnav.github.io/computational-pathology-research/'
  },
  {
    title: 'Whole-Slide Learning',
    type: 'MIL and WSI models',
    date: '2026',
    description:
      'PANDA whole-slide research spanning mean pooling, gated AttentionMIL, nnMIL, CLAM-style and TransMIL-style controls, authored TransnnMIL variants, repeated-seed stability, branch fusion, and spatial aggregation.',
    metric: '10,611 verified PANDA feature bags',
    image: '/portfolio/images/research/allocation-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'WSI-NCA / WCI Lineage',
    type: 'Representation coupling and dynamics',
    date: '2026',
    description:
      'A broader whole-slide research lineage spanning local state dynamics, topology and history falsifiers, PANDA coupling, SICAP transport, representation-state canonicalization, K5 coupling structure, and scanner intervention.',
    metric: 'Synthetic · PANDA · SICAP · PAR',
    image: '/portfolio/images/research/allocation-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'Federated & Institutional Learning',
    type: 'PathologyFL and site-signal research',
    date: '2026',
    description:
      'PathologyFL, FAIR-WEIGHTS-H, dominant-site stress tests, detector transfer, CAMELYON17 external-center validation, center-subspace studies, and communication, privacy, and infrastructure stress accounting.',
    metric: 'PANDA · PCam · CAMELYON17/WILDS',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href:
      'https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/dominant-site-federated-pathology-paper.md'
  },
  {
    title: 'PANDA / SICAP Acquisition & Provenance',
    type: 'Scanner and provenance research',
    date: '2026',
    description:
      'Physical-slide identity, scanner inventory, assignment reproducibility, public-dataset provenance, transport audits, and the PAR same-glass scanner intervention with a frozen cross-fitted mechanism analysis.',
    metric: '24,235 / 24,235 SICAP assignments reproduced',
    image: '/portfolio/images/research/scorpion-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  },
  {
    title: 'NucleoScope',
    type: 'Quantitative nuclear pathology',
    date: '2026',
    description:
      'Active collaboration covering measurement stability, repeated detections, computational context, primitive response, cross-tile structure, artifact models, ordinal spatial statistics, and independently governed law discovery.',
    metric: 'Measurement mechanics and law discovery',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://nucleoscope.ai/'
  },
  {
    title: 'SERA',
    type: 'Independent machine-learning research',
    date: '2026',
    description:
      'Evidence-governed adaptive computation: formation, birth, reuse, composition, authority, evidence transport, repair, consolidation, retirement, and increasingly strong CRAS and System-One-style conventional controls.',
    metric: 'Validation-stage structural learning',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: null
  },
  {
    title: 'Scientific Compiler & Evidence Systems',
    type: 'Scientific computing',
    date: '2026',
    description:
      'Pathology Pipeline Language, typed Evidence<T>, identity hierarchies, units, provenance, run legality, immutable evidence packages, release registries, claim boundaries, and fail-closed scientific validation.',
    metric: '15/15 pipeline · 35/35 adversarial tests',
    image: '/portfolio/images/research/research-platform-cover.webp',
    href: 'https://github.com/matthewvaishnav/computational-pathology-research'
  }
]

const researchGroups = [
  {
    title: 'Representation, acquisition, and identifiability',
    items: [
      'PCam patch benchmark foundation and evaluation infrastructure',
      'Paired-scanner experimental design and broken-pair / random-pair controls',
      'Paired-Acquisition Neural Factorization (PA-NF)',
      'SCORPION five-scanner paired-acquisition study',
      'Independent multi-scanner canine SCC fixed-estimand audit',
      'Scanner and center subspace methods: centroid, QR, PCA, paired-linear, adversarial, and projection controls',
      'Cross-backbone PA-NF evaluation across DINOv2, Phikon, and ResNet feature families',
      'Synthetic identifiability, two-resource phase maps, and capacity-allocation studies',
      'Task-defined biological sufficiency and benchmark-instrument power audits',
      'Pair-repeat / unique-anchor allocation and biological bottleneck studies',
      'Unseen-identity representation geometry and crossed-factor generalization',
      'FEATMAP / affine, Procrustes, DANN, and other comparator protocols',
      'Crossed-preparation identifiability and preparation/workflow metadata-readiness work'
    ]
  },
  {
    title: 'Whole-slide modeling and representation coupling',
    items: [
      'Mean-pooled Phikon whole-slide baselines',
      'Gated AttentionMIL',
      'nnMIL',
      'CLAM-style multiple-instance learning',
      'TransMIL-style global-attention controls',
      'TransnnMIL multibranch whole-slide architecture',
      'Branch-token, concat, gate, and learned branch-attention fusion controls',
      'Hierarchical pooling, topology/GNN branches, graph caching, and adaptive pruning',
      'Repeated-seed TransnnMIL stability and matched-rerun program',
      'WSI-NCA local state-update dynamics',
      'Real-versus-shuffled topology and tied-versus-untied recurrence',
      'History transport and mechanism-specific spatial falsifiers',
      'PANDA representation coupling and state canonicalization',
      'SICAP transport and seed-excluded backbone tests',
      'K5 coupling hierarchy and failed gauge / phenotype-transport branches'
    ]
  },
  {
    title: 'Federated pathology and institutional generalization',
    items: [
      'PathologyFL coordinator, client, aggregation, monitoring, async, and fault-tolerance infrastructure',
      'FedAvg, FedProx, FedAdam, weighted, and robustness-oriented aggregation',
      'FAIR-WEIGHTS-H institutional weighting',
      'Dominant-site and site-signal alignment studies on PANDA-derived features',
      'Fixed detector transfer from label corruption to ordinal threshold shift',
      'Detector diagnostic ablation and calibration sensitivity',
      'CAMELYON17/WILDS held-out-center validation',
      'CAMELYON17 center-subspace projection and leakage diagnostics',
      'Equal-client and dominant-source weighting studies',
      'Feature/head communication accounting and bounded communication-resolution study',
      'Privacy-noise robustness probes',
      'Infrastructure-friction, dropout, speed, and straggler simulations',
      'Historical DMI / CPI / IMR / MKN federated architecture lineage'
    ]
  },
  {
    title: 'Scanner provenance and intervention',
    items: [
      'PANDA scanner inventory and metadata census',
      'SICAP assignment-stability audit',
      'Public-dataset provenance discovery',
      'Physical-slide identity and no-content-read preregistration gates',
      'PAR same-glass scanner intervention across Grundium, Hamamatsu, and Leica',
      'Branch-conditioned scale-by-gauge acquisition mechanism',
      'Frozen transport protocol for genuinely new paired-acquisition cohorts',
      'Paired-acquisition provenance manifests and archive-lineage audits'
    ]
  },
  {
    title: 'NucleoScope research',
    items: [
      'Repeated-context primitive-response experiments',
      'R, S, RSi, and C measurement stability',
      'Primitive-level sigma-rho and G response analysis',
      'Cross-tile repeated detections and matched-pair structure',
      'Tie-aware finite-multiset nulls for quantized intensities',
      'GTEx 73-slide primitive and allometry audit',
      'Object-selection, segmentation, tile-context, and smooth-field artifact adversaries',
      'Ordinal persistence and finite-scale variogram law candidates',
      'Nuclear-versus-nearby-tissue matched geometry tests',
      'Independent Branch B law discovery and A/B/C research firewall',
      'H9/H10/G4/G5 frozen falsification programs',
      'Cross-preparation and untouched-cohort validation planning'
    ]
  },
  {
    title: 'SERA research',
    items: [
      'Self-expanding relational and evidence-governed structural learning',
      'Primitive formation, birth, reuse, composition, repair, consolidation, and retirement',
      'Evidence transport and provenance-concentration mechanisms',
      'Temporal-history and difference-field mechanisms',
      'T127 / reconstructed authority frontier',
      'SFS reproducibility and exact-replay formation studies',
      'NRM neural-rematch and falsification ladder',
      'NRM-043 held-out causal-specificity transport',
      'CRAS matched-null, exact-rank, and lifecycle comparator program',
      'System-One-style decomposition, fan-out, support-authority, and learned-composition controls',
      'Negative mechanisms and retired branches preserved as part of the scientific record'
    ]
  },
  {
    title: 'Scientific language, provenance, and research infrastructure',
    items: [
      'Pathology Pipeline Language / epistemic compiler',
      'Typed Evidence<T> and bounded claim evaluation',
      'Patient, specimen, slide, region, acquisition, and run identity hierarchies',
      'Physical units, split integrity, paired-acquisition legality, and control requirements',
      'Metamorphic scientific-legality benchmarks',
      'Immutable evidence packages and exact artifact recovery',
      'Living claim-boundary contracts and retained negative results',
      'Hugging Face release registry and fail-closed publishing tools',
      'Scientific audit remediation and hostile-review ledgers',
      'Program-level publication and reproducibility architecture'
    ]
  }
]

const ProgramCard = ({ record }) => {
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
          <Text fontSize="xs" color={muted}>
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

        <Stack direction="row" justify="space-between" align="center" pt={1} mt="auto" fontSize="sm">
          <Text color={muted}>{record.metric}</Text>
          <Box display="inline-flex" alignItems="center" gap={1} color={accent} fontWeight={600}>
            {record.href ? (
              <>
                Open <ArrowForwardIcon />
              </>
            ) : (
              'Private research'
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
  const groupBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <Layout title="Research">
      <Container px={0}>
        <Heading as="h3" fontSize={20} mb={4}>
          Research
        </Heading>

        <Text color={bodyText} lineHeight="1.8" mb={3}>
          My work is not one method or one pathology pipeline. It is a set of independent research
          programs in computational pathology, machine learning, quantitative measurement, and
          scientific systems.
        </Text>
        <Text color={subtleText} lineHeight="1.75" mb={7}>
          The cards below are the program-level map. The full research-line inventory underneath
          shows the architectures, studies, controls, validation programs, and infrastructure that
          make up those programs.
        </Text>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {programs.map(record => (
            <ProgramCard key={record.title} record={record} />
          ))}
        </SimpleGrid>

        <Box as="section" pt={12}>
          <Heading as="h3" fontSize={20} mb={2}>
            Research-line inventory
          </Heading>
          <Text color={subtleText} lineHeight="1.75" mb={6}>
            Current, historical, negative, and exploratory lines are kept distinct rather than
            disappearing when a headline result changes.
          </Text>

          <Stack spacing={7}>
            {researchGroups.map(group => (
              <Box
                key={group.title}
                borderTop="1px solid"
                borderColor={groupBorder}
                pt={5}
              >
                <Heading as="h4" fontSize="md" mb={3}>
                  {group.title}
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={8} spacingY={2}>
                  {group.items.map(item => (
                    <Text key={item} color={subtleText} fontSize="sm" lineHeight="1.7">
                      {item}
                    </Text>
                  ))}
                </SimpleGrid>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box as="section" pt={12} pb={6}>
          <Heading as="h3" fontSize={20} mb={2}>
            Public research record
          </Heading>
          <Text color={subtleText} lineHeight="1.75" mb={4}>
            Public code, manuscripts, study repositories, and evidence packages. SERA and the
            NucleoScope collaboration also contain private research records that are not linked here.
          </Text>

          <ResearchLink
            label="Computational pathology research hub"
            description="Program repository, manuscripts, methods, evidence, claim boundaries, and research history."
            href="https://github.com/matthewvaishnav/computational-pathology-research"
          />
          <ResearchLink
            label="PA-NF canonical manuscript"
            description="Current public manuscript and evidence entry point."
            href="https://matthewvaishnav.github.io/computational-pathology-research/"
          />
          <ResearchLink
            label="SCORPION paired-acquisition study"
            description="Five-scanner matched-acquisition study repository."
            href="https://github.com/matthewvaishnav/paired-acquisition-factorization-scorpion"
          />
          <ResearchLink
            label="Canine SCC paired-scanner audit"
            description="Independent multi-scanner fixed-estimand evaluation."
            href="https://github.com/matthewvaishnav/paired-acquisition-factorization-caninescc"
          />
          <ResearchLink
            label="Pair-repeat allocation study"
            description="Paired-acquisition allocation and unique-anchor research."
            href="https://github.com/matthewvaishnav/paired-acquisition-factorization-allocation"
          />
          <ResearchLink
            label="Whole-slide model documentation"
            description="AttentionMIL, nnMIL, CLAM, TransMIL-style controls, TransnnMIL, and related WSI work."
            href="https://github.com/matthewvaishnav/computational-pathology-research/tree/main/docs/models"
          />
          <ResearchLink
            label="Site-signal alignment research"
            description="Dominant-site federated pathology, detector transfer, and external-center validation."
            href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/research/dominant-site-federated-pathology-paper.md"
          />
          <ResearchLink
            label="PathologyFL documentation"
            description="Federated pathology implementation and validation boundary."
            href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/docs/federated/pathologyfl.md"
          />
          <ResearchLink
            label="PA-NF evidence release"
            description="Versioned public evidence package."
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
            maxW="64ch"
            mx="auto"
          >
            Research-only. Evidence status differs by line: some results are public and validated
            under frozen protocols, some are active or private, and some are retained negative or
            historical results.
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Research
