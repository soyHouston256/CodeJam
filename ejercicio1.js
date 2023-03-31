//Tabla de multiplicar.
//Tabla del 1 hasta 5.
//cada tabla debe tener 12 resultados.
//Valores
const numeroDeResultados = 15
const numeroDeTablas = 5

generadorDeTablas(numeroDeTablas,numeroDeResultados)

function generadorDeTablas(numeroDeTablas: number, numeroDeResultados: number): string {
  let resultado = ''
  for (let i=1; i<=numeroDeTablas; i++) {
     resultado += tabla(i, numeroDeResultados)
  }
  return resultado
}

function tabla(numero: number, numeroDeResultados: number): string {
  let resultado = `Tabla del ${numero} \n`
  for (let i= 1; i<numeroDeResultados; i++) {
     resultado += `${i}x${numero} = ${numero*i}\n`
  }
  return resultado
}

