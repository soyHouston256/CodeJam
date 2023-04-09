/*Contar la cantidad de vocales que tiene una frase*/

function vowelCount(text: string): number {
  const textClean = text.split(" ").join('')
  const vowels:any = { a:1,e:1,i:1,o:1, u:1 }
  let counter = 0
  for (let letter of textClean) {
    if(vowels[letter]) {
      counter++
    }
  }
  return counter
}

vowelCount('programadores')