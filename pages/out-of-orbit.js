import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <DogSpinner />
})

import dynamic from 'next/dynamic'
import { DogSpinner } from '../components/voxel-dog-loader'

const Work = () => (
  <Layout title="Out of Orbit">
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg="whiteAlpha.200"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <LazyVoxelDog />
      </Box>

      <Title>
        Out of Orbit <Badge>2025</Badge>
      </Title>
      <P>
        Vaporwave-themed arcade shooter with optimized object pooling and retro aesthetics.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity, C#, Shader Graph</span>
        </ListItem>
      </List>

      <WorkImage src="/portfolio/images/works/orbit-hero.svg" alt="Out of Orbit" />
    </Container>
  </Layout>
)

export default Work
