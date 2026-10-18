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
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Home = () => {
  const mutedText = useColorModeValue('gray.600', 'gray.400')
  const cardBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const photoBorder = useColorModeValue('gray.200', 'whiteAlpha.800')
  const footerBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <Layout>
      <Container maxW="full" px={0}>
        <Box
          display={{ base: 'block', md: 'flex' }}
          alignItems="center"
          gap={{ base: 5, md: 7 }}
          pb={{ base: 6, md: 7 }}
          borderBottom="1px solid"
          borderColor={cardBorder}
        >
          <Box flexGrow={1}>
            <Heading as="h1" variant="page-title">
              Matthew Vaishnav
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium" mb={2}>
              Computational Pathology Researcher & Research Engineer
            </Text>
            <Text fontSize="sm" color={mutedText} lineHeight="1.75" maxW="620px">
              I study how image acquisition changes what pathology models learn about tissue,
              using matched scans of the same specimen to investigate that distinction.
            </Text>
          </Box>
          <Box flexShrink={0} mt={{ base: 5, md: 0 }} textAlign="center">
            <Box
              borderColor={photoBorder}
              borderWidth={2}
              borderStyle="solid"
              w={{ base: '92px', md: '106px' }}
              h={{ base: '92px', md: '106px' }}
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Box
                as="img"
                src="/portfolio/images/matthew.jpg"
                alt="Matthew Vaishnav"
                borderRadius="full"
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.2}>
          <Heading as="h2" variant="section-title">
            About
          </Heading>

          <Paragraph>
            The tissue does not change when a slide is scanned on a different machine,
            yet a model&apos;s representation of it often does. My research investigates
            what can be attributed to the specimen and what arises from image acquisition.
            Matched observations make that distinction possible to examine experimentally.
          </Paragraph>
          <Paragraph>
            I developed Paired-Acquisition Neural Factorization (PA-NF) as a custom
            computational pathology research framework for this problem. Rather than
            treating scanner effects as a correction added at the end of an existing workflow,
            I built the pipeline around observations of the same physical tissue.
            Its neural models are studied through controlled acquisition changes to determine
            what they actually learn about the specimen.
          </Paragraph>
          <Paragraph>
            The work draws on paired human histopathology images and an independent
            multi-scanner canine dataset. My broader aim is to understand when
            acquisition-aware learning can preserve meaningful tissue information,
            and what the experimental evidence is sufficient to establish.
          </Paragraph>

          <Flex
            justify="center"
            align="center"
            gap={{ base: 2, md: 3 }}
            flexWrap="wrap"
            my={{ base: 6, md: 7 }}
          >
            <Button
              as={NextLink}
              href="/research"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              size="md"
              px={4}
              w={{ base: 'full', sm: 'auto' }}
              flexShrink={0}
            >
              Research
            </Button>
            <Button
              as={Link}
              href="https://github.com/matthewvaishnav/computational-pathology-research"
              target="_blank"
              rel="noopener noreferrer"
              rightIcon={<ExternalLinkIcon />}
              colorScheme="teal"
              variant="outline"
              size="md"
              px={4}
              w={{ base: 'full', sm: 'auto' }}
              flexShrink={0}
            >
              Research Hub
            </Button>
            <Button
              as={Link}
              href="https://github.com/matthewvaishnav"
              target="_blank"
              rel="noopener noreferrer"
              rightIcon={<ExternalLinkIcon />}
              colorScheme="teal"
              variant="outline"
              size="md"
              px={4}
              w={{ base: 'full', sm: 'auto' }}
              flexShrink={0}
            >
              GitHub
            </Button>
          </Flex>
        </Section>

        <Section delay={0.25}>
          <Heading as="h2" variant="section-title">
            Research
          </Heading>
          <Paragraph>
            PA-NF is the central project in my computational pathology research.
            It studies the relationship between tissue information and scanner-dependent
            variation using physical correspondence between acquisitions. Human and canine
            multi-scanner datasets provide independent settings in which to examine
            that question.
          </Paragraph>
          <Paragraph>
            I have also studied the reliability of quantitative tissue measurements
            when their computational context changes. This work has informed my interest
            in how measurement procedures shape the biological conclusions drawn from
            digital pathology.
          </Paragraph>
        </Section>

        <Section delay={0.29}>
          <Heading as="h2" variant="section-title">
            Approach
          </Heading>
          <Paragraph>
            I treat the experimental design as part of the method. When studying scanner
            effects, the central comparison is the same tissue observed under different
            acquisitions. A model&apos;s improvement is meaningful only to the extent
            that the evidence distinguishes it from simpler explanations.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            Background
          </Heading>
          <Paragraph>
            I conduct independent computational pathology research from Kitchener–Waterloo,
            Ontario, while studying Computer Programming at Conestoga College. My earlier
            work in systems engineering continues to inform how I develop and maintain
            research software.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            On the web
          </Heading>
          <List spacing={1}>
            <ListItem>
              <Link href="https://github.com/matthewvaishnav" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />}>
                  @matthewvaishnav
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/matthew-vaishnav-594312403/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoLinkedin />}>
                  Matthew Vaishnav
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>

        <Box mt={6} pt={6} borderTop="1px solid" borderColor={footerBorder} textAlign="center">
          <Text fontSize="sm" color={mutedText}>
            Inspired by{' '}
            <Link
              href="https://www.craftz.dog/"
              target="_blank"
              rel="noopener noreferrer"
              color="teal.500"
              _hover={{ textDecoration: 'underline' }}
            >
              Takuya Matsuyama&apos;s homepage
            </Link>
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Home
