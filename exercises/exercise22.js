/*Dado dos numero devolver cual es el mayor y cual es el menor*/
function order(numberOne: number, numberTwo: number) : string {
  let [high,down] = numberOne > numberTwo ?
        [numberOne, numberTwo]: [numberTwo,numberOne]
   
  return `EL NUMERO MAYOR ES: ${high} \n EL NUMERO MENOR ES: ${down}`
}
order(9,7)