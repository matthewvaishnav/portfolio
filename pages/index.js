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
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { SiTryhackme } from 'react-icons/si'

const Home = () => {
  const mutedText = useColorModeValue('gray.600', 'gray.400')
  const subtleText = useColorModeValue('gray.700', 'gray.400')
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const cardBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const cardShadow = useColorModeValue('0 12px 32px rgba(15, 23, 42, 0.07)', 'none')
  const photoBorder = useColorModeValue('gray.200', 'whiteAlpha.800')
  const footerBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <Layout>
      <Container>
        <Box display={{ base: 'block', md: 'flex' }} alignItems="center" gap={{ base: 4, md: 6 }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">Matthew Vaishnav</Heading>
            <Text fontSize={{ base: 'md', md: 'xl' }} mb={1}>
              Applied ML / Computational Pathology Research Engineer
            </Text>
            <Text fontSize="sm" color={mutedText}>
              Independent research in whole-slide histopathology, scanner and acquisition robustness,
              representation identifiability, multiple-instance learning, and reproducible ML systems
            </Text>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
            <Box borderColor={photoBorder} borderWidth={2} borderStyle="solid" w={{ base: '88px', md: '100px' }} h={{ base: '88px', md: '100px' }} display="inline-block" borderRadius="full" overflow="hidden">
              <Box as="img" src="/portfolio/images/matthew.jpg" alt="Matthew Vaishnav" borderRadius="full" w={{ base: '88px', md: '100px' }} h={{ base: '88px', md: '100px' }} objectFit="cover" objectPosition="center" />
            </Box>
          </Box>
        </Box>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">Work</Heading>
          <Paragraph>
            I am an independent computational pathology engineer and applied machine-learning
            researcher. I build controlled experiments and reproducible ML systems for whole-slide
            modeling, pathology foundation-model features, scanner and site robustness,
            representation audits, simulated federated learning, and fail-closed research
            infrastructure.
          </Paragraph>
          <Paragraph>
            My primary research line is Paired-Acquisition Neural Factorization: using multiple scans
            of the same underlying tissue to test whether frozen pathology embeddings can be separated
            into a scanner-suppressed tissue factor and an acquisition-specific factor without erasing
            tissue identity.
          </Paragraph>
          <Flex justify="center" my={4} gap={3} flexWrap="wrap">
            <Button as={NextLink} href="/computational-pathology" scroll={false} rightIcon={<ChevronRightIcon />} colorScheme="teal" size="lg">
              Current Research
            </Button>
            <Button as={NextLink} href="/research" scroll={false} rightIcon={<ChevronRightIcon />} colorScheme="teal" variant="outline" size="lg">
              Research Library
            </Button>
            <Button as={Link} href="https://github.com/matthewvaishnav" target="_blank" rel="noopener noreferrer" rightIcon={<ChevronRightIcon />} colorScheme="teal" variant="outline" size="lg">
              GitHub
            </Button>
          </Flex>
        </Section>

        <Section delay={0.25}>
          <Heading as="h3" variant="section-title">Current Research</Heading>
          <List mt={4} spacing={4}>
            <ListItem>
              <strong>1. Paired-Acquisition Neural Factorization</strong><br />
              <Text fontSize="sm" color={mutedText} mt={1}>
                Primary SCORPION study across 48 human H&amp;E slides, five scanners, and DINOv2,
                Phikon, and ResNet50 feature families.
              </Text>
            </ListItem>
            <ListItem>
              <strong>2. External multi-scanner validation</strong><br />
              <Text fontSize="sm" color={mutedText} mt={1}>
                Independent five-scanner canine squamous-cell carcinoma validation of the locked
                factorization objective.
              </Text>
            </ListItem>
            <ListItem>
              <strong>3. Pair-repeat allocation</strong><br />
              <Text fontSize="sm" color={mutedText} mt={1}>
                Matched-budget experiments testing unique biological pair diversity against repeated
                exposure to the same anchors.
              </Text>
            </ListItem>
            <ListItem>
              <strong>4. CAMELYON17 center-subspace projection</strong><br />
              <Text fontSize="sm" color={mutedText} mt={1}>
                Mechanism-focused work on reducing source-center leakage while preserving tumor signal
                in pathology representations.
              </Text>
            </ListItem>
            <ListItem>
              <strong>5. Whole-slide multiple-instance learning</strong><br />
              <Text fontSize="sm" color={mutedText} mt={1}>
                PANDA slide-level grading with mean pooling, AttentionMIL, and TransnnMIL over frozen
                pathology foundation-model features.
              </Text>
            </ListItem>
            <ListItem>
              <strong>6. Research reliability infrastructure</strong><br />
              <Text fontSize="sm" color={mutedText} mt={1}>
                Immutable provenance, artifact hashing, corruption tests, resumable factorial runs,
                fail-closed validators, and dedicated GitHub Actions gates.
              </Text>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.28}>
          <Heading as="h3" variant="section-title">Selected Evidence</Heading>
          <Box
            bg={cardBg}
            borderWidth="1px"
            borderColor={cardBorder}
            borderRadius="xl"
            p={{ base: 4, md: 6 }}
            boxShadow={cardShadow}
          >
            <SimpleGrid columns={[1, 2, 3]} gap={{ base: 5, md: 6 }}>
              <Stat>
                <StatLabel color={subtleText}>SCORPION scanner probe</StatLabel>
                <StatNumber>0.7825 → 0.3989</StatNumber>
                <StatHelpText color={mutedText} mb={0}>Reduced scanner recoverability</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>Canine SCC scanner probe</StatLabel>
                <StatNumber>0.7529 → 0.3614</StatNumber>
                <StatHelpText color={mutedText} mb={0}>Independent external validation</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>CAMELYON17 tumor AUC</StatLabel>
                <StatNumber>≈ 0.9903</StatNumber>
                <StatHelpText color={mutedText} mb={0}>Preserved during center attenuation</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>Public study packages</StatLabel>
                <StatNumber>3</StatNumber>
                <StatHelpText color={mutedText} mb={0}>SCORPION, canine SCC, and allocation</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>PANDA readable features</StatLabel>
                <StatNumber>10,611</StatNumber>
                <StatHelpText color={mutedText} mb={0}>Verified slide-level feature vectors</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>PANDA tuned TransnnMIL</StatLabel>
                <StatNumber>0.8155 / 0.8225</StatNumber>
                <StatHelpText color={mutedText} mb={0}>Repeated-seed validation QWK</StatHelpText>
              </Stat>
            </SimpleGrid>
          </Box>
        </Section>

        <Section delay={0.29}>
          <Heading as="h3" variant="section-title">Claim Boundary</Heading>
          <Paragraph>
            Research-only. Not clinically validated. Not diagnostic software. Not intended for
            clinical deployment or patient-care use. Results come from controlled experiments and
            simulated federations over pathology-derived feature vectors, not real hospital
            deployments. Every finding is bounded by the datasets, feature backbones, splits, and
            experimental conditions documented in its report.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">Bio</Heading>
          <BioSection><BioYear>2006</BioYear>Born in Ontario, Canada.</BioSection>
          <BioSection><BioYear>2025 to present</BioYear>Independent computational pathology engineering and applied machine-learning research across PCam, PANDA, CAMELYON17, multiple-instance learning, and simulated federated pathology.</BioSection>
          <BioSection><BioYear>2025</BioYear>Built an 18-node home lab with Security Onion and pfSense for systems and security research.</BioSection>
          <BioSection><BioYear>2025 to present</BioYear>Studying Computer Systems Technician – IT Infrastructure &amp; Services at Conestoga College in Waterloo, Ontario.</BioSection>
          <BioSection><BioYear>2026 to present</BioYear>Publishing Paired-Acquisition Neural Factorization studies, external validation packages, mechanism audits, and reproducibility infrastructure.</BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">I ♥</Heading>
          <Paragraph>
            Matrix multiplication, backpropagation, gradient descent, optimization landscapes,
            attention mechanisms, convolutional inductive biases, embedding geometry, latent-space
            factorization, feature disentanglement, multiple-instance learning, pathological failure
            modes, and figuring out what neural networks actually encode.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">On the web</Heading>
          <List>
            <ListItem><Link href="https://github.com/matthewvaishnav" target="_blank" rel="noopener noreferrer"><Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />}>@matthewvaishnav</Button></Link></ListItem>
            <ListItem><Link href="https://www.linkedin.com/in/matthew-vaishnav-594312403/" target="_blank" rel="noopener noreferrer"><Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoLinkedin />}>Matthew Vaishnav</Button></Link></ListItem>
            <ListItem><Link href="https://tryhackme.com/p/matthew.vaishnav" target="_blank" rel="noopener noreferrer"><Button variant="ghost" colorScheme="teal" leftIcon={<SiTryhackme />}>@matthew.vaishnav</Button></Link></ListItem>
          </List>
        </Section>

        <Box mt={8} pt={6} borderTop="1px solid" borderColor={footerBorder} textAlign="center">
          <Text fontSize="sm" color={mutedText}>Inspired by{' '}<Link href="https://www.craftz.dog/" target="_blank" rel="noopener noreferrer" color="teal.500" _hover={{ textDecoration: 'underline' }}>Takuya Matsuyama&apos;s homepage</Link></Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Home
