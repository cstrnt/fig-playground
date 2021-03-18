export function getCompletion(code: string) {
  if (!code) return null
  let internalCode = code
  if (!internalCode.endsWith(';')) {
    internalCode = `${code};completionSpec`
  } else {
    internalCode = `${code}completionSpec`
  }

  const parsedCode: Fig.Spec = eval(internalCode)
  if (parsedCode === undefined) {
    throw new Error('')
  }
  return parsedCode
}
