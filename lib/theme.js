import { extendTheme } from '@chakra-ui/react'

// Keep Chakra available for older archived pages, but make the public site
// consistently light and unstyled like a traditional academic homepage.
const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  styles: {
    global: {
      body: {
        bg: '#ffffff',
        color: '#171717'
      }
    }
  }
})

export default theme
