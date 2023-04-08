/*Dado dos numeros retornas las operaciones basicas entre ellos suma, resta, devision y multiplicacion*/
function operaciones(numberOne: number, numberTwo: number): string {
  const suma = numberOne+numberTwo
  const resta = numberOne-numberTwo
  const division = Math.round(numberOne/numberTwo*100)/100
  const multiplicacion =numberOne*numberTwo
 return `\nSuma: ${suma}\nResta: ${resta}\nDivision: ${division}\nMultiplicacion: ${multiplicacion}`
}

operaciones(20,5)