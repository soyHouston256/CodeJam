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