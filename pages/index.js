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
  StatHelpText
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { SiTryhackme } from 'react-icons/si'

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ base: 'block', md: 'flex' }} alignItems="center" gap={{ base: 4, md: 6 }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">Matthew Vaishnav</Heading>
          <Text fontSize={{ base: 'md', md: 'xl' }} mb={1}>
            Computational pathology research engineering
          </Text>
          <Text fontSize="sm" color="gray.500">
            Research-only machine learning for whole-slide histopathology, scanner/site robustness,
            paired-acquisition representation learning, and reproducible ML evaluation
          </Text>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
          <Box borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" w={{ base: '88px', md: '100px' }} h={{ base: '88px', md: '100px' }} display="inline-block" borderRadius="full" overflow="hidden">
            <Box as="img" src="/portfolio/images/matthew.jpg" alt="Profile image" borderRadius="full" w={{ base: '88px', md: '100px' }} h={{ base: '88px', md: '100px' }} objectFit="cover" objectPosition="center" />
          </Box>
        </Box>
      </Box>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">Work</Heading>
        <Paragraph>
          I build research-only computational pathology experiments around whole-slide modeling,
          pathology foundation-model features, scanner/acquisition robustness, simulated federated
          pathology stress tests, and reproducible evaluation infrastructure. My current strongest
          research line is Paired-Acquisition Neural Factorization: testing whether paired
          acquisitions of the same tissue can reduce scanner/acquisition signal in pathology
          embeddings while preserving tissue identity.
        </Paragraph>
        <Flex justify="center" my={4} gap={3} flexWrap="wrap">
          <Button as={NextLink} href="/computational-pathology" scroll={false} rightIcon={<ChevronRightIcon />} colorScheme="teal" size="lg">
            Current Research
          </Button>
          <Button as={NextLink} href="/posts" scroll={false} rightIcon={<ChevronRightIcon />} colorScheme="teal" variant="outline" size="lg">
            Research Index
          </Button>
          <Button as={Link} href="https://github.com/matthewvaishnav" target="_blank" rightIcon={<ChevronRightIcon />} colorScheme="teal" variant="outline" size="lg">
            GitHub
          </Button>
        </Flex>
      </Section>

      <Section delay={0.25}>
        <Heading as="h3" variant="section-title">Current Research</Heading>
        <List mt={4} spacing={3}>
          <ListItem>
            <strong>1. Paired-Acquisition Neural Factorization</strong><br />
            <Text fontSize="sm" color="gray.400">
              Scanner/acquisition signal vs tissue identity preservation. SCORPION, external canine SCC,
              cross-backbone, and baseline controls.
            </Text>
          </ListItem>
          <ListItem>
            <strong>2. External multi-scanner validation</strong><br />
            <Text fontSize="sm" color="gray.400">
              Canine SCC validation package with independent scanner conditions.
            </Text>
          </ListItem>
          <ListItem>
            <strong>3. Pair-repeat allocation</strong><br />
            <Text fontSize="sm" color="gray.400">
              Unique pair diversity vs repeated exposure tradeoffs.
            </Text>
          </ListItem>
          <ListItem>
            <strong>4. Mechanism audits</strong><br />
            <Text fontSize="sm" color="gray.400">
              Acquisition-branch audit: branch separation is measurable.<br />
              Pair-structure boundary test: biological pairing structure matters.
            </Text>
          </ListItem>
          <ListItem>
            <strong>5. Earlier research</strong><br />
            <Text fontSize="sm" color="gray.400">
              PANDA / PCam / MIL experiments. Simulated federated pathology stress tests.
            </Text>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.28}>
        <Heading as="h3" variant="section-title">Research Metrics</Heading>
        <SimpleGrid columns={[1, 2, 3]} gap={4}>
          <Stat>
            <StatLabel>SCORPION scanner probe</StatLabel>
            <StatNumber>0.7825 → 0.3989</StatNumber>
            <StatHelpText>Reduction in scanner recoverability</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Canine SCC scanner probe</StatLabel>
            <StatNumber>0.7529 → 0.3614</StatNumber>
            <StatHelpText>External validation reduction</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>PANDA readable features</StatLabel>
            <StatNumber>10,611</StatNumber>
            <StatHelpText>Verified slide feature vectors</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>PCam validation AUC</StatLabel>
            <StatNumber>95.37%</StatNumber>
            <StatHelpText>Full validation set</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>PANDA gated AttentionMIL</StatLabel>
            <StatNumber>QWK 0.8100</StatNumber>
            <StatHelpText>Slide-level baseline</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>PANDA tuned TransnnMIL</StatLabel>
            <StatNumber>QWK 0.8155 / 0.8225</StatNumber>
            <StatHelpText>Repeated-seed results</StatHelpText>
          </Stat>
        </SimpleGrid>
      </Section>

      <Section delay={0.29}>
        <Heading as="h3" variant="section-title">Claim Boundary</Heading>
        <Paragraph>
          Research-only. Not clinically validated. Not diagnostic software. Not intended for
          clinical deployment or patient-care use. Results are from controlled experiments and
          simulated federations over pathology-derived feature vectors, not real hospital
          deployments. All findings are bounded by the specific datasets, backbones, and
          experimental conditions described in each report.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">Bio</Heading>
        <BioSection><BioYear>2006</BioYear>Born in Ontario, Canada.</BioSection>
        <BioSection><BioYear>2025 to present</BioYear>Studying Computer Systems Technician at Conestoga College.</BioSection>
        <BioSection><BioYear>2025</BioYear>Built 18-node home lab with Security Onion and pfSense for security research.</BioSection>
        <BioSection><BioYear>2025 to present</BioYear>Building computational pathology research experiments: PCam benchmarks, PANDA slide-level MIL, simulated federated pathology stress tests.</BioSection>
        <BioSection><BioYear>2026 to present</BioYear>Paired-Acquisition Neural Factorization: scanner/acquisition signal reduction, tissue identity preservation, external canine SCC validation, pair-repeat allocation, mechanism audits.</BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">I ♥</Heading>
        <Paragraph>
          Computational pathology, whole-slide image modeling, scanner/site robustness,
          reproducible experiments, security engineering, failure analysis, home labs,
          clean interfaces, coffee, music, art, and my dog.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">On the web</Heading>
        <List>
          <ListItem><Link href="https://github.com/matthewvaishnav" target="_blank"><Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />}>@matthewvaishnav</Button></Link></ListItem>
          <ListItem><Link href="https://www.linkedin.com/in/matthew-vaishnav-594312403/" target="_blank"><Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoLinkedin />}>Matthew Vaishnav</Button></Link></ListItem>
          <ListItem><Link href="https://tryhackme.com/p/matthew.vaishnav" target="_blank"><Button variant="ghost" colorScheme="teal" leftIcon={<SiTryhackme />}>@matthew.vaishnav</Button></Link></ListItem>
        </List>
      </Section>

      <Box mt={8} pt={6} borderTop="1px solid" borderColor="whiteAlpha.200" textAlign="center">
        <Text fontSize="sm" color="gray.500">Inspired by{' '}<Link href="https://www.craftz.dog/" target="_blank" rel="noopener noreferrer" color="teal.500" _hover={{ textDecoration: 'underline' }}>Takuya Matsuyama&apos;s homepage</Link></Text>
      </Box>
    </Container>
  </Layout>
)

export default Home
