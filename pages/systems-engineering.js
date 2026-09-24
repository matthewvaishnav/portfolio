import { Badge, Box, Container, Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="computational-pathology"
            href="/computational-pathology"
            thumbnail="/portfolio/images/works/histocore-logo-rect.svg" 
            title="Computational Pathology Research"
          >
            Representation learning, whole-slide models, federated pathology, measurement, scanner provenance, and research infrastructure
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="sentinel"
            href="/sentinel"
            title="SENTINEL"
            thumbnail="/portfolio/images/works/sentinel-logo-rect.svg"
          >
            Hardened anti-DDoS architecture with verified benchmarks
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="drift"
            href="/drift"
            thumbnail="/portfolio/images/works/drift-detail.svg"
            title="drift"
          >
            Git-like server state tracker
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem id="out-of-orbit" href="/out-of-orbit" thumbnail="/portfolio/images/works/out-of-orbit-logo.svg" title="Out of Orbit">
            Vaporwave arcade shooter with object pooling
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="replay" href="/replay" thumbnail="/portfolio/images/works/replay-logo.svg" title="replay">
            Record sessions → Ansible playbooks
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="whoops" href="/whoops" thumbnail="/portfolio/images/works/whoops-logo.svg" title="whoops">
            Intercepts dangerous shell commands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Box mt={12}>
        <Heading as="h3" fontSize={20} mb={4}>
          Open-source contributions
        </Heading>
        <Stack spacing={4}>
          <Box>
            <Badge colorScheme="green" mr={2}>Merged</Badge>
            <Link href="https://github.com/awesome-foss/awesome-sysadmin/pull/720" target="_blank" rel="noopener noreferrer" fontWeight="semibold">
              awesome-sysadmin — VictoriaMetrics <ExternalLinkIcon mx="2px" />
            </Link>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Added VictoriaMetrics to the Metrics &amp; Metric Collection catalog; merged upstream.
            </Text>
          </Box>
          <Box>
            <Badge colorScheme="blue" mr={2}>Open PR</Badge>
            <Link href="https://github.com/LoveRetro/NextUI/pull/674" target="_blank" rel="noopener noreferrer" fontWeight="semibold">
              NextUI — Clear Recently Played tool <ExternalLinkIcon mx="2px" />
            </Link>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Cross-platform tool for tg5040, tg5050, and desktop with safe file handling and device-specific confirmation behavior.
            </Text>
          </Box>
          <Box>
            <Badge colorScheme="blue" mr={2}>Open PR</Badge>
            <Link href="https://github.com/awesome-selfhosted/awesome-selfhosted-data/pull/2312" target="_blank" rel="noopener noreferrer" fontWeight="semibold">
              awesome-selfhosted — Olares metadata <ExternalLinkIcon mx="2px" />
            </Link>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Submitted a structured catalog entry for the Olares self-hosting platform.
            </Text>
          </Box>
          <Box>
            <Badge colorScheme="purple" mr={2}>Fork contribution</Badge>
            <Link href="https://github.com/matthewvaishnav/distribution/commit/130fe7be28" target="_blank" rel="noopener noreferrer" fontWeight="semibold">
              Knulli/Batocera config sentinel <ExternalLinkIcon mx="2px" />
            </Link>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Added last-known-good validation and automatic recovery for batocera.conf, wired into the build and EmulationStation startup path. Authored in the fork; not represented as upstream-merged work.
            </Text>
          </Box>
          <Box>
            <Badge colorScheme="gray" mr={2}>Closed / unmerged</Badge>
            <Link href="https://github.com/MustardOS/internal/pull/699" target="_blank" rel="noopener noreferrer" fontWeight="semibold">
              MustardOS — critical-battery power mode <ExternalLinkIcon mx="2px" />
            </Link>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Proposed emergency CPU-governor and brightness reduction with restoration on charge; retained here as an authored but unmerged contribution.
            </Text>
          </Box>
        </Stack>
      </Box>
    </Container>
  </Layout>
)

export default Works