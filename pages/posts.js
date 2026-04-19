import { Heading, Box, Link, Text } from '@chakra-ui/react'
import BlogLayout from '../components/layouts/blog'
import NextLink from 'next/link'

const Posts = () => (
  <BlogLayout title="Posts">
    <Box>
      <Heading as="h1" fontSize={48} mb={2} fontWeight={700}>
        Matthew Vaishnav
      </Heading>
      <Box mb={12} fontSize="lg">
        Security researcher, systems engineer, and lab builder
      </Box>
      
      <Box mb={12}>
        <Link 
          as={NextLink} 
          href="/posts/histocore-framework" 
          style={{ textDecoration: 'none' }}
          display="block"
          mb={8}
          pb={8}
          borderBottom="1px solid"
          borderColor="gray.600"
          _hover={{ opacity: 0.8 }}
        >
          <Box fontSize="xs" color="purple.400" mb={2} textTransform="uppercase" letterSpacing="wider">
            RESEARCH
          </Box>
          <Heading as="h2" fontSize={32} mb={3} fontWeight={700} lineHeight="1.2">
            I built an AI framework to democratize cancer detection
          </Heading>
          <Text fontSize="lg" mb={3} lineHeight="1.6">
            Cancer kills because we find it too late. What if we could change that with better tools 
            that any researcher could use to build smarter diagnostic systems?
          </Text>
          <Box fontSize="sm" color="gray.400">
            By Matthew Vaishnav — 18 Jan 2025
          </Box>
        </Link>

        <Link 
          as={NextLink} 
          href="/posts/home-lab-setup" 
          style={{ textDecoration: 'none' }}
          display="block"
          mb={8}
          pb={8}
          borderBottom="1px solid"
          borderColor="gray.600"
          _hover={{ opacity: 0.8 }}
        >
          <Box fontSize="xs" color="purple.400" mb={2} textTransform="uppercase" letterSpacing="wider">
            SECURITY
          </Box>
          <Heading as="h2" fontSize={32} mb={3} fontWeight={700} lineHeight="1.2">
            Building an 18-node security research lab
          </Heading>
          <Text fontSize="lg" mb={3} lineHeight="1.6">
            Most people collect stamps or build model trains. I decided to build a full-scale 
            security research lab with 18 nodes, 6 VLANs, and comprehensive attack infrastructure.
          </Text>
          <Box fontSize="sm" color="gray.400">
            By Matthew Vaishnav — 15 Jan 2025
          </Box>
        </Link>
      </Box>
    </Box>
  </BlogLayout>
)

export default Posts
