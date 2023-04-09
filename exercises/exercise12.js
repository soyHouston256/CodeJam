/*Funcion para imprimir un numero de 8 en 8 del numero a 0*/
function toCero(number: number) {
  let result = `\n--- since ${number} to 0 --- \n`
  let periodo = 8
  while(number > 0) {
    result +=`- n° ${number}\n`
    number = number - periodo
  }
  result += `--- FIN ---`
  return result
}
toCero(90)