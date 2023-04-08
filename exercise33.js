function reloj(){
  const time = new Date()
  let hour= time.getHours()
  let minute = time.getMinutes()
  let secound = time.getSeconds()
  let result = ``
  setInterval(()=>{
    secound++
    if(secound>59){
      secound=1
      minute++
    }else if(minute>59){
      minute=1
      hour++
    }else if(hour>23){
      hour=0
    }
    result= `${hour}:${minute}:${secound}`
    console.log(result)
  },1000)
}
reloj()
