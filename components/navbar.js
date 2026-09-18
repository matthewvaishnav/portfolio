import { forwardRef } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children, ...props }) => {
  const currentPath = path.split('?')[0].replace(/\/$/, '') || '/'
  const targetPath = href.replace(/\/$/, '') || '/'
  const active = currentPath === targetPath
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      aria-current={active ? 'page' : undefined}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))
MenuLink.displayName = 'MenuLink'

const Navbar = ({ path, ...props }) => (
  <Box
    position="fixed"
    as="nav"
    w="100%"
    bg={useColorModeValue('#ffffff40', '#20202380')}
    css={{ backdropFilter: 'blur(10px)' }}
    zIndex={2}
    {...props}
  >
    <Container
      display="flex"
      p={2}
      maxW="container.md"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing="tighter">
          <Logo />
        </Heading>
      </Flex>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <LinkItem href="/research" path={path}>
          Research
        </LinkItem>
        <Link
          href="https://github.com/matthewvaishnav/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          display="inline-flex"
          alignItems="center"
          gap={1}
          p={2}
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        >
          <IoLogoGithub />
          Source
        </Link>
      </Stack>

      <Box flex={1} textAlign="right">
        <ThemeToggleButton />

        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
          <Menu isLazy id="navbar-menu">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Open navigation menu"
            />
            <MenuList>
              <MenuItem as={MenuLink} href="/">
                About
              </MenuItem>
              <MenuItem as={MenuLink} href="/research">
                Research
              </MenuItem>
              <MenuItem
                as={Link}
                href="https://github.com/matthewvaishnav/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                View source
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Container>
  </Box>
)

export default Navbar
