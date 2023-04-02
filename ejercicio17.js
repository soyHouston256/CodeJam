function buzzlightyear(number:number) {
  let result = `\n`
  for (let element=1; element<=number; element++) {

    if((element % 3 ===0) && (element % 5===0)) {
      result += `buzzlightyear\n`
    }
    else if (element % 3 ===0) {
      result+= `buzz \n`
    }else if(element % 5 ===0){
      result += `lightyear \n`  
    }else{
      result += `${element} \n`
    }
  }
  return result
}

buzzlightyear(15)