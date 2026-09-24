import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Link,
  Button,
  List,
  ListItem,
  Text,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const CANONICAL_PA_NF = 'https://matthewvaishnav.github.io/computational-pathology-research/'

const Home = () => {
  const mutedText = useColorModeValue('gray.600', 'gray.400')
  const subtleText = useColorModeValue('gray.700', 'gray.300')
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const cardBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const cardShadow = useColorModeValue('0 12px 32px rgba(15, 23, 42, 0.07)', 'none')
  const photoBorder = useColorModeValue('gray.200', 'whiteAlpha.800')
  const footerBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <Layout>
      <Container px={0}>
        <Box
          display={{ base: 'block', md: 'flex' }}
          alignItems="center"
          gap={{ base: 5, md: 7 }}
          pb={{ base: 6, md: 7 }}
          borderBottom="1px solid"
          borderColor={cardBorder}
        >
          <Box flexGrow={1}>
            <Heading as="h1" variant="page-title">
              Matthew Vaishnav
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium" mb={2}>
              Computational Pathology / ML Research Engineer
            </Text>
            <Text fontSize="sm" color={mutedText} lineHeight="1.75" maxW="620px">
              Independent research across computational pathology and machine learning, spanning
              representation learning, whole-slide models, federated systems, quantitative
              measurement, adaptive relational learning, and scientific tooling.
            </Text>
          </Box>
          <Box flexShrink={0} mt={{ base: 5, md: 0 }} textAlign="center">
            <Box
              borderColor={photoBorder}
              borderWidth={2}
              borderStyle="solid"
              w={{ base: '92px', md: '106px' }}
              h={{ base: '92px', md: '106px' }}
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Box
                as="img"
                src="/portfolio/images/matthew.jpg"
                alt="Matthew Vaishnav"
                borderRadius="full"
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.2}>
          <Heading as="h2" variant="section-title">
            About
          </Heading>
          <Paragraph>
            I work across several independent research lines in computational pathology and machine
            learning, building new models, measurement systems, and research infrastructure.
          </Paragraph>
          <Paragraph>
            That includes paired-acquisition representation learning, whole-slide MIL and spatial
            dynamics, federated pathology, nucleus-level quantitative measurement, and SERA, my work
            on evidence-governed adaptive computation.
          </Paragraph>
          <Paragraph>
            Across them, I care about whether the mechanism is real, whether the result reproduces,
            and whether the claim matches the evidence.
          </Paragraph>

          <Flex
            justify="center"
            align="center"
            gap={{ base: 2, md: 3 }}
            flexWrap="wrap"
            my={{ base: 6, md: 7 }}
          >
            <Button
              as={Link}
              href={CANONICAL_PA_NF}
              target="_blank"
              rel="noopener noreferrer"
              rightIcon={<ExternalLinkIcon />}
              colorScheme="teal"
              size="md"
              px={4}
              w={{ base: 'full', sm: 'auto' }}
              flexShrink={0}
            >
              Read PA-NF
            </Button>
            <Button
              as={NextLink}
              href="/research"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              variant="outline"
              size="md"
              px={4}
              w={{ base: 'full', sm: 'auto' }}
              flexShrink={0}
            >
              Research
            </Button>
            <Button
              as={Link}
              href="https://github.com/matthewvaishnav"
              target="_blank"
              rel="noopener noreferrer"
              rightIcon={<ExternalLinkIcon />}
              colorScheme="teal"
              variant="outline"
              size="md"
              px={4}
              w={{ base: 'full', sm: 'auto' }}
              flexShrink={0}
            >
              GitHub
            </Button>
          </Flex>
        </Section>

        <Section delay={0.25}>
          <Heading as="h2" variant="section-title">
            Current Research
          </Heading>
          <List mt={4} spacing={5}>
            <ListItem>
              <Text fontWeight="bold">Paired-Acquisition Neural Factorization (PA-NF)</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Factorizes tissue-oriented and acquisition-oriented information from matched
                multi-scanner views, with explicit preservation, leakage, collapse, and comparator
                controls.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Whole-slide MIL: AttentionMIL and TransnnMIL</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Whole-slide aggregation research on PANDA using gated AttentionMIL, TransnnMIL, and
                matched MIL baselines, with repeated-seed and architecture-specific evaluation.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">WSI-NCA / whole-slide tissue dynamics</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Studies topology, history, and iterative spatial state updates using real-versus-
                shuffled structure and mechanism-specific falsification.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">PathologyFL / FAIR-WEIGHTS-H</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Federated pathology research on institutional weighting, site dominance, privacy-aware
                training, robustness, and transfer under controlled multi-site shift.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">NucleoScope nuclear measurement</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Active collaboration on nucleus-level quantitative measurement, repeated-detection
                structure, computational-context effects, and falsifiable tissue-organization laws.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">SERA</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Independent machine-learning research on an evidence-governed structural control
                plane for the birth, reuse, composition, repair, consolidation, and retirement of
                learned computational structure.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">PANDA / SICAP provenance & scanner validation</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Provenance-complete scanner and dataset validation work, including scanner inventory,
                assignment reproducibility, transport audits, and the PAR same-glass scanner
                intervention.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Scientific compiler / evidence DSL</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Typed research tooling for identities, units, controls, provenance, evidence objects,
                and machine-checkable claim boundaries.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Accountable computational pathology program</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Program-level evidence and reproducibility work connecting representation, whole-slide,
                institutional, provenance, and claim-audit research without collapsing their separate
                evidentiary boundaries.
              </Text>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.28}>
          <Heading as="h2" variant="section-title">
            Research at a Glance
          </Heading>
          <Box
            bg={cardBg}
            borderWidth="1px"
            borderColor={cardBorder}
            borderRadius="xl"
            p={{ base: 5, md: 6 }}
            boxShadow={cardShadow}
          >
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={{ base: 6, md: 7 }}>
              <Stat>
                <StatLabel color={subtleText}>PA-NF</StatLabel>
                <StatNumber>-0.3108</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Scanner balanced-accuracy effect vs equal-capacity control, with retrieval preserved
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>AttentionMIL / TransnnMIL</StatLabel>
                <StatNumber>0.8100 / 0.8257</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  PANDA validation QWK for gated AttentionMIL / mean best TransnnMIL across three seeds
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>PathologyFL</StatLabel>
                <StatNumber>+0.01053</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Global QWK at 45% ordinal shift without retuning
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>SERA</StatLabel>
                <StatNumber>Validation</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Evidence-governed structural control plane under strong conventional comparators
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>NucleoScope</StatLabel>
                <StatNumber>Active collaboration</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Repeated-detection measurement and tissue-organization falsification
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>Scientific compiler</StatLabel>
                <StatNumber>175 / 175</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Metamorphic scientific-legality benchmark outcomes matched expectation
                </StatHelpText>
              </Stat>
            </SimpleGrid>
          </Box>
        </Section>

        <Section delay={0.29}>
          <Heading as="h2" variant="section-title">
            Approach
          </Heading>
          <Paragraph>
            Hold the relevant identity fixed. Perturb the suspected nuisance or mechanism. Compare
            against matched controls. Preserve the signal that should survive. Keep the negative
            results. Then make the claim no broader than the experiment allows.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2006</BioYear>Born in Ontario, Canada.
          </BioSection>
          <BioSection>
            <BioYear>2025 to present</BioYear>Independent computational pathology research on
            representation identifiability, whole-slide mechanisms, measurement reliability, and
            reproducible evidence.
          </BioSection>
          <BioSection>
            <BioYear>2025</BioYear>Built an 18-node home lab with Security Onion and pfSense for
            systems and security research.
          </BioSection>
          <BioSection>
            <BioYear>2026</BioYear>Released the PA-NF public research record and began an active
            technical collaboration with NucleoScope.ai.
          </BioSection>
          <BioSection>
            <BioYear>Fall 2026</BioYear>Computer Programming at Conestoga College in Waterloo,
            Ontario.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Representation geometry, optimization, multiple-instance learning, spatial models,
            measurement theory, experimental design, reproducibility, and figuring out what a result
            actually proves.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            On the web
          </Heading>
          <List spacing={1}>
            <ListItem>
              <Link href="https://github.com/matthewvaishnav" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />}>
                  @matthewvaishnav
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/matthew-vaishnav-594312403/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoLinkedin />}>
                  Matthew Vaishnav
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>

        <Box mt={6} pt={6} borderTop="1px solid" borderColor={footerBorder} textAlign="center">
          <Text fontSize="sm" color={mutedText}>
            Inspired by{' '}
            <Link
              href="https://www.craftz.dog/"
              target="_blank"
              rel="noopener noreferrer"
              color="teal.500"
              _hover={{ textDecoration: 'underline' }}
            >
              Takuya Matsuyama&apos;s homepage
            </Link>
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Home
