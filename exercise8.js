/*Dado un numero devolver el numero invertido 
ejemplo 123 retornar 321
*/
function invertirNumero(numero:number) {
  let resultado_invertido = 0

  while(numero != 0) {
    resultado_invertido = resultado_invertido*10 + (numero % 10)
    numero = Math.floor(numero / 10);
  }
  return resultado_invertido
}

invertirNumero(56678)
