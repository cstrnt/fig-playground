import * as React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import Editor from './Editor'
import Result from './Result'

export const App = () => {
  const [parsedCode, setParsedCode] = React.useState<Fig.Spec | null>(null)
  return (
    <Box textAlign="center" fontSize="xl">
      <SimpleGrid columns={2} minH="100vh">
        <Editor onNewSpec={setParsedCode} />
        <Result spec={parsedCode} />
      </SimpleGrid>
    </Box>
  )
}
