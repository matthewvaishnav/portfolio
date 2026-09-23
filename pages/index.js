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
              Researching what pathology models and measurements actually encode — and building
              methods to separate biological signal from acquisition, site, topology, and computation.
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
            I work on computational pathology problems where a model can be right for the wrong
            reason.
          </Paragraph>
          <Paragraph>
            My research asks what a model or measurement is actually responding to, and whether that
            signal survives changes in scanner, site, tissue context, and computation.
          </Paragraph>
          <Paragraph>
            I build models and experimental systems to separate biological signal from artifact and
            make the evidence reproducible.
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
              <Text fontWeight="bold">Paired-Acquisition Neural Factorization</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Holds tissue identity fixed across matched scanner acquisitions, reduces scanner
                recoverability in the tissue branch, and tests whether tissue retrieval survives
                equal-capacity and strong removal controls.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">NucleoScope nuclear measurement</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Tests whether nucleus-level measurements belong to the biological object or to the
                computational context that produced them, using repeated detections, reruns, and
                explicit artifact controls.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Whole-slide modeling</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                TransnnMIL tests whole-slide aggregation; WSI-NCA tests whether topology and spatial
                dynamics remain necessary after matched, shuffled, and mechanism-specific controls.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">PathologyFL</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Tests whether site-aware weighting and dominance detection still help under explicit
                institutional imbalance, ordinal shift, and held-out-center stress.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Scientific compiler / evidence DSL</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Turns scientific legality into executable constraints: identities, units, controls,
                provenance, evidence types, and claims that fail closed when support is missing.
              </Text>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.28}>
          <Heading as="h2" variant="section-title">
            Evidence That Survived Controls
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
                <StatLabel color={subtleText}>PA-NF scanner identifiability</StatLabel>
                <StatNumber>-0.3108</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Tissue-branch scanner balanced accuracy vs equal-capacity neural control
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>PA-NF tissue preservation</StatLabel>
                <StatNumber>Noninferior</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Same-region retrieval stayed inside the registered 0.02 margin
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>Registered PA-NF campaign</StatLabel>
                <StatNumber>175 / 175</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Capacity-matched fits completed
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>TransnnMIL stabilization</StatLabel>
                <StatNumber>0.8257</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Mean best validation QWK across three seeds at 1e-4
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>PathologyFL transfer</StatLabel>
                <StatNumber>+0.01053</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Global QWK at 45% ordinal shift without retuning
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>Independent scanner audit</StatLabel>
                <StatNumber>44 / 5</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Biological samples / scanners with strong simple baselines retained
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
