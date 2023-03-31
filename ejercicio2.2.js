
const texto = 'alan'
let valorInvertido = ''

for (let letra of texto)  {
  valorInvertido  = letra + valorInvertido
}

// valorInvertido = texto.split('').reverse().join('')
const isPalindromo = texto == valorInvertido 
? 'Si es un Palindromo'
:'No es un Palindromo'

isPalindromo

