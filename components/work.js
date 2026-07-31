import NextLink from 'next/link'
import { Heading, Box, Image, Link, Flex, Text } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

export const Title = ({ children, backHref = '/', backLabel = 'Back to home' }) => (
  <Box mb={{ base: 7, md: 9 }}>
    <Flex align="center" mb={4} wrap="wrap" rowGap={2}>
      <Link
        as={NextLink}
        href={backHref}
        display="flex"
        alignItems="center"
        _hover={{ textDecoration: 'underline' }}
      >
        <ArrowBackIcon mr={2} />
        <Text fontSize="sm" fontWeight="medium">
          {backLabel}
        </Text>
      </Link>
    </Flex>
    <Heading
      as="h1"
      fontSize={{ base: 24, md: 30 }}
      fontWeight="bold"
      lineHeight="1.25"
      letterSpacing="-0.02em"
    >
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
