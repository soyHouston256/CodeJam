function order(numberOne: number, numberTwo: number) : string {
    // let high = 0
    // let down = 0
    // if(numberOne > numberTwo) {
    //   high = numberOne
    //   down = numberTwo
    // }else {
    //   down = numberOne
    //   high = numberTwo
    // }
  let [high,down] = numberOne > numberTwo ?
        [numberOne, numberTwo]: [numberTwo,numberOne]
   
  return `EL NUMERO MAYOR ES: ${high} \n EL NUMERO MENOR ES: ${down}`
}
order(9,7)