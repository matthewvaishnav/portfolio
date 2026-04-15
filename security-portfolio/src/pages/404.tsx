import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" color="#e8ecf8" fontFamily="'Space Grotesk', sans-serif">
        Not found
      </Heading>
      <Text color="#6e7890">The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" bg="#e8ecf8" color="#07080e">
          Return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound