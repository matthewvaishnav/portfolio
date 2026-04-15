import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }: any) => {
  const active = path === href
  const inactiveColor = '#a0a8be'
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? '#c8d6f8' : undefined}
      color={active ? '#07080e' : inactiveColor}
      target={target}
      fontSize="14px"
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = (props: any) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="rgba(7,8,14,0.85)"
      css={{ 
        backdropFilter: 'blur(20px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}
      zIndex={200}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Link
            as={NextLink}
            href="/"
            scroll={false}
            p={2}
            fontSize="15px"
            fontWeight="600"
            color="#e8ecf8"
            fontFamily="'Space Grotesk', sans-serif"
            letterSpacing="0.01em"
            _hover={{ textDecoration: 'none' }}
          >
            Matthew Vaishnav
          </Link>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          spacing={1}
        >
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/ctf" path={path}>
            CTF
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://matthewvaishnav.github.io/cst-portfolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
          >
            Programming ↗
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/matthewvaishnav/security-portfolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={Link} href="/">
                  About
                </MenuItem>
                <MenuItem as={Link} href="/projects">
                  Projects
                </MenuItem>
                <MenuItem as={Link} href="/ctf">
                  CTF
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://matthewvaishnav.github.io/cst-portfolio"
                >
                  Programming
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/matthewvaishnav/security-portfolio"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar