/*Dado un array de objetos devolver cuales con las aficiones mas comunes*/
function favorites(persons:any){
  let map:any={}
  for(const person of persons){
    const hobbies = person.hobbies
    for (const hobbie of hobbies){
      if (map[hobbie]) {
        console.log(map[hobbie])
        map[hobbie]++
      } else {
        map[hobbie] = 1
      }
    }
  }
  return map
}
const persons:any=[
  {name:"Max",hobbies:["informatica","cine","videojuegos"]},
  {name:"Excel",hobbies:["informatica","cine","leer"]},
  {name:"Jess",hobbies:["farmacia","cine","viajes"]},
]

favorites(persons)