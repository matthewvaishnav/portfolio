import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Paragraph from '../components/paragraph'

const ProgrammingWorks = () => (
  <Layout title="Programming Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Programming Projects
      </Heading>

      <Paragraph>
        Software projects focused on automation, tooling, and development.
      </Paragraph>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="computational-pathology" 
            href="https://matthewvaishnav.github.io/computational-pathology-research/"
            thumbnail="/portfolio/images/works/soc-thumb.svg" 
            title="Computational Pathology Research"
          >
            ML framework for histopathology image analysis
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="sentinel"
            href="/programming-works/sentinel"
            thumbnail="/portfolio/images/works/sentinel-hero.svg"
            title="SENTINEL"
          >
            Hardened anti-DDoS architecture with verified benchmarks
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="safebot" thumbnail="/portfolio/images/works/ctf-thumb.svg" title="SafeBot v2">
            Local AI web agent, no API keys
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="out-of-orbit" thumbnail="/portfolio/images/works/sigma-thumb.svg" title="Out of Orbit">
            Vaporwave arcade shooter with object pooling
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="drift"
            href="/programming-works/drift"
            thumbnail="/portfolio/images/works/drift-hero.svg"
            title="drift 🔍"
          >
            Git-like server state tracker
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="replay" thumbnail="/portfolio/images/works/soc-thumb.svg" title="replay 🎬">
            Record sessions → Ansible playbooks
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="whoops" thumbnail="/portfolio/images/works/ctf-thumb.svg" title="whoops">
            Intercepts dangerous shell commands
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default ProgrammingWorks
