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
              Independent computational pathology and machine-learning research across models,
              representations, measurement, learning systems, and scientific infrastructure.
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
            I build research programs, not one model or one pipeline.
          </Paragraph>
          <Paragraph>
            Some of my work studies what pathology representations encode. Some develops whole-slide
            and federated models. Some investigates quantitative nuclear measurement. SERA studies
            how learned computational structure can form and change, while my scientific-language
            work makes experimental evidence and claim boundaries executable.
          </Paragraph>
          <Paragraph>
            The common requirement is that the system, measurement, or claim has to survive its own
            controls.
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
              <Text fontWeight="bold">Paired acquisition & representation identifiability</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                PA-NF, SCORPION, canine SCC, scanner and center subspaces, representation geometry,
                capacity allocation, pair-repeat studies, and crossed-preparation identifiability.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Whole-slide learning</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Mean pooling, AttentionMIL, nnMIL, CLAM, TransMIL-style controls, TransnnMIL,
                branch-fusion studies, and repeated-seed PANDA evaluation.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">WSI-NCA / WCI lineage</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Spatial dynamics, PANDA coupling, SICAP transport, state canonicalization, K5
                representation structure, topology/history falsifiers, and acquisition intervention.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Federated & institutional learning</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                PathologyFL, FAIR-WEIGHTS-H, dominant-site and site-signal alignment, CAMELYON17
                external-center studies, privacy/communication stress, and institutional weighting.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">NucleoScope</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Nuclear measurement stability, repeated context, primitive response, cross-tile
                structure, artifact models, ordinal spatial statistics, and independent law discovery.
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
              <Text fontWeight="bold">Scanner provenance & intervention</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                PANDA/SICAP provenance, scanner inventory, assignment stability, public-dataset
                discovery, and the PAR same-glass scanner intervention.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Scientific compiler & evidence systems</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Pathology Pipeline Language, typed Evidence&lt;T&gt;, identity and unit checks,
                immutable evidence packages, release registries, and fail-closed claim validation.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Program-level reproducibility & audit</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Claim ledgers, hostile review, public release provenance, retained negative results,
                exact artifact recovery, and evidence boundaries across the research program.
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
            <BioYear>2025 to present</BioYear>Independent computational pathology and machine-learning
            research across representation learning, whole-slide models, federated learning,
            quantitative measurement, adaptive systems, and scientific infrastructure.
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
            Representation geometry, multiple-instance learning, spatial dynamics, federated
            systems, adaptive computation, measurement theory, scientific programming languages,
            experimental design, and reproducibility.
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
