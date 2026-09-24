import {
  Badge,
  Container,
  Heading,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import { Title, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="Out of Orbit">
    <Container>
      <Title>
        Out of Orbit <Badge>2025–2026</Badge>
      </Title>
      <P>
        A C++17/Raylib arcade shoot-’em-up built around fast survival combat, four ship
        archetypes, Fire/Ice/Spirit weapon identities, escalating waves and bosses, and a
        shop-driven upgrade loop.
      </P>

      <Heading as="h3" size="sm" mt={7} mb={3}>
        Current architecture
      </Heading>
      <List ml={4} spacing={2}>
        <ListItem>Fixed player/boss bullet pools to avoid mid-frame allocation churn.</ListItem>
        <ListItem>Four ships: Interceptor, Brawler, Phantom, and Titan.</ListItem>
        <ListItem>Fire, Ice, and Spirit modes with distinct status and chaining behavior.</ListItem>
        <ListItem>Data-driven wave, enemy, boss, and upgrade tables in separate include files.</ListItem>
        <ListItem>Dedicated world, HUD, drawing, VFX, and data translation units around a still-large main gameplay file.</ListItem>
      </List>

      <Heading as="h3" size="sm" mt={7} mb={3}>
        Current boundary
      </Heading>
      <P>
        The game is playable code, not a finished commercial release. The repository still tracks a
        planned split of the remaining large <code>main.cpp</code>, debug instrumentation, balance
        review, and visual documentation as explicit remaining work.
      </P>

      <List ml={4} my={6} spacing={2}>
        <ListItem>
          <Meta>Source</Meta>
          <Text as="span">Private repository; this page is the public project summary.</Text>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux; portable C++17/Raylib codebase</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++17, Raylib, Make</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
