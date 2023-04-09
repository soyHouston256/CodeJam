/*Dado un numero mostrar listado de los cuadrados de todos los numeros naturales hasta llegar al mismo*/

function square(number:number): number[] {
  let result: number[] = []
  for(let item=1; item<=number; item++) {
    result.push(item*item)
  }
  return result
}
square(10)