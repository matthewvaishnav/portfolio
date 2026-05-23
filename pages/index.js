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
            Computational Pathology · Federated Oncology Learning · Security Engineering
          </Text>
          <Text fontSize="sm" color="gray.500">
            Whole-slide AI / TransnnMIL v2.0 / PathologyFL / FAIR-WEIGHTS-H / Defensive infrastructure
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
          Matthew Vaishnav is a computational systems engineer based in Kitchener-Waterloo building research infrastructure for computational pathology, federated oncology learning, mathematical validation, and defensive systems engineering. His flagship project is a computational pathology framework with PCam benchmark validation, TransnnMIL v2.0 model development, PathologyFL federated learning infrastructure, FAIR-WEIGHTS-H institutional weighting, and VitePress documentation for reproducible medical-AI research.
        </Paragraph>
        <Flex justify="center" my={4} gap={3} flexWrap="wrap">
          <Button as={NextLink} href="/computational-pathology" scroll={false} rightIcon={<ChevronRightIcon />} colorScheme="teal" size="lg">
            Flagship Research
          </Button>
          <Button as={NextLink} href="/systems-engineering" scroll={false} rightIcon={<ChevronRightIcon />} colorScheme="teal" variant="outline" size="lg">
            All Projects
          </Button>
        </Flex>
      </Section>

      <Section delay={0.25}>
        <Heading as="h3" variant="section-title">Flagship Research Platform</Heading>
        <Paragraph>
          My main research project combines whole-slide pathology AI, federated learning, benchmark automation, and clinical-data integration components. The work includes a full PCam benchmark, a custom TransnnMIL v2.0 architecture direction, PathologyFL for simulated multi-site learning, and FAIR-WEIGHTS-H for institutional weighting and validation diagnostics.
        </Paragraph>
        <List mt={4} spacing={2}>
          <ListItem><strong>PCam benchmark:</strong> 85.26% test accuracy and 0.9394 AUC on the full 32,768-sample PCam test set.</ListItem>
          <ListItem><strong>Ranking:</strong> #1 by AUC among 11 compared PCam methods.</ListItem>
          <ListItem><strong>Scale:</strong> 262,144 training samples and 1,000 bootstrap resamples for confidence intervals.</ListItem>
          <ListItem><strong>Models:</strong> TransnnMIL v2.0, AttentionMIL, CLAM-style and TransMIL-style workflows.</ListItem>
          <ListItem><strong>Federated learning:</strong> PathologyFL with PCam simulated-site smoke tests and benchmarks.</ListItem>
          <ListItem><strong>Mathematical validation:</strong> FAIR-WEIGHTS-H, entropy, N_eff, weight trajectories, and null-result diagnostics.</ListItem>
        </List>
      </Section>

      <Section delay={0.28}>
        <Heading as="h3" variant="section-title">Research Metrics</Heading>
        <SimpleGrid columns={[1, 2, 3]} gap={4}>
          <Stat><StatLabel>PCam AUC</StatLabel><StatNumber>0.9394</StatNumber><StatHelpText>#1 by AUC among 11 methods</StatHelpText></Stat>
          <Stat><StatLabel>PCam Accuracy</StatLabel><StatNumber>85.26%</StatNumber><StatHelpText>Full 32,768-sample test set</StatHelpText></Stat>
          <Stat><StatLabel>Training Samples</StatLabel><StatNumber>262K</StatNumber><StatHelpText>Full PCam training split</StatHelpText></Stat>
          <Stat><StatLabel>Bootstrap</StatLabel><StatNumber>1,000</StatNumber><StatHelpText>Confidence interval resamples</StatHelpText></Stat>
          <Stat><StatLabel>Hardware</StatLabel><StatNumber>RTX 4070</StatNumber><StatHelpText>Consumer GPU benchmark</StatHelpText></Stat>
          <Stat><StatLabel>Validation Path</StatLabel><StatNumber>PCam → FL</StatNumber><StatHelpText>Camelyon17 planned</StatHelpText></Stat>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">Bio</Heading>
        <BioSection><BioYear>2006</BioYear>Born in Ontario, Canada.</BioSection>
        <BioSection><BioYear>2025 to present</BioYear>Studying Computer Systems Technician at Conestoga College.</BioSection>
        <BioSection><BioYear>2025</BioYear>Built 18-node home lab with Security Onion and pfSense for security research.</BioSection>
        <BioSection><BioYear>2025 to present</BioYear>Building computational pathology tooling, PCam benchmarks, TransnnMIL v2.0, PathologyFL, and FAIR-WEIGHTS-H.</BioSection>
        <BioSection><BioYear>2025 to present</BioYear>Developing security detection rules, log analysis tools, and infrastructure failure-analysis systems.</BioSection>
        <BioSection><BioYear>2026 to present</BioYear>Building reproducible documentation, benchmark analysis, and validation reports for computational oncology research.</BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">I ♥</Heading>
        <Paragraph>
          Computational pathology, whole-slide image AI, federated learning, mathematical validation, security engineering, failure analysis, home labs, clean interfaces, coffee, music, art, and my dog.
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