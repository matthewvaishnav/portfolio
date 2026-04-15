import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  List,
  ListItem,
  Link,
  SimpleGrid,
  Flex
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { SiTryhackme } from 'react-icons/si'
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
      border="1px solid rgba(200,214,248,0.1)"
      borderRadius="12px"
      overflow="hidden"
      bg="#040609"
      boxShadow="0 48px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 60px rgba(74,100,220,0.06)"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: '20%',
        right: '20%',
        height: '1px',
        bg: 'linear-gradient(90deg, transparent, rgba(200,214,248,0.2), transparent)',
        zIndex: 11
      }}
      _after={{
        content: '""',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        bg: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)',
        zIndex: 10,
        borderRadius: '12px'
      }}
    >
      <Flex
        align="center"
        gap="7px"
        p="10px 14px"
        bg="#111320"
        borderBottom="1px solid rgba(255,255,255,0.065)"
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
  <Layout>
    <Container maxW="1120px" p={0}>
      <Box
        minH="calc(100vh - 58px)"
        display="flex"
        alignItems="center"
        p="4rem 2.5rem"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: '-10%',
          left: '-8%',
          width: '65%',
          height: '90%',
          background: 'radial-gradient(ellipse at 30% 30%, rgba(74,100,220,0.08) 0%, rgba(200,214,248,0.03) 40%, transparent 70%)',
          pointerEvents: 'none'
        }}
        _after={{
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to bottom, transparent, #0c0d16)',
          pointerEvents: 'none'
        }}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0} w="100%" maxW="1120px" mx="auto">
          <Box pr={{ base: 0, lg: '5rem' }} display="flex" flexDirection="column" justifyContent="center">
            <Flex align="center" gap="9px" mb="1.75rem" opacity={0} animation="up 0.6s cubic-bezier(.16,1,.3,1) 0.05s forwards">
              <Box
                w="7px"
                h="7px"
                borderRadius="50%"
                bg="#52c97a"
                boxShadow="0 0 10px #52c97a, 0 0 20px rgba(82,201,122,0.3)"
                animation="blink 2s step-end infinite"
              />
              <Text
                fontFamily="'JetBrains Mono', monospace"
                fontSize="13px"
                letterSpacing="0.08em"
                textTransform="uppercase"
                color="#52c97a"
                opacity="0.9"
              >
                Available for Co-op
              </Text>
            </Flex>

            <Box opacity={0} animation="up 0.7s cubic-bezier(.16,1,.3,1) 0.18s forwards">
              <Text
                display="block"
                fontWeight="400"
                fontSize="0.38em"
                color="#a0a8be"
                letterSpacing="0.15em"
                textTransform="uppercase"
                mb="0.5em"
                opacity="0.7"
                fontFamily="'Space Grotesk', sans-serif"
              >
                CST @ Conestoga
              </Text>
              <Heading
                as="h1"
                fontFamily="'Space Grotesk', sans-serif"
                fontSize="clamp(3rem, 5.5vw, 5.2rem)"
                fontWeight="700"
                lineHeight="1.04"
                letterSpacing="-0.03em"
                color="#e8ecf8"
              >
                Matthew{' '}
                <Text as="em" fontStyle="italic" fontWeight="300" 
                  bgGradient="linear(135deg, #c8d6f8 0%, rgba(200,214,248,0.5) 100%)"
                  bgClip="text"
                  display="inline"
                >
                  Vaishnav
                </Text>
              </Heading>
            </Box>

            <Box
              mt="1.75rem"
              fontSize="1.05rem"
              fontWeight="300"
              color="#6e7890"
              lineHeight="1.85"
              maxW="400px"
              opacity={0}
              animation="up 0.65s cubic-bezier(.16,1,.3,1) 0.32s forwards"
            >
              <Text>
                Computer Systems Technician student building <Text as="strong" color="#c8d6f8" fontWeight="500">security tools</Text> and infrastructure. 
                Specializing in threat detection, log analysis, and defensive security operations.
              </Text>
            </Box>

            <Flex gap="1rem" flexWrap="wrap" mt="2.5rem" opacity={0} animation="up 0.65s cubic-bezier(.16,1,.3,1) 0.44s forwards">
              <Button
                rightIcon={<ChevronRightIcon />}
                bg="#e8ecf8"
                color="#07080e"
                _hover={{
                  bg: '#fff',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 32px rgba(200,214,248,0.15), 0 0 0 1px rgba(255,255,255,0.3)'
                }}
                transition="all 0.2s cubic-bezier(.16,1,.3,1)"
              >
                View Projects
              </Button>
              <Button
                as="a"
                href="mailto:matthew.vaishnav@gmail.com"
                variant="outline"
                borderColor="rgba(255,255,255,0.12)"
                color="#a0a8be"
                _hover={{
                  borderColor: 'rgba(200,214,248,0.3)',
                  color: '#e8ecf8',
                  bg: 'rgba(200,214,248,0.04)',
                  transform: 'translateY(-1px)'
                }}
              >
                Contact
              </Button>
            </Flex>

            <Flex
              align="stretch"
              gap={0}
              mt="2.5rem"
              border="1px solid rgba(200,214,248,0.1)"
              borderRadius="8px"
              overflow="hidden"
              maxW="420px"
              bg="rgba(200,214,248,0.02)"
              position="relative"
              opacity={0}
              animation="up 0.65s cubic-bezier(.16,1,.3,1) 0.56s forwards"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(200,214,248,0.3), rgba(245,200,66,0.3), transparent)',
                animation: 'shimmer 3s linear infinite',
                backgroundSize: '200% 100%'
              }}
            >
              <Box flex={1} p="0.85rem 0.75rem" textAlign="center" _hover={{ bg: 'rgba(200,214,248,0.04)' }}>
                <Text
                  display="block"
                  fontFamily="'Space Grotesk', sans-serif"
                  fontSize="1.45rem"
                  fontWeight="700"
                  color="#e8ecf8"
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
                  color="#a0a8be"
                  lineHeight="1.4"
                >
                  Lab Nodes
                </Text>
              </Box>
              <Box w="1px" bg="rgba(255,255,255,0.06)" />
              <Box flex={1} p="0.85rem 0.75rem" textAlign="center" _hover={{ bg: 'rgba(200,214,248,0.04)' }}>
                <Text
                  display="block"
                  fontFamily="'Space Grotesk', sans-serif"
                  fontSize="1.45rem"
                  fontWeight="700"
                  color="#e8ecf8"
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
                  color="#a0a8be"
                  lineHeight="1.4"
                >
                  VLANs
                </Text>
              </Box>
              <Box w="1px" bg="rgba(255,255,255,0.06)" />
              <Box flex={1} p="0.85rem 0.75rem" textAlign="center" _hover={{ bg: 'rgba(200,214,248,0.04)' }}>
                <Text
                  display="block"
                  fontFamily="'Space Grotesk', sans-serif"
                  fontSize="1.45rem"
                  fontWeight="700"
                  color="#e8ecf8"
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
                  color="#a0a8be"
                  lineHeight="1.4"
                >
                  Monitoring
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box pl={{ base: 0, lg: '5rem' }} pt={{ base: '3rem', lg: '3rem' }} pb="3rem">
            <Box opacity={0} animation="up 0.65s cubic-bezier(.16,1,.3,1) 0.5s forwards">
              <Terminal lines={terminalLines} />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>

    <Box bg="#0c0d16" borderTop="1px solid rgba(255,255,255,0.065)" position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(200,214,248,0.12), transparent)'
      }}
    >
      <Container maxW="860px" py="4.5rem">
        <Section delay={0.1}>
          <Heading as="h2" variant="section-title" color="#e8ecf8" fontFamily="'Space Grotesk', sans-serif" fontSize="2.2rem" fontWeight="700" letterSpacing="-0.03em" mb="1.25rem" lineHeight="1.08">
            About
          </Heading>
          
          <Box mb="3.5rem">
            <Text
              fontFamily="'Space Grotesk', sans-serif"
              fontSize="clamp(1.25rem, 2.2vw, 1.7rem)"
              fontWeight="500"
              lineHeight="1.4"
              color="#a0a8be"
              letterSpacing="-0.02em"
              maxW="700px"
              borderLeft="3px solid rgba(200,214,248,0.2)"
              pl="1.5rem"
            >
              Building security tools and infrastructure on an 18-node home lab. Every project tested against running systems.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="3rem" alignItems="start">
            <Box>
              <Text fontWeight="300" color="#6e7890" lineHeight="1.9" mb="1.3rem" fontSize="1.04rem">
                Matthew Vaishnav is a Computer Systems Technician student at Conestoga College with a passion for <Text as="strong" color="#c8d6f8" fontWeight="500">defensive security</Text> and infrastructure design. 
                He builds high-fidelity lab environments to study attack patterns, develop detection rules, and test security controls.
              </Text>
              
              <Text fontWeight="300" color="#6e7890" lineHeight="1.9" mb="1.3rem" fontSize="1.04rem">
                His home lab simulates enterprise infrastructure with pfSense routing traffic between 6 isolated VLANs and Security Onion monitoring everything on a SPAN port. 
                The entire lab is version-controlled with <Text as="strong" color="#c8d6f8" fontWeight="500">Ansible and Terraform</Text>—if the host fails, it rebuilds in minutes.
              </Text>
            </Box>

            <Box
              border="1px solid rgba(200,214,248,0.08)"
              borderRadius="10px"
              overflow="hidden"
              bg="linear-gradient(160deg, rgba(200,214,248,0.03) 0%, transparent 60%)"
              boxShadow="0 24px 64px rgba(0,0,0,0.3)"
            >
              <Flex
                align="center"
                gap="8px"
                p="0.9rem 1.25rem"
                borderBottom="1px solid rgba(255,255,255,0.06)"
                bg="rgba(200,214,248,0.025)"
              >
                <Box w="7px" h="7px" borderRadius="50%" bg="#c8d6f8" boxShadow="0 0 6px #c8d6f8" opacity="0.6" />
                <Text fontFamily="'JetBrains Mono', monospace" fontSize="10px" letterSpacing="0.14em" textTransform="uppercase" color="#6e7890">
                  System Profile
                </Text>
              </Flex>
              
              {[
                { key: 'Name', value: 'Matthew Vaishnav' },
                { key: 'Role', value: 'Security Student' },
                { key: 'Location', value: 'Kitchener-Waterloo, ON' },
                { key: 'Education', value: 'CST @ Conestoga College' },
                { key: 'Status', value: 'Available for Co-op' },
                { key: 'Specialization', value: 'Defensive Security' }
              ].map((item, index) => (
                <Flex
                  key={index}
                  justify="space-between"
                  align="center"
                  p="0.65rem 1.25rem"
                  borderBottom={index === 5 ? 'none' : '1px solid rgba(255,255,255,0.045)'}
                  gap="1rem"
                  _hover={{ bg: 'rgba(200,214,248,0.02)' }}
                  transition="background 0.15s"
                >
                  <Text fontFamily="'JetBrains Mono', monospace" fontSize="12px" color="#a0a8be" opacity="0.9">
                    {item.key}
                  </Text>
                  <Text fontFamily="'JetBrains Mono', monospace" fontSize="12px" color="#e8ecf8" textAlign="right">
                    {item.value}
                  </Text>
                </Flex>
              ))}
            </Box>
          </SimpleGrid>
        </Section>
      </Container>
    </Box>

    <Container maxW="860px" py="4.5rem">
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" color="#e8ecf8" fontFamily="'Space Grotesk', sans-serif" fontSize="2.2rem" fontWeight="700" letterSpacing="-0.03em" mb="1.25rem" lineHeight="1.08">
          On the web
        </Heading>
        <List spacing={3}>
          <ListItem>
            <Link href="https://github.com/matthewvaishnav" target="_blank">
              <Button
                variant="ghost"
                color="#6e7890"
                leftIcon={<IoLogoGithub />}
                _hover={{ color: '#e8ecf8' }}
              >
                @matthewvaishnav
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/matthew-vaishnav-279670229/" target="_blank">
              <Button
                variant="ghost"
                color="#6e7890"
                leftIcon={<IoLogoLinkedin />}
                _hover={{ color: '#e8ecf8' }}
              >
                Matthew Vaishnav
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://tryhackme.com/p/matthew.vaishnav" target="_blank">
              <Button
                variant="ghost"
                color="#6e7890"
                leftIcon={<SiTryhackme />}
                _hover={{ color: '#e8ecf8' }}
              >
                @matthew.vaishnav
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Security
