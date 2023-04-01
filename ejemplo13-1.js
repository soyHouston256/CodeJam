/*hacer una funcion que tenga como parametros un array y una tamaño de subrrays y particionar el array en esas dimensiones pequeñas
ejemplo 
  subSet([1,2,3,4,5,6,7,4,6,8],3)
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 4, 6 ], [ 8 ] ]
*/
function subSet(arraysPrincipal:number[], length:number) {
  let result:any = []
  for (let element of arraysPrincipal) {
    let ultimo = result[result.length -1]
    if(!ultimo||ultimo.length === length) {
      result.push([element]);
    } else {
      ultimo.push(element)
    }
  }
  return result
}
const valores = [1,2,3,4,5,6,7]

subSet(valores,3)