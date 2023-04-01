/* Function que retorno un texto tantas veces como un el segundo parametro*/
function generate(word: string, times: number): string {
  let texto =``
  for (let i=0; i<times; i++) {
    texto += word 
  }
  return texto
}

generate('palabra',2)