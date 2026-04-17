import { Container, Heading, Box, Link, Text } from '@chakra-ui/react'
import BlogLayout from '../components/layouts/blog'
import NextLink from 'next/link'

const Posts = () => (
  <BlogLayout title="Posts">
    <Box>
      <Heading as="h1" fontSize={48} mb={2} fontWeight={700} color="black">
        Matthew Vaishnav
      </Heading>
      <Box mb={12} fontSize="lg" color="gray.800">
        Security researcher, systems engineer, and lab builder
      </Box>
      
      <Box mb={12}>
        <Link 
          as={NextLink} 
          href="/posts/home-lab-setup" 
          style={{ textDecoration: 'none' }}
          display="block"
          mb={8}
          pb={8}
          borderBottom="1px solid"
          borderColor="gray.200"
          _hover={{ opacity: 0.8 }}
        >
          <Box fontSize="xs" color="purple.600" mb={2} textTransform="uppercase" letterSpacing="wider">
            SECURITY
          </Box>
          <Heading as="h2" fontSize={32} mb={3} fontWeight={700} color="black" lineHeight="1.2">
            Building an 18-node security research lab
          </Heading>
          <Text fontSize="lg" color="gray.800" mb={3} lineHeight="1.6">
            Most people collect stamps or build model trains. I decided to build a full-scale 
            security research lab with 18 nodes, 6 VLANs, and comprehensive attack infrastructure.
          </Text>
          <Box fontSize="sm" color="gray.600">
            By Matthew Vaishnav — 15 Jan 2025
          </Box>
        </Link>
      </Box>
    </Box>
  </BlogLayout>
)

export default Posts
