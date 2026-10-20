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
              I develop and study PA-NF, an end-to-end computational
              pathology pipeline spanning imaging, whole slides and institutions.
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
            I developed Paired-Acquisition Neural Factorization (PA-NF)
            as an end-to-end computational pathology research pipeline.
            Its starting point is a measurement problem: the same tissue
            can produce different digital images when scanned using
            different instruments, and those differences can influence
            models further along the analysis process.
          </Paragraph>
          <Paragraph>
            The pipeline begins with a neural model designed to distinguish
            tissue-oriented information from scanner-related variation.
            It extends to whole-slide analysis through TransnnMIL and
            to institutional learning through PathologyFL and
            FAIR-WEIGHTS-H. These are components of the same research
            programme, developed and tested using distinct experiments.
          </Paragraph>
          <Paragraph>
            I build the models, training software and reproducibility
            systems used throughout PA-NF. My work examines not just
            whether the models perform well, but what their results
            actually establish about the tissue and its observation.
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
            SCORPION provides the primary paired-scanner experiment:
            48 human H&amp;E slides scanned on five instruments.
            In 175 registered model fits, the PA-NF factorization model
            reduced recoverable scanner identity by 31.1 percentage
            points against an equal-capacity neural control while
            meeting its same-region retrieval requirement.
            Independent canine SCC experiments and stronger simple
            scanner corrections establish additional limits.
          </Paragraph>
          <Paragraph>
            The same PA-NF programme includes the PCam patch benchmark,
            TransnnMIL experiments on 10,611 PANDA slides, and
            PathologyFL studies of institutional weighting using
            simulated PANDA sites and real centre differences from
            CAMELYON17. Each result supports its own specific
            experimental conclusion.
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
