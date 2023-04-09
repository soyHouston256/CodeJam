/*Dado dos numeros devolver cuanto porciento el el segundo valor respecto al primero*/
function valorPorcentual(porcentaje: number, valor:number): number {
  let resultado:number = porcentaje*100/valor
  return resultado
}

valorPorcentual(20,80)