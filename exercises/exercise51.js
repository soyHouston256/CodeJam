/*Dado un array de numeros devolver los pares e impares aparte*/

function splitArray(numbers:number[]): string{
  let pair = []
  let odd = []
  let result: string= ``
  for(const number of numbers) {
    if(number%2 ==0) {
      pair.push(number)
    } else {
      odd.push(number)
    }
  }
  result= `Pair: ${pair}, Odd: ${odd}`
  return result
}

splitArray([1,2,3,4,5,6,7,8,9])