import { Button } from '@chakra-ui/button'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input'
import { Box, Flex } from '@chakra-ui/layout'
import React, {useState, useEffect} from 'react'
interface Props {
  spec: Fig.Spec | null
}

function parseInputValue(value) {
  return value.split(' ')
}


function getSuggestions(input: string[], spec: Fig.Spec | null) {
  let suggs: string[] = [];
  if (spec == null) return [];
  for (let i = 0 ; i < input.length; i++) {
    const bit = input[i];
    if (i === 0) {
      // command
      const command = spec.name
      if (command.indexOf(bit) === 0) {
        suggs.push(command)
      } else {
        break;
      }
    } else {
      suggs.splice(0, suggs.length)
      // every other possibility (subcommands)
      const {subcommands, args, options} = spec;
      subcommands?.forEach(({name: subcommandName}) => {
        if (subcommandName.indexOf(bit) === 0) {
          suggs.push(subcommandName as string)
        }
      })
    }
  }
  return suggs
}

const Result = ({ spec }: Props) => {
  const [input, setInput] = useState<string[]>([])
  const [suggs, setSuggs] = useState<string[]>([])

  useEffect(()=> {
    setSuggs(getSuggestions(input, spec))
  },[input])

  return (
    <Box pos="relative" background="gray.900" height="full" textAlign="left">      
      <InputGroup>
        <InputLeftAddon p="sm" fontFamily="monospace" color="orange.600" bg="transparent" border="none" pointerEvents="none" children="fig@web $"></InputLeftAddon>
        <Input onChange={(e) => setInput(parseInputValue(e.currentTarget.value))} fontSize="sm" border="none" color="white" autoFocus _focus={{outline: "none"}} />
      </InputGroup>
      {suggs.length > 0 &&              
        <Flex justifyContent="left" direction="column" pos="absolute">
          {suggs.map((sugg, index) => (<Button textAlign="left" variant="link">{sugg}</Button>))}
        </Flex>
      }
    </Box>
  )
}

export default Result
