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
          <p style={{ fontSize: '20px', marginBottom: '4px' }}>Computational Systems Engineer ( ML / Pathology / Security )</p>
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
          &nbsp;&nbsp;&nbsp;&nbsp;Matthew Vaishnav is a computational systems engineer and security researcher based in Kitchener with a passion for building labs that break in interesting ways. He has a knack for all things infrastructure, from designing segmented networks and writing detection rules all the way to solving real problems with PyTorch and Sigma. When not online, he loves documenting failure modes and reverse-engineering attack chains. Currently, he is working on <Link href="/programming-works/drift" color="teal.500">drift</Link> (a computational pathology annotation system) and <Link href="/programming-works/sentinel" color="teal.500">SENTINEL</Link> (a SIEM correlation engine). His 18-node home lab runs 24/7 with Security Onion watching everything.
        </Paragraph>
        <Flex justify="center" my={4}>
          <Button
            as={NextLink}
            href="/programming-works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            size="lg"
          >
            My Portfolio
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
