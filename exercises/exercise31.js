/*Dado un numero indicar que tipo de angulo es*/
function angleName(angle:any): string {
    let result: string = ``

    if(angle == 0) {
      result = `Angulo Nulo`
    } else if(angle == 90) {
      result = `Angulo Recto`
    } else if (angle == 180) {
      result = `Angulo Llano`
    }else if(angle == 360) {
      result = `Angulo Completo`
    } else if (angle<90) {
      result = `Angulo Agudo` 
    } else if (angle<180) {
      result = `Angulo convexo` 
    } else if (angle > 180 && angle < 360) {
      result = `Angulo cóncavo` 
    } else {
      result = `Angulo no se puede catalogar` 
    }
  return result
}

angleName(510)