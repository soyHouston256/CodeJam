/*Tomar un texto devolver todos el texto en mayusculas o minusculas segun la si hay mas mayusculas o minusculas */

function convert(text:string):string {
  let result = ``
  let uperCaseRegex = /[A-Z]/
  let uperCase:number = 0
  let lowerCase:number = 0
  for (let letter of text) {
    if(uperCaseRegex.test(letter)) {
      uperCase++
    }else {
      lowerCase++
    }
  }
  result =  uperCase >= lowerCase
            ?text.toUpperCase()
            :text.toLowerCase()
  return result
}

convert('HOLAAS haces')