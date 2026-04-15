# IPv4 Addressing

## Overview

IPv4 (Internet Protocol version 4) is a Layer 3 protocol responsible for logical addressing and routing packets between networks.

An IPv4 address is a 32-bit numeric address written in dotted decimal format (e.g., 192.168.1.10).

Understanding IPv4 addressing is essential for network configuration, subnetting, routing, and troubleshooting connectivity issues.

---

## IPv4 Structure

An IPv4 address consists of:

- 32 bits
- Divided into 4 octets (8 bits each)
- Each octet ranges from 0–255

Example:

192.168.1.10  
= 11000000.10101000.00000001.00001010 (binary)

---

## Network vs Host Portion

An IPv4 address is divided into:

- Network portion → Identifies the network
- Host portion → Identifies the device within the network

This division is determined by the subnet mask.

Example:

IP: 192.168.1.10  
Subnet Mask: 255.255.255.0  

Network: 192.168.1.0  
Host ID: .10

---

## Subnet Mask

The subnet mask determines how many bits belong to the network.

Common masks:

- 255.0.0.0 → /8
- 255.255.0.0 → /16
- 255.255.255.0 → /24

CIDR notation expresses this as:

192.168.1.10/24

Meaning:
- First 24 bits = network
- Remaining 8 bits = hosts

---

## Private vs Public IP Ranges

### Private Address Ranges

- 10.0.0.0/8
- 172.16.0.0 – 172.31.255.255 (/12)
- 192.168.0.0/16

Private addresses:
- Not routable on the internet
- Used in internal networks
- Require NAT for internet access

---

## Special Addresses

### Network Address
- First address in subnet
- Identifies the subnet
- Cannot be assigned to a host

### Broadcast Address
- Last address in subnet
- Used to communicate with all hosts in subnet

Example (/24 network):

Network: 192.168.1.0  
Broadcast: 192.168.1.255  
Valid hosts: 192.168.1.1 – 192.168.1.254

---

## Loopback Address

127.0.0.0/8  

Commonly used:
127.0.0.1  

Used to test local network stack functionality.

---

## APIPA (Automatic Private IP Addressing)

Range:
169.254.0.0/16  

Assigned automatically when:
- DHCP fails
- No manual IP is configured

Indicates a DHCP issue in most environments.

---

## Practical Relevance

IPv4 knowledge is critical for:

- Configuring routers and firewalls
- Troubleshooting connectivity
- Diagnosing subnet misconfigurations
- Identifying DHCP failures
- Understanding NAT behavior
- Building segmented lab environments (e.g., Proxmox VLANs)

Incorrect IP addressing is one of the most common causes of network outages.
