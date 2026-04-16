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
  <Layout title="SENTINEL">
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
        SENTINEL <Badge>2026</Badge>
      </Title>
      <P>
        A hardened anti-DDoS system built around fast detection,
        distributed state, and production-style deployment. Designed to keep
        request handling responsive while heavy analysis runs off the main path.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/matthewvaishnav/sentinel">
            https://github.com/matthewvaishnav/sentinel <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux/macOS/Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, Redis, WebSockets</span>
        </ListItem>
      </List>

      <WorkImage src="/portfolio/images/works/sentinel-hero.svg" alt="SENTINEL" />
      <WorkImage src="/portfolio/images/works/sentinel-detail.svg" alt="SENTINEL" />
    </Container>
  </Layout>
)

export default Work
