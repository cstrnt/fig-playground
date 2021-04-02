import { message, danger } from 'danger'
import fs from 'fs'

const run = async () => {
  const modifiedMD = danger.git.modified_files.join('- ')
  const diffs = danger.git.modified_files.map((filename) =>
    fs.readFileSync(filename, { encoding: 'utf8' })
  )

  console.log(diffs)
  message(diffs.join('\n'))
}

run()
