/*Dado un texto comprobar que sea un email valido*/
function validateEmail(email:string):boolean{
  let regex = /^\w+@\w+\.\w+$/gi
  let validate:boolean = false
  validate = regex.test(email)
  return validate
}
validateEmail("houston@gmail.com")
validateEmail("456gmail.com")