/*Dato un numero indicar si este es capicua o no*/
/*Intento con strings*/
function capicua(number:number): boolean {
  const numberInvert = parseInt(number.toString().split('').reverse().join(''))
  if (number !== numberInvert) {
    return false
  }
  return true
}
/*Intento con numbers*/
function capicua2(number:number): boolean {
  let numberInvert:number = 0
  let iterable = number
  while(iterable != 0) {
    numberInvert = numberInvert*10 + (iterable % 10)
    iterable = Math.floor(iterable / 10);
  }
  if (number != numberInvert) {
    return false
  }
  return true
}

capicua(11)
capicua(12)
capicua2(11)