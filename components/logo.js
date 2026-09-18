import NextLink from 'next/link'
import { Link, Text, useColorModeValue } from '@chakra-ui/react'

const Logo = () => (
  <Link
    as={NextLink}
    href="/"
    scroll={false}
    display="inline-flex"
    alignItems="center"
    p={2}
    lineHeight="inherit"
    _hover={{ textDecoration: 'none' }}
  >
    <Text
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
      fontFamily="'M PLUS Rounded 1c', sans-serif"
      fontSize="18px"
      fontWeight="bold"
      lineHeight="inherit"
    >
      Matthew Vaishnav
    </Text>
  </Link>
)

export default Logo
