/*dado un texto devolver la primera letra de cada palabra en mayuscula*/
function capitalize(text: string) : string {
  const textClean = text.split(" ")
  let result = ``
  for (let word of textClean) {
    result += ` ${word.charAt(0).toUpperCase()}${word.slice(1)}`
  }
  return result
}

capitalize('holas que hace')