/*Dados un array devolver el valor mas alto y el mas bajo*/
function order(numbers:number[]): string {
  let max = 0 
  let min = 0
  let result = ``
  for (let item of numbers) {
    if(numbers.at(0) == item) {
      min = item
      max = item
    }else if(item>max){
      max = item
    }else if(item<min){
       min = item
    }
  }
  result = `max: ${max}, min ${min}`
  return result
}

order([3,4,5,6,7,3,2,9])