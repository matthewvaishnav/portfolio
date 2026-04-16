import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Link,
  Button,
  List,
  ListItem,
  useColorModeValue,
  SimpleGrid,
  Text,
  Flex,
  Badge
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
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Matthew Vaishnav
          </Heading>
          <p style={{ fontSize: '20px', marginBottom: '4px' }}>Computational Systems Engineer & Security Researcher</p>
          <p style={{ fontSize: '14px', color: '#888' }}>(Machine Learning / Computational Pathology / Defensive Security)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <img
              src="/portfolio/images/matthew.jpg"
              alt="Profile image"
              style={{ 
                borderRadius: '50%', 
                width: '100px', 
                height: '100px',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          &nbsp;&nbsp;&nbsp;&nbsp;Matthew Vaishnav builds computational systems to understand failure modes in tissue morphology and network infrastructure. He writes PyTorch pipelines for whole-slide image analysis, implements MITRE ATT&CK detection logic in Sigma, and maintains an 18-node lab where pfSense routes traffic across 6 VLANs while Security Onion captures everything on a SPAN port. His work spans gigapixel pathology image segmentation, log correlation engines that parse 14,000+ entries, and defensive security tooling. Currently developing <Link href="/programming-works/drift" color="teal.500">drift</Link> (a computational pathology annotation system), <Link href="/programming-works/sentinel" color="teal.500">SENTINEL</Link> (SIEM correlation engine), and infrastructure-as-code for reproducible security environments. Every system is documented, version-controlled, and designed to fail predictably.
        </Paragraph>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} my={4}>
          <Button
            as={NextLink}
            href="/programming-works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Programming Projects
          </Button>
          <Button
            as={NextLink}
            href="/security"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="red"
            variant="outline"
          >
            Security Projects
          </Button>
        </SimpleGrid>
        <Flex justify="center" gap={2} flexWrap="wrap">
          <Button
            as="a"
            href="mailto:matthewvaishnav@gmail.com"
            colorScheme="teal"
            variant="outline"
            size="sm"
          >
            Contact
          </Button>
          <Button
            as={Link}
            href="https://www.linkedin.com/in/matthew-vaishnav-279670229/"
            target="_blank"
            colorScheme="teal"
            variant="outline"
            size="sm"
          >
            LinkedIn ↗
          </Button>
        </Flex>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2006</BioYear>
          Born in Ontario, Canada.
        </BioSection>
        <BioSection>
          <BioYear>2025 to present</BioYear>
          Studying Computer Systems Technician at Conestoga College.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Built 18-node home lab with Security Onion and pfSense for security research.
        </BioSection>
        <BioSection>
          <BioYear>2024 to present</BioYear>
          Building computational pathology tooling and ML pipelines.
        </BioSection>
        <BioSection>
          <BioYear>2024 to present</BioYear>
          Developing security detection rules and log analysis tools.
        </BioSection>
        <BioSection>
          <BioYear>2026 to present</BioYear>
          Developing agentic coding workflows and infrastructure automation.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Systems design, computational pathology, machine learning, digital labs, security engineering, threat detection, log analysis, network security, automation, game development, sci‑fi industrial UI, photography, clean interfaces, CTF challenges, and anything that reveals how complex things actually work.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/matthewvaishnav" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @matthewvaishnav
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/matthew-vaishnav-279670229/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Matthew Vaishnav
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://tryhackme.com/p/matthew.vaishnav" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<SiTryhackme />}
              >
                @matthew.vaishnav
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
