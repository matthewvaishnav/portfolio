import NextLink from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
`

const Logo = () => (
  <NextLink href="/" scroll={false}>
    <LogoBox>
      <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontFamily="heading"
        fontWeight="bold"
      >
        Matthew Vaishnav
      </Text>
    </LogoBox>
  </NextLink>
)

export default Logo
