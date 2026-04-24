import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, Flex, Text } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box mb={6}>
    <Flex align="center" mb={3} wrap="wrap" rowGap={2}>
      <Link as={NextLink} href="/systems-engineering" display="flex" alignItems="center" _hover={{ textDecoration: "underline" }}>
        <ArrowBackIcon mr={2} />
        <Text fontSize="sm" fontWeight="medium">Back to Portfolio</Text>
      </Link>
    </Flex>
    <Heading as="h1" fontSize={{ base: 24, md: 28 }} fontWeight="bold" lineHeight="1.2">
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Box mb={6} borderRadius="xl" overflow="hidden" boxShadow="2xl">
    <Image w="full" src={src} alt={alt} />
  </Box>
)

export const Meta = ({ children }) => (
  <Text as="span" fontWeight="bold" mr={2}>
    {children}
  </Text>
)
