/*dado un array eliminar los valores duplicados y si es string lo elminas*/
function deleteDuplicates(numbers:(string | number)[]): number[] { 
  let map = new Map<number, boolean>();
  for (let number of numbers) {
    if(typeof(number) === 'number'){
     if (!map.has(number)) {
        map.set(number, true);
      }
    }
  }
  return Array.from(map.keys());
}

function deleteDuplicates2(numbers:(string | number)[]): number[]{
  let elements = numbers.filter(element => {
    return typeof(element) === 'number'
  })
  let numbersOnly = elements.map((element) => +element);
  return [...new Set(numbersOnly)]
}
deleteDuplicates2([1,2,3,4,5,6,6,7,'nel'])

deleteDuplicates([1,2,3,4,5,6,6,7,'nel'])