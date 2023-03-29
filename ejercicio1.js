//tabla de multiplicar

//valores
const numeroDeResultados = 12
//tabla del 1 hasta 5  //cada tabla debe tener 12 resultados.
const numeroDeTablas = 5

for (let i=1; i<=numeroDeTablas; i++) {
  const tabla = `Tabla del ${i}`;
  console.debug(tabla)
  for (let j= 1; j<numeroDeResultados; j++) {
    console.log(i+'x'+j,'=',i*j)
  }
}


