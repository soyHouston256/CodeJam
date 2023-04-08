/*Dado un array devolver que elemento se repite mas*/
function counter(data:any):string {
  let map:any = {};
  let moreValue = 0;
  let moreFrecuency:string= `` 
  if (typeof(data)  === 'string') {
     const textClean=data.split(' ')
     for (let item of textClean) {
       if(map[item]) {
         map[item]++
       }else{
         map[item]=1
       }
     }
   }else{
     for (let item of data) {
       if(map[item]) {
         map[item]++
       }else{
         map[item]=1
       }
     }
   }
  for (let element in map) {
      if(map[element]>moreValue) {
        moreValue = map[element]
        moreFrecuency = element
      }
    }
  return `value: ${moreFrecuency}, times:${moreValue}`
}
counter([1,2,3,4,5,1])
counter("max que haces max")