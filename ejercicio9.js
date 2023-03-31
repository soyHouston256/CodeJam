function matchValues(arrayFirst: number[], arraySecond: number[]) {
    let newArray:number[] = []
    for (let element of arrayFirst) {
      if (arraySecond.includes(element)) {
        newArray.push(element)
      }
    }
    return newArray
}

matchValues([1,3,5,9], [3,4,5,6,7,9])