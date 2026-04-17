import { Container, Heading, Text, Box, List, ListItem, Code, Divider } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Post = () => (
  <Layout title="Home Lab Setup">
    <Container>
      <Heading as="h1" fontSize={32} mb={4}>
        Building an 18-Node Security Research Lab
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={6}>
        January 2025
      </Text>

      <P>
        This guide walks through building a production-grade security research lab with 18 nodes, 
        Security Onion for threat detection, and pfSense for network segmentation.
      </P>

      <Heading as="h2" fontSize={24} mt={8} mb={4}>
        Architecture Overview
      </Heading>
      <P>
        The lab uses 6 VLANs for network segmentation:
      </P>
      <List ml={6} my={4}>
        <ListItem>• VLAN 10: Management network</ListItem>
        <ListItem>• VLAN 20: Security Onion sensors</ListItem>
        <ListItem>• VLAN 30: Attack infrastructure</ListItem>
        <ListItem>• VLAN 40: Victim machines</ListItem>
        <ListItem>• VLAN 50: Logging and SIEM</ListItem>
        <ListItem>• VLAN 60: Isolated malware analysis</ListItem>
      </List>

      <Heading as="h2" fontSize={24} mt={8} mb={4}>
        Step 1: pfSense Configuration
      </Heading>
      <P>
        Install pfSense on dedicated hardware. Configure VLANs and firewall rules.
      </P>
      <Box bg="gray.800" p={4} borderRadius="md" my={4}>
        <Code colorScheme="green" fontSize="sm">
          # Create VLANs<br/>
          Interfaces → Assignments → VLANs → Add<br/>
          Parent: em0, VLAN Tag: 10, Description: Management<br/>
          <br/>
          # Configure firewall rules<br/>
          Firewall → Rules → VLAN10<br/>
          Allow: Management to all VLANs<br/>
          Block: Inter-VLAN traffic by default
        </Code>
      </Box>

      <Heading as="h2" fontSize={24} mt={8} mb={4}>
        Step 2: Security Onion Deployment
      </Heading>
      <P>
        Deploy Security Onion standalone node for centralized monitoring.
      </P>
      <Box bg="gray.800" p={4} borderRadius="md" my={4}>
        <Code colorScheme="green" fontSize="sm">
          # Download Security Onion ISO<br/>
          wget https://github.com/Security-Onion-Solutions/securityonion/releases<br/>
          <br/>
          # Install with network sensor<br/>
          sudo so-setup<br/>
          # Select: Standalone<br/>
          # Management interface: ens192 (VLAN 10)<br/>
          # Monitor interface: ens224 (VLAN 20 - span port)
        </Code>
      </Box>

      <Heading as="h2" fontSize={24} mt={8} mb={4}>
        Step 3: Network Topology
      </Heading>
      <P>
        Configure managed switch for VLAN trunking and port mirroring.
      </P>
      <List ml={6} my={4}>
        <ListItem>• Port 1-4: VLAN 10 (Management)</ListItem>
        <ListItem>• Port 5-8: VLAN 30 (Attack)</ListItem>
        <ListItem>• Port 9-12: VLAN 40 (Victim)</ListItem>
        <ListItem>• Port 13-16: VLAN 50 (Logging)</ListItem>
        <ListItem>• Port 17: VLAN 60 (Malware analysis)</ListItem>
        <ListItem>• Port 24: Trunk to pfSense (all VLANs)</ListItem>
      </List>

      <Heading as="h2" fontSize={24} mt={8} mb={4}>
        Step 4: Attack Infrastructure
      </Heading>
      <P>
        Deploy Kali Linux and attack tools on VLAN 30.
      </P>
      <Box bg="gray.800" p={4} borderRadius="md" my={4}>
        <Code colorScheme="green" fontSize="sm">
          # Kali VM configuration<br/>
          Network: VLAN 30<br/>
          IP: 192.168.30.10/24<br/>
          Gateway: 192.168.30.1 (pfSense)<br/>
          <br/>
          # Install additional tools<br/>
          sudo apt update && sudo apt install -y metasploit-framework bloodhound
        </Code>
      </Box>

      <Heading as="h2" fontSize={24} mt={8} mb={4}>
        Step 5: Victim Network
      </Heading>
      <P>
        Deploy Windows/Linux targets on VLAN 40 with intentional vulnerabilities.
      </P>
      <List ml={6} my={4}>
        <ListItem>• Windows Server 2019 (Active Directory)</ListItem>
        <ListItem>• Windows 10 workstations (3 nodes)</ListItem>
        <ListItem>• Ubuntu 20.04 web server</ListItem>
        <ListItem>• Vulnerable web apps (DVWA, Metasploitable)</ListItem>
      </List>

      <Heading as="h2" fontSize={24} mt={8} mb={4}>
        Step 6: Logging Pipeline
      </Heading>
      <P>
        Configure centralized logging with Splunk on VLAN 50.
      </P>
      <Box bg="gray.800" p={4} borderRadius="md" my={4}>
        <Code colorScheme="green" fontSize="sm">
          # Install Splunk<br/>
          wget -O splunk.tgz https://download.splunk.com/...<br/>
          tar xvzf splunk.tgz -C /opt<br/>
          /opt/splunk/bin/splunk start --accept-license<br/>
          <br/>
          # Configure forwarders on all nodes<br/>
          /opt/splunkforwarder/bin/splunk add forward-server 192.168.50.10:9997
        </Code>
      </Box>

      <Heading as="h2" fontSize={24} mt={8} mb={4}>
        Step 7: Malware Analysis Sandbox
      </Heading>
      <P>
        Isolated VLAN 60 for safe malware detonation.
      </P>
      <List ml={6} my={4}>
        <ListItem>• REMnux for malware analysis</ListItem>
        <ListItem>• Windows sandbox VMs (snapshots enabled)</ListItem>
        <ListItem>• No internet access (air-gapped)</ListItem>
        <ListItem>• Fake DNS/HTTP servers for C2 simulation</ListItem>
      </List>

      <Heading as="h2" fontSize={24} mt={8} mb={4}>
        Testing & Validation
      </Heading>
      <P>
        Verify setup with attack simulations.
      </P>
      <Box bg="gray.800" p={4} borderRadius="md" my={4}>
        <Code colorScheme="green" fontSize="sm">
          # Test 1: Port scan from Kali<br/>
          nmap -sS 192.168.40.0/24<br/>
          # Verify: Security Onion alerts on scan<br/>
          <br/>
          # Test 2: Brute force attack<br/>
          hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://192.168.40.10<br/>
          # Verify: Splunk logs failed auth attempts<br/>
          <br/>
          # Test 3: Lateral movement<br/>
          # Verify: pfSense blocks inter-VLAN traffic
        </Code>
      </Box>

      <Heading as="h2" fontSize={24} mt={8} mb={4}>
        Key Takeaways
      </Heading>
      <List ml={6} my={4}>
        <ListItem>• Network segmentation critical for containment</ListItem>
        <ListItem>• Span ports essential for traffic visibility</ListItem>
        <ListItem>• Centralized logging enables correlation</ListItem>
        <ListItem>• Snapshot VMs before each test</ListItem>
        <ListItem>• Document everything for reproducibility</ListItem>
      </List>

      <Divider my={8} />
      <Text fontSize="sm" color="gray.500">
        This lab setup enables hands-on practice with MITRE ATT&CK techniques, 
        threat hunting, and incident response in a controlled environment.
      </Text>
    </Container>
  </Layout>
)

export default Post
