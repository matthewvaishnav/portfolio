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
  <Layout title="whoops">
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
        whoops <Badge>2026</Badge>
      </Title>
      <P>
        Intercepts dangerous shell commands before execution. Your last line of defense against terminal mistakes.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Shell Hooks, Bash</span>
        </ListItem>
      </List>

      <WorkImage src="/portfolio/images/works/whoops-hero.svg" alt="whoops" />
    </Container>
  </Layout>
)

export default Work
