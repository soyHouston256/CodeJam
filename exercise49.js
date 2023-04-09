/*Dato un objecto comprobar si un valor enviado es una propiedad de este*/

function validate(object: any, property: string){
  let isPresent: boolean = false
  for (const value in object) {
    if(value == property){
      isPresent =true 
    }
  }
  return isPresent
}
const object = {name:"Max",hobbies:["informatica","cine","videojuegos"], email:"fernando@fernan.flow"}
validate(object, "email")