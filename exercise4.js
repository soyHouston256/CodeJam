/*Dado un texto retorno el valor inventido*/
function inventirTexto(texto: string) {
  let valorInvertido = ''
  for (let letras of texto) {
    valorInvertido = letras + valorInvertido
  }
  return valorInvertido
}
inventirTexto('houston')