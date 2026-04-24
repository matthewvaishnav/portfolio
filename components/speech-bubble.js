import { Box, Text, useColorModeValue } from '@chakra-ui/react'

const SpeechBubble = () => {
  return (
    <Box
      position="relative"
      bg={useColorModeValue('rgba(0,0,0,0.6)', 'rgba(255,255,255,0.1)')}
      color="white"
      px={{ base: 3, md: 4 }}
      py={{ base: 2.5, md: 3 }}
      borderRadius={{ base: 'md', md: 'lg' }}
      display={{ base: 'block', md: 'inline-block' }}
      w={{ base: '100%', md: 'auto' }}
      maxW={{ base: '100%', md: 'fit-content' }}
      mx="auto"
      mt={4}
      mb={6}
      backdropFilter="blur(10px)"
    >
      <Text
        fontSize={{ base: 'sm', md: 'md' }}
        textAlign="center"
        whiteSpace={{ base: 'normal', md: 'nowrap' }}
        overflowWrap="anywhere"
        lineHeight="tall"
      >
        Hello, I&apos;m a computational systems engineer based in Kitchener!
      </Text>
    </Box>
  )
}

export default SpeechBubble
