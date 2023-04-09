/*Dado un string devolver todo los posibles substring*/
function subSet(text:"hola"){
  const textClean = text.split('')
  let result = []
  for(const indice in textClean){
    let start = parseInt(indice)
    for(let item =0; item<= text.length-start; item++) {
      const  end = item + start
      result.push(text.substring(start, end))
    }
  }
  //return result.filter(element => element.length>0)
  let subResult = []
  for(const item of result) {
    if(item.length>0){
      subResult.push(item)
    }
  }
  return subResult
}
subSet("hola")