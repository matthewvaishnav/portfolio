import NextLink from 'next/link'
import { Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        loading="lazy"
      />
      <LinkOverlay as={NextLink} href={href} scroll={false}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize="sm">{children}</Text>
    </LinkBox>
  </Box>
)

const CardContent = ({ title, thumbnail, children, linked = false, href }) => (
  <>
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      loading="lazy"
    />
    <Box p={3}>
      {linked ? (
        <LinkOverlay as={NextLink} href={href} scroll={false}>
          <Text mt={2} fontSize="xl" fontWeight="semibold">
            {title}
          </Text>
        </LinkOverlay>
      ) : (
        <Text mt={2} fontSize="xl" fontWeight="semibold">
          {title}
        </Text>
      )}
      <Text fontSize="sm" color="gray.500">
        {children}
      </Text>
    </Box>
  </>
)

export const WorkGridItem = ({ children, href, title, thumbnail }) => {
  const sharedProps = {
    w: '100%',
    textAlign: 'center',
    borderRadius: 'lg',
    overflow: 'hidden',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  }

  if (!href) {
    return (
      <Box {...sharedProps}>
        <CardContent title={title} thumbnail={thumbnail}>
          {children}
        </CardContent>
      </Box>
    )
  }

  return (
    <LinkBox
      {...sharedProps}
      _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }}
      _focusWithin={{ boxShadow: 'outline' }}
    >
      <CardContent title={title} thumbnail={thumbnail} href={href} linked>
        {children}
      </CardContent>
    </LinkBox>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
        width: 100%;
        height: auto;
      }
    `}
  />
)
