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
              Independent research in computational pathology, machine learning, quantitative
              measurement, and reproducible scientific systems.
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
            I build computational pathology systems to test whether apparent biological signal is
            actually biology.
          </Paragraph>
          <Paragraph>
            My work targets scanner and site bias, measurement instability, tissue topology, hidden
            confounding, and weak evaluation design. I use paired acquisitions, controlled
            falsification, cross-site validation, and auditable evidence to determine what models
            are really learning and which claims actually survive scrutiny.
          </Paragraph>
          <Paragraph>
            The goal is simple: make computational pathology harder to fool itself.
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
                Uses matched scans of the same tissue region to study how acquisition information can
                be separated from tissue-oriented representations under explicit controls.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">NucleoScope nuclear measurement</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Active technical collaboration on nucleus-level H&E measurement, computational-context
                effects, repeated detections, and candidate laws of tissue organization.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Whole-slide modeling</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                TransnnMIL and ongoing WSI-NCA work on aggregation, topology, spatial update rules, and
                controlled falsification on whole-slide pathology data.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">PathologyFL</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Separate federated-pathology research on site-aware weighting, dominance detection,
                privacy-aware training, and multi-institutional stress tests.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Scientific compiler / evidence DSL</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Typed research tooling that makes units, identities, controls, evidence provenance,
                and admissible claims explicit and machine-checkable.
              </Text>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.28}>
          <Heading as="h2" variant="section-title">
            Selected Public Evidence
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
                <StatLabel color={subtleText}>SCORPION study</StatLabel>
                <StatNumber>48 / 480 / 5</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Slides / aligned regions / scanners
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>PA-NF registered campaign</StatLabel>
                <StatNumber>175 / 175</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Completed capacity-matched fits
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>PA-NF scanner effect</StatLabel>
                <StatNumber>-0.3108</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Tissue-branch scanner BA vs equal-capacity control
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>PANDA whole-slide corpus</StatLabel>
                <StatNumber>10,611</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Readable Phikon slide feature bags
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>CAMELYON17/WILDS</StatLabel>
                <StatNumber>455,954</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Examples across five medical centers
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>Independent canine audit</StatLabel>
                <StatNumber>44 / 5</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Biological samples / scanners
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
            I prefer experiments that can fail cleanly: preregistered gates, matched controls,
            immutable artifacts, explicit provenance, negative results kept in the record, and claim
            boundaries that stay narrower than the evidence.
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
            research across representation learning, whole-slide analysis, measurement, and
            scientific systems.
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
