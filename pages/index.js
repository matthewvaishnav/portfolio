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
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { SiTryhackme } from 'react-icons/si'

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
            <Text fontSize="sm" color={mutedText} lineHeight="1.75" maxW="580px">
              Independent neural-network research in whole-slide histopathology, scanner and
              acquisition robustness, representation auditing, multiple-instance learning, and
              reproducible ML systems.
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
            I am an independent computational pathology engineer and applied machine-learning
            researcher. I build controlled experiments and reproducible ML systems for whole-slide
            modeling, pathology foundation-model features, scanner and site robustness,
            representation audits, simulated federated learning, and fail-closed research
            infrastructure.
          </Paragraph>
          <Paragraph>
            My primary research line is Paired-Acquisition Neural Factorization. Using multiple scans
            of the same underlying tissue, I test whether frozen pathology embeddings can be separated
            into a tissue-oriented representation with substantially reduced linearly recoverable
            scanner identity and an acquisition branch that retains scanner information, while
            preserving descriptive tissue-category structure and same-region retrieval under the
            tested protocols.
          </Paragraph>

          <SimpleGrid
            columns={{ base: 1, sm: 3 }}
            spacing={3}
            my={{ base: 6, md: 7 }}
            maxW="680px"
            mx="auto"
          >
            <Button
              as={NextLink}
              href="/computational-pathology"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              size="lg"
              w="full"
            >
              Current Research
            </Button>
            <Button
              as={NextLink}
              href="/research"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              variant="outline"
              size="lg"
              w="full"
            >
              Research Library
            </Button>
            <Button
              as={Link}
              href="https://github.com/matthewvaishnav"
              target="_blank"
              rel="noopener noreferrer"
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              variant="outline"
              size="lg"
              w="full"
            >
              GitHub
            </Button>
          </SimpleGrid>
        </Section>

        <Section delay={0.25}>
          <Heading as="h2" variant="section-title">
            Current Research
          </Heading>
          <List mt={4} spacing={5}>
            <ListItem>
              <Text fontWeight="bold">1. Paired-Acquisition Neural Factorization</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Corrected, fold-aware SCORPION evaluation across 48 human H&amp;E slides, five
                scanners, and DINOv2, Phikon, and ResNet50 feature families, together with a 175-fit
                capacity-matched ablation campaign.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">2. External multi-scanner validation</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Independent canine squamous-cell carcinoma validation using biological-sample-blocked
                folds, a corrected fixed five-category audit, and a completed 450-cell dimensionality
                × cross-covariance factorial.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">3. Prospective linear baseline comparison</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Preregistered comparison against paired affine and orthogonal-Procrustes controls to
                separate the value of neural factorization from simpler harmonization. No comparative
                result is claimed before execution and promotion.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">4. Pair-repeat allocation</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Matched-budget experiments testing unique biological pair diversity against repeated
                exposure to the same anchors.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">5. CAMELYON17 center-subspace projection</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Mechanism-focused work on attenuating source-center information while auditing tumor
                signal in frozen pathology representations.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">6. Whole-slide multiple-instance learning</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                PANDA slide-level modeling with mean pooling, gated AttentionMIL, and a repaired
                TransnnMIL implementation. Historical fusion scores are retained only as records;
                matched reruns are required for new architecture claims.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">7. Research reliability infrastructure</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Immutable provenance, artifact hashing, corruption tests, resumable factorial runs,
                fail-closed validators, preregistered analyses, and dedicated GitHub Actions gates.
              </Text>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.28}>
          <Heading as="h2" variant="section-title">
            Selected Evidence
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
                <StatLabel color={subtleText}>SCORPION study scale</StatLabel>
                <StatNumber>48 / 480 / 5</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Slides / aligned regions / scanners
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>SCORPION scanner probe</StatLabel>
                <StatNumber>0.7825 → 0.3989</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Reduced linear scanner recoverability
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>Capacity-matched campaign</StatLabel>
                <StatNumber>175 / 175</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Registered fits validated
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>Canine SCC factorial</StatLabel>
                <StatNumber>450 / 450</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  No universal operating point found
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>PatchCamelyon test</StatLabel>
                <StatNumber>0.9394 AUC</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  0.8526 accuracy on one official split
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>PANDA readable features</StatLabel>
                <StatNumber>10,611</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Verified slide-level feature vectors
                </StatHelpText>
              </Stat>
            </SimpleGrid>
          </Box>
        </Section>

        <Section delay={0.29}>
          <Heading as="h2" variant="section-title">
            Claim Boundary
          </Heading>
          <Paragraph>
            Research-only. Not clinically validated. Not diagnostic software. Not intended for
            clinical deployment or patient-care use. The current paired-acquisition evidence supports
            partial structured separation under the tested conditions: substantially lower linearly
            recoverable scanner identity in the tissue-oriented branch, strong scanner information in
            the acquisition branch, and preserved descriptive tissue-category structure and
            same-region retrieval. It does not establish pure biological factors, complete scanner
            invariance, disease biology, clinical utility, or deployment readiness.
          </Paragraph>
          <Link
            href="https://github.com/matthewvaishnav/computational-pathology-research/blob/main/CLAIM_BOUNDARY.md"
            target="_blank"
            rel="noopener noreferrer"
            fontWeight="semibold"
          >
            Read the authoritative claim boundary <ChevronRightIcon />
          </Link>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2006</BioYear>Born in Ontario, Canada.
          </BioSection>
          <BioSection>
            <BioYear>2025 to present</BioYear>Independent computational pathology engineering and
            applied machine-learning research across PCam, PANDA, CAMELYON17, multiple-instance
            learning, and simulated federated pathology.
          </BioSection>
          <BioSection>
            <BioYear>2025</BioYear>Built an 18-node home lab with Security Onion and pfSense for
            systems and security research.
          </BioSection>
          <BioSection>
            <BioYear>2025 to present</BioYear>Studying Computer Systems Technician – IT Infrastructure
            &amp; Services at Conestoga College in Waterloo, Ontario.
          </BioSection>
          <BioSection>
            <BioYear>2026 to present</BioYear>Building and auditing Paired-Acquisition Neural
            Factorization studies, external validation packages, mechanism audits, and fail-closed
            reproducibility infrastructure.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Matrix multiplication, backpropagation, gradient descent, optimization landscapes,
            attention mechanisms, convolutional inductive biases, embedding geometry, latent-space
            factorization, feature disentanglement, multiple-instance learning, pathological failure
            modes, and figuring out what neural networks actually encode.
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
