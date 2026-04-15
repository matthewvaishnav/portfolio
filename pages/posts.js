import { Container, Heading, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>
      <Box>
        Coming soon...
      </Box>
    </Container>
  </Layout>
)

export default Posts
