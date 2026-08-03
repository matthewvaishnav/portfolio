import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { IoLanguageOutline } from 'react-icons/io5'

const ORIGINAL_ORIGIN = 'https://matthewvaishnav.github.io'
const TRANSLATED_ORIGIN = 'https://matthewvaishnav-github-io.translate.goog'

const languages = [
  { code: 'en', shortLabel: 'EN', nativeLabel: 'English', englishLabel: 'English' },
  { code: 'zh-CN', shortLabel: '中', nativeLabel: '简体中文', englishLabel: 'Chinese' },
  { code: 'ja', shortLabel: '日', nativeLabel: '日本語', englishLabel: 'Japanese' },
  { code: 'ko', shortLabel: '한', nativeLabel: '한국어', englishLabel: 'Korean' }
]

const supportedCodes = new Set(languages.map(language => language.code))

const getActiveLanguage = () => {
  if (typeof window === 'undefined') return 'en'

  const translatedLanguage = new URLSearchParams(window.location.search).get('_x_tr_tl')
  return supportedCodes.has(translatedLanguage) ? translatedLanguage : 'en'
}

const getLanguageUrl = languageCode => {
  const currentUrl = new URL(window.location.href)
  const cleanParams = new URLSearchParams(currentUrl.search)

  cleanParams.delete('_x_tr_sl')
  cleanParams.delete('_x_tr_tl')
  cleanParams.delete('_x_tr_hl')

  if (languageCode === 'en') {
    const englishUrl = new URL(currentUrl.pathname, ORIGINAL_ORIGIN)
    englishUrl.search = cleanParams.toString()
    englishUrl.hash = currentUrl.hash
    return englishUrl.toString()
  }

  const translatedUrl = new URL(currentUrl.pathname, TRANSLATED_ORIGIN)
  cleanParams.set('_x_tr_sl', 'en')
  cleanParams.set('_x_tr_tl', languageCode)
  cleanParams.set('_x_tr_hl', languageCode)
  translatedUrl.search = cleanParams.toString()
  translatedUrl.hash = currentUrl.hash

  return translatedUrl.toString()
}

const LanguageSelector = () => {
  const [activeLanguage, setActiveLanguage] = useState('en')
  const buttonVariant = useColorModeValue('solid', 'outline')
  const buttonBorder = useColorModeValue('transparent', 'orange.300')
  const menuBg = useColorModeValue('white', 'gray.800')
  const menuBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const activeBg = useColorModeValue('teal.50', 'whiteAlpha.100')
  const muted = useColorModeValue('gray.500', 'whiteAlpha.600')

  useEffect(() => {
    setActiveLanguage(getActiveLanguage())
  }, [])

  const activeOption =
    languages.find(language => language.code === activeLanguage) || languages[0]

  const selectLanguage = languageCode => {
    if (languageCode === activeLanguage) return
    window.location.assign(getLanguageUrl(languageCode))
  }

  return (
    <Menu placement="bottom-end" isLazy>
      <MenuButton
        as={Button}
        aria-label={`Select language. Current language: ${activeOption.englishLabel}`}
        colorScheme={useColorModeValue('teal', 'orange')}
        variant={buttonVariant}
        borderColor={buttonBorder}
        minW={{ base: '40px', md: '84px' }}
        px={{ base: 0, md: 3 }}
      >
        <Box as="span" display={{ base: 'none', md: 'inline-flex' }} mr={2}>
          <IoLanguageOutline />
        </Box>
        <Box as="span">{activeOption.shortLabel}</Box>
        <ChevronDownIcon display={{ base: 'none', md: 'inline-block' }} ml={1.5} />
      </MenuButton>

      <MenuList
        minW="210px"
        p={2}
        mt={1}
        bg={menuBg}
        borderColor={menuBorder}
        borderRadius="xl"
        boxShadow="xl"
      >
        {languages.map(language => {
          const isActive = language.code === activeLanguage

          return (
            <MenuItem
              key={language.code}
              onClick={() => selectLanguage(language.code)}
              bg={isActive ? activeBg : 'transparent'}
              borderRadius="lg"
              px={3}
              py={2.5}
              _hover={{ bg: activeBg }}
              _focus={{ bg: activeBg }}
            >
              <Box w="18px" mr={3} color="teal.400">
                {isActive && <CheckIcon boxSize={3} />}
              </Box>
              <Box flex="1">
                <Text fontWeight={isActive ? 700 : 600} lineHeight="short">
                  {language.nativeLabel}
                </Text>
                {language.nativeLabel !== language.englishLabel && (
                  <Text mt={1} color={muted} fontSize="xs" lineHeight="short">
                    {language.englishLabel}
                  </Text>
                )}
              </Box>
              <Text color={muted} fontSize="xs" fontWeight={700}>
                {language.shortLabel}
              </Text>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default LanguageSelector
