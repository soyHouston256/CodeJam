/*Dado un numero devolver el factorial de este*/
function factorial(number: number): number {
  let factorial = 1
  for(let iteracion=1; iteracion<= number; iteracion++) {
    factorial *= iteracion 
  }
  return factorial
}
factorial(4)