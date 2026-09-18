import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const reduceMotion = useReducedMotion()
  const mode = useColorModeValue('light', 'dark')

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={mode}
        initial={reduceMotion ? false : { y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={reduceMotion ? undefined : { y: 12, opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.18 }}
      >
        <IconButton
          aria-label={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          colorScheme={mode === 'light' ? 'teal' : 'orange'}
          variant={mode === 'light' ? 'solid' : 'outline'}
          borderColor={mode === 'light' ? 'transparent' : 'orange.300'}
          icon={mode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
