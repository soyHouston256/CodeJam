/*dado un array de enteros y un numero detectar si el array es la permutacion del segundo numero*/
function permutation(array:number[], number:number): boolean {
  
  for (let item=0; item<number; item++) {
    if(array.at(item)!=item+1){
      return false
    }
  }
  return true
}

permutation([1,2,3,4,5],5)