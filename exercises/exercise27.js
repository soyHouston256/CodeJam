/*dado un numero mostrar a cuantos anios meses y dias equivale*/
function calculator(number:number): string {
  let result  = ``
  
  const year = Math.floor(number/365)
  
  const month = Math.floor((number-year*365)/30)
  
  const days = number-year*365-month*30
  
  result = `The number ${number} equivalent \n: ${year} year${plural(year)} ${month} month${plural(month)} and ${days} day${plural(days)}`
  return result
}

const plural = (value:number) => value > 1 ? `s`:''

calculator(397)