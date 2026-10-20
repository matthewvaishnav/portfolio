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
              I investigate how the conditions of image acquisition affect what
              computational pathology models can infer from histological tissue.
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
            My research examines how biological information is represented in
            computational pathology. The same physical tissue can look different
            when scanned with different instruments. I study which changes come
            from the tissue and which come from the way it was imaged.
          </Paragraph>
          <Paragraph>
            I developed Paired-Acquisition Neural Factorization (PA-NF) to
            investigate this difference. Its custom neural model learns separate
            tissue-oriented and acquisition-related representations, then uses
            both to reconstruct the original image features. Matched scans let
            me test whether those parts behave as intended, rather than only
            checking whether scanner identity becomes harder to predict.
          </Paragraph>
          <Paragraph>
            PA-NF sits within an end-to-end computational pathology pipeline I
            developed, extending from image features to whole-slide analysis
            and learning across institutions. I also build the training,
            evaluation and reproducibility software needed to test each part.
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
            The paired-acquisition studies use matched H&amp;E scans of the
            same human tissue across five instruments and an independently
            collected canine dataset. In a registered 175-fit comparison, PA-NF
            reduced recoverable scanner identity in its tissue-oriented
            representation by 31.1 percentage points against an equally sized
            neural control, while maintaining same-region retrieval within the
            prespecified margin.
          </Paragraph>
          <Paragraph>
            The wider pipeline includes my work on whole-slide modeling and
            learning across institutions, with studies involving the
            10,611-slide PANDA collection and multi-centre CAMELYON17 data.
            Each stage is evaluated separately, including comparisons with
            simpler methods and tests of where the proposed approach fails.
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
