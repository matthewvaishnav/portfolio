import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <Box mb={2}>
        Matthew Vaishnav | CST @ Conestoga | Class of 2027
      </Box>
      <Box mb={2}>
        Kitchener-Waterloo, Ontario
      </Box>
      <Box>
        <Link href="https://github.com/matthewvaishnav" target="_blank" mr={4}>GitHub</Link>
        <Link href="https://www.linkedin.com/in/matthew-vaishnav-279670229/" target="_blank" mr={4}>LinkedIn</Link>
        <Link href="https://tryhackme.com/p/matthew.vaishnav" target="_blank" mr={4}>TryHackMe</Link>
        <Link href="mailto:matthewvaishnav@gmail.com">matthewvaishnav@gmail.com</Link>
      </Box>
    </Box>
  )
}

export default Footer
