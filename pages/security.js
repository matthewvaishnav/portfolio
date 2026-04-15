import {
  Container,
  Box,
  Heading,
  Text,
  Flex,
  Badge,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { useState, useEffect } from 'react'

const Terminal = ({ lines, autoPlay = true, height = '380px' }) => {
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (!autoPlay || currentIndex >= lines.length) return

    const timer = setTimeout(() => {
      const line = lines[currentIndex]
      setIsTyping(true)
      
      setTimeout(() => {
        setDisplayedLines(prev => [...prev, line])
        setCurrentIndex(prev => prev + 1)
        setIsTyping(false)
      }, line.delay || 800)
    }, 1000)

    return () => clearTimeout(timer)
  }, [currentIndex, lines, autoPlay])

  const getLineColor = (type) => {
    switch (type) {
      case 'prompt': return '#c8d6f8'
      case 'command': return '#e8ecf8'
      case 'output': return '#4a5568'
      case 'success': return '#52c97a'
      case 'error': return '#e05252'
      default: return '#a0a8be'
    }
  }

  return (
    <Box
      border="1px solid"
      borderColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
      borderRadius="12px"
      overflow="hidden"
      bg={useColorModeValue('gray.900', '#040609')}
      boxShadow="0 48px 120px rgba(0,0,0,0.7)"
      position="relative"
    >
      <Flex
        align="center"
        gap="7px"
        p="10px 14px"
        bg={useColorModeValue('gray.800', '#111320')}
        borderBottom="1px solid"
        borderBottomColor={useColorModeValue('gray.700', 'whiteAlpha.100')}
      >
        <Box w="11px" h="11px" borderRadius="50%" bg="#ff5f57" />
        <Box w="11px" h="11px" borderRadius="50%" bg="#febc2e" />
        <Box w="11px" h="11px" borderRadius="50%" bg="#28c840" />
        <Box
          ml="auto"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="11px"
          color="#6e7890"
          letterSpacing="0.04em"
        >
          matthew@security-lab
        </Box>
      </Flex>

      <Box
        p="1.25rem 1.5rem"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="12px"
        lineHeight="1.9"
        height={height}
        overflowY="scroll"
        css={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {displayedLines.map((line, index) => (
          <Flex key={index} gap={0} whiteSpace="pre-wrap" wordBreak="break-all">
            {line.type === 'prompt' && (
              <Box color={getLineColor('prompt')} flexShrink={0}>
                matthew@security-lab:~$ 
              </Box>
            )}
            <Box color={getLineColor(line.type)} ml={line.type === 'prompt' ? 0 : 0}>
              {line.content}
            </Box>
          </Flex>
        ))}
        
        {isTyping && (
          <Flex gap={0}>
            <Box color="#c8d6f8" flexShrink={0}>
              matthew@security-lab:~$ 
            </Box>
            <Box
              display="inline-block"
              w="7px"
              h="13px"
              bg="#c8d6f8"
              opacity="0.85"
              ml="1px"
              verticalAlign="middle"
              animation="blink 0.55s step-end infinite"
            />
          </Flex>
        )}
      </Box>
    </Box>
  )
}

const ProjectCard = ({ title, description, impact, tech }) => {
  const cardBg = useColorModeValue('white', '#020408')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  const badgeBg = useColorModeValue('blue.50', 'rgba(200,214,248,0.06)')
  const badgeColor = useColorModeValue('blue.600', '#c8d6f8')
  const badgeBorderColor = useColorModeValue('blue.200', 'rgba(200,214,248,0.18)')
  
  return (
    <Box
      border="1px solid"
      borderColor={borderColor}
      borderRadius="14px"
      overflow="hidden"
      bg={cardBg}
      boxShadow={useColorModeValue('lg', '0 32px 80px rgba(0,0,0,0.6)')}
      position="relative"
      mb="2rem"
    >
      <Flex
        align="flex-start"
        justify="space-between"
        gap="2rem"
        p="1.25rem 1.75rem"
        borderBottom="1px solid"
        borderBottomColor={borderColor}
        bg={useColorModeValue('gray.50', 'rgba(255,255,255,0.02)')}
      >
        <Box flex={1}>
          <Text
            fontFamily="'JetBrains Mono', monospace"
            fontSize="10px"
            letterSpacing="0.14em"
            textTransform="uppercase"
            color={useColorModeValue('gray.500', '#a0a8be')}
            opacity="0.7"
            mb="0.4rem"
          >
            Security Project
          </Text>
          
          <Heading
            fontFamily="'Space Grotesk', sans-serif"
            fontSize="1.3rem"
            fontWeight="700"
            color={useColorModeValue('gray.800', '#e8ecf8')}
            letterSpacing="-0.02em"
            mb="0.5rem"
          >
            {title}
          </Heading>
          
          <Text
            fontSize="13px"
            fontWeight="300"
            color={useColorModeValue('gray.600', '#6e7890')}
            lineHeight="1.7"
            maxW="520px"
          >
            {description}
          </Text>
        </Box>
        
        <Flex flexDirection="column" alignItems="flex-end" gap="6px" flexShrink={0}>
          {impact && (
            <Badge
              fontFamily="'JetBrains Mono', monospace"
              fontSize="10px"
              letterSpacing="0.07em"
              px="12px"
              py="4px"
              borderRadius="4px"
              whiteSpace="nowrap"
              bg="rgba(245,200,66,0.1)"
              color="#f5c842"
              border="1px solid rgba(245,200,66,0.2)"
            >
              {impact}
            </Badge>
          )}
        </Flex>
      </Flex>
      
      <Box p="1rem 1.75rem" borderBottom="1px solid" borderBottomColor={borderColor} bg={useColorModeValue('gray.25', 'rgba(0,0,0,0.2)')}>
        <Flex align="center" gap="1rem" flexWrap="wrap">
          <Text
            fontFamily="'JetBrains Mono', monospace"
            fontSize="11px"
            color={useColorModeValue('gray.500', '#a0a8be')}
            letterSpacing="0.08em"
            textTransform="uppercase"
          >
            TECH STACK:
          </Text>
          {tech && tech.map((technique, index) => (
            <Badge
              key={index}
              fontFamily="'JetBrains Mono', monospace"
              fontSize="9px"
              px="6px"
              py="2px"
              bg={badgeBg}
              color={badgeColor}
              border="1px solid"
              borderColor={badgeBorderColor}
              borderRadius="3px"
            >
              {technique}
            </Badge>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

const terminalLines = [
  { type: 'prompt', content: 'whoami', delay: 1000 },
  { type: 'output', content: 'matthew', delay: 500 },
  { type: 'prompt', content: 'cat /etc/passwd | grep matthew', delay: 1200 },
  { type: 'output', content: 'matthew:x:1000:1000:Security Engineer:/home/matthew:/bin/bash', delay: 800 },
  { type: 'prompt', content: 'ls -la ~/projects/', delay: 1000 },
  { type: 'output', content: 'drwxr-xr-x 2 matthew matthew 4096 Apr 15 17:20 log-correlation-engine', delay: 600 },
  { type: 'output', content: 'drwxr-xr-x 2 matthew matthew 4096 Apr 15 17:20 sigma-detection-rules', delay: 400 },
  { type: 'output', content: 'drwxr-xr-x 2 matthew matthew 4096 Apr 15 17:20 devsecops-pipeline', delay: 400 },
  { type: 'output', content: 'drwxr-xr-x 2 matthew matthew 4096 Apr 15 17:20 aws-infrastructure', delay: 400 },
  { type: 'prompt', content: 'sudo systemctl status security-onion', delay: 1200 },
  { type: 'success', content: '● security-onion.service - Security Onion', delay: 600 },
  { type: 'success', content: '   Loaded: loaded (/lib/systemd/system/security-onion.service; enabled)', delay: 400 },
  { type: 'success', content: '   Active: active (running) since Mon 2026-04-15 17:20:01 EDT; 2h 15min ago', delay: 400 }
]

const Security = () => (
  <Layout title="Security Projects">
    <Box maxW="100vw" p={0}>
      {/* Hero Section */}
      <Box
        minH="calc(100vh - 58px)"
        display="flex"
        alignItems="center"
        p="4rem 2.5rem"
        position="relative"
        overflow="hidden"
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0} w="100%" maxW="100%" mx="auto">
          {/* Left Side - Content */}
          <Box pr={{ base: 0, lg: '5rem' }} display="flex" flexDirection="column" justifyContent="center">
            {/* Availability Indicator */}
            <Flex align="center" gap="9px" mb="1.75rem">
              <Box
                w="7px"
                h="7px"
                borderRadius="50%"
                bg="#52c97a"
                boxShadow="0 0 10px #52c97a, 0 0 20px rgba(82,201,122,0.3)"
              />
              <Text
                fontFamily="'JetBrains Mono', monospace"
                fontSize="13px"
                letterSpacing="0.08em"
                textTransform="uppercase"
                color={useColorModeValue('green.600', '#52c97a')}
                opacity="0.9"
              >
                Lab Status: Active
              </Text>
            </Flex>

            {/* Title */}
            <Box>
              <Text
                display="block"
                fontWeight="400"
                fontSize="0.38em"
                color={useColorModeValue('gray.500', '#a0a8be')}
                letterSpacing="0.15em"
                textTransform="uppercase"
                mb="0.5em"
                opacity="0.7"
                fontFamily="'Space Grotesk', sans-serif"
              >
                Security Projects
              </Text>
              <Heading
                as="h1"
                fontFamily="'Space Grotesk', sans-serif"
                fontSize="clamp(3rem, 5.5vw, 5.2rem)"
                fontWeight="700"
                lineHeight="1.04"
                letterSpacing="-0.03em"
                color={useColorModeValue('gray.800', '#e8ecf8')}
              >
                Defensive{' '}
                <Text as="em" fontStyle="italic" fontWeight="300" 
                  bgGradient={useColorModeValue('linear(135deg, red.500 0%, red.300 100%)', 'linear(135deg, #c8d6f8 0%, rgba(200,214,248,0.5) 100%)')}
                  bgClip="text"
                  display="inline"
                >
                  Security
                </Text>
              </Heading>
            </Box>

            {/* Description */}
            <Box
              mt="1.75rem"
              fontSize="1.05rem"
              fontWeight="300"
              color={useColorModeValue('gray.600', '#6e7890')}
              lineHeight="1.85"
              maxW="400px"
            >
              <Text>
                Building <Text as="strong" color={useColorModeValue('red.600', '#c8d6f8')} fontWeight="500">security tools</Text> and 
                infrastructure on an 18-node home lab. Every project tested against running systems with real attack scenarios.
              </Text>
            </Box>

            {/* Stats */}
            <Flex
              align="stretch"
              gap={0}
              mt="2.5rem"
              border="1px solid"
              borderColor={useColorModeValue('gray.200', 'rgba(200,214,248,0.1)')}
              borderRadius="8px"
              overflow="hidden"
              maxW="420px"
              bg={useColorModeValue('gray.50', 'rgba(200,214,248,0.02)')}
              position="relative"
            >
              <Box flex={1} p="0.85rem 0.75rem" textAlign="center" _hover={{ bg: useColorModeValue('gray.100', 'rgba(200,214,248,0.04)') }}>
                <Text
                  display="block"
                  fontFamily="'Space Grotesk', sans-serif"
                  fontSize="1.45rem"
                  fontWeight="700"
                  color={useColorModeValue('red.600', '#e8ecf8')}
                  letterSpacing="-0.03em"
                  lineHeight="1"
                  mb="0.3rem"
                >
                  18
                </Text>
                <Text
                  display="block"
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize="10px"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  color={useColorModeValue('gray.500', '#a0a8be')}
                  lineHeight="1.4"
                >
                  Lab Nodes
                </Text>
              </Box>
              <Box w="1px" bg={useColorModeValue('gray.200', 'rgba(255,255,255,0.06)')} />
              <Box flex={1} p="0.85rem 0.75rem" textAlign="center" _hover={{ bg: useColorModeValue('gray.100', 'rgba(200,214,248,0.04)') }}>
                <Text
                  display="block"
                  fontFamily="'Space Grotesk', sans-serif"
                  fontSize="1.45rem"
                  fontWeight="700"
                  color={useColorModeValue('red.600', '#e8ecf8')}
                  letterSpacing="-0.03em"
                  lineHeight="1"
                  mb="0.3rem"
                >
                  6
                </Text>
                <Text
                  display="block"
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize="10px"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  color={useColorModeValue('gray.500', '#a0a8be')}
                  lineHeight="1.4"
                >
                  VLANs
                </Text>
              </Box>
              <Box w="1px" bg={useColorModeValue('gray.200', 'rgba(255,255,255,0.06)')} />
              <Box flex={1} p="0.85rem 0.75rem" textAlign="center" _hover={{ bg: useColorModeValue('gray.100', 'rgba(200,214,248,0.04)') }}>
                <Text
                  display="block"
                  fontFamily="'Space Grotesk', sans-serif"
                  fontSize="1.45rem"
                  fontWeight="700"
                  color={useColorModeValue('red.600', '#e8ecf8')}
                  letterSpacing="-0.03em"
                  lineHeight="1"
                  mb="0.3rem"
                >
                  24/7
                </Text>
                <Text
                  display="block"
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize="10px"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  color={useColorModeValue('gray.500', '#a0a8be')}
                  lineHeight="1.4"
                >
                  Monitoring
                </Text>
              </Box>
            </Flex>
          </Box>

          {/* Right Side - Terminal */}
          <Box pl={{ base: 0, lg: '5rem' }} pt={{ base: '3rem', lg: '3rem' }} pb="3rem">
            <Terminal lines={terminalLines} />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>

    {/* Projects Section */}
    <Box bg={useColorModeValue('gray.50', '#0c0d16')} borderTop="1px solid" borderTopColor={useColorModeValue('gray.200', 'rgba(255,255,255,0.065)')} position="relative">
      <Container maxW="100%" py="4.5rem" px="2.5rem">
        <Section delay={0.1}>
          <Heading as="h2" variant="section-title" color={useColorModeValue('gray.800', '#e8ecf8')} fontFamily="'Space Grotesk', sans-serif" fontSize="2.2rem" fontWeight="700" letterSpacing="-0.03em" mb="1.25rem" lineHeight="1.08">
            Security Projects
          </Heading>
          
          <Text fontSize="15px" fontWeight="300" color={useColorModeValue('gray.600', '#6e7890')} lineHeight="1.75" mb="2rem" maxW="540px">
            Security tools and infrastructure projects built on an 18-node home lab. 
            Every project tested against <Text as="strong" color={useColorModeValue('gray.700', '#a0a8be')} fontWeight="400">running systems</Text> with real attack scenarios.
          </Text>
          
          <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} spacing={6} maxW="100%">
            <ProjectCard
              title="Log Correlation Engine"
              description="Python tool that parses auth.log and web access logs to detect attack patterns. Identifies brute-force attempts followed by successful logins, scanner-to-admin-path reconnaissance, and credential stuffing. Maps all findings to MITRE ATT&CK techniques."
              impact="14,822 log entries processed"
              tech={['Python', 'MITRE ATT&CK', 'Log Analysis', 'Pattern Detection']}
            />
            
            <ProjectCard
              title="Sigma Detection Rules"
              description="Detection rules written after executing each attack in the lab. Process: run the attack, capture logs, write the rule, validate it triggers, document false positive rate. Current coverage includes SSH brute force to root, DCSync attacks, and sudo interpreter abuse."
              impact="15+ detection rules"
              tech={['Sigma', 'SIEM', 'Detection Engineering', 'Threat Hunting']}
            />
            
            <ProjectCard
              title="DevSecOps Pipeline"
              description="GitHub Actions workflow that runs on every commit: ESLint → Bandit SAST → Trivy container scan → Terraform validate → deploy. Pipeline fails on any vulnerability with CVSS ≥ 7."
              impact="6 critical CVEs caught"
              tech={['GitHub Actions', 'Bandit', 'Trivy', 'Terraform', 'SAST']}
            />
            
            <ProjectCard
              title="AWS Infrastructure"
              description="Terraform code that deploys a hardened VPC across multiple availability zones. Includes NAT gateway, bastion host with key-only SSH, least-privilege security groups, VPC Flow Logs to CloudWatch, and encrypted S3 buckets for log storage."
              impact="Zero security findings"
              tech={['Terraform', 'AWS', 'VPC', 'Security Groups', 'CloudWatch']}
            />
            
            <ProjectCard
              title="Monitoring Stack"
              description="Docker Compose configuration with Prometheus (metrics), Grafana (dashboards), Loki (logs), AlertManager (notifications), and Node Exporter (system metrics). Includes pre-configured alerting rules for CPU, memory, and disk usage."
              impact="24/7 monitoring"
              tech={['Prometheus', 'Grafana', 'Loki', 'Docker', 'AlertManager']}
            />
            
            <ProjectCard
              title="Linux Hardening"
              description="Bash script that implements CIS Benchmark Level 1 controls for Ubuntu 22.04. Hardens SSH, disables unused services, configures firewall rules, sets file permissions, and enforces password policies. Includes --dry-run flag and backs up all configs before making changes."
              impact="CIS Level 1 compliance"
              tech={['Bash', 'CIS Benchmarks', 'Ubuntu', 'SSH Hardening', 'UFW']}
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Box>
  </Layout>
)

export default Security