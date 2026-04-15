import {
  Container,
  Heading,
  Box,
  Text,
  Flex,
  Badge,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const CTFCard = ({ title, platform, difficulty, techniques, description }: any) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff.toLowerCase()) {
      case 'easy': return { bg: 'rgba(82,201,122,0.1)', color: '#52c97a', border: '1px solid rgba(82,201,122,0.2)' }
      case 'medium': return { bg: 'rgba(245,200,66,0.1)', color: '#f5c842', border: '1px solid rgba(245,200,66,0.2)' }
      case 'hard': return { bg: 'rgba(224,82,82,0.1)', color: '#e05252', border: '1px solid rgba(224,82,82,0.2)' }
      default: return { bg: 'rgba(200,214,248,0.1)', color: '#c8d6f8', border: '1px solid rgba(200,214,248,0.2)' }
    }
  }

  const diffColors = getDifficultyColor(difficulty)

  return (
    <Box
      border="1px solid rgba(200,214,248,0.09)"
      borderRadius="14px"
      overflow="hidden"
      bg="#020408"
      boxShadow="0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)"
      position="relative"
      mb="2rem"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(200,214,248,0.15), transparent)'
      }}
    >
      <Flex
        align="flex-start"
        justify="space-between"
        gap="2rem"
        p="1.25rem 1.75rem"
        borderBottom="1px solid rgba(255,255,255,0.05)"
        bg="rgba(255,255,255,0.02)"
      >
        <Box flex={1}>
          <Text
            fontFamily="'JetBrains Mono', monospace"
            fontSize="10px"
            letterSpacing="0.14em"
            textTransform="uppercase"
            color="#a0a8be"
            opacity="0.7"
            mb="0.4rem"
          >
            {platform}
          </Text>
          
          <Heading
            fontFamily="'Space Grotesk', sans-serif"
            fontSize="1.3rem"
            fontWeight="700"
            color="#e8ecf8"
            letterSpacing="-0.02em"
            mb="0.5rem"
          >
            {title}
          </Heading>
          
          <Text
            fontSize="13px"
            fontWeight="300"
            color="#6e7890"
            lineHeight="1.7"
            maxW="520px"
          >
            {description}
          </Text>
        </Box>
        
        <Flex flexDirection="column" alignItems="flex-end" gap="6px" flexShrink={0}>
          <Badge
            fontFamily="'JetBrains Mono', monospace"
            fontSize="10px"
            letterSpacing="0.07em"
            px="12px"
            py="4px"
            borderRadius="4px"
            whiteSpace="nowrap"
            {...diffColors}
          >
            {difficulty.toUpperCase()}
          </Badge>
        </Flex>
      </Flex>
      
      <Box p="1rem 1.75rem" borderBottom="1px solid rgba(255,255,255,0.04)" bg="rgba(0,0,0,0.2)">
        <Flex align="center" gap="1rem" flexWrap="wrap">
          <Text
            fontFamily="'JetBrains Mono', monospace"
            fontSize="11px"
            color="#a0a8be"
            letterSpacing="0.08em"
            textTransform="uppercase"
          >
            MITRE ATT&CK:
          </Text>
          {techniques.map((technique: string, index: number) => (
            <Badge
              key={index}
              fontFamily="'JetBrains Mono', monospace"
              fontSize="9px"
              px="6px"
              py="2px"
              bg="rgba(200,214,248,0.06)"
              color="#c8d6f8"
              border="1px solid rgba(200,214,248,0.18)"
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

const CTF = () => (
  <Layout title="CTF Writeups">
    <Container maxW="860px">
      <Heading as="h1" fontSize={20} mb={4}>
        CTF Writeups
      </Heading>
      
      <Section delay={0.1}>
        <Text fontSize="15px" fontWeight="300" color="#6e7890" lineHeight="1.75" mb="2rem" maxW="540px">
          Each writeup documents the full attack chain: reconnaissance, initial access, privilege escalation, and post-exploitation. 
          Every writeup includes a <Text as="strong" color="#a0a8be" fontWeight="400">detection section</Text> showing how to identify the attack in logs.
        </Text>
        
        <Tabs variant="unstyled" colorScheme="blue">
          <TabList mb="2rem" gap="8px" flexWrap="wrap">
            <Tab
              fontFamily="'JetBrains Mono', monospace"
              fontSize="11px"
              letterSpacing="0.08em"
              px="16px"
              py="7px"
              borderRadius="5px"
              border="1px solid rgba(255,255,255,0.07)"
              bg="rgba(255,255,255,0.02)"
              color="#a0a8be"
              transition="all 0.18s cubic-bezier(.16,1,.3,1)"
              _hover={{
                borderColor: 'rgba(200,214,248,0.2)',
                color: '#e8ecf8'
              }}
              _selected={{
                borderColor: 'rgba(200,214,248,0.35)',
                bg: 'rgba(200,214,248,0.06)',
                color: '#e8ecf8',
                boxShadow: '0 0 16px rgba(200,214,248,0.05)'
              }}
            >
              All Challenges
            </Tab>
            <Tab
              fontFamily="'JetBrains Mono', monospace"
              fontSize="11px"
              letterSpacing="0.08em"
              px="16px"
              py="7px"
              borderRadius="5px"
              border="1px solid rgba(255,255,255,0.07)"
              bg="rgba(255,255,255,0.02)"
              color="#a0a8be"
              transition="all 0.18s cubic-bezier(.16,1,.3,1)"
              _hover={{
                borderColor: 'rgba(200,214,248,0.2)',
                color: '#e8ecf8'
              }}
              _selected={{
                borderColor: 'rgba(200,214,248,0.35)',
                bg: 'rgba(200,214,248,0.06)',
                color: '#e8ecf8',
                boxShadow: '0 0 16px rgba(200,214,248,0.05)'
              }}
            >
              Easy
              <Badge ml="8px" fontSize="9px" px="6px" py="1px" borderRadius="3px" letterSpacing="0.05em" bg="rgba(82,201,122,0.1)" color="#52c97a" border="1px solid rgba(82,201,122,0.2)">
                EASY
              </Badge>
            </Tab>
            <Tab
              fontFamily="'JetBrains Mono', monospace"
              fontSize="11px"
              letterSpacing="0.08em"
              px="16px"
              py="7px"
              borderRadius="5px"
              border="1px solid rgba(255,255,255,0.07)"
              bg="rgba(255,255,255,0.02)"
              color="#a0a8be"
              transition="all 0.18s cubic-bezier(.16,1,.3,1)"
              _hover={{
                borderColor: 'rgba(200,214,248,0.2)',
                color: '#e8ecf8'
              }}
              _selected={{
                borderColor: 'rgba(200,214,248,0.35)',
                bg: 'rgba(200,214,248,0.06)',
                color: '#e8ecf8',
                boxShadow: '0 0 16px rgba(200,214,248,0.05)'
              }}
            >
              Medium
              <Badge ml="8px" fontSize="9px" px="6px" py="1px" borderRadius="3px" letterSpacing="0.05em" bg="rgba(245,200,66,0.1)" color="#f5c842" border="1px solid rgba(245,200,66,0.2)">
                MED
              </Badge>
            </Tab>
            <Tab
              fontFamily="'JetBrains Mono', monospace"
              fontSize="11px"
              letterSpacing="0.08em"
              px="16px"
              py="7px"
              borderRadius="5px"
              border="1px solid rgba(255,255,255,0.07)"
              bg="rgba(255,255,255,0.02)"
              color="#a0a8be"
              transition="all 0.18s cubic-bezier(.16,1,.3,1)"
              _hover={{
                borderColor: 'rgba(200,214,248,0.2)',
                color: '#e8ecf8'
              }}
              _selected={{
                borderColor: 'rgba(200,214,248,0.35)',
                bg: 'rgba(200,214,248,0.06)',
                color: '#e8ecf8',
                boxShadow: '0 0 16px rgba(200,214,248,0.05)'
              }}
            >
              Hard
              <Badge ml="8px" fontSize="9px" px="6px" py="1px" borderRadius="3px" letterSpacing="0.05em" bg="rgba(224,82,82,0.1)" color="#e05252" border="1px solid rgba(224,82,82,0.2)">
                HARD
              </Badge>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={0}>
              <CTFCard
                title="Blue — EternalBlue"
                platform="TryHackMe"
                difficulty="Easy"
                techniques={['T1190', 'T1003.002', 'T1543']}
                description="Exploitation of MS17-010 EternalBlue vulnerability on Windows Server 2008 R2. Demonstrates SMB exploitation, credential dumping with Mimikatz, and persistence through service creation. Includes detection rules for SMB anomalies and credential access patterns."
              />
              
              <CTFCard
                title="Linux PrivEsc Arena"
                platform="TryHackMe"
                difficulty="Medium"
                techniques={['T1548.003', 'T1053.003']}
                description="Comprehensive Linux privilege escalation challenge covering SUID binaries, sudo misconfigurations, cron job exploitation, and kernel vulnerabilities. Each escalation vector mapped to detection strategies using auditd and system monitoring."
              />
              
              <CTFCard
                title="Attacktive Directory"
                platform="TryHackMe"
                difficulty="Hard"
                techniques={['T1558.004', 'T1003.006', 'T1550.002']}
                description="Advanced Active Directory attack chain including Kerberoasting, DCSync attacks, and Golden Ticket creation. Demonstrates ASREPRoast, credential dumping from NTDS.dit, and lateral movement techniques. Comprehensive detection coverage for AD security events."
              />
              
              <CTFCard
                title="OWASP Top 10"
                platform="TryHackMe"
                difficulty="Medium"
                techniques={['T1190', 'T1059.007', 'T1083']}
                description="Web application security challenge covering SQL injection, XSS, insecure deserialization, and command injection. Each vulnerability demonstrated with exploitation techniques and corresponding WAF rules for detection and prevention."
              />
            </TabPanel>
            
            <TabPanel p={0}>
              <CTFCard
                title="Blue — EternalBlue"
                platform="TryHackMe"
                difficulty="Easy"
                techniques={['T1190', 'T1003.002', 'T1543']}
                description="Exploitation of MS17-010 EternalBlue vulnerability on Windows Server 2008 R2. Demonstrates SMB exploitation, credential dumping with Mimikatz, and persistence through service creation. Includes detection rules for SMB anomalies and credential access patterns."
              />
            </TabPanel>
            
            <TabPanel p={0}>
              <CTFCard
                title="Linux PrivEsc Arena"
                platform="TryHackMe"
                difficulty="Medium"
                techniques={['T1548.003', 'T1053.003']}
                description="Comprehensive Linux privilege escalation challenge covering SUID binaries, sudo misconfigurations, cron job exploitation, and kernel vulnerabilities. Each escalation vector mapped to detection strategies using auditd and system monitoring."
              />
              
              <CTFCard
                title="OWASP Top 10"
                platform="TryHackMe"
                difficulty="Medium"
                techniques={['T1190', 'T1059.007', 'T1083']}
                description="Web application security challenge covering SQL injection, XSS, insecure deserialization, and command injection. Each vulnerability demonstrated with exploitation techniques and corresponding WAF rules for detection and prevention."
              />
            </TabPanel>
            
            <TabPanel p={0}>
              <CTFCard
                title="Attacktive Directory"
                platform="TryHackMe"
                difficulty="Hard"
                techniques={['T1558.004', 'T1003.006', 'T1550.002']}
                description="Advanced Active Directory attack chain including Kerberoasting, DCSync attacks, and Golden Ticket creation. Demonstrates ASREPRoast, credential dumping from NTDS.dit, and lateral movement techniques. Comprehensive detection coverage for AD security events."
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Section>
    </Container>
  </Layout>
)

export default CTF