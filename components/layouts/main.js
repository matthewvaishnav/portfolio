import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import NavBar from '../navbar'
import VoxelDogLoader from '../voxel-dog-loader'
import SpeechBubble from '../speech-bubble'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const SITE_DESCRIPTION =
  "Matthew Vaishnav's computational pathology research on identifiability, controlled falsification, measurement reliability, generalization, and auditable evidence."

const Main = ({ children, router }) => {
  const isResearchRoute = router.asPath.startsWith('/research')

  return (
    <Box as="main" pb={{ base: 8, md: 12 }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="author" content="Matthew Vaishnav" />
        <link rel="icon" href="/portfolio/favicon.svg" type="image/svg+xml" />
        <meta property="og:site_name" content="Matthew Vaishnav Research" />
        <meta property="og:title" content="Matthew Vaishnav — Computational Pathology & ML" />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <title>Matthew Vaishnav — Computational Pathology & ML</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container
        maxW="container.md"
        pt={{ base: 14, md: 16 }}
        px={{ base: 5, md: 6 }}
      >
        <LazyVoxelDog />
        {!isResearchRoute && <SpeechBubble />}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
