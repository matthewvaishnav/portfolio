import { forwardRef } from 'react'
import { Box, Spinner, Text } from '@chakra-ui/react'

export const LaptopSceneSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    transform="translate(-50%, -50%)"
    aria-label="Loading 3D laptop"
  />
)

export const LaptopSceneContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="laptop-scene"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

LaptopSceneContainer.displayName = 'LaptopSceneContainer'

export const LaptopSceneFallback = () => (
  <LaptopSceneContainer>
    <Text
      position="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
      fontSize="sm"
      color="gray.500"
      textAlign="center"
    >
      3D preview unavailable
    </Text>
  </LaptopSceneContainer>
)

const LaptopSceneLoader = () => (
  <LaptopSceneContainer>
    <LaptopSceneSpinner />
  </LaptopSceneContainer>
)

export default LaptopSceneLoader
