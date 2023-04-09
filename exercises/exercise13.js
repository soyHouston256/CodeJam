/*hacer una funcion que tenga como parametros un array y una tamaño de subrrays y particionar el array en esas dimensiones pequeñas
ejemplo 
  subSet([1,2,3,4,5,6,7,4,6,8],3)
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 4, 6 ], [ 8 ] ]
*/
function subSet(arraysPrincipal:number[], length:number) {
  let set:number[] = []
  let result:Array<Array<number>> = []
  for (let element of arraysPrincipal) {
    if(set.length < length) {
      set.push(element);
    } else {
      result.push(set)
      set = []
      set.push(element); 
    }
  }
  result.push(set)
  return result
}
const valores = [1,2,3,4,5,6,7,4,6,8,7,6]

subSet(valores,3)