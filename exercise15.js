function mapText(text:string) {
  let map:any = {}
  let highValue = 0
  let wordMoreRepeat = ``
  const textClean = text.split(" ").join('')

  for(let word of textClean) {
    if(map[word]){   
      map[word]++
    }else {
      map[word]=1
    }
  }

  for (let letter in map) {
    if (map[letter] > highValue) {
      highValue =map[letter]
      wordMoreRepeat = letter
    }else {
      highValue = highValue
    }
  }

  return `Word more repeat is "${wordMoreRepeat}" and repeat ${highValue} times`
}
mapText("houstondelamataramirez federico aaaaaaaa")