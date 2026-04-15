import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: any) => ({
    body: {
      bg: '#07080e',
      color: '#6e7890',
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '17px',
      lineHeight: 1.6,
      WebkitFontSmoothing: 'antialiased',
      paddingTop: '58px'
    },
    '*': {
      boxSizing: 'border-box'
    },
    'html': {
      scrollBehavior: 'smooth',
      bg: '#07080e'
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'page-title': {
        fontSize: 'clamp(3rem, 5.5vw, 5.2rem)',
        fontWeight: 700,
        lineHeight: 1.04,
        letterSpacing: '-0.03em',
        color: '#e8ecf8',
        fontFamily: "'Space Grotesk', sans-serif"
      }
    }
  },
  Link: {
    baseStyle: {
      textUnderlineOffset: 3
    }
  }
}

const fonts = {
  heading: "'Space Grotesk', sans-serif",
  body: "'DM Sans', sans-serif",
  mono: "'JetBrains Mono', monospace"
}

const colors = {
  grassTeal: '#88ccca',
  bg: '#07080e',
  surface: '#0c0d16',
  surface2: '#111320',
  surface3: '#161828',
  border: 'rgba(255,255,255,0.065)',
  borderHi: 'rgba(255,255,255,0.13)',
  accent: '#c8d6f8',
  accent2: '#f5c842',
  accent3: '#52c97a',
  accentDim: 'rgba(200,214,248,0.45)',
  accentGlow: 'rgba(200,214,248,0.06)',
  text: '#6e7890',
  textMid: '#a0a8be',
  textHi: '#e8ecf8',
  green: '#52c97a',
  amber: '#f5c842',
  red: '#e05252'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors
})

export default theme