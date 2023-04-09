/*Dado un array de string devolver los que otro array de los string que tengas mas de dos palabras*/

function buildArray(text: string[]): string[] {
  let result:string[] = []
  for(const array of text) {
    const textclean = array.split(' ')
    if(textclean.length>1) {
      result.push(array)
    }
  }
  return result
}

buildArray(["holas que", "haces", "houston del bueno", "mal"])