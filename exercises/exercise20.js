/*Function que te diga si dos palabras son anagramas entre si*/
function anagram(textFirst:string, textSecond: string) {

   let map:any = {}

   for (let letter of textFirst) {
     if(map[letter]) {
       map[letter]++
     }else{
       map[letter] =1
     }
   }
   for (let letter of textSecond) {
     if(map[letter]) {
       map[letter]--
     }else{
       return false
     }
   }
   for (let key in map) {
      if(map[key] !== 0) {
          return false
        }
  }
    
   return true

}

anagram('sunasst', 'tunasss')
anagram('sunasst', 'tunassr')