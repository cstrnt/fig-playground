import * as React from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import ReactJson from 'react-json-view'

interface Props {
  currentSpec: Fig.Spec | null
}

const DebuggerBox = ({ currentSpec }: Props) => {
  const { isOpen, onToggle } = useDisclosure()
  useEffect(() => {
    const handleToggle = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault()
        e.stopPropagation()
        onToggle()
      }
    }
    window.addEventListener('keydown', handleToggle)
    return () => {
      window.removeEventListener('keydown', handleToggle)
    }
  }, [onToggle])

  if (!isOpen) return null

  return (
    <Box
      bg="gray.100"
      rounded="xl"
      position="absolute"
      bottom={10}
      right={10}
      height="90vh"
      width="90vw"
      p={2}
    >
      <Box overflow="auto" w="100%" h="100%">
        <ReactJson
          src={currentSpec || {}}
          collapsed
          style={{ textAlign: 'left' }}
        />
      </Box>
    </Box>
  )
}

export default DebuggerBox
