/*Dado un numero devolver todos sus divisores*/
function showDivisor(number: number) {
   let result =``
   for (let item=0; item<=number;  item++) {
      if(number % item === 0) {
        result += `${item} \n`
      }
   }
   return result
}
showDivisor(15)