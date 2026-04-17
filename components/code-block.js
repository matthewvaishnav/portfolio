import { Box, Code, IconButton, useClipboard } from '@chakra-ui/react'
import { CopyIcon, CheckIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const CodeBlock = ({ children, language = 'bash' }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { hasCopied, onCopy } = useClipboard(children)

  return (
    <Box
      position="relative"
      mb={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        as="pre"
        p={4}
        bg="gray.50"
        borderRadius="md"
        overflowX="auto"
        fontSize="sm"
        border="1px solid"
        borderColor="gray.200"
      >
        <Code display="block" whiteSpace="pre" bg="transparent" color="gray.800">
          {children}
        </Code>
      </Box>
      <IconButton
        icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
        size="sm"
        position="absolute"
        top={2}
        right={2}
        onClick={onCopy}
        opacity={isHovered ? 1 : 0}
        transition="opacity 0.2s"
        aria-label="Copy code"
        colorScheme={hasCopied ? 'green' : 'gray'}
        bg="white"
        _hover={{ bg: 'gray.100' }}
      />
    </Box>
  )
}

export default CodeBlock
