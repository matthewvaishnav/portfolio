import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({
  children,
  parentHref = '/programming-works',
  parentLabel = 'Programming Works'
}) => (
  <Box>
    <Link as={NextLink} href={parentHref} scroll={false}>
      {parentLabel}
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image
    borderRadius="xl"
    w="full"
    src={src}
    alt={alt}
    mb={6}
    border="1px solid"
    borderColor="whiteAlpha.300"
    boxShadow="lg"
  />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="teal" mr={2} borderRadius="md" px={2} py={1}>
    {children}
  </Badge>
)
