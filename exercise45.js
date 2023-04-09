function status(registros:any): string{
  let aprove=0
  let disaprove = 0
  for (const registro of registros) {
    if(registro[1]>10){
      aprove++
    }else{
      disaprove++
    }
  }
  return `aprove:${aprove} disaprove: ${disaprove}`
}

status([["Kilian",12],["Miralles",13],["Esther",10],["Perea",15]])