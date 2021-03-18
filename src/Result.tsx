import React from 'react'
import Terminal from 'react-console-emulator'

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  }
}

const Result = () => {
  return (
    <Terminal
      commands={commands}
      welcomeMessage={'Welcome to the fiq Playground'}
      promptLabel={'fig@Web:~$'}
    />
  )
}

export default Result
