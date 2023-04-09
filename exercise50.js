/*Dado un numero devolver cuantos bucles tiene
6, 9, 0 = 1
8 = 2
1,2,3,4,5,7=0
*/
function bucles(number: number): number {
  const tostring = number.toString().split('')
  let bucles:number  = 0
  for (const item of tostring) {
    const toInteger = parseInt(item) 
    if(toInteger == 0||toInteger == 6||toInteger == 0){
      bucles++
    }else if(toInteger == 8){
      bucles += 2
    }
  }
  return bucles
}
bucles(1234560987)