import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Paragraph from '../components/paragraph'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Security Projects
      </Heading>

      <Paragraph>
        Security and infrastructure projects from the home lab.
      </Paragraph>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="soc-log-correlation" title="SOC Log Correlation Engine" thumbnail="/portfolio/images/works/soc-thumb.svg">
            14,822 logs parsed, 3 alerts flagged
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="security-scripting"
            title="Security Scripting Suite"
            thumbnail="/portfolio/images/works/sigma-thumb.svg"
          >
            CIS hardening, AD audit scripts
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="devsecops-pipeline"
            title="DevSecOps Pipeline"
            thumbnail="/portfolio/images/works/ctf-thumb.svg"
          >
            Automated security scanning, caught 6 CVEs
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="monitoring-stack" thumbnail="/portfolio/images/works/lab-thumb.svg" title="SOC Monitoring Stack">
            Prometheus/Grafana monitoring for 7 services
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="lab-iac" thumbnail="/portfolio/images/works/lab-thumb.svg" title="Lab Infrastructure as Code">
            Version-controlled lab infrastructure
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Box mt={10}>
        <Heading as="h3" fontSize={20} mb={4}>
          In Progress
        </Heading>
      </Box>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="aws-security" thumbnail="/portfolio/images/works/ctf-thumb.svg" title="AWS Cloud Security">
            CloudTrail/GuardDuty monitoring
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="threat-intel" thumbnail="/portfolio/images/works/sigma-thumb.svg" title="Threat Intel Enrichment">
            MITRE ATT&CK integration with Elastic
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="firewall-audit" thumbnail="/portfolio/images/works/lab-thumb.svg" title="Firewall Drift Detection">
            Automated pfSense configuration auditing
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="azure-sentinel" thumbnail="/portfolio/images/works/soc-thumb.svg" title="Azure Sentinel Lab">
            Cloud SIEM with KQL queries
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
