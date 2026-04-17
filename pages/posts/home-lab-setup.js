import { Container, Heading, Text, Box, Avatar, Flex } from '@chakra-ui/react'
import BlogLayout from '../../components/layouts/blog'
import P from '../../components/paragraph'
import CodeBlock from '../../components/code-block'

const Post = () => (
  <BlogLayout title="Building My Security Lab">
    <Box>
      <Box fontSize="xs" color="purple.400" mb={4} textTransform="uppercase" letterSpacing="wider">
        SECURITY
      </Box>
      
      <Heading as="h1" fontSize={48} mb={6} fontWeight={700} color="white" lineHeight="1.2">
        Building an 18-node security research lab
      </Heading>
      
      <Text fontSize="lg" color="gray.400" mb={8} lineHeight="1.6">
        Most people collect stamps or build model trains. I decided to build a full-scale 
        security research lab with 18 nodes, 6 VLANs, and comprehensive attack infrastructure.
      </Text>
      
      <Flex align="center" mb={12}>
        <Avatar size="sm" name="Matthew Vaishnav" src="/images/matthew.jpg" mr={3} />
        <Box>
          <Text fontSize="sm" fontWeight={600} color="white">Matthew Vaishnav</Text>
          <Text fontSize="sm" color="gray.500">15 Jan 2025 — 8 min read</Text>
        </Box>
      </Flex>

      <Box fontSize="lg" lineHeight="1.7" color="gray.300">
        <P>
          It started simple. I wanted to practice penetration testing without breaking real systems. 
          One Kali VM, one vulnerable target. Easy.
        </P>

        <P>
          Then I realized I needed to see the network traffic. Added Security Onion. 
          Now I needed a proper network. Added pfSense. Now I needed segmentation. 
          Added VLANs. Now I needed more targets. Added 12 more VMs.
        </P>

        <P>
          The result is a comprehensive security research environment perfect for learning and testing.
        </P>

        <P>
          In this article, I&apos;ll show you exactly how to replicate my setup.
        </P>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700} color="white">
          Hardware Requirements
        </Heading>

        <P>
          You&apos;ll need a decent hypervisor to run 18 VMs. I&apos;m using a salvaged Dell PowerEdge R720 
          with 128GB RAM and dual Xeon E5-2670 processors. Cost me about $300 on eBay.
        </P>

        <P>
          Minimum specs for this lab:
        </P>

        <CodeBlock>
{`CPU: 8+ cores (16+ threads recommended)
RAM: 64GB minimum, 128GB recommended
Storage: 500GB SSD for VMs
Network: 2x Gigabit NICs (one for WAN, one for management)`}
        </CodeBlock>

        <P>
          Install Proxmox VE as your hypervisor. It&apos;s free, stable, and handles VLANs beautifully.
        </P>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700} color="white">
          Step 1: Install Proxmox VE
        </Heading>

        <P>
          Download Proxmox VE ISO from proxmox.com and flash it to a USB drive:
        </P>

        <CodeBlock>
{`dd if=proxmox-ve_*.iso of=/dev/sdX bs=1M status=progress`}
        </CodeBlock>

        <P>
          Boot from USB, follow the installer. Set a static IP for the management interface. 
          Access the web UI at https://your-ip:8006
        </P>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700} color="white">
          Step 2: Configure VLANs in Proxmox
        </Heading>

        <P>
          Create a Linux Bridge with VLAN awareness. In Proxmox web UI, go to your node → 
          Network → Create → Linux Bridge:
        </P>

        <CodeBlock>
{`Name: vmbr1
VLAN aware: Yes
Bridge ports: (leave empty for internal-only network)`}
        </CodeBlock>

        <P>Here&apos;s the VLAN breakdown:</P>

        <CodeBlock>
{`VLAN 10: Management (pfSense, admin access)
VLAN 20: Security Monitoring (Security Onion, span port)
VLAN 30: Attack Infrastructure (Kali, Metasploit, C2 servers)
VLAN 40: Victim Network (vulnerable Windows boxes, web servers)
VLAN 50: Logging (Splunk, centralized log aggregation)
VLAN 60: Malware Sandbox (air-gapped, fake DNS/C2)`}
        </CodeBlock>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700} color="white">
          Step 3: Deploy pfSense Firewall
        </Heading>

        <P>
          Download pfSense ISO and create a VM in Proxmox:
        </P>

        <CodeBlock>
{`CPU: 2 cores
RAM: 2GB
Disk: 20GB
Network: 
  - net0: vmbr0 (WAN - bridged to your physical network)
  - net1: vmbr1, VLAN tag 10 (LAN/Management)`}
        </CodeBlock>

        <P>
          Boot the VM, install pfSense. Configure WAN on the first interface, LAN on the second. 
          Set LAN IP to 192.168.10.1/24.
        </P>

        <P>
          In pfSense web UI, create additional interfaces for each VLAN:
        </P>

        <CodeBlock>
{`Interfaces → Assignments → VLANs → Add
Parent Interface: vtnet1 (your LAN interface)
VLAN Tag: 20, 30, 40, 50, 60
Description: SECURITY, ATTACK, VICTIM, LOGGING, SANDBOX`}
        </CodeBlock>

        <P>
          Enable each VLAN interface and assign IP ranges:
        </P>

        <CodeBlock>
{`VLAN 10 (Management): 192.168.10.0/24
VLAN 20 (Security): 192.168.20.0/24
VLAN 30 (Attack): 192.168.30.0/24
VLAN 40 (Victim): 192.168.40.0/24
VLAN 50 (Logging): 192.168.50.0/24
VLAN 60 (Sandbox): 192.168.60.0/24`}
        </CodeBlock>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700} color="white">
          Step 4: Deploy Security Onion
        </Heading>

        <P>
          Download Security Onion ISO. Create a VM with two network interfaces:
        </P>

        <CodeBlock>
{`CPU: 4 cores
RAM: 16GB
Disk: 200GB
Network:
  - net0: vmbr1, VLAN tag 20 (management interface)
  - net1: vmbr1, no VLAN tag (monitoring interface - span port)`}
        </CodeBlock>

        <P>
          Install Security Onion in standalone mode. Configure the management interface with 
          IP 192.168.20.10. The monitoring interface should have no IP (promiscuous mode).
        </P>

        <P>
          In Proxmox, configure the monitoring interface to receive all VLAN traffic. 
          SSH into your Proxmox host:
        </P>

        <CodeBlock>
{`# Enable promiscuous mode on the bridge
ip link set vmbr1 promisc on

# Configure port mirroring (span port)
ovs-vsctl -- --id=@m create mirror name=span \\
  -- add bridge vmbr1 mirrors @m \\
  -- --id=@vnet1 get port vnet1 \\
  -- set mirror span select-all=true output-port=@vnet1`}
        </CodeBlock>

        <P>
          This mirrors all traffic on vmbr1 to Security Onion&apos;s monitoring interface.
        </P>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700} color="white">
          Step 5: Deploy Attack Infrastructure
        </Heading>

        <P>
          Create Kali Linux VM on VLAN 30:
        </P>

        <CodeBlock>
{`CPU: 4 cores
RAM: 8GB
Disk: 80GB
Network: vmbr1, VLAN tag 30`}
        </CodeBlock>

        <P>
          Install Kali, set static IP 192.168.30.10. Install additional tools:
        </P>

        <CodeBlock>
{`sudo apt update && sudo apt install -y \\
  metasploit-framework \\
  empire \\
  covenant \\
  bloodhound \\
  crackmapexec \\
  impacket-scripts`}
        </CodeBlock>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700} color="white">
          Step 6: Deploy Victim Network
        </Heading>

        <P>
          Create vulnerable Windows VMs on VLAN 40. I use:
        </P>

        <CodeBlock>
{`- Windows Server 2019 (Domain Controller)
- Windows 10 Pro x3 (domain-joined workstations)
- Windows Server 2016 (vulnerable web server with IIS)
- Ubuntu 20.04 (vulnerable web app - DVWA)`}
        </CodeBlock>

        <P>
          Each VM gets 2 cores, 4GB RAM, 60GB disk, on VLAN 40. Intentionally misconfigure them:
        </P>

        <CodeBlock>
{`# Disable Windows Defender
Set-MpPreference -DisableRealtimeMonitoring $true

# Enable SMBv1 (vulnerable to EternalBlue)
Enable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol

# Weak passwords for testing
net user Administrator Password123!`}
        </CodeBlock>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700} color="white">
          Step 7: Deploy Splunk for Logging
        </Heading>

        <P>
          Create Ubuntu VM on VLAN 50 for Splunk:
        </P>

        <CodeBlock>
{`CPU: 4 cores
RAM: 8GB
Disk: 100GB
Network: vmbr1, VLAN tag 50`}
        </CodeBlock>

        <P>
          Install Splunk Enterprise (free license for 500MB/day):
        </P>

        <CodeBlock>
{`wget -O splunk.deb 'https://download.splunk.com/products/splunk/releases/9.1.0/linux/splunk-9.1.0-linux-2.6-amd64.deb'
sudo dpkg -i splunk.deb
sudo /opt/splunk/bin/splunk start --accept-license
sudo /opt/splunk/bin/splunk enable boot-start`}
        </CodeBlock>

        <P>
          Configure Splunk forwarders on all VMs to send logs to 192.168.50.10:9997.
        </P>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700} color="white">
          Step 8: Deploy Malware Sandbox
        </Heading>

        <P>
          Create Windows 10 VM on VLAN 60 (completely isolated):
        </P>

        <CodeBlock>
{`CPU: 2 cores
RAM: 4GB
Disk: 60GB
Network: vmbr1, VLAN tag 60`}
        </CodeBlock>

        <P>
          In pfSense, create firewall rules to block VLAN 60 from accessing any other network. 
          Set up fake DNS and fake C2 servers using INetSim:
        </P>

        <CodeBlock>
{`sudo apt install inetsim
sudo systemctl start inetsim
sudo systemctl enable inetsim`}
        </CodeBlock>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700} color="white">
          Step 9: Configure Firewall Rules
        </Heading>

        <P>
          In pfSense, create rules to control traffic between VLANs:
        </P>

        <CodeBlock>
{`# Allow Attack VLAN to access Victim VLAN
Source: ATTACK net (192.168.30.0/24)
Destination: VICTIM net (192.168.40.0/24)
Action: Pass

# Allow all VLANs to access Logging VLAN
Source: any
Destination: LOGGING net (192.168.50.0/24)
Port: 9997 (Splunk forwarder)
Action: Pass

# Block Sandbox from everything
Source: SANDBOX net (192.168.60.0/24)
Destination: any
Action: Block`}
        </CodeBlock>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700} color="white">
          Step 10: Snapshot Everything
        </Heading>

        <P>
          Before running any attacks, snapshot every VM in Proxmox:
        </P>

        <CodeBlock>
{`# In Proxmox web UI, for each VM:
VM → Snapshots → Take Snapshot
Name: "clean-baseline"
Description: "Pre-attack baseline state"`}
        </CodeBlock>

        <P>
          Now you can break things and revert instantly.
        </P>

        <Heading as="h2" fontSize={32} mt={12} mb={6} fontWeight={700} color="white">
          The Reality Check
        </Heading>

        <P>
          This lab costs about $15/month in electricity. The hardware was mostly salvaged 
          from old servers and a very patient eBay seller. Total investment: maybe $300 
          over two years.
        </P>

        <P>
          Compare that to cloud labs at $50-100/month with limited customization and 
          you can&apos;t keep running 24/7. This lab is mine. I can break it, rebuild it, 
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
          Just make sure you have adequate cooling and power for your setup.
        </P>

        <P>That&apos;s it. A complete replication guide.</P>

        <P>I hope it&apos;s helpful for your security research workflow :)</P>

        <P>Have a productive day!</P>
      </Box>
    </Box>
  </BlogLayout>
)

export default Post