/*Dado un objecto comprobar si existe una pripiedad en concreto*/

function values(object:any, properties:string): boolean{
  let isPresent: boolean = false
  for (const value in object) {
    if(value==properties){
      isPresent= true
    }
  }
  return isPresent
}
const object = {name:"federico",hobbies:["informatica","cine","videojuegos"], email:"federico@viallarreal.com"}
values(object, "email")