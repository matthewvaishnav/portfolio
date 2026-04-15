# Subnetting Fundamentals

## Overview

Subnetting is the process of dividing a larger network into smaller, more manageable subnets.

It improves:
- Network organization
- Security segmentation
- Broadcast control
- IP address efficiency

Subnetting is a foundational skill for routing, VLAN design, firewall configuration, and infrastructure planning.

---

## Why Subnetting Matters

Without subnetting:
- All devices share one broadcast domain
- Increased broadcast traffic
- Poor segmentation
- Reduced security

With subnetting:
- Logical separation of departments or services
- Controlled traffic flow
- Easier troubleshooting
- More efficient IP utilization

---

## CIDR Notation

CIDR (Classless Inter-Domain Routing) defines how many bits belong to the network.

Example:

192.168.1.0/24

- 24 bits = network
- 8 bits = hosts
- 256 total addresses
- 254 usable hosts

---

## Subnetting Formula

To calculate usable hosts:

2^n - 2

Where:
n = number of host bits

The minus 2 accounts for:
- Network address
- Broadcast address

Example:

/26 subnet  
32 total bits - 26 network bits = 6 host bits  

2^6 = 64 addresses  
64 - 2 = 62 usable hosts

---

## Common Subnet Sizes

| CIDR | Subnet Mask        | Total IPs | Usable Hosts |
|------|-------------------|-----------|--------------|
| /24  | 255.255.255.0     | 256       | 254          |
| /25  | 255.255.255.128   | 128       | 126          |
| /26  | 255.255.255.192   | 64        | 62           |
| /27  | 255.255.255.224   | 32        | 30           |
| /28  | 255.255.255.240   | 16        | 14           |
| /29  | 255.255.255.248   | 8         | 6            |
| /30  | 255.255.255.252   | 4         | 2            |

---

## Example Subnet Calculation

Given:

Network: 192.168.1.0/26

Block size = 64

Subnets:
- 192.168.1.0 – 192.168.1.63
- 192.168.1.64 – 192.168.1.127
- 192.168.1.128 – 192.168.1.191
- 192.168.1.192 – 192.168.1.255

First subnet:
Network: 192.168.1.0  
Broadcast: 192.168.1.63  
Usable: .1 – .62  

---

## VLSM (Variable Length Subnet Masking)

VLSM allows different subnet sizes within the same network.

Used when:
- Departments require different host counts
- Efficient IP allocation is required

Example:
- HR needs 20 hosts → /27
- IT needs 60 hosts → /26
- Server VLAN needs 10 hosts → /28

---

## Practical Relevance

Subnetting is essential for:

- VLAN design
- Firewall rule segmentation
- Routing table efficiency
- Infrastructure scaling
- Lab network design in Proxmox

Incorrect subnetting leads to:
- IP conflicts
- Routing failures
- Connectivity issues

Strong subnetting knowledge directly improves network troubleshooting and system design.
