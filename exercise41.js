/*dado un numero dibujar un arbolito con asteriscos*/
function graphThre(number:number): string{
  let result: string= `\n`
  let half = number-1
  for(let row=0; row<number; row++) {
    let nivel:string =``
      for (let column=0; column<= 2*(number-1); column++) {
        if(half-row <= column && half+row>=column){
          nivel+=`*`
        }else{
           nivel+=` `
        }
      }
      result+=nivel+`\n`
  }
  
  return result
}

graphThre(5)