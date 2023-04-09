/*Comparar dos arrays y retornar las coincidencias*/
function matchValues(arrayFirst: number[], arraySecond: number[]) {
    
    let newArray = arrayFirst.filter(element  =>{
      return arraySecond.includes(element)
    })
    
    return newArray
}

matchValues([1,3,5,9], [3,4,5,6,7,9])