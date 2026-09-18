import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          @font-face {
            font-family: 'Dropline';
            src: url('/portfolio/fonts/DroplineRegular-Wpegz.otf') format('opentype');
            font-display: swap;
            font-style: normal;
            font-weight: 400 700;
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
