import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text,
  Flex,
  Badge
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const ProjectCard = ({ title, description, impact, status, tech }: any) => (
  <Box
    p="2rem 0"
    borderBottom="1px solid rgba(255,255,255,0.05)"
    position="relative"
    cursor="pointer"
    transition="padding-left 0.25s cubic-bezier(.16,1,.3,1)"
    _hover={{
      paddingLeft: '0.8rem',
      '& .proj-title': { color: '#fff' },
      '& .proj-arrow': { color: '#a0a8be', transform: 'translate(4px,-4px)' },
      '&::before': { opacity: 0.6 }
    }}
    _before={{
      content: '""',
      position: 'absolute',
      left: '-2.5rem',
      top: 0,
      bottom: 0,
      width: '3px',
      background: 'linear-gradient(to bottom, transparent, #c8d6f8, transparent)',
      opacity: 0,
      transition: 'opacity 0.3s'
    }}
  >
    <Flex justify="space-between" align="start" gap="2rem">
      <Box flex={1}>
        <Text
          fontFamily="'JetBrains Mono', monospace"
          fontSize="12px"
          letterSpacing="0.08em"
          textTransform="uppercase"
          color="#a0a8be"
          mb="0.4rem"
          opacity="0.85"
        >
          Security Project
        </Text>
        
        <Heading
          className="proj-title"
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="1.35rem"
          fontWeight="700"
          color="#e8ecf8"
          letterSpacing="-0.025em"
          mb="0.35rem"
          transition="color 0.2s"
        >
          {title}
        </Heading>
        
        {impact && (
          <Flex
            align="center"
            gap="8px"
            flexWrap="wrap"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="12px"
            color="#a0a8be"
            mb="0.6rem"
            letterSpacing="0.01em"
            _before={{
              content: '""',
              display: 'inline-block',
              width: '14px',
              height: '1px',
              background: '#f5c842',
              opacity: 0.6,
              flexShrink: 0
            }}
          >
            <Text color="#f5c842" fontWeight="600">
              {impact}
            </Text>
          </Flex>
        )}
        
        <Text
          fontSize="14px"
          fontWeight="300"
          color="#6e7890"
          lineHeight="1.75"
          maxW="580px"
          mb="0.8rem"
        >
          {description}
        </Text>
        
        {tech && (
          <Flex gap="6px" flexWrap="wrap">
            {tech.map((item: string, index: number) => (
              <Badge
                key={index}
                fontFamily="'JetBrains Mono', monospace"
                fontSize="9px"
                px="6px"
                py="2px"
                bg="rgba(200,214,248,0.06)"
                color="#a0a8be"
                border="1px solid rgba(200,214,248,0.18)"
                borderRadius="3px"
              >
                {item}
              </Badge>
            ))}
          </Flex>
        )}
      </Box>
      
      <Text
        className="proj-arrow"
        fontSize="18px"
        color="rgba(255,255,255,0.15)"
        transition="color 0.2s, transform 0.25s cubic-bezier(.16,1,.3,1)"
        flexShrink={0}
        mt="0.35rem"
      >
        ↗
      </Text>
    </Flex>
  </Box>
)

const Projects = () => (
  <Layout title="Projects">
    <Container maxW="860px">
      <Heading as="h1" fontSize={20} mb={4}>
        Security Projects
      </Heading>
      
      <Section delay={0.1}>
        <Text fontSize="15px" fontWeight="300" color="#6e7890" lineHeight="1.75" mb="2rem" maxW="540px">
          Security tools and infrastructure projects built on an 18-node home lab. 
          Every project tested against <Text as="strong" color="#a0a8be" fontWeight="400">running systems</Text> with real attack scenarios.
        </Text>
        
        <Box borderTop="1px solid rgba(255,255,255,0.05)">
          <ProjectCard
            title="Log Correlation Engine"
            description="Python tool that parses auth.log and web access logs to detect attack patterns. Identifies brute-force attempts followed by successful logins, scanner-to-admin-path reconnaissance, and credential stuffing. Maps all findings to MITRE ATT&CK techniques."
            impact="14,822 log entries processed, 3 high-severity alerts, 0 false positives"
            tech={['Python', 'MITRE ATT&CK', 'Log Analysis', 'Pattern Detection']}
          />
          
          <ProjectCard
            title="Sigma Detection Rules"
            description="Detection rules written after executing each attack in the lab. Process: run the attack, capture logs, write the rule, validate it triggers, document false positive rate. Current coverage includes SSH brute force to root, DCSync attacks, and sudo interpreter abuse."
            impact="15+ detection rules covering T1110.001, T1003.006, T1548.003"
            tech={['Sigma', 'SIEM', 'Detection Engineering', 'Threat Hunting']}
          />
          
          <ProjectCard
            title="DevSecOps Pipeline"
            description="GitHub Actions workflow that runs on every commit: ESLint → Bandit SAST → Trivy container scan → Terraform validate → deploy. Pipeline fails on any vulnerability with CVSS ≥ 7."
            impact="6 critical CVEs caught before production"
            tech={['GitHub Actions', 'Bandit', 'Trivy', 'Terraform', 'SAST']}
          />
          
          <ProjectCard
            title="AWS Infrastructure"
            description="Terraform code that deploys a hardened VPC across multiple availability zones. Includes NAT gateway, bastion host with key-only SSH, least-privilege security groups, VPC Flow Logs to CloudWatch, and encrypted S3 buckets for log storage."
            impact="Deployed in ca-central-1 with zero security findings"
            tech={['Terraform', 'AWS', 'VPC', 'Security Groups', 'CloudWatch']}
          />
          
          <ProjectCard
            title="Monitoring Stack"
            description="Docker Compose configuration with Prometheus (metrics), Grafana (dashboards), Loki (logs), AlertManager (notifications), and Node Exporter (system metrics). Includes pre-configured alerting rules for CPU, memory, and disk usage."
            impact="24/7 monitoring across 18 lab nodes"
            tech={['Prometheus', 'Grafana', 'Loki', 'Docker', 'AlertManager']}
          />
          
          <ProjectCard
            title="Linux Hardening"
            description="Bash script that implements CIS Benchmark Level 1 controls for Ubuntu 22.04. Hardens SSH, disables unused services, configures firewall rules, sets file permissions, and enforces password policies. Includes --dry-run flag and backs up all configs before making changes."
            impact="CIS Level 1 compliance achieved on all lab systems"
            tech={['Bash', 'CIS Benchmarks', 'Ubuntu', 'SSH Hardening', 'UFW']}
          />
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Projects