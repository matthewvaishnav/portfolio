import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Link,
  Button,
  List,
  ListItem,
  useColorModeValue
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
          <p style={{ fontSize: '20px', marginBottom: '4px' }}>Computational Systems Engineer</p>
          <p style={{ fontSize: '14px', color: '#888' }}>(Machine Learning / Computational Pathology / Failure Analysis)</p>
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
              src="/programming-portfolio/images/matthew.jpg"
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
          &nbsp;&nbsp;&nbsp;&nbsp;Matthew Vaishnav is a computational systems engineer based in Kitchener with a passion for building high fidelity labs to study how complex systems fail. He has a knack for all things failure analysis, from security engineering and infrastructure design all the way to solving real problems with <Link href="https://matthewvaishnav.github.io/computational-pathology-research/" target="_blank" color="teal.500">computational pathology</Link>. When not engineering controlled failure modes, he&apos;s building research tooling or developing visual, game inspired interfaces. Currently, he is working on <Link href="/programming-works/drift" color="teal.500">drift</Link> and <Link href="/programming-works/sentinel" color="teal.500">SENTINEL</Link>. His projects blend scientific rigor with digital craftsmanship.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/programming-works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            mr={2}
          >
            View Projects
          </Button>
          <Button
            as="a"
            href="mailto:matthewvaishnav@gmail.com"
            colorScheme="teal"
            variant="outline"
            mr={2}
          >
            Contact
          </Button>
          <Button
            as={Link}
            href="https://www.linkedin.com/in/matthew-vaishnav-279670229/"
            target="_blank"
            colorScheme="teal"
            variant="outline"
          >
            LinkedIn ↗
          </Button>
        </Box>
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
          <BioYear>2025 to present</BioYear>
          Building computational pathology tooling and ML pipelines.
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
          Systems design, computational pathology, machine learning, digital labs, security engineering, automation, game development, sci‑fi industrial UI, photography, clean interfaces, and anything that reveals how complex things actually work.
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
