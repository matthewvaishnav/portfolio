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
  <Layout title="drift">
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
        drift <Badge>2026</Badge>
      </Title>
      <P>
        A Git-like server state tracker for people who want to know what
        changed, when it changed, and how to get back to a known-good state.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/matthewvaishnav/drift">
            https://github.com/matthewvaishnav/drift <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux/macOS/Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, CLI tooling</span>
        </ListItem>
      </List>

      <WorkImage src="/portfolio/images/works/drift-hero.svg" alt="drift" />
      <WorkImage src="/portfolio/images/works/drift-detail.svg" alt="drift" />
    </Container>
  </Layout>
)

export default Work
