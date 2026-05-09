import { Heading, Box, Link, Text, Container } from '@chakra-ui/react'
import BlogLayout from '../components/layouts/blog'
import NextLink from 'next/link'

const Posts = () => (
  <BlogLayout title="Posts">
    <Container maxW="container.md" px={{ base: 4, md: 6 }}>
      <Box mb={{ base: 12, md: 16 }} pt={{ base: 8, md: 12 }}>
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} mb={3} fontWeight={600} letterSpacing="-0.02em">
          Technical Writing
        </Heading>
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.400">
          Research updates, technical deep-dives, and lab notes
        </Text>
      </Box>
      
      <Box as="article" mb={{ base: 10, md: 16 }}>
        <Link 
          as={NextLink} 
          href="/posts/histocore-production-ready" 
          style={{ textDecoration: 'none' }}
          display="block"
          p={{ base: 6, md: 8 }}
          borderRadius="lg"
          border="1px solid"
          borderColor="whiteAlpha.200"
          bg="whiteAlpha.50"
          transition="all 0.2s"
          _hover={{ 
            borderColor: "whiteAlpha.300",
            bg: "whiteAlpha.100",
            transform: "translateY(-2px)"
          }}
        >
          <Box fontSize="xs" color="purple.400" mb={3} fontWeight={600} textTransform="uppercase" letterSpacing="wider">
            Research Update
          </Box>
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={3} fontWeight={600} lineHeight="1.3" letterSpacing="-0.01em">
            HistoCore is now production-ready
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} mb={4} lineHeight="1.7" color="gray.300">
            What started as a research framework has evolved into production-grade infrastructure
            with 4,196 tests, 8-12x training optimization, federated learning, and clinical PACS integration.
          </Text>
          <Text fontSize="sm" color="gray.500">
            6 May 2026
          </Text>
        </Link>
      </Box>

      <Box as="article" mb={{ base: 10, md: 16 }}>
        <Link 
          as={NextLink} 
          href="/posts/histocore-framework" 
          style={{ textDecoration: 'none' }}
          display="block"
          p={{ base: 6, md: 8 }}
          borderRadius="lg"
          border="1px solid"
          borderColor="whiteAlpha.200"
          bg="whiteAlpha.50"
          transition="all 0.2s"
          _hover={{ 
            borderColor: "whiteAlpha.300",
            bg: "whiteAlpha.100",
            transform: "translateY(-2px)"
          }}
        >
          <Box fontSize="xs" color="purple.400" mb={3} fontWeight={600} textTransform="uppercase" letterSpacing="wider">
            Research
          </Box>
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={3} fontWeight={600} lineHeight="1.3" letterSpacing="-0.01em">
            I built an AI framework for cancer detection
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} mb={4} lineHeight="1.7" color="gray.300">
            Cancer kills because we find it too late. What if we could change that with better tools 
            that any researcher could use to build smarter diagnostic systems?
          </Text>
          <Text fontSize="sm" color="gray.500">
            18 Jan 2025
          </Text>
        </Link>
      </Box>

      <Box as="article" mb={{ base: 10, md: 16 }}>
        <Link 
          as={NextLink} 
          href="/posts/home-lab-setup" 
          style={{ textDecoration: 'none' }}
          display="block"
          p={{ base: 6, md: 8 }}
          borderRadius="lg"
          border="1px solid"
          borderColor="whiteAlpha.200"
          bg="whiteAlpha.50"
          transition="all 0.2s"
          _hover={{ 
            borderColor: "whiteAlpha.300",
            bg: "whiteAlpha.100",
            transform: "translateY(-2px)"
          }}
        >
          <Box fontSize="xs" color="purple.400" mb={3} fontWeight={600} textTransform="uppercase" letterSpacing="wider">
            Security
          </Box>
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={3} fontWeight={600} lineHeight="1.3" letterSpacing="-0.01em">
            Building an 18-node security research lab
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} mb={4} lineHeight="1.7" color="gray.300">
            Most people collect stamps or build model trains. I decided to build a full-scale 
            security research lab with 18 nodes, 6 VLANs, and comprehensive attack infrastructure.
          </Text>
          <Text fontSize="sm" color="gray.500">
            15 Jan 2025
          </Text>
        </Link>
      </Box>
    </Container>
  </BlogLayout>
)

export default Posts
