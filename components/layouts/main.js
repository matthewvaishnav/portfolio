import Head from 'next/head'

const Main = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Matthew Vaishnav — machine learning and computational pathology research." />
      <link rel="icon" href="/portfolio/favicon.svg" type="image/svg+xml" />
      <title>Matthew Vaishnav</title>
    </Head>
    <main id="main-content">
      {children}
    </main>

    <style jsx global>{`
      html, body {
        background: white !important;
        color: black !important;
        font-family: "Times New Roman", Times, serif !important;
        font-size: 16px !important;
        line-height: normal !important;
      }
      body { margin: 8px !important; }
      main { display: block; }
      main h1 {
        font-family: "Times New Roman", Times, serif;
        font-size: 2em;
        font-weight: bold;
        margin: .67em 0;
        line-height: normal;
      }
      main p {
        margin: 1em 0;
      }
      main a {
        color: #0000ee;
        text-decoration: underline;
      }
      main a:visited { color: #551a8b; }
      main a:focus-visible { outline: 2px solid #0000ee; }
    `}</style>
  </>
)

export default Main
