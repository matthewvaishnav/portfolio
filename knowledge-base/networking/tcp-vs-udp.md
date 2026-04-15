# TCP vs UDP

## Overview

TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are Layer 4 (Transport Layer) protocols responsible for end-to-end communication between devices.

They determine how data is delivered across a network.

Understanding their differences is critical for troubleshooting, firewall configuration, and security monitoring.

---

## TCP (Transmission Control Protocol)

TCP is a connection-oriented protocol.

Before transmitting data, TCP establishes a connection using a three-way handshake.

### TCP Characteristics

- Reliable
- Connection-oriented
- Ordered delivery
- Error checking
- Flow control
- Congestion control

### Three-Way Handshake

1. SYN
2. SYN-ACK
3. ACK

This ensures both sides are ready before data transfer begins.

### Common TCP Services

- HTTP / HTTPS
- SSH
- FTP
- SMTP
- RDP

TCP is used when reliability is more important than speed.

---

## UDP (User Datagram Protocol)

UDP is a connectionless protocol.

It sends packets without establishing a session and does not guarantee delivery.

### UDP Characteristics

- Faster than TCP
- No handshake
- No guaranteed delivery
- No ordering
- Lower overhead

### Common UDP Services

- DNS
- DHCP
- VoIP
- Streaming services
- Online gaming

UDP is used when speed and low latency are more important than reliability.

---

## Key Differences

| Feature          | TCP              | UDP              |
|------------------|------------------|------------------|
| Connection       | Yes              | No               |
| Reliability      | Guaranteed       | Not guaranteed   |
| Ordering         | Yes              | No               |
| Speed            | Slower           | Faster           |
| Overhead         | Higher           | Lower            |

---

## Ports

Both TCP and UDP use port numbers to identify services.

Example:

- 80/TCP → HTTP
- 443/TCP → HTTPS
- 53/UDP → DNS
- 67/68 UDP → DHCP

Ports range from 0–65535.

---

## Practical Relevance

Understanding TCP vs UDP is critical for:

- Firewall rule configuration
- Packet capture analysis (Wireshark)
- Diagnosing connection failures
- Identifying port scans
- Interpreting logs in monitoring systems

Examples:

- If a TCP handshake fails → connection will not establish.
- If UDP packets drop → application may degrade but not notify user.
- SYN flood attacks target TCP’s handshake process.

Transport layer behavior directly affects system reliability and security visibility.
