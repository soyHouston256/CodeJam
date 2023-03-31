/*
- Algoritmo que nos dibuje el siguiente grafico
 [-] 
 [-] [-] 
 [-] [-] [-] 
 [-] [-] [-] [-] '*/
function graph(number: number) {
  let result = ``
  for (let i =0; i< number; i++) {
      result = result + `\n `
      for (let j = 0; j<=i; j++) {
        result = result + `[-] `
      }
  }
  return result
}
graph(4)