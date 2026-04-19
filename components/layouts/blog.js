import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const BlogLayout = ({ children, title }) => {
  const t = `${title} - Matthew Vaishnav`
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Matthew's blog" />
        <meta name="author" content="Matthew Vaishnav" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>{t}</title>
      </Head>

      <NavBar path="/posts" />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default BlogLayout