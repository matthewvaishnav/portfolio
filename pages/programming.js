import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Link,
  Button,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { SiTryhackme } from 'react-icons/si'

const Programming = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Computer Programming @ Conestoga · 2026–2027
      </Box>

      <Box display={{ base: 'block', md: 'flex' }} alignItems="center" gap={{ base: 4, md: 6 }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Matthew Vaishnav
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }}>
            Research software, systems tooling, and experimental engineering.
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

      <Section delay={0.1}>
        <Paragraph>
          I build research software and systems tools across scientific computing, Linux
          automation, infrastructure safety, reproducibility, and experimental game development.
        </Paragraph>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          spacing={3}
          align="stretch"
          justify="center"
          my={4}
        >
          <Button
            as={NextLink}
            href="/systems-engineering"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            w={{ base: 'full', sm: 'auto' }}
          >
            View Projects
          </Button>
          <Button
            as="a"
            href="mailto:matthewvaishnav@gmail.com"
            colorScheme="teal"
            variant="outline"
            w={{ base: 'full', sm: 'auto' }}
          >
            Contact
          </Button>
          <Button
            as={Link}
            href="https://www.linkedin.com/in/matthew-vaishnav-594312403/"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="teal"
            variant="outline"
            w={{ base: 'full', sm: 'auto' }}
          >
            LinkedIn ↗
          </Button>
        </Stack>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          The engineering side of my work ranges from computational-pathology experiment systems
          and evidence tooling to Linux state forensics, session-to-Ansible translation, destructive
          command interception, anti-DDoS architecture experiments, and a C++/Raylib game.
        </Paragraph>
        <Paragraph>
          Public repositories are linked where they exist. Some work is private or historical, and
          I keep that distinction explicit rather than presenting every project as publicly
          reproducible.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <BioSection>
          <BioYear>Languages</BioYear>
          Python, C++, JavaScript, Bash
        </BioSection>
        <BioSection>
          <BioYear>Tools</BioYear>
          Git, Docker, Ansible, SSH
        </BioSection>
        <BioSection>
          <BioYear>Focus</BioYear>
          Research engineering, automation, CLI tools, systems safety
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/matthewvaishnav" target="_blank" rel="noopener noreferrer">
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
            <Link href="https://www.linkedin.com/in/matthew-vaishnav-594312403/" target="_blank" rel="noopener noreferrer">
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
            <Link href="https://tryhackme.com/p/matthew.vaishnav" target="_blank" rel="noopener noreferrer">
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

export default Programming
