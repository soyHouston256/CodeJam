/*Dado una cadena de texto y un numero recortar el texto mostrando los x primeros caracteres*/
 function cut3000(text:string, number:number): string {
   let textCut:string = ``
   for(let i=0; i<number; i++) {
     textCut += text[i]
   }
   return textCut
 }
cut3000('asd asdasd asda',5);