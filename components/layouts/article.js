import Head from 'next/head'
import { motion, useReducedMotion } from 'framer-motion'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

const Layout = ({ children, title }) => {
  const reduceMotion = useReducedMotion()
  const pageTitle = title ? `${title} - Matthew Vaishnav` : null

  return (
    <motion.article
      initial={reduceMotion ? false : 'hidden'}
      animate="enter"
      exit={reduceMotion ? undefined : 'exit'}
      variants={variants}
      transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
      style={{ position: 'relative' }}
    >
      {pageTitle && (
        <Head>
          <title>{pageTitle}</title>
          <meta name="twitter:title" content={pageTitle} />
          <meta property="og:title" content={pageTitle} />
        </Head>
      )}

      {children}
      <GridItemStyle />
    </motion.article>
  )
}

export default Layout
