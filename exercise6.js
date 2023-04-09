/*Dado un numero retornar un cuadrado vacio ejemplo
valor = 4
'****'
'*  *'
'*  *'
'****'
*/
function graph(length: number) {
  for (let i = 1; i<=length; i++) {
    let paint = ``
    for(let j=1; j<=length; j++) {
      if((j==1 || j== length) ||(i==1 || i== length) ) {
         paint = paint + `*` 
      } else {
        paint = paint + ` ` 
      }
       
    }
    console.log(paint)
  }
}

graph(4)