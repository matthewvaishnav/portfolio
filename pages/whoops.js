import {
  Badge,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const Work = () => (
  <Layout title="whoops">
    <Container>
      <Title>
        whoops <Badge>2026</Badge>
      </Title>
      <P>
        A pre-execution safety layer for destructive infrastructure commands. Instead of only
        blocking a command, whoops tries to explain the likely blast radius and then requires an
        explicit confirmation for high-risk actions.
      </P>

      <Heading as="h3" size="sm" mt={7} mb={3}>
        Live analysis surfaces
      </Heading>
      <List ml={4} spacing={2}>
        <ListItem>Kubernetes namespace/resource deletion, drain, scale, taint, service/ingress/PVC/secret relationships, and HPA targets.</ListItem>
        <ListItem>Terraform destroy/apply/state operations using plan/state inspection.</ListItem>
        <ListItem>AWS EC2, RDS, S3, EKS, CloudFormation, and IAM destructive actions through live boto3 queries.</ListItem>
        <ListItem>systemd dependency impact, Docker prune/remove operations, recursive filesystem deletion, and destructive SQL patterns.</ListItem>
      </List>

      <Heading as="h3" size="sm" mt={7} mb={3}>
        Safety model
      </Heading>
      <P>
        A shell hook routes dangerous command families through the analyzer. Risky operations can be
        checked without execution, high-risk actions require a target-specific confirmation phrase,
        and intercepted commands are written to an append-only audit log.
      </P>

      <List ml={4} my={6} spacing={2}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/matthewvaishnav/whoops" target="_blank" rel="noopener noreferrer">
            GitHub repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, shell hooks, Kubernetes/Terraform/AWS/systemd/Docker/SQL adapters</span>
        </ListItem>
        <ListItem>
          <Meta>Verification</Meta>
          <Text as="span">Repository includes an automated pytest suite; the current portfolio does not reuse the older interception-rate or incident-reduction claims from the security archive.</Text>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
