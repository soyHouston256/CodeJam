/*Pasar un texto y una palabra y sensurar todas las coincidencias de la palabra en el texto*/
function sensured(text: string, wordSensured: string) {
  const textClean = text.split(' ')
  let textNew = ``
  for (let palabra of textClean) {
      if(palabra === wordSensured) {
        textNew = `${textNew} [-SENSURADO-]`
      } else {
        textNew += ` ${palabra}`
      }
  }
  return textNew
}

sensured('Houston aveces es un dolor de cabeza', 'Houston')