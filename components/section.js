import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, useReducedMotion } from 'framer-motion'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'transition'
})

const Section = ({ children, delay = 0 }) => {
  const reduceMotion = useReducedMotion()

  return (
    <StyledDiv
      initial={reduceMotion ? false : { y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : delay
      }}
      mb={{ base: 8, md: 10 }}
    >
      {children}
    </StyledDiv>
  )
}

export default Section
