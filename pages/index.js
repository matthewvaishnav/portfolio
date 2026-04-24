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
  Flex
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
          <Heading as="h2" variant="page-title">
            Matthew Vaishnav
          </Heading>
          <Text fontSize={{ base: 'md', md: 'xl' }} mb={1}>
            Computational Systems Engineer ( ML / Pathology / Security )
          </Text>
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
            w={{ base: '88px', md: '100px' }}
            h={{ base: '88px', md: '100px' }}
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Box
              as="img"
              src="/portfolio/images/matthew.jpg"
              alt="Profile image"
              borderRadius="full"
              w={{ base: '88px', md: '100px' }}
              h={{ base: '88px', md: '100px' }}
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Matthew Vaishnav is a computational systems engineer based in Kitchener who builds machine learning systems and research tools for computational pathology. He is currently building <Link href="https://matthewvaishnav.github.io/computational-pathology-research/" color="teal.500" target="_blank">HistoCore</Link>, a production-grade PyTorch framework with 1,083 tests, attention-based MIL models, and comprehensive WSI processing pipelines. When he&apos;s not coding, he&apos;s refining workflows and exploring new ways to build reliable and useful systems.
        </Paragraph>
        <Flex justify="center" my={4}>
          <Button
            as={NextLink}
            href="/systems-engineering"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            size="lg"
            w={{ base: 'full', sm: 'auto' }}
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
          <BioYear>2025</BioYear>
          Built 18-node home lab with Security Onion and pfSense for security research.
        </BioSection>
        <BioSection>
          <BioYear>2025 to present</BioYear>
          Building computational pathology tooling and ML pipelines.
        </BioSection>
        <BioSection>
          <BioYear>2025 to present</BioYear>
          Developing security detection rules and log analysis tools.
        </BioSection>
        <BioSection>
          <BioYear>2026 to present</BioYear>
          Developing computational pathology research and ML infrastructure.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, music, my dog, coffee, and machine learning.
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
