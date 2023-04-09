/*Dado un array de numeros sacar la media de todos ellos*/
function media(numbers: number[]) : number {
  let suma:number = 0
  let media: number = 0
  for (let number of numbers) {
    suma += number
  }
  media = suma/numbers.length
  return media
}

media([1,2,3,4])