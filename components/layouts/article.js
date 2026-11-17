import Head from 'next/head'

const Layout = ({ children, title }) => {
  const pageTitle = title ? `${title} — Matthew Vaishnav` : null

  return (
    <article>
      {pageTitle && (
        <Head>
          <title>{pageTitle}</title>
          <meta name="twitter:title" content={pageTitle} />
          <meta property="og:title" content={pageTitle} />
        </Head>
      )}
      {children}
    </article>
  )
}

export default Layout
