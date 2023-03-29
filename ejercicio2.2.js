
const texto = 'ala'
let valorInvertido = ''

for (let letra of texto)  {
  valorInvertido  = letra + valorInvertido
}
const isPalindromo = texto == valorInvertido ? 'Si es un Palindromo':'No es un Palindromo'

isPalindromo

