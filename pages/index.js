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
              Computational Pathology / ML Research Engineer
            </Text>
            <Text fontSize="sm" color={mutedText} lineHeight="1.75" maxW="620px">
              Research on what computational pathology systems actually measure, where their signal
              comes from, and whether their conclusions survive controlled nuisance shifts and
              mechanism falsification.
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
            Computational pathology can produce convincing results for the wrong reasons. My
            research is about finding those reasons and making them experimentally testable.
          </Paragraph>
          <Paragraph>
            A model can carry scanner or site identity while appearing to learn biology. A nucleus
            measurement can change when the surrounding computational context changes. A spatial
            model can improve without depending on the spatial mechanism it claims to use. A
            multi-institutional system can look robust because the evaluation preserves hidden
            structure. I build experiments that separate those alternatives from the biological
            interpretation.
          </Paragraph>
          <Paragraph>
            I use paired acquisitions, fixed identities, controlled perturbations, mechanism
            falsification, provenance tracking, retained negative results, and machine-checkable
            evidence to ask what the system actually knows, where the information came from, and
            what claim the experiment is entitled to make. The goal is not another leaderboard
            entry. It is computational pathology whose conclusions survive the shortcuts being
            removed.
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
              as={NextLink}
              href="/systems-engineering"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              variant="outline"
              size="md"
              px={4}
              w={{ base: 'full', sm: 'auto' }}
              flexShrink={0}
            >
              Engineering
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
            Current Research
          </Heading>
          <List mt={4} spacing={5}>
            <ListItem>
              <Text fontWeight="bold">Paired acquisition & representation identifiability</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                PA-NF, SCORPION, canine SCC, scanner and center subspaces, representation geometry,
                capacity allocation, pair-repeat studies, and crossed-preparation identifiability.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Whole-slide learning</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Mean pooling, AttentionMIL, nnMIL, CLAM, TransMIL-style controls, TransnnMIL,
                branch-fusion studies, and repeated-seed PANDA evaluation.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">WSI-NCA / whole-slide tissue dynamics</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Local-state dynamics, topology and history falsifiers, recurrence controls, and
                SICAP assignment stability. The frozen PANDA-300 Phase A did not support a
                recurrence- or topology-dependent predictive advantage.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">PathologyFL</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Federated pathology infrastructure across aggregation, privacy, secure communication,
                asynchronous training, compression, monitoring, and fault tolerance.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Institutional weighting & site-signal alignment</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                FAIR-WEIGHTS-H, dominant-site stress, fixed detector transfer, CAMELYON17 held-out
                centers, center-subspace diagnostics, and infrastructure/communication studies.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">NucleoScope</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Repeated-context measurement mechanics, falsified law candidates, ordinal
                nucleus-versus-tissue regularities, artifact adversaries, and H12/G6 context-control qualification.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">SERA</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Evidence-governed structural learning across SFS formation stability, NRM mechanism
                localization and causal-specificity, strong System-One controls, and CRAS lifecycle qualification.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Scanner provenance & intervention</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                PANDA/SICAP provenance, scanner inventory, assignment stability, public-dataset
                discovery, and the PAR same-glass scanner intervention.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Benchmark & audit instruments</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Oncology Identity Audit, paired-scanner counterfactual benchmarking, measurement
                validation protocols, and scanner-invariant residual-provenance feasibility work.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Scientific compiler & evidence systems</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Pathology Pipeline Language, typed Evidence&lt;T&gt;, identity and unit checks,
                immutable evidence packages, release registries, and fail-closed claim validation.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Program-level reproducibility & audit</Text>
              <Text fontSize="sm" color={mutedText} mt={1} lineHeight="1.7">
                Claim ledgers, hostile review, public release provenance, retained negative results,
                exact artifact recovery, and evidence boundaries across the research program.
              </Text>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.28}>
          <Heading as="h2" variant="section-title">
            Research at a Glance
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
                <StatLabel color={subtleText}>PA-NF</StatLabel>
                <StatNumber>-0.3108</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Scanner balanced-accuracy effect vs equal-capacity control, with retrieval preserved
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>PCam</StatLabel>
                <StatNumber>0.9394 AUC</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Official 32,768-patch test split; numerically above all 10 external AUC values in the historical comparison table
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>Whole-slide MIL</StatLabel>
                <StatNumber>Matched rerun</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  AttentionMIL, TransMIL, nnMIL, CLAM, and repaired TransnnMIL under controlled comparison
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>Site-signal alignment</StatLabel>
                <StatNumber>+0.01053</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Global QWK delta at 45% conservative ordinal shift using a fixed label-noise-calibrated detector
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>SERA</StatLabel>
                <StatNumber>Validation</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Evidence-governed structural control plane under strong conventional comparators
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>NucleoScope</StatLabel>
                <StatNumber>Active collaboration</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Repeated-detection measurement and tissue-organization falsification
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color={subtleText}>Scientific compiler</StatLabel>
                <StatNumber>15 / 15 · 35 / 35</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Pipeline benchmarks and unit/adversarial scientific-legality tests
                </StatHelpText>
              </Stat>
            </SimpleGrid>
          </Box>
        </Section>

        <Section delay={0.29}>
          <Heading as="h2" variant="section-title">
            Approach
          </Heading>
          <Paragraph>
            The method depends on the question. I use matched interventions, architecture controls,
            external-center tests, synthetic mechanism studies, adversarial falsifiers, frozen
            protocols, provenance audits, and retained negative results. What matters is that the
            evidence can be inspected and the claim stays within what the experiment establishes.
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
            research across representation learning, whole-slide models, federated learning,
            quantitative measurement, adaptive systems, and scientific infrastructure.
          </BioSection>
          <BioSection>
            <BioYear>2025</BioYear>Built an 18-node home lab with Security Onion and pfSense for
            systems and security research.
          </BioSection>
          <BioSection>
            <BioYear>2026</BioYear>Released the PA-NF public research record and began an active
            technical collaboration with NucleoScope.ai.
          </BioSection>
          <BioSection>
            <BioYear>Fall 2026</BioYear>Computer Programming at Conestoga College in Waterloo,
            Ontario.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Representation geometry, multiple-instance learning, spatial dynamics, federated
            systems, adaptive computation, measurement theory, scientific programming languages,
            experimental design, and reproducibility.
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
