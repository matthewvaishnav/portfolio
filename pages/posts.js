import { Container, Heading, Box, SimpleGrid, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>
      <SimpleGrid columns={[1]} gap={6}>
        <Box 
          p={4} 
          borderWidth="1px" 
          borderRadius="lg" 
          _hover={{ borderColor: "teal.500", transform: "translateY(-2px)", transition: "all 0.2s" }}
        >
          <Link as={NextLink} href="/posts/home-lab-setup" style={{ textDecoration: 'none' }}>
            <Heading as="h4" fontSize={18} mb={2}>
              Building an 18-Node Security Research Lab
            </Heading>
            <Box fontSize="sm" color="gray.500" mb={2}>
              January 2025
            </Box>
            <Box fontSize="sm">
              Step-by-step guide to building a production-grade security lab with Security Onion, 
              pfSense, and 6 VLANs for threat detection and attack simulation.
            </Box>
            <Box mt={2} color="teal.500" fontSize="sm">
              Read more <ChevronRightIcon />
            </Box>
          </Link>
        </Box>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Posts
