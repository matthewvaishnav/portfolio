import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    html: {
      scrollBehavior: 'smooth'
    },
    body: {
      bg: mode('#f7f9fc', '#202023')(props),
      color: mode('#172033', 'whiteAlpha.900')(props),
      lineHeight: 1.7,
      transitionProperty: 'background-color, color',
      transitionDuration: '200ms'
    },
    '::selection': {
      bg: mode('#b2f5ea', '#285e61')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'page-title': {
        fontSize: { base: '3xl', md: '4xl' },
        lineHeight: 1.1,
        letterSpacing: '-0.025em',
        marginBottom: 2
      },
      'section-title': props => ({
        textDecoration: 'underline',
        fontSize: 20,
        lineHeight: 1.3,
        textUnderlineOffset: 6,
        textDecorationColor: mode('#64748b', '#a0aec0')(props),
        textDecorationThickness: 4,
        marginTop: 4,
        marginBottom: 5
      })
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#0f766e', '#88ccca')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
