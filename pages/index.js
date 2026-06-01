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
            Applied ML · Computational Pathology · Federated Oncology Learning
          </Text>
          <Text fontSize="sm" color="gray.500">
            Whole-slide AI / PANDA Phikon features / TransnnMIL / PathologyFL / Dominance-aware federated robustness
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
          Matthew Vaishnav is an applied machine-learning and computational pathology research engineer based in Kitchener-Waterloo. His flagship work studies whole-slide pathology AI, federated oncology learning, failure-mode analysis, and reproducible medical-AI validation. Recent work identifies a FedAvg dominant-site failure mode on full PANDA Phikon slide features and evaluates cross-site blending plus dominance-aware detector switches under label noise and ordinal grading bias.
        </Paragraph>
        <Flex justify="center" my={4} gap={3} flexWrap="wrap">
          <Button as={NextLink} href="/computational-pathology" scroll={false} rightIcon={<ChevronRightIcon />} colorScheme="teal" size="lg">
            Flagship Research
          </Button>
          <Button as={NextLink} href="/posts/dominance-aware-federated-pathology" scroll={false} rightIcon={<ChevronRightIcon />} colorScheme="teal" variant="outline" size="lg">
            Latest Result
          </Button>
        </Flex>
      </Section>

      <Section delay={0.25}>
        <Heading as="h3" variant="section-title">Flagship Research Platform</Heading>
        <Paragraph>
          My main research project combines whole-slide pathology AI, federated learning, benchmark automation, and clinical-data integration components. The work includes a full PCam benchmark, PANDA prostate-grading experiments with Phikon features, TransnnMIL architecture work, PathologyFL simulated multi-site learning, and dominance-aware federated robustness analysis.
        </Paragraph>
        <List mt={4} spacing={2}>
          <ListItem><strong>PCam benchmark:</strong> 85.26% test accuracy and 0.9394 AUC on the full 32,768-sample PCam test set.</ListItem>
          <ListItem><strong>PANDA scale:</strong> 10,611 readable PANDA-derived Phikon slide feature vectors, 768 dimensions.</ListItem>
          <ListItem><strong>Federated robustness:</strong> 15-seed full-PANDA studies of FedAvg under dominant-site label corruption and systematic ordinal threshold bias.</ListItem>
          <ListItem><strong>Key finding:</strong> cross-site blending improves robustness when the dominant simulated site becomes unreliable, especially under conservative grading shift.</ListItem>
          <ListItem><strong>Detector switch:</strong> clean-calibrated FedAvg diagnostics can trigger a switch away from sample-size dominance in unsafe regimes.</ListItem>
          <ListItem><strong>Models:</strong> TransnnMIL, AttentionMIL, CLAM-style and TransMIL-style workflows.</ListItem>
        </List>
      </Section>

      <Section delay={0.28}>
        <Heading as="h3" variant="section-title">Research Metrics</Heading>
        <SimpleGrid columns={[1, 2, 3]} gap={4}>
          <Stat><StatLabel>PANDA Phikon Cache</StatLabel><StatNumber>10,611</StatNumber><StatHelpText>Readable slide feature vectors</StatHelpText></Stat>
          <Stat><StatLabel>Feature Dimension</StatLabel><StatNumber>768</StatNumber><StatHelpText>Mean-pooled Phikon embeddings</StatHelpText></Stat>
          <Stat><StatLabel>Validation Seeds</StatLabel><StatNumber>15</StatNumber><StatHelpText>Full-PANDA FL stress studies</StatHelpText></Stat>
          <Stat><StatLabel>PCam AUC</StatLabel><StatNumber>0.9394</StatNumber><StatHelpText>Full 32,768-sample test set</StatHelpText></Stat>
          <Stat><StatLabel>PCam Accuracy</StatLabel><StatNumber>85.26%</StatNumber><StatHelpText>Bootstrap confidence intervals</StatHelpText></Stat>
          <Stat><StatLabel>Research Focus</StatLabel><StatNumber>FL Robustness</StatNumber><StatHelpText>Dominant-site failure detection</StatHelpText></Stat>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">Bio</Heading>
        <BioSection><BioYear>2006</BioYear>Born in Ontario, Canada.</BioSection>
        <BioSection><BioYear>2025 to present</BioYear>Studying Computer Systems Technician at Conestoga College.</BioSection>
        <BioSection><BioYear>2025</BioYear>Built 18-node home lab with Security Onion and pfSense for security research.</BioSection>
        <BioSection><BioYear>2025 to present</BioYear>Building computational pathology tooling, PCam benchmarks, TransnnMIL, PathologyFL, and federated robustness experiments.</BioSection>
        <BioSection><BioYear>2026</BioYear>Validated dominance-aware federated learning failure modes on 10,611 PANDA-derived Phikon slide features across 15-seed stress studies.</BioSection>
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