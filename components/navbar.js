import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import LanguageSelector from './language-selector'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.700', 'whiteAlpha.900')
  const activeBg = useColorModeValue('teal.50', 'whiteAlpha.200')
  const activeColor = useColorModeValue('teal.800', 'white')
  const hoverBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      px={3}
      py={2}
      borderRadius="md"
      bg={active ? activeBg : undefined}
      color={active ? activeColor : inactiveColor}
      fontWeight={active ? 'semibold' : 'medium'}
      target={target}
      transition="background-color 0.2s ease, color 0.2s ease"
      _hover={{ textDecoration: 'none', bg: active ? activeBg : hoverBg }}
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props
  const navBg = useColorModeValue('rgba(255, 255, 255, 0.88)', 'rgba(32, 32, 35, 0.82)')
  const navBorder = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  const navShadow = useColorModeValue('0 1px 0 rgba(15, 23, 42, 0.06)', 'none')

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={navBg}
      borderBottomWidth="1px"
      borderColor={navBorder}
      boxShadow={navShadow}
      css={{ backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        py={2}
        px={{ base: 4, md: 2 }}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
        gap={2}
      >
        <Flex align="center" mr={{ base: 2, md: 5 }} minW={0}>
          <Link
            as={NextLink}
            href="/"
            scroll={false}
            p={2}
            fontSize={{ base: '15px', sm: '16px' }}
            fontWeight="bold"
            lineHeight="shorter"
            whiteSpace="nowrap"
            color={useColorModeValue('gray.900', 'whiteAlpha.900')}
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
          <LinkItem href="/research" path={path} fontSize="16px">
            Research
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/matthewvaishnav/portfolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            fontSize="16px"
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} display="flex" justifyContent="flex-end" alignItems="center" gap={2}>
          <LanguageSelector />
          <ThemeToggleButton />

          <Box display={{ base: 'inline-flex', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                size="sm"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={NextLink} href="/" scroll={false}>
                  About
                </MenuItem>
                <MenuItem as={NextLink} href="/research" scroll={false}>
                  Research
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/matthewvaishnav/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
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
