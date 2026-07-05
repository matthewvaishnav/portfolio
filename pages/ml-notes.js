import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const noteSections = [
  {
    title: 'Model architecture notes',
    items: [
      'transformers',
      'mixture-of-experts',
      'attention and KV-cache pressure',
      'long-context inference',
      'architecture/hardware co-design'
    ]
  },
  {
    title: 'Computational pathology ML',
    items: [
      'whole-slide modeling',
      'multiple-instance learning',
      'pathology foundation-model features',
      'scanner/site robustness'
    ]
  },
  {
    title: 'Experiment engineering',
    items: [
      'reproducible scripts',
      'ablations',
      'repeated seeds',
      'baselines',
      'claim boundaries'
    ]
  }
]

const NoteCard = ({ title, items }) => (
  <Box
    as="section"
    p={{ base: 5, md: 6 }}
    border="1px solid"
    borderColor="whiteAlpha.200"
    bg="whiteAlpha.50"
    borderRadius="lg"
  >
    <Heading as="h2" fontSize={{ base: 'lg', md: 'xl' }} mb={4} fontWeight={600}>
      {title}
    </Heading>
    <List spacing={2} color="gray.300">
      {items.map(item => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </List>
  </Box>
)

const MlNotes = () => (
  <Layout title="ML Notes">
    <Container maxW="container.md" px={{ base: 0, md: 0 }}>
      <Box pt={{ base: 8, md: 12 }} mb={{ base: 10, md: 12 }}>
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} mb={4} fontWeight={600}>
          ML Notes
        </Heading>
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.400" lineHeight="1.7" mb={6}>
          Reading notes and technical reflections on deep learning, representation learning,
          and computational pathology ML.
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.300" lineHeight="1.8">
          These are research-learning notes, not formal tutorials or claims of expertise. I use
          this section to write down what I am learning from papers, model architectures,
          experiments, and implementation work.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mb={{ base: 8, md: 10 }}>
        {noteSections.map(section => (
          <NoteCard key={section.title} {...section} />
        ))}

        <Box
          as="section"
          p={{ base: 5, md: 6 }}
          border="1px solid"
          borderColor="whiteAlpha.200"
          bg="whiteAlpha.50"
          borderRadius="lg"
        >
          <Heading as="h2" fontSize={{ base: 'lg', md: 'xl' }} mb={4} fontWeight={600}>
            Earlier systems/security work
          </Heading>
          <Text color="gray.300" lineHeight="1.7" mb={4}>
            Earlier technical work included home-lab and defensive-security practice. That
            remains part of my systems background, but my current portfolio focus is
            computational pathology research engineering and machine-learning research notes.
          </Text>
          <Link as={NextLink} href="/security" color="purple.300" textDecoration="underline">
            Older systems/security background
          </Link>
        </Box>
      </SimpleGrid>

      <Box
        borderTop="1px solid"
        borderColor="whiteAlpha.200"
        pt={6}
        color="gray.400"
        lineHeight="1.7"
      >
        These notes are personal technical reflections and research-learning notes. They are
        not clinical guidance, deployment documentation, or peer-reviewed claims.
      </Box>
    </Container>
  </Layout>
)

export default MlNotes
