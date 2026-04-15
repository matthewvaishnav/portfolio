import { Box, Text, useColorModeValue } from '@chakra-ui/react'

const SpeechBubble = () => {
  return (
    <Box
      position="relative"
      bg={useColorModeValue('rgba(0,0,0,0.6)', 'rgba(255,255,255,0.1)')}
      color="white"
      px={4}
      py={2}
      borderRadius="lg"
      maxW="350px"
      mx="auto"
      mt={4}
      mb={6}
      backdropFilter="blur(10px)"
    >
      <Text fontSize="sm" textAlign="center">
        Hello, I&apos;m a computational systems engineer based in Kitchener!
      </Text>
    </Box>
  )
}

export default SpeechBubble