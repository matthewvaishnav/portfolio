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
  <Layout title="replay">
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
        replay <Badge>2026</Badge>
      </Title>
      <P>
        Record terminal sessions and automatically generate Ansible playbooks from your actions.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Ansible, YAML</span>
        </ListItem>
      </List>

      <WorkImage src="/portfolio/images/works/replay-hero.svg" alt="replay" />
    </Container>
  </Layout>
)

export default Work
