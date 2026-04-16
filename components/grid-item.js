import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <img
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        loading="lazy"
      />
      <LinkOverlay as={NextLink} href={href} scroll={false}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, href, title, thumbnail }) => {
  const destination = href || null
  const imageSrc = thumbnail

  const cardBody = (
    <>
      <img
        src={imageSrc}
        alt={title}
        className="grid-item-thumbnail"
        loading="lazy"
      />
      <Box p={3}>
        <Text mt={2} fontSize={20} fontWeight="semibold">
          {title}
        </Text>
        <Text fontSize={14} color="gray.500">
          {children}
        </Text>
      </Box>
    </>
  )

  if (!destination) {
    return (
      <Box
        w="100%"
        textAlign="center"
        borderRadius="lg"
        overflow="hidden"
        transition="all 0.3s"
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: 'lg'
        }}
      >
        {cardBody}
      </Box>
    )
  }

  return (
    <LinkBox
      w="100%"
      textAlign="center"
      borderRadius="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'lg'
      }}
    >
      <Box>
        <img
          src={imageSrc}
          alt={title}
          className="grid-item-thumbnail"
          loading="lazy"
        />
        <Box p={3}>
          <LinkOverlay as={NextLink} href={destination} scroll={false}>
            <Text mt={2} fontSize={20} fontWeight="semibold">
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14} color="gray.500">
            {children}
          </Text>
        </Box>
      </Box>
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
