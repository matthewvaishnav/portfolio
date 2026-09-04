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
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { SiTryhackme } from 'react-icons/si'

const FLAGSHIP_PDF =
  'https://matthewvaishnav.github.io/computational-pathology-research/paired-acquisition-neural-factorization-pipeline.pdf'

const Home = () => {
  const mutedText = useColorModeValue('gray.600', 'gray.400')
  const subtleText = useColorModeValue('gray.700', 'gray.300')
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const cardBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const cardShadow = useColorModeValue('0 12px 32px rgba(15, 23, 42, 0.07)', 'none')
  const photoBorder = useColorModeValue('gray.200', 'whiteAlpha.800')
  const footerBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <Layout>
      <Container px={0}>
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
              Applied ML / Computational Pathology Research Engineer
            </Text>
            <Text fontSize="sm" color={mutedText} lineHeight="1.75" maxW="620px">
              Independent research in computational pathology, representation learning, whole-slide
              neural aggregation, federated learning, and scientific computing.
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
            Work
          </Heading>
          <Paragraph>
            I build computational pathology systems from representation formation through whole-slide
            modeling and multi-institutional learning. My flagship research program is
            Paired-Acquisition Neural Factorization (PA-NF), an end-to-end pipeline that studies how
            scanner and site signal enters pathology representations, propagates through slide-level
            aggregation, and affects learning across institutions.
          </Paragraph>
          <Paragraph>
            The pipeline combines a paired-acquisition representation stage, TransnnMIL for whole-slide
            multiple-instance learning, and PathologyFL for federated and site-aware training. The work
            is tested across SCORPION, an independent multi-scanner canine SCC cohort, PANDA,
            CAMELYON17/WILDS, and PatchCamelyon.
          </Paragraph>

          <Flex
            justify="center"
            align="center"
            gap={{ base: 2, md: 3 }}
            flexWrap="wrap"
            my={{ base: 6, md: 7 }}
          >
            <Button
              as={Link}
              href={FLAGSHIP_PDF}
              target="_blank"
              rel="noopener noreferrer"
              rightIcon={<ExternalLinkIcon />}
              colorScheme="teal"
              size="md"
              px={4}
              w={{ base: 'full', sm: 'auto' }}
              flexShrink={0}
            >
              Read Flagship Paper
            </Button>
            <Button
              as={NextLink}
              href="/computational-pathology"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              variant="outline"
              size="md"
              px={4}
              w={{ base: 'full', sm: 'auto' }}
              flexShrink={0}
            >
              PA-NF Pipeline
            </Button>
            <Button
              as={NextLink}
              href="/research"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              variant="outline"
              size="md"
              px={4}
              w={{ base: 'full', sm: 'auto' }}
              flexShrink={0}
            >
              Research Library
            </Button>
          </Flex>
        </Section>

        <Section delay={0.25}>
          <Heading as="h2" variant="section-title">
            PA-NF Pipeline
          </Heading>
          <List mt={4} spacing={5}>
            <ListItem>
              <Text fontWeight="bold">1. Paired-acquisition representation learning</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Uses aligned scans of the same tissue across scanners to learn tissue-oriented and
                acquisition-oriented branches. A 175-fit capacity-matched SCORPION campaign found a
                0.3108 reduction in tissue-branch scanner balanced accuracy relative to an
                equal-capacity two-branch neural control while preserving same-region retrieval within
                the registered noninferiority margin.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">2. Whole-slide neural aggregation</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                TransnnMIL operates on slide-level Phikon feature bags for prostate grading on PANDA.
                The stabilized 10,611-slide program reached a mean best validation QWK of 0.8257 at
                learning rate 1e-4, with a best seed/run of 0.8455 across the stabilization grid.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">3. Multi-institutional learning</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                PathologyFL implements federated optimization, privacy/security mechanisms, and
                pathology-specific site-aware weighting. A fixed dominance detector transferred
                without retuning to ordinal site shift and improved global QWK by 0.01053, macro-F1 by
                0.01512, and worst-site QWK by 0.01290 at the strongest tested shift level.
              </Text>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.28}>
          <Heading as="h2" variant="section-title">
            Selected Results
          </Heading>
          <Box
            bg={cardBg}
            borderWidth="1px"
            borderColor={cardBorder}
            borderRadius="xl"
            p={{ base: 5, md: 6 }}
            boxShadow={cardShadow}
          >
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={{ base: 6, md: 7 }}>
              <Stat>
                <StatLabel color={subtleText}>SCORPION paired acquisition</StatLabel>
                <StatNumber>48 / 480 / 5</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Slides / aligned regions / scanners
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>Capacity-matched PA-NF effect</StatLabel>
                <StatNumber>-0.3108</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Tissue-branch scanner BA vs equal-capacity control
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>PANDA whole-slide corpus</StatLabel>
                <StatNumber>10,611</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Readable Phikon slide feature bags
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>TransnnMIL validation</StatLabel>
                <StatNumber>0.8455</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Best validation QWK in stabilization grid
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>CAMELYON17/WILDS</StatLabel>
                <StatNumber>455,954</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Examples across five medical centers
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>PatchCamelyon</StatLabel>
                <StatNumber>0.9394 AUC</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  0.8526 accuracy on the official test split
                </StatHelpText>
              </Stat>
            </SimpleGrid>
          </Box>
        </Section>

        <Section delay={0.29}>
          <Heading as="h2" variant="section-title">
            Scope
          </Heading>
          <Paragraph>
            This is research software and experimental machine-learning work, not clinical software.
            The strongest results are specific to their registered datasets and comparators: PA-NF
            outperforms its equal-capacity neural control on the SCORPION structured-separation
            objective, and PathologyFL site-aware policies outperform FedAvg in defined simulated-site
            stress regimes. I do not claim universal scanner invariance, clinical validation, or
            state-of-the-art superiority across all pathology models.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2006</BioYear>Born in Ontario, Canada.
          </BioSection>
          <BioSection>
            <BioYear>2025 to present</BioYear>Independent computational pathology and machine-learning
            research across paired-acquisition representations, whole-slide analysis, and
            multi-institutional learning.
          </BioSection>
          <BioSection>
            <BioYear>2025</BioYear>Built an 18-node home lab with Security Onion and pfSense for
            systems and security research.
          </BioSection>
          <BioSection>
            <BioYear>Fall 2026</BioYear>Entering Computer Programming at Conestoga College in
            Waterloo, Ontario.
          </BioSection>
          <BioSection>
            <BioYear>2026</BioYear>Released the PA-NF flagship pipeline manuscript spanning
            paired-scanner representation learning, TransnnMIL whole-slide modeling, and PathologyFL
            multi-institutional learning.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Matrix multiplication, backpropagation, gradient descent, optimization landscapes,
            attention mechanisms, convolutional inductive biases, embedding geometry, latent-space
            factorization, multiple-instance learning, federated learning, neural aggregation, and
            figuring out what neural networks actually encode.
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
            <ListItem>
              <Link
                href="https://tryhackme.com/p/matthew.vaishnav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" colorScheme="teal" leftIcon={<SiTryhackme />}>
                  @matthew.vaishnav
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
