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
              I develop PA-NF, an end-to-end pathology pipeline spanning
              image acquisition, whole-slide analysis and institutional learning.
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
            My research centres on Paired-Acquisition Neural Factorization
            (PA-NF), an end-to-end computational pathology pipeline I developed.
            It studies how tissue information is represented, from the
            conditions of imaging to whole-slide analysis and learning
            across institutions.
          </Paragraph>
          <Paragraph>
            The foundation of PA-NF is a custom neural model that separates
            tissue-oriented and scanner-related information. It reconstructs
            image features using both representations, while matched scans
            of the same tissue allow their behaviour to be tested.
          </Paragraph>
          <Paragraph>
            The same PA-NF pipeline includes TransnnMIL for whole-slide
            modeling, PathologyFL for institutional learning and
            FAIR-WEIGHTS-H for evaluating institutional contributions.
            I develop the experiments and software used to study
            these systems together within the wider research programme.
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
            PA-NF acquisition experiments include SCORPION, with
            48 human H&amp;E slides scanned on five instruments,
            and an independent canine SCC study. In 175 registered
            SCORPION model fits, scanner identity became 31.1
            percentage points less recoverable than in an equal-capacity
            neural control, while same-tissue retrieval met the
            predefined margin. Other studies test how training pairs
            are selected and how simpler scanner corrections compare.
          </Paragraph>
          <Paragraph>
            Other stages of the same PA-NF programme use PCam for patch
            classification, PANDA for TransnnMIL whole-slide experiments
            and CAMELYON17 for variation between institutions.
            The PCam classifier achieved 0.9394 ROC AUC on its official
            test split; PathologyFL and FAIR-WEIGHTS-H have their own
            institutional-learning evaluations.
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
