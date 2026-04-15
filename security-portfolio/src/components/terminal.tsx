import { Box, Flex } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

interface TerminalLine {
  type: 'prompt' | 'command' | 'output' | 'success' | 'error'
  content: string
  delay?: number
}

interface TerminalProps {
  lines: TerminalLine[]
  autoPlay?: boolean
  height?: string
}

const Terminal = ({ lines, autoPlay = true, height = '380px' }: TerminalProps) => {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (!autoPlay || currentIndex >= lines.length) return

    const timer = setTimeout(() => {
      const line = lines[currentIndex]
      setIsTyping(true)
      
      // Simulate typing delay
      setTimeout(() => {
        setDisplayedLines(prev => [...prev, line])
        setCurrentIndex(prev => prev + 1)
        setIsTyping(false)
      }, line.delay || 800)
    }, 1000)

    return () => clearTimeout(timer)
  }, [currentIndex, lines, autoPlay])

  const getLineColor = (type: string) => {
    switch (type) {
      case 'prompt': return '#c8d6f8'
      case 'command': return '#e8ecf8'
      case 'output': return '#4a5568'
      case 'success': return '#52c97a'
      case 'error': return '#e05252'
      default: return '#a0a8be'
    }
  }

  return (
    <Box
      border="1px solid rgba(200,214,248,0.1)"
      borderRadius="12px"
      overflow="hidden"
      bg="#040609"
      boxShadow="0 48px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 60px rgba(74,100,220,0.06)"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: '20%',
        right: '20%',
        height: '1px',
        bg: 'linear-gradient(90deg, transparent, rgba(200,214,248,0.2), transparent)',
        zIndex: 11
      }}
      _after={{
        content: '""',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        bg: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)',
        zIndex: 10,
        borderRadius: '12px'
      }}
    >
      {/* Terminal Header */}
      <Flex
        align="center"
        gap="7px"
        p="10px 14px"
        bg="#111320"
        borderBottom="1px solid rgba(255,255,255,0.065)"
      >
        <Box w="11px" h="11px" borderRadius="50%" bg="#ff5f57" />
        <Box w="11px" h="11px" borderRadius="50%" bg="#febc2e" />
        <Box w="11px" h="11px" borderRadius="50%" bg="#28c840" />
        <Box
          ml="auto"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="11px"
          color="#6e7890"
          letterSpacing="0.04em"
        >
          matthew@security-lab
        </Box>
      </Flex>

      {/* Terminal Body */}
      <Box
        p="1.25rem 1.5rem"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="12px"
        lineHeight="1.9"
        height={height}
        overflowY="scroll"
        css={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {displayedLines.map((line, index) => (
          <Flex key={index} gap={0} whiteSpace="pre-wrap" wordBreak="break-all">
            {line.type === 'prompt' && (
              <Box color={getLineColor('prompt')} flexShrink={0}>
                matthew@security-lab:~$ 
              </Box>
            )}
            <Box color={getLineColor(line.type)} ml={line.type === 'prompt' ? 0 : 0}>
              {line.content}
            </Box>
          </Flex>
        ))}
        
        {isTyping && (
          <Flex gap={0}>
            <Box color="#c8d6f8" flexShrink={0}>
              matthew@security-lab:~$ 
            </Box>
            <Box
              display="inline-block"
              w="7px"
              h="13px"
              bg="#c8d6f8"
              opacity="0.85"
              ml="1px"
              verticalAlign="middle"
              animation="blink 0.55s step-end infinite"
            />
          </Flex>
        )}
      </Box>

      {/* Progress Bar */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height="2px"
        bg="rgba(255,255,255,0.04)"
        overflow="hidden"
        borderRadius="0 0 12px 12px"
      >
        <Box
          height="100%"
          bg="linear-gradient(90deg, #c8d6f8, rgba(200,214,248,0.4))"
          transformOrigin="left"
          transform={`scaleX(${currentIndex / lines.length})`}
          transition="transform 0.4s cubic-bezier(.16,1,.3,1)"
          borderRadius="0 1px 1px 0"
        />
      </Box>
    </Box>
  )
}

export default Terminal