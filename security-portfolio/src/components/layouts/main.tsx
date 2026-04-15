import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

type Props = {
  children: React.ReactNode
  router: any
}

const Main = ({ children, router }: Props) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Matthew Vaishnav - Security Portfolio" />
        <meta name="author" content="Matthew Vaishnav" />
        <link rel="apple-touch-icon" href="/security-portfolio/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/security-portfolio/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Matthew Vaishnav - Security Portfolio" />
        <meta property="og:type" content="website" />
        <title>Matthew Vaishnav - Security Portfolio</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main