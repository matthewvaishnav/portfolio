# Routing Concepts

## Overview

Routing is the process of forwarding packets between different networks based on Layer 3 (IP) addressing.

Routers examine the destination IP address in a packet and determine the best path using a routing table.

Routing enables communication between separate subnets, VLANs, and external networks.

---

## How Routing Works

When a device sends traffic:

1. It checks whether the destination is on the same subnet.
2. If not, it forwards the packet to its default gateway.
3. The router examines the destination IP.
4. The router forwards the packet based on its routing table.

Routers operate at Layer 3 of the OSI model.

---

## Routing Table

A routing table contains:

- Destination network
- Subnet mask (or CIDR)
- Next hop (gateway)
- Outgoing interface
- Metric (cost)

Example (conceptual):

Destination: 192.168.2.0/24  
Gateway: 192.168.1.1  
Interface: eth0  

Routers select the most specific match (longest prefix match).

---

## Default Gateway

The default gateway is the router interface used when no specific route exists for a destination network.

Example:

If a PC has:
IP: 192.168.1.10  
Mask: 255.255.255.0  
Gateway: 192.168.1.1  

Any traffic outside 192.168.1.0/24 is sent to 192.168.1.1.

---

## Static vs Dynamic Routing

### Static Routing
- Manually configured routes
- Simple and predictable
- Used in small networks or labs

Example use case:
- Two internal subnets connected by one router

### Dynamic Routing
- Routes learned automatically using protocols
- Adapts to network changes
- Used in larger environments

Common routing protocols:
- RIP
- OSPF
- EIGRP
- BGP

---

## Longest Prefix Match

Routers choose the most specific route available.

Example:

Routing table contains:
- 192.168.0.0/16
- 192.168.1.0/24

Traffic to 192.168.1.50 will match:
192.168.1.0/24

Because /24 is more specific than /16.

---

## Inter-VLAN Routing

In segmented networks:

- VLANs create separate broadcast domains.
- A router or Layer 3 switch is required for communication between VLANs.

Common methods:
- Router-on-a-stick
- Layer 3 switching

This is foundational for secure network segmentation.

---

## NAT (Network Address Translation)

NAT allows private IP addresses to access the public internet.

The router translates:
- Internal private IP → Public IP
- Public response → Internal device

Common in home labs and enterprise edge firewalls.

---

## Practical Relevance

Routing knowledge is critical for:

- Designing segmented lab networks (e.g., separate management, server, and user VLANs)
- Configuring firewalls
- Troubleshooting connectivity issues
- Understanding how traffic flows across infrastructure
- Building multi-subnet environments in Proxmox

Most connectivity issues in multi-subnet environments stem from:
- Incorrect default gateways
- Missing routes
- Subnet misconfiguration
- NAT errors

Strong routing fundamentals are essential for infrastructure and security-focused roles.
