import { Box, Link, Stack, Wrap, WrapItem } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={10}>
      <Stack spacing={2} align="center">
        <Box>Matthew Vaishnav | CST @ Conestoga | Class of 2027</Box>
        <Box>Kitchener-Waterloo, Ontario</Box>
        <Wrap justify="center" spacing={{ base: 3, md: 4 }}>
          <WrapItem>
            <Link href="https://github.com/matthewvaishnav" target="_blank">
              GitHub
            </Link>
          </WrapItem>
          <WrapItem>
            <Link
              href="https://www.linkedin.com/in/matthew-vaishnav-279670229/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href="https://tryhackme.com/p/matthew.vaishnav" target="_blank">
              TryHackMe
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href="mailto:matthewvaishnav@gmail.com" wordBreak="break-word">
              matthewvaishnav@gmail.com
            </Link>
          </WrapItem>
        </Wrap>
      </Stack>
    </Box>
  )
}

export default Footer
