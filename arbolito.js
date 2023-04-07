function graph(lenght:number): string {
  let result = `\n`
  for (let row= 0 ;  row<lenght; row++) {
    for(let column= 0 ;  column<lenght; column++) {
      
      if(column >= (lenght-1-row)) {
        result += `*`
      }else if((row==lenght-1) && ((column>1) || (column<lenght-1))){
          result += `*`
      }else {
        result += ` `
      }      
    }
    result += `\n`
  }
  return result
}

graph(5)
