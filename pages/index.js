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
            I tend to get suspicious when a computational pathology model performs exceptionally well.
            Particularly when nobody seems interested in finding out what it actually learned.
          </Paragraph>
          <Paragraph>
            For PA-NF, I worked with 480 matched tissue regions from 48 H&E slides, each scanned on
            five different machines. Same tissue, five scanners, yet scanner identity was still
            recoverable from the embeddings. I built a model to investigate whether tissue-related
            information could be separated from acquisition effects. It reduced scanner recoverability
            by 31.1 percentage points against a capacity-matched neural control while preserving
            same-region retrieval. Then I tested it on an independent five-scanner dataset, where much
            simpler linear methods turned out to be remarkably competitive. Slightly inconvenient, but
            worth knowing.
          </Paragraph>
          <Paragraph>
            With NucleoScope, working alongside Gengyun Li, I investigated why the same nucleus could
            receive different measurements depending on which overlapping computational tile contained
            it. The effect had an approximately 512-pixel structure, and a measurement-response model
            explained roughly 92% of the observed discrepancies. Same nucleus. Different computational
            surroundings. Apparently that matters.
          </Paragraph>
          <Paragraph>
            My other projects investigate equally suspicious behaviour. TransnnMIL and WSI-NCA ask
            whether spatial models actually depend on the spatial relationships they're supposed to
            use. PathologyFL examines institutional imbalance, hidden site information and misleading
            validation. And PATH is a scientific compiler I'm building to make it harder for an
            experiment to claim something its evidence doesn't support.
          </Paragraph>
          <Paragraph>
            I use paired acquisitions, controlled perturbations, fixed identities, strong baselines
            and frozen protocols. I also keep the experiments that fail. Several of my own ideas have
            failed their registered tests, which is unfortunate for the ideas but quite useful for the
            research.
          </Paragraph>
          <Paragraph>
            At this point, I'm essentially running internal affairs for neural networks.
          </Paragraph>
          <Paragraph>
            They all have excellent performance reviews. Some have very questionable alibis.
          </Paragraph>
          <Paragraph>
            I don't accuse models of cheating. I just remove their shortcuts and see what happens.
          </Paragraph>
          <Paragraph>
            Usually, the scanner knows something.
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
            <SimpleGrid templateColumns="repeat(auto-fit, minmax(min(100%, 200px), 1fr))" gap={{ base: 6, md: 7 }}>
              <Stat minW={0}>
                <StatLabel color={subtleText}>PA-NF</StatLabel>
                <StatNumber>-0.3108</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Scanner balanced-accuracy change vs equal-capacity control; retrieval preserved.
                </StatHelpText>
              </Stat>
              <Stat minW={0}>
                <StatLabel color={subtleText}>PCam</StatLabel>
                <StatNumber>0.9394 AUC</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  32,768 official test patches. Historical cross-paper protocols differ.
                </StatHelpText>
              </Stat>
              <Stat minW={0}>
                <StatLabel color={subtleText}>Whole-slide MIL</StatLabel>
                <StatNumber>Matched rerun</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Controlled comparison of five whole-slide models.
                </StatHelpText>
              </Stat>
              <Stat minW={0}>
                <StatLabel color={subtleText}>Site-signal alignment</StatLabel>
                <StatNumber>+0.01053</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Global QWK gain at 45% ordinal shift; fixed detector.
                </StatHelpText>
              </Stat>
              <Stat minW={0}>
                <StatLabel color={subtleText}>SERA</StatLabel>
                <StatNumber>Validation</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Structural learning tested against strong conventional controls.
                </StatHelpText>
              </Stat>
              <Stat minW={0}>
                <StatLabel color={subtleText}>NucleoScope</StatLabel>
                <StatNumber>Active</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Collaboration on measurement stability and tissue organization.
                </StatHelpText>
              </Stat>
              <Stat minW={0}>
                <StatLabel color={subtleText}>Scientific compiler</StatLabel>
                <StatNumber>15/15 · 35/35</StatNumber>
                <StatHelpText color={mutedText} mb={0}>
                  Pipeline benchmarks · unit and adversarial tests.
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
