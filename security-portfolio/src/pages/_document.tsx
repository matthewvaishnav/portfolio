import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style jsx global>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes up {
            from {
              opacity: 0;
              transform: translateY(22px);
              filter: blur(2px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }
          
          body::before {
            content: '';
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 0;
            background:
              radial-gradient(ellipse 80% 60% at 20% 10%, rgba(74,100,220,0.045) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 85% 80%, rgba(200,214,248,0.025) 0%, transparent 55%),
              radial-gradient(ellipse 40% 50% at 60% 40%, rgba(82,201,122,0.015) 0%, transparent 50%);
          }
          
          #grain {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 9998;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
            opacity: 0.45;
            mix-blend-mode: overlay;
          }
        `}</style>
      </Head>
      <body>
        <div id="grain"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}