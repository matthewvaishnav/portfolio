import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          @font-face {
            font-family: 'Dropline';
            src: url('/cst-portfolio/fonts/DroplineRegular-Wpegz.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
