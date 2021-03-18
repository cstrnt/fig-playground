import React, { useEffect, useState } from 'react'
import { default as Monaco } from '@monaco-editor/react'
import { Box } from '@chakra-ui/layout'

const Editor = () => {
  const [value, setValue] = useState('// insert your spec here')
  const [isValidating, setIsValidating] = useState<boolean | undefined>(
    undefined
  )

  useEffect(() => {
    let timeoutRef: NodeJS.Timeout | undefined = undefined
    if (!isValidating) {
      timeoutRef = setTimeout(() => {
        console.log('Hello')
        setIsValidating(false)
      }, 1000)
    } else {
      if (timeoutRef !== undefined) {
        clearTimeout(timeoutRef)
      }
    }
  }, [isValidating])

  return (
    <Box h="100vh">
      <Monaco
        value={value}
        language="javascript"
        defaultValue=""
        onChange={(val) => {
          setIsValidating(true)
          setValue(val || '')
        }}
        theme="vs-dark"
      />
    </Box>
  )
}

export default Editor
