import Head from 'next/head'

const SITE_DESCRIPTION =
  'Independent research in computational pathology, paired-acquisition representation learning, and the reliability of biological measurements.'

const Main = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta name="author" content="Matthew Vaishnav" />
      <meta name="color-scheme" content="light" />
      <link rel="icon" href="/portfolio/favicon.svg" type="image/svg+xml" />
      <meta property="og:site_name" content="Matthew Vaishnav" />
      <meta property="og:title" content="Matthew Vaishnav — Computational Pathology Research" />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <title>Matthew Vaishnav — Computational Pathology Research</title>
    </Head>

    <a className="skip-link" href="#main-content">Skip to content</a>
    <main className="academic-page" id="main-content">
      {children}
    </main>

    <style jsx global>{`
      html {
        scroll-behavior: auto;
      }

      body {
        background: #fff !important;
        color: #171717 !important;
        font-family: Georgia, 'Times New Roman', serif !important;
      }

      .academic-page {
        max-width: 740px;
        padding: 0 25px;
        margin: 78px auto 110px;
        font-size: 17px;
        line-height: 1.58;
      }

      .academic-page h1 {
        margin: 0 0 25px;
        font-size: 32px;
        font-weight: 600;
        line-height: 1.2;
        letter-spacing: 0;
      }

      .academic-page h2 {
        margin: 35px 0 9px;
        font-size: 20px;
        line-height: 1.3;
        font-weight: 600;
        letter-spacing: 0;
      }

      .academic-page p {
        margin: 0 0 19px;
      }

      .academic-page a {
        color: #0645ad;
        text-decoration: underline;
        text-underline-offset: 2px;
      }

      .academic-page a:hover {
        color: #002b76;
      }

      .academic-page a:focus-visible,
      .skip-link:focus-visible {
        outline: 2px solid #0645ad;
        outline-offset: 3px;
      }

      .academic-page ul {
        margin: 4px 0 24px;
        padding-left: 25px;
      }

      .academic-page li {
        margin-bottom: 10px;
      }

      .academic-page .links {
        margin-top: 29px;
      }

      .academic-page .links a {
        white-space: nowrap;
      }

      .academic-page .muted,
      .academic-page .back-link {
        color: #4b4b4b;
        font-size: 15px;
      }

      .academic-page .back-link {
        margin-bottom: 24px;
      }

      .academic-page .research-item {
        margin-bottom: 27px;
      }

      .academic-page .research-item h2 {
        margin-bottom: 7px;
      }

      .academic-page .research-item p {
        margin-bottom: 9px;
      }

      .skip-link {
        position: absolute;
        top: -100px;
        left: 16px;
        background: #fff;
        padding: 8px 12px;
        z-index: 10;
      }

      .skip-link:focus {
        top: 12px;
      }

      @media (max-width: 600px) {
        .academic-page {
          margin: 39px auto 75px;
          padding: 0 20px;
          font-size: 16px;
          line-height: 1.6;
        }

        .academic-page h1 {
          font-size: 29px;
          margin-bottom: 21px;
        }

        .academic-page h2 {
          font-size: 19px;
        }
      }
    `}</style>
  </>
)

export default Main
