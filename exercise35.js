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
function buildArray2(numbers: number[]): number[] {
  let result = []
  for (let item in numbers) {
    const index = parseInt(item)
    if(index==0 || index==numbers.length-1){
      result.push(numbers[index])
    }
  }
  return result
}

buildArray([1,2,3,7,8,8,9])
buildArray2([1,2,3,7,8,8,9])
