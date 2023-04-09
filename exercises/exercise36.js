/*Dato un string devolver cuantas consonates tiene el texto*/
function countConsonants(text: string): string {
  let consonant = 0, vowel = 0;
  let result = ``
  const textClean = text.split('').filter(letter => /[áéíóú\w]/gi.test(letter) && isNaN(letter)).join('');
  for (let letter of textClean) {
    if(/[áéíóúaeiou]/gi.test(letter)){
      vowel++
    }else {
      consonant++
    }
  }
  result = `Vowel: ${vowel}, Consonants:${consonant}`
  return result
}

countConsonants("asdasdas 1231as2334 /.';.';")