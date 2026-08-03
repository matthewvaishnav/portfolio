import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Divider,
  Input,
  Link,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { IoLanguageOutline } from 'react-icons/io5'
import { getShortLanguageLabel, languages } from '../lib/languages'

const ORIGINAL_ORIGIN = 'https://matthewvaishnav.github.io'
const TRANSLATED_ORIGIN = 'https://matthewvaishnav-github-io.translate.goog'
const featuredCodes = ['en', 'fr', 'fr-CA', 'zh-CN', 'zh-TW', 'ja', 'ko', 'es', 'de']
const supportedCodes = new Set(languages.map(language => language.code))

const orderedLanguages = [
  ...featuredCodes.map(code => languages.find(language => language.code === code)),
  ...languages.filter(language => !featuredCodes.includes(language.code))
].filter(Boolean)

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
  const [search, setSearch] = useState('')
  const buttonVariant = useColorModeValue('solid', 'outline')
  const buttonBorder = useColorModeValue('transparent', 'orange.300')
  const popoverBg = useColorModeValue('white', 'gray.800')
  const popoverBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const activeBg = useColorModeValue('teal.50', 'whiteAlpha.100')
  const muted = useColorModeValue('gray.500', 'whiteAlpha.600')

  useEffect(() => {
    setActiveLanguage(getActiveLanguage())
  }, [])

  const activeOption =
    languages.find(language => language.code === activeLanguage) || languages[0]
  const normalizedSearch = search.trim().toLocaleLowerCase()
  const visibleLanguages = normalizedSearch
    ? languages.filter(language =>
        `${language.englishLabel} ${language.nativeLabel} ${language.code}`
          .toLocaleLowerCase()
          .includes(normalizedSearch)
      )
    : orderedLanguages

  const selectLanguage = languageCode => {
    if (languageCode === activeLanguage) return
    window.location.assign(getLanguageUrl(languageCode))
  }

  return (
    <Popover placement="bottom-end" isLazy>
      <PopoverTrigger>
        <Button
          aria-label={`Select language. Current language: ${activeOption.englishLabel}`}
          colorScheme={useColorModeValue('teal', 'orange')}
          variant={buttonVariant}
          borderColor={buttonBorder}
          minW={{ base: '40px', md: '84px' }}
          px={{ base: 0, md: 3 }}
          className="notranslate"
          translate="no"
        >
          <Box as="span" display={{ base: 'none', md: 'inline-flex' }} mr={2}>
            <IoLanguageOutline />
          </Box>
          <Box as="span">{getShortLanguageLabel(activeOption.code)}</Box>
          <ChevronDownIcon display={{ base: 'none', md: 'inline-block' }} ml={1.5} />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        w={{ base: 'calc(100vw - 24px)', sm: '330px' }}
        maxW="330px"
        bg={popoverBg}
        borderColor={popoverBorder}
        borderRadius="xl"
        boxShadow="xl"
        className="notranslate"
        translate="no"
      >
        <PopoverHeader border="0" px={4} pt={4} pb={2}>
          <Text fontWeight={800}>Choose a language</Text>
          <Text mt={1} color={muted} fontSize="xs">
            {languages.length} translation options
          </Text>
        </PopoverHeader>
        <PopoverBody px={3} pt={2} pb={3}>
          <Input
            value={search}
            onChange={event => setSearch(event.target.value)}
            placeholder="Search languages"
            aria-label="Search languages"
            mb={2}
            borderRadius="lg"
          />

          <VStack align="stretch" spacing={1} maxH="320px" overflowY="auto" pr={1}>
            {visibleLanguages.map(language => {
              const isActive = language.code === activeLanguage

              return (
                <Button
                  key={language.code}
                  onClick={() => selectLanguage(language.code)}
                  variant="ghost"
                  bg={isActive ? activeBg : 'transparent'}
                  justifyContent="flex-start"
                  h="auto"
                  minH="44px"
                  px={3}
                  py={2}
                  borderRadius="lg"
                  fontWeight="normal"
                  _hover={{ bg: activeBg }}
                  _focusVisible={{ boxShadow: 'outline' }}
                >
                  <Box w="18px" mr={3} color="teal.400" flexShrink={0}>
                    {isActive && <CheckIcon boxSize={3} />}
                  </Box>
                  <Box flex="1" minW={0} textAlign="left">
                    <Text fontWeight={isActive ? 700 : 600} lineHeight="short" noOfLines={1}>
                      {language.nativeLabel}
                    </Text>
                    {language.nativeLabel !== language.englishLabel && (
                      <Text mt={1} color={muted} fontSize="xs" lineHeight="short" noOfLines={1}>
                        {language.englishLabel}
                      </Text>
                    )}
                  </Box>
                  <Text ml={3} color={muted} fontSize="xs" fontWeight={700} flexShrink={0}>
                    {language.code}
                  </Text>
                </Button>
              )
            })}

            {visibleLanguages.length === 0 && (
              <Text px={3} py={5} color={muted} fontSize="sm" textAlign="center">
                No matching language
              </Text>
            )}
          </VStack>

          <Divider my={3} />
          <Text color={muted} fontSize="xs" textAlign="center">
            Translations powered by{' '}
            <Link href="https://translate.google.com" target="_blank" rel="noopener noreferrer">
              Google Translate
            </Link>
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default LanguageSelector
