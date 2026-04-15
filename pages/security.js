import { Container, Heading, SimpleGrid, Box, Text, Flex, Badge } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const ProjectCard = ({ title, description, impact, tech }) => (
  <Box
    p="2rem 0"
    borderBottom="1px solid rgba(255,255,255,0.05)"
    position="relative"
    cursor="pointer"
    transition="padding-left 0.25s cubic-bezier(.16,1,.3,1)"
    _hover={{
      paddingLeft: '0.8rem',
      '& .proj-title': { color: 'red.300' },
      '& .proj-arrow': { color: 'gray.400', transform: 'translate(4px,-4px)' },
      '&::before': { opacity: 0.6 }
    }}
    _before={{
      content: '""',
      position: 'absolute',
      left: '-2.5rem',
      top: 0,
      bottom: 0,
      width: '3px',
      background: 'linear-gradient(to bottom, transparent, red.400, transparent)',
      opacity: 0,
      transition: 'opacity 0.3s'
    }}
  >
    <Flex justify="space-between" align="start" gap="2rem">
      <Box flex={1}>
        <Text
          fontSize="12px"
          letterSpacing="0.08em"
          textTransform="uppercase"
          color="gray.400"
          mb="0.4rem"
          opacity="0.85"
        >
          Security Project
        </Text>
        
        <Heading
          className="proj-title"
          fontSize="1.35rem"
          fontWeight="700"
          color="gray.100"
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
            fontSize="12px"
            color="gray.400"
            mb="0.6rem"
            letterSpacing="0.01em"
            _before={{
              content: '""',
              display: 'inline-block',
              width: '14px',
              height: '1px',
              background: 'yellow.400',
              opacity: 0.6,
              flexShrink: 0
            }}
          >
            <Text color="yellow.400" fontWeight="600">
              {impact}
            </Text>
          </Flex>
        )}
        
        <Text
          fontSize="14px"
          fontWeight="300"
          color="gray.500"
          lineHeight="1.75"
          maxW="580px"
          mb="0.8rem"
        >
          {description}
        </Text>
        
        {tech && (
          <Flex gap="6px" flexWrap="wrap">
            {tech.map((item, index) => (
              <Badge
                key={index}
                fontSize="9px"
                px="6px"
                py="2px"
                bg="rgba(255,255,255,0.06)"
                color="gray.400"
                border="1px solid rgba(255,255,255,0.18)"
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

const Security = () => (
  <Layout title="Security Projects">
    <Container>
      <Heading as="h1" fontSize={20} mb={4}>
        Security Projects
      </Heading>
      
      <Section delay={0.1}>
        <Text fontSize="15px" fontWeight="300" color="gray.500" lineHeight="1.75" mb="2rem" maxW="540px">
          Security tools and infrastructure projects built on an 18-node home lab. 
          Every project tested against <Text as="strong" color="gray.400" fontWeight="400">running systems</Text> with real attack scenarios.
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

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          CTF Writeups
        </Heading>
        <Text fontSize="15px" fontWeight="300" color="gray.500" lineHeight="1.75" mb="1rem">
          Each writeup documents the full attack chain with detection strategies.
        </Text>
        
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkGridItem 
            id="blue-eternalblue" 
            title="Blue — EternalBlue" 
            thumbnail="/portfolio/images/works/ctf-thumb.svg"
          >
            TryHackMe - MS17-010 exploitation with Mimikatz credential dumping
          </WorkGridItem>
          <WorkGridItem 
            id="linux-privesc" 
            title="Linux PrivEsc Arena" 
            thumbnail="/portfolio/images/works/ctf-thumb.svg"
          >
            TryHackMe - SUID binaries, sudo misconfigurations, kernel exploits
          </WorkGridItem>
          <WorkGridItem 
            id="attacktive-directory" 
            title="Attacktive Directory" 
            thumbnail="/portfolio/images/works/ctf-thumb.svg"
          >
            TryHackMe - Kerberoasting, DCSync, Golden Ticket attacks
          </WorkGridItem>
          <WorkGridItem 
            id="owasp-top10" 
            title="OWASP Top 10" 
            thumbnail="/portfolio/images/works/ctf-thumb.svg"
          >
            TryHackMe - SQL injection, XSS, command injection
          </WorkGridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Security