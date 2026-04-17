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
            href="/computational-pathology"
            thumbnail="/portfolio/images/works/pathml-logo-rect.svg" 
            title="TissueLab"
          >
            ML framework for histopathology image analysis
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
            thumbnail="/portfolio/images/works/drift-logo-rect.svg"
            title="drift"
          >
            Git-like server state tracker
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem id="out-of-orbit" href="/out-of-orbit" thumbnail="/portfolio/images/works/out-of-orbit-logo-rect.svg" title="Out of Orbit">
            Vaporwave arcade shooter with object pooling
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="replay" href="/replay" thumbnail="/portfolio/images/works/replay-logo-rect.svg" title="replay">
            Record sessions → Ansible playbooks
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="whoops" href="/whoops" thumbnail="/portfolio/images/works/whoops-logo-rect.svg" title="whoops">
            Intercepts dangerous shell commands
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
