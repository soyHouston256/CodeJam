/*Dado un numero mostrar su serie de fibonacci*/

function fibonacci(number: number) {
    let array:number[] = [1,1]
    let current:number = 0
    for(let item=1; item < number-1; item++) {
      current = array[item-1] + array[item]
      array.push(current)
      current=0
    }
    return array
}

fibonacci(7)