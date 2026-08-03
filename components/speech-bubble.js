import { Box, Text, useColorModeValue } from '@chakra-ui/react'

const SpeechBubble = () => {
  const background = useColorModeValue('rgba(15, 23, 42, 0.82)', 'rgba(255,255,255,0.10)')
  const border = useColorModeValue('whiteAlpha.300', 'whiteAlpha.200')

  return (
    <Box
      position="relative"
      bg={background}
      color="white"
      px={{ base: 4, md: 5 }}
      py={{ base: 3, md: 3.5 }}
      border="1px solid"
      borderColor={border}
      borderRadius="lg"
      w="fit-content"
      maxW={{ base: '100%', md: '60ch' }}
      mx="auto"
      mt={4}
      mb={{ base: 8, md: 10 }}
      backdropFilter="blur(10px)"
      textAlign="center"
    >
      <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.6">
        Hello, I&apos;m an applied ML and computational pathology research engineer based in Kitchener.
      </Text>
    </Box>
  )
}

export default SpeechBubble
