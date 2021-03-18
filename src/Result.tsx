import { Button } from '@chakra-ui/button'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import React, {useState, useEffect} from 'react'

function parseInputValue(value) {
  return value.split(" ")
}

function getSuggestions(input: string[], spec) {
  return ["bla", "blub"]
}

const Result = () => {

  const [input, setInput] = useState<string[]>([])
  const [suggs, setSuggs] = useState<string[]>([])

  useEffect(()=> {
    setSuggs(input)
  },[input])

  return (
    <Box pos="relative" background="gray.900" height="full" textAlign="left">      
      <InputGroup>
        <InputLeftAddon p="sm" fontFamily="monospace" color="orange.600" bg="transparent" border="none" pointerEvents="none" children="fiq@web $"></InputLeftAddon>
        <Input onChange={(e) => setInput(parseInputValue(e.currentTarget.value))} fontSize="sm" border="none" color="white" autoFocus _focus={{outline: "none"}} />
      </InputGroup>
      {suggs.length > 0 && 
        <Box pos="absolute">
          {suggs.map(sugg => (<Button variant="link">{sugg}</Button>))}
        </Box>
      }
    </Box>
  )
}

export default Result
