import React, { useCallback, useEffect, useState } from 'react'
import { default as Monaco } from '@monaco-editor/react'
import { Box } from '@chakra-ui/layout'
import { getCompletion } from './lib/helper'
import { useToast } from '@chakra-ui/toast'

interface Props {
  onNewSpec: (compl: Fig.Spec) => void
}

const Editor = ({ onNewSpec }: Props) => {
  const [value, setValue] = useState('// insert your spec here')
  const toast = useToast()

  const handleCompletion = useCallback((jsVal) => {
    try {
      const newCompletion = getCompletion(jsVal)
      if (newCompletion !== null) {
        onNewSpec(newCompletion)
      }
    } catch (e) {
      toast({
        status: 'error',
        position: 'top',
        title: 'Invalid Completion',
      })
    }
  }, [])

  useEffect(() => {
    const handleSave = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault()
        handleCompletion(value)
      }
    }
    document.addEventListener('keydown', handleSave)
    return () => {
      document.removeEventListener('keydown', handleSave)
    }
  }, [value])

  return (
    <Box h="100vh">
      <Monaco
        value={value}
        language="javascript"
        defaultValue=""
        onChange={(val) => {
          setValue(val || '')
        }}
        theme="vs-dark"
      />
    </Box>
  )
}

export default Editor
