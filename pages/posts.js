import { Container, Heading, Box, Link, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'

const Posts = () => (
  <Layout title="Posts">
    <Container maxW="container.md">
      <Box mb={12}>
        <Link 
          as={NextLink} 
          href="/posts/home-lab-setup" 
          style={{ textDecoration: 'none' }}
          display="block"
          mb={8}
          pb={8}
          borderBottom="1px solid"
          borderColor="whiteAlpha.200"
          _hover={{ opacity: 0.8 }}
        >
          <Heading as="h2" fontSize={28} mb={2} fontWeight={600}>
            I built an 18-node security lab in my basement
          </Heading>
          <Text fontSize="sm" color="gray.500" mb={3}>
            By Matthew Vaishnav — 15 Jan 2025
          </Text>
          <Text fontSize="md" color="gray.400">
            Most people collect stamps or build model trains. I decided to build a full-scale 
            security research lab with 18 nodes, 6 VLANs, and enough attack infrastructure to 
            make my ISP nervous.
          </Text>
        </Link>
      </Box>
    </Container>
  </Layout>
)

export default Posts
