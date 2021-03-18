import * as React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import Editor from './Editor'
import Result from './Result'

export const App = () => (
  <Box textAlign="center" fontSize="xl">
    <SimpleGrid columns={2} minH="100vh" p={3}>
      <Editor />
      <Result />
    </SimpleGrid>
  </Box>
)
