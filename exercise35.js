/*dado un array hacer un nuevo array con el primer y ultimo elemento del array*/

function buildArray(numbers: number[]): number[] {
  let result = []
  for (let item=0;  item<numbers.length; item++) {
    if(item==0 || item==numbers.length-1){
      result.push(numbers[item])
    }
  }
  return result
}

buildArray([1,2,3,7,8,8,9])