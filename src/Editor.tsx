import React, { useEffect } from 'react'
import { default as Monaco, useMonaco } from '@monaco-editor/react'
import { Box } from '@chakra-ui/layout'

const Editor = () => {
  const monaco = useMonaco()

  useEffect(() => {
    if (monaco?.editor) {
      monaco.editor.setTheme('vs-black')
    }
  }, [monaco])

  return (
    <Box h="100vh">
      <Monaco
        language="javascript"
        defaultValue="// insert your spec here"
        onChange={(val) => console.log(val)}
        theme="vs-black"
      />
    </Box>
  )
}

export default Editor
