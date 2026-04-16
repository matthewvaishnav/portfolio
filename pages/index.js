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
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a computational systems engineer based in Canada!
      </Box>

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
          &nbsp;&nbsp;&nbsp;&nbsp;Matthew Vaishnav is a computational systems engineer and security researcher based in Kitchener with a passion for building high fidelity labs to study how complex systems fail. He specializes in computational pathology, machine learning pipelines, and defensive security operations. His 18-node home lab simulates enterprise infrastructure with pfSense routing traffic between 6 isolated VLANs and Security Onion monitoring everything on a SPAN port. When not engineering controlled failure modes, he&apos;s building research tooling, developing detection rules, or creating visual interfaces. Currently working on <Link href="/programming-works/drift" color="teal.500">drift</Link>, <Link href="/programming-works/sentinel" color="teal.500">SENTINEL</Link>, and security automation tools. His projects blend scientific rigor with digital craftsmanship.
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

      <Section delay={0.25}>
        <Heading as="h3" variant="section-title">
          Lab Infrastructure
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={4}>
          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            textAlign="center"
          >
            <Text fontSize="2xl" fontWeight="bold" color="teal.500">18</Text>
            <Text fontSize="sm">Lab Nodes</Text>
          </Box>
          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            textAlign="center"
          >
            <Text fontSize="2xl" fontWeight="bold" color="teal.500">6</Text>
            <Text fontSize="sm">VLANs</Text>
          </Box>
          <Box
            p={4}
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            textAlign="center"
          >
            <Text fontSize="2xl" fontWeight="bold" color="teal.500">24/7</Text>
            <Text fontSize="sm">Monitoring</Text>
          </Box>
        </SimpleGrid>
        <Paragraph>
          The entire lab is version-controlled with Ansible and Terraform—if the host fails, it rebuilds in minutes. 
          Every security project is tested against running systems with real attack scenarios.
        </Paragraph>
      </Section>

      <Section delay={0.27}>
        <Heading as="h3" variant="section-title">
          Technical Focus
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Box>
            <Heading as="h4" size="md" mb={2} color="teal.500">Programming</Heading>
            <Flex wrap="wrap" gap={2}>
              {['Python', 'JavaScript', 'TypeScript', 'Machine Learning', 'PyTorch', 'Next.js', 'Docker', 'Kubernetes'].map((tech) => (
                <Badge key={tech} colorScheme="teal" variant="subtle">{tech}</Badge>
              ))}
            </Flex>
          </Box>
          <Box>
            <Heading as="h4" size="md" mb={2} color="red.500">Security</Heading>
            <Flex wrap="wrap" gap={2}>
              {['SIEM', 'Sigma Rules', 'MITRE ATT&CK', 'Log Analysis', 'Threat Detection', 'pfSense', 'Security Onion', 'Ansible'].map((tech) => (
                <Badge key={tech} colorScheme="red" variant="subtle">{tech}</Badge>
              ))}
            </Flex>
          </Box>
        </SimpleGrid>
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
