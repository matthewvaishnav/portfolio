import { Box, Link, Stack, Wrap, WrapItem } from '@chakra-ui/react'

const Footer = () => (
  <Box as="footer" textAlign="center" opacity={0.55} fontSize="sm" mt={10}>
    <Stack spacing={2} align="center">
      <Box>Matthew Vaishnav | Computer Programming @ Conestoga | 2026–2027</Box>
      <Box>Kitchener-Waterloo, Ontario</Box>
      <Wrap justify="center" spacing={{ base: 3, md: 4 }}>
        <WrapItem>
          <Link
            href="https://github.com/matthewvaishnav"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </WrapItem>
        <WrapItem>
          <Link
            href="https://www.linkedin.com/in/matthew-vaishnav-594312403/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
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

export default Footer
