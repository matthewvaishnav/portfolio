import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import SpeechBubble from '../speech-bubble'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  const isResearchRoute =
    router.asPath.startsWith('/research') || router.asPath.startsWith('/ml-notes')
  
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Matthew Vaishnav's cybersecurity portfolio" />
        <meta name="author" content="Matthew Vaishnav" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Matthew Vaishnav's Portfolio" />
        <meta name="og:title" content="Matthew Vaishnav's Portfolio" />
        <meta property="og:type" content="website" />
        <title>Matthew Vaishnav - Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {!isResearchRoute && (
          <>
            <LazyVoxelDog />
            <SpeechBubble />
          </>
        )}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
