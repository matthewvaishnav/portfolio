import { Container, Heading, Text, Box, Avatar, Flex, Divider } from '@chakra-ui/react'
import BlogLayout from '../../components/layouts/blog'
import P from '../../components/paragraph'
import CodeBlock from '../../components/code-block'

const articleHeadingProps = {
  fontSize: { base: '2xl', md: '4xl' },
  mb: 4,
  fontWeight: 600,
  lineHeight: '1.2',
  letterSpacing: '-0.02em'
}

const leadTextProps = {
  fontSize: { base: 'lg', md: 'xl' },
  mb: 8,
  lineHeight: '1.7',
  color: 'gray.300'
}

const sectionHeadingProps = {
  fontSize: { base: 'xl', md: '2xl' },
  mt: 12,
  mb: 4,
  fontWeight: 600,
  letterSpacing: '-0.01em'
}

const Post = () => (
  <BlogLayout title="Building My Security Lab">
    <Box>
      <Box fontSize="xs" color="purple.400" mb={4} textTransform="uppercase" letterSpacing="wider">
        SECURITY
      </Box>
      
      <Heading as="h1" {...articleHeadingProps}>
        Building an 18-node security research lab
      </Heading>
      
      <Text {...leadTextProps}>
        I wanted to practice pentesting without breaking real systems. One thing led to another 
        and now I have 18 VMs, 6 VLANs, and a full security monitoring stack running 24/7.
      </Text>
      
      <Flex align="center" wrap="wrap" gap={3} mb={8}>
        <Avatar size="sm" name="Matthew Vaishnav" src="/portfolio/images/matthew.jpg" />
        <Box>
          <Text fontSize="sm" fontWeight={600}>Matthew Vaishnav</Text>
          <Text fontSize="sm" color="gray.400">15 Jan 2025 — 8 min read</Text>
        </Box>
      </Flex>

      <Divider mb={8} borderColor="whiteAlpha.200" />

      <Box fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7" color="gray.200">
        <P>
          Started with one Kali VM and one vulnerable target. Simple enough.
        </P>

        <P>
          Then I needed to see network traffic, so I added Security Onion. That needed proper 
          routing, so I added pfSense. Routing needed segmentation, so I added VLANs. VLANs 
          needed more targets to be useful. Added 12 more VMs.
        </P>

        <P>
          Now I have a complete security research environment where I can run attacks, 
          watch them happen in real-time, and break things without consequences.
        </P>

        <P>
          Here&apos;s how to build the same thing.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          Hardware Requirements
        </Heading>

        <P>
          Running 18 VMs needs decent hardware. I&apos;m using a Dell PowerEdge R720 I got 
          on eBay for $300 - 128GB RAM, dual Xeon E5-2670 processors.
        </P>

        <P>
          Minimum specs:
        </P>

        <CodeBlock>
{`CPU: 8+ cores (16+ threads recommended)
RAM: 64GB minimum, 128GB recommended
Storage: 500GB SSD for VMs
Network: 2x Gigabit NICs (one for WAN, one for management)`}
        </CodeBlock>

        <P>
          Install Proxmox VE as your hypervisor. Free, stable, handles VLANs well.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
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

        <Heading as="h2" {...sectionHeadingProps}>
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

        <Heading as="h2" {...sectionHeadingProps}>
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

        <Heading as="h2" {...sectionHeadingProps}>
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

        <Heading as="h2" {...sectionHeadingProps}>
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

        <Heading as="h2" {...sectionHeadingProps}>
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

        <Heading as="h2" {...sectionHeadingProps}>
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

        <Heading as="h2" {...sectionHeadingProps}>
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

        <Heading as="h2" {...sectionHeadingProps}>
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

        <Heading as="h2" {...sectionHeadingProps}>
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

        <Heading as="h2" {...sectionHeadingProps}>
          The Reality Check
        </Heading>

        <P>
          This lab costs about $15/month in electricity. I repurposed an old gaming PC 
          instead of buying new hardware.
        </P>

        <P>
          Cloud labs cost $50-100/month with limited customization and you can&apos;t run 
          them 24/7. This lab is mine. I can break it, rebuild it, run attacks at 3 AM 
          without worrying about hourly billing.
        </P>

        <P>
          Best part is practicing MITRE ATT&CK techniques end-to-end. Initial access, 
          privilege escalation, lateral movement, data exfiltration - all in a controlled 
          environment where breaking things is the point.
        </P>

        <P>
          Start small if you&apos;re building one. One attacker, one target, one monitoring 
          tool. Grow it as you learn. The hands-on experience beats any certification.
        </P>

        <P>
          Just make sure you have adequate cooling and power.
        </P>
      </Box>
    </Box>
  </BlogLayout>
)

export default Post
