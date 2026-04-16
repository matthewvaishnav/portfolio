import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
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
            title="SENTINEL"
            thumbnail="/portfolio/images/works/sentinel-hero.svg"
          >
            Hardened anti-DDoS architecture with verified benchmarks
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="drift"
            thumbnail="/portfolio/images/works/drift-hero.svg"
            title="drift"
          >
            Git-like server state tracker
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="safebot" thumbnail="/portfolio/images/works/ctf-thumb.svg" title="SafeBot v2">
            Local AI web agent, no API keys
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem id="out-of-orbit" thumbnail="/portfolio/images/works/sigma-thumb.svg" title="Out of Orbit">
            Vaporwave arcade shooter with object pooling
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="replay" thumbnail="/portfolio/images/works/soc-thumb.svg" title="replay">
            Record sessions → Ansible playbooks
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="whoops" thumbnail="/portfolio/images/works/ctf-thumb.svg" title="whoops">
            Intercepts dangerous shell commands
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
