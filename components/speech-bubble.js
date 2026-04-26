import { Box, Text, useColorModeValue } from '@chakra-ui/react'

const SpeechBubble = () => {
  return (
    <Box
      position="relative"
      bg={useColorModeValue('rgba(0,0,0,0.6)', 'rgba(255,255,255,0.1)')}
      color="white"
      px={{ base: 3, md: 5 }}
      py={{ base: 2.5, md: 3 }}
      borderRadius={{ base: 'md', md: 'lg' }}
      w="fit-content"
      maxW="calc(100vw - 1rem)"
      mx="auto"
      mt={4}
      mb={6}
      backdropFilter="blur(10px)"
      textAlign="center"
    >
      <Text
        fontSize="clamp(0.65rem, 2vw, 1rem)"
        lineHeight="tall"
        whiteSpace="nowrap"
      >
        Hello, I&apos;m a computational systems engineer based in Kitchener!
      </Text>
    </Box>
  )
}

export default SpeechBubble
