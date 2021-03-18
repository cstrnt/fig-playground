import React from 'react'
import Terminal from 'react-console-emulator'

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' '),
  },
}

interface Props {
  spec: Fig.Spec | null
}

const Result = ({ spec }: Props) => {
  return (
    // <Terminal
    //   commands={commands}
    //   welcomeMessage={'Welcome to the fiq Playground'}
    //   promptLabel={'fig@Web:~$'}
    // />
    <pre style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
      {JSON.stringify(spec, null, 2)}
    </pre>
  )
}

export default Result
