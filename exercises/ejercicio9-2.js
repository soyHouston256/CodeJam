/*Comparar dos arrays y retornar las coincidencias*/
function matchValues(arrayFirst: number[], arraySecond: number[]) {
    let newArray = []
    let arrayOne:number[] = []
    let arrayTwo:number[] = []
    let map:{ [key:string]: boolean } = {}

    if (arrayFirst.length<arraySecond.length) {
       [arrayOne, arrayTwo] = [arraySecond, arrayFirst];
    } else {
      [arrayOne, arrayTwo] = [arrayFirst, arraySecond];
    }

    for (let element of arrayOne) {
      map[element] = true
    }

    for (let element of arrayTwo) {
        if (map[element]) {
            newArray.push(element)  
        }
    }
    return newArray
}
matchValues([2,3,5,9], [3,4,5,6,9])