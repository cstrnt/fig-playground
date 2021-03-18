import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from '@chakra-ui/input'
import { Box, Flex } from '@chakra-ui/layout'
import React, { useState, useEffect } from 'react'

interface Props {
  spec: Fig.Spec | null
}

function parseInputValue(value) {
  return value.split(' ')
}

function getSuggestions(input: string[], spec) {
  return []
}

const Result = ({ spec }: Props) => {
  const [input, setInput] = useState<string[]>([])

  useEffect(() => {
    console.log(input)
  }, [input])

  return (
    <Box background="gray.900" height="full" textAlign="left">
      <InputGroup>
        <InputLeftAddon
          p="sm"
          fontFamily="monospace"
          color="orange.600"
          bg="transparent"
          border="none"
          pointerEvents="none"
          children="fig@web $"
        ></InputLeftAddon>
        <Input
          onChange={(e) => setInput(parseInputValue(e.currentTarget.value))}
          fontSize="sm"
          border="none"
          color="white"
          autoFocus
          _focus={{ outline: 'none' }}
        />
      </InputGroup>
    </Box>
  )
}

export default Result
