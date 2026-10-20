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
              I develop and evaluate computational pathology methods, from image
              patches and whole slides to differences between scanners and institutions.
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
            I study how computational pathology models interpret tissue
            images, from individual patches and whole slides to data
            collected across institutions. My research examines what
            these methods learn and how imaging conditions influence
            the results.
          </Paragraph>
          <Paragraph>
            I developed Paired-Acquisition Neural Factorization (PA-NF),
            a custom model that separates tissue-oriented and acquisition
            information and reconstructs image features using both.
            Paired scans of the same physical tissue allow this
            separation to be tested directly.
          </Paragraph>
          <Paragraph>
            My wider pipeline includes TransnnMIL for whole-slide modeling
            and PathologyFL for research on learning across institutions.
            I build the training and evaluation software used across
            SCORPION, canine SCC, PCam, PANDA and CAMELYON17 studies.
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
            In the SCORPION study, 48 human H&amp;E slides were scanned
            on five instruments. Across 175 registered model fits,
            PA-NF reduced recoverable scanner identity by 31.1
            percentage points against an equally sized neural control
            while preserving same-tissue retrieval within the predefined
            margin. Independent canine SCC experiments and a separate
            pair-repeat allocation study test other aspects of the method.
          </Paragraph>
          <Paragraph>
            The PCam patch-classification benchmark achieved a
            0.9394 ROC AUC on its official test split. My broader work
            includes TransnnMIL experiments using 10,611 PANDA slides,
            and PathologyFL and FAIR-WEIGHTS-H research on institutional
            weighting, including CAMELYON17 studies across five centres.
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

      </Container>
    </Layout>
  )
}

export default Home
