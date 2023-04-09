/*Dado un array de string devolver otro array con los string que tengan mas de dos palabras*/

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