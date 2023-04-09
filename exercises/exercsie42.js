/*Dado dos numeros devolver un numero aleatorio entres ellos*/
function random(min: number, max: number) : number {
  return  Math.floor(Math.random() *(max-min)) + min
}
random(1,3)