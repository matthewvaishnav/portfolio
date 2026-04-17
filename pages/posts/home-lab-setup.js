import { Container, Heading, Text, Code, Box } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Post = () => (
  <Layout title="Building My Security Lab">
    <Container maxW="container.md">
      <Heading as="h1" fontSize={32} mb={2} fontWeight={600}>
        I built an 18-node security lab in my basement
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={8}>
        By Matthew Vaishnav — 15 Jan 2025
      </Text>

      <P>
        Most people collect stamps or build model trains. I decided to build a full-scale 
        security research lab with 18 nodes, 6 VLANs, and enough attack infrastructure to 
        make my ISP nervous.
      </P>

      <P>
        It started simple. I wanted to practice penetration testing without breaking real systems. 
        One Kali VM, one vulnerable target. Easy.
      </P>

      <P>
        Then I realized I couldn't see the network traffic. Added Security Onion. 
        Now I needed a proper network. Added pfSense. Now I needed segmentation. 
        Added VLANs. Now I needed more targets. Added 12 more VMs.
      </P>

      <P>
        Before I knew it, my basement sounded like a data center and my electricity bill 
        looked like I was mining Bitcoin.
      </P>

      <Heading as="h2" fontSize={24} mt={8} mb={4} fontWeight={600}>
        The Architecture
      </Heading>

      <P>
        Six VLANs keep everything isolated. Management network for admin access. 
        Attack infrastructure on VLAN 30 - Kali, Metasploit, all the fun tools. 
        Victim machines on VLAN 40 - intentionally vulnerable Windows boxes, 
        a sketchy web server, the works.
      </P>

      <P>
        Security Onion sits on VLAN 20 with a span port watching everything. 
        Every packet, every connection, every failed login attempt. 
        It's like having a security camera pointed at your network 24/7.
      </P>

      <P>Here's the VLAN breakdown:</P>

      <Box 
        as="pre" 
        p={4} 
        bg="whiteAlpha.100" 
        borderRadius="md" 
        overflowX="auto" 
        fontSize="sm"
        mb={4}
      >
        <Code display="block" whiteSpace="pre" bg="transparent" color="inherit">
{`VLAN 10: Management (pfSense, admin access)
VLAN 20: Security Monitoring (Security Onion, span port)
VLAN 30: Attack Infrastructure (Kali, Metasploit, C2 servers)
VLAN 40: Victim Network (vulnerable Windows boxes, web servers)
VLAN 50: Logging (Splunk, centralized log aggregation)
VLAN 60: Malware Sandbox (air-gapped, fake DNS/C2)`}
        </Code>
      </Box>

      <P>
        VLAN 50 runs Splunk for centralized logging. Because when you're simulating 
        attacks at 2 AM, you want to know exactly what happened without SSHing into 
        12 different boxes.
      </P>

      <P>
        VLAN 60 is the malware sandbox. Completely air-gapped. No internet, fake DNS, 
        fake C2 servers. This is where sketchy executables go to die in a controlled environment.
      </P>

      <Heading as="h2" fontSize={24} mt={8} mb={4} fontWeight={600}>
        What I Actually Learned
      </Heading>

      <P>
        Network segmentation isn't optional. It's the difference between "oops I broke one VM" 
        and "oops I just ransomwared my entire network."
      </P>

      <P>
        Span ports are magic. You can't defend what you can't see. Security Onion watching 
        a span port catches everything - port scans, brute force attempts, lateral movement. 
        It's like having X-ray vision for your network.
      </P>

      <P>
        Centralized logging saves your sanity. Splunk ingesting logs from 18 nodes means 
        I can correlate an attack across the entire infrastructure. One query shows me 
        the initial compromise, lateral movement, and data exfiltration attempt.
      </P>

      <P>
        Snapshots are non-negotiable. Every VM gets snapshotted before each test. 
        Broke Active Directory? Revert. Accidentally deleted the domain controller? Revert. 
        Deployed actual ransomware instead of the test payload? Definitely revert.
      </P>

      <Heading as="h2" fontSize={24} mt={8} mb={4} fontWeight={600}>
        The Reality Check
      </Heading>

      <P>
        This lab costs about $40/month in electricity. The hardware was mostly salvaged 
        from old servers and a very patient eBay seller. Total investment: maybe $800 
        over two years.
      </P>

      <P>
        Compare that to cloud labs at $50-100/month with limited customization and 
        you can't keep running 24/7. This lab is mine. I can break it, rebuild it, 
        and run attacks at 3 AM without worrying about hourly billing.
      </P>

      <P>
        The best part? I can practice MITRE ATT&CK techniques end-to-end. 
        Initial access, privilege escalation, lateral movement, data exfiltration - 
        all in a controlled environment where breaking things is the goal.
      </P>

      <P>
        Would I recommend building one? Absolutely. Start small - one attacker, one target, 
        one monitoring tool. Then grow it as you learn. The hands-on experience is worth 
        more than any certification.
      </P>

      <P>
        Just maybe warn your family before the basement starts sounding like an airport runway.
      </P>

      <P>That's it. A very simple and intuitive setup.</P>

      <P>I hope it's helpful for your security research workflow :)</P>

      <P>Have a productive day!</P>
    </Container>
  </Layout>
)

export default Post
