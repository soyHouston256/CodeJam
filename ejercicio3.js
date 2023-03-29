
function buscarPalabra(frase: string, palabraBuscada: string) {
  let resultado = 0;
  const textoLimpio = frase.toLocaleLowerCase().replace(/[!¡.,-]/gi,'');
  if(textoLimpio.includes(palabraBuscada)) {
    let palabras = textoLimpio.split(" ")
    let mapa:{ [clave: string]: number} = {}; 
    for(let palabra of palabras) {
      if(mapa[palabra]) {
        mapa[palabra]++
      }else {
        mapa[palabra] = 1
      }
    }
    resultado = mapa[palabraBuscada]
  } else {
    resultado = 0
  }
  return resultado
}
buscarPalabra('max houston ramirez martel lo max', 'max')