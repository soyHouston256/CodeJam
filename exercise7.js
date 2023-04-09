/*Dado dos numeros devolver la cantidad de impares entre ellos*/
function cantidadDeimparesEntre(numeroMenor:number, numeroMayor: number) {
  let contador = 0
  for (let i = numeroMenor+1; i<numeroMayor; i++) {
    if (i%2 != 0) {
      contador++
    }
  }
  return contador
}

cantidadDeimparesEntre(1,100)