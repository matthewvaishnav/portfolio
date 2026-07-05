import { Heading, Text, Box, Avatar, Flex, Divider, List, ListItem } from '@chakra-ui/react'
import BlogLayout from '../../components/layouts/blog'
import P from '../../components/paragraph'

const articleHeadingProps = {
  fontSize: { base: '2xl', md: '4xl' },
  mb: 4,
  fontWeight: 600,
  lineHeight: '1.2',
  letterSpacing: '-0.02em'
}

const leadTextProps = {
  fontSize: { base: 'lg', md: 'xl' },
  mb: 8,
  lineHeight: '1.7',
  color: 'gray.300'
}

const sectionHeadingProps = {
  fontSize: { base: 'xl', md: '2xl' },
  mt: 12,
  mb: 4,
  fontWeight: 600,
  letterSpacing: '-0.01em'
}

const Post = () => (
  <BlogLayout title="What I found interesting about DeepSeek-V4 architecture">
    <Box>
      <Box fontSize="xs" color="purple.400" mb={4} textTransform="uppercase" letterSpacing="wider">
        ML NOTES
      </Box>

      <Heading as="h1" {...articleHeadingProps}>
        What I found interesting about DeepSeek-V4 architecture
      </Heading>

      <Text {...leadTextProps}>
        I am interested in DeepSeek-V4 less as a product and more as an architecture case
        study.
      </Text>

      <Flex align="center" wrap="wrap" gap={3} mb={8}>
        <Avatar size="sm" name="Matthew Vaishnav" src="/portfolio/images/matthew.jpg" />
        <Box>
          <Text fontSize="sm" fontWeight={600}>Matthew Vaishnav</Text>
          <Text fontSize="sm" color="gray.400">Reading note to expand</Text>
        </Box>
      </Flex>

      <Divider mb={8} borderColor="whiteAlpha.200" />

      <Box fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7" color="gray.200">
        <Heading as="h2" {...sectionHeadingProps}>
          Why I care about it
        </Heading>

        <P>
          The parts I want to understand better are:
        </P>

        <List ml={4} mb={6} spacing={2}>
          <ListItem>how mixture-of-experts scaling changes compute allocation</ListItem>
          <ListItem>how long-context models manage memory pressure</ListItem>
          <ListItem>how attention and KV-cache design affect inference cost</ListItem>
          <ListItem>how architecture choices interact with hardware constraints</ListItem>
          <ListItem>
            what this means for practical research engineers using long-context coding models
          </ListItem>
        </List>

        <P>
          This is a reading note, not a benchmark review. I am not claiming independent
          verification of reported performance. The goal is to understand the architectural
          ideas well enough to reason about their tradeoffs.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          MoE as a scaling strategy
        </Heading>

        <P>
          I want to use this section to compare sparse expert routing with dense model scaling
          after reading official material and implementation notes. The main question for me is
          how expert selection changes the relationship between parameter count, activated
          compute, memory movement, and training or inference complexity.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          Long-context inference and KV-cache pressure
        </Heading>

        <P>
          Long-context models are especially interesting because context length is not just a
          user-facing feature. It changes the memory profile of inference. I want to understand
          how attention design, cache layout, and context management shape the cost of working
          across large repositories, long experiment logs, and multi-file research workflows.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          Architecture/hardware co-design
        </Heading>

        <P>
          Architecture decisions only become practical when they map well onto available
          hardware. I want to pay attention to the boundary between algorithmic elegance and
          system behavior: routing overhead, memory bandwidth, communication patterns, batch
          sizing, and serving constraints.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          What I want to understand better
        </Heading>

        <P>
          Before turning this into a stronger note, I want to read official architecture
          descriptions closely and separate reported design choices from my own interpretation.
          I also want to compare the architecture questions with other long-context and
          mixture-of-experts systems without treating any single model announcement as a final
          answer.
        </P>

        <Heading as="h2" {...sectionHeadingProps}>
          How this connects to my own work
        </Heading>

        <P>
          Long-context coding models matter to me because I use them to inspect large research
          codebases, reason over experiment outputs, and maintain reproducible computational
          pathology pipelines. I am especially interested in how architecture choices affect
          reliability, cost, and context handling during real research-engineering workflows.
        </P>
      </Box>
    </Box>
  </BlogLayout>
)

export default Post
