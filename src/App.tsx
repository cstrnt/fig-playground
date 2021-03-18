import * as React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import Editor from './Editor'
import Result from './Result'
import DebuggerBox from './Debugger'

export const App = () => {
  const [parsedCode, setParsedCode] = React.useState<Fig.Spec | null>(null)
  return (
    <Box
      textAlign="center"
      fontSize="xl"
      h="100vh"
      maxH="100%"
      overflow="hidden"
    >
      <SimpleGrid columns={2}>
        <Editor onNewSpec={setParsedCode} />
        <Result spec={parsedCode} />
      </SimpleGrid>
      <DebuggerBox currentSpec={parsedCode} />
    </Box>
  )
}
