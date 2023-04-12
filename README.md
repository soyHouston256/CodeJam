# CodeJam
## Retos de Codigo 
- Aquí hay un total de 51 retos de diferente complejidades.

##### - Reto 1
- Crear una Tabla de multiplicar.
  - Tabla del 1 hasta el 5.
  - Cada tabla debe tener 12 resultados.

##### - Reto 2
- Ver si un texto es palindromo.
##### - Reto 3
- Dado un texto y una palabra devolver cuantas veces se repite en el texto.
##### - Reto 4
- Dado un texto retornar el valor inventido.
##### - Reto 5
- Dado dos números devolver cuánto porciento es el segundo valor respecto al primero.
##### - Reto 6
- Dado un número retornar un cuadrado vacío. Ejemplo:
valor = 4
    ```
    ****
    *  *
    *  *
    ****
    ```

##### - Reto 7
- Dado dos números devolver la cantidad de impares entre ellos.
##### - Reto 8
- Dado un numero devolver el número invertido.
    ```Ejemplo: 123 Retornar 321```
##### - Reto 9
- Comparar dos arrays y retornar las coincidencias.
    ```matchValues([2,3,5,9], [3,4,5,6,9])  
       Retorna [ 3, 5, 9 ]
    ```
##### - Reto 10
- Algoritmo que nos dibuje el siguiente gráfico.
  ``` 
  [-] 
  [-] [-] 
  [-] [-] [-] 
  [-] [-] [-] [-] 
  ```
##### - Reto 11
- Pasar un texto y una palabra y sensurar todas las coincidencias de la palabra en el texto.
    ```Ejemplo:' sensured('Houston a veces es un dolor de cabeza', 'Houston')``` 
    ```Retorno: [-SENSURADO-] a veces es un dolor de cabeza' ```
##### - Reto 12
- Función para imprimir un número de 8 en 8 del número a 0.

    ```
    --- since 90 to 0 --- 
    - n° 90
    - n° 82
    - n° 74
    - n° 66
    - n° 58
    - n° 50
    - n° 42
    - n° 34
    - n° 26
    - n° 18
    - n° 10
    - n° 2
    --- FIN ---
    ```
##### - Reto 13
- Hacer una función que tenga como parametros un array y una tamaño de subrrays y particionar el array en esas dimensiones pequeñas
    ```ejemplo 
    subSet([1,2,3,4,5,6,7,4,6,8],3)
    Retorna:
    [ 
        [ 1, 2, 3 ], 
        [ 4, 5, 6 ], 
        [ 7, 4, 6 ], 
        [ 8 ]
    ]
    ```
##### - Reto 14
- Función que retorne un texto tantas veces como el segundo parametro lo indique.
    ```Ejemplo
    generate('palabra',2)
    'palabrapalabra'
    ```
##### - Reto 15
- Función que retorna la letra que más se repite en un texto y la cantidad de veces que se repite.
    ```
        Ejemplo mapText("houstondelamataramirez federico aaaaaaaa")
        Word more repeat is "a" and repeat 12 times'
    ```
##### - Reto 16
- Contar la cantidad de vocales que tiene una frase.
##### - Reto 17
- Dado un número devolver del 1 hasta el número considerando lo siguiente:
    - Para cada múltiplo de tres imprimir "buzz" en lugar del número
    - Para cada múltiplo de cinco imprimir "lightyear" en lugar del número
    - Para cada múltiplo de tres y cinco imprimir "buzzlightyear" en lugar del número
    - Para todo los demas caso solo retorno el mismo valor
    ```
    buzzlightyear(15)
    Retorna:
    1 
    2 
    buzz 
    4 
    lightyear 
    buzz 
    7 
    8 
    buzz 
    lightyear 
    11 
    buzz 
    13 
    14 
    buzzlightyear

    ```
    
##### - Reto 18
- Dado un número devolver todos sus divisores.
    ```
    showDivisor(15) 
    1 
    3 
    5 
    15 
    ```
##### - Reto 19
- Dado un array de objetos de peliculas(titulo, autor , vista) retonar una lista indicando cuales viste y cuales no.
    ```
    Ya has visto:
    - Joker de Todd Phillips
    - Historia de un matrimonio de Sam Mendes
    - Érase una vez en Hollywood de Noah Baumbach
    - Jojo Rabbi de Quentin Tarantino
    Te falta Ver:
    - Parásitos de Bong Joon-ho
    - El irlandés de Martin Scorsese
    ```
##### - Reto 20
- Función que te diga si dos palabras son anagramas entre si.
    ```
    anagram('sunasst', 'tunasss') true
    anagram('sunasst', 'tunassr') false
    ```
##### - Reto 21
- Dado una cadena de texto y un número recortar el texto mostrando los x primeros caracteres.
    ```
    cut3000('los herores del silencio',5) Retorna 'los h'
    ```
##### - Reto 22
- Dado dos número devolver cuál es el mayor y cuál es el menor.
    ```
        order(9,7) Retorna:
        EL NÚMERO MAYOR ES: 9 
        EL NÚMERO MENOR ES: 7
    ```
##### - Reto 23
- Dado un texto devolver la primera letra de cada palabra en mayuscula.
##### - Reto 24
- Dado un array de enteros y un número detectar si el array es la permutación del segundo número.
    ```
    permutation([1,2,3,4,5],5) true
    permutation([1,2,3,4],5)   false
    ```
##### - Reto 25
- Dado un texto devolver todo el texto en mayúsculas o minúsculas según la si hay más mayúsculas o minúsculas.
    ```
    convert('HOLAAS haces') 'HOLAAS HACES'
    ```
##### - Reto 26
-   Dado un número mostrar su serie de fibonacci.  
    ```
    fibonacci(7)
    [ 1, 1, 2, 3, 5, 8, 13 ]
    ```
##### - Reto 27
- Dado un número mostrar a cuántos años meses y dias equivale.
    ```
    calculator(397)
    The number 397 is: 1 year 1 month and 2 days
    ```
##### - Reto 28
- Dado un número devolver el factorial de este.
    ```
    factorial(4)   24
    ```
##### - Reto 29
- Dato un número indicar si este es capicua o no.
    ```
    capicua(11) true
    capicua(12) false
    ```
##### - Reto 30
- Dado un array eliminar los valores duplicados y los string.
    ```
    deleteDuplicates([1,2,3,4,5,6,6,7,'nel'])  
    Retorna [ 1, 2, 3, 4, 5, 6, 7 ]
    ```
##### - Reto 31
- Dado un número indicar que tipo de ángulo es.
##### - Reto 32
- Dado un array devolver otro array elevando c/u de los items al cuadrado.
    ```
    powArray([1,2,3,4,5,6])
    [ 1, 4, 9, 16, 25, 36 ]
    ```
##### - Reto 33
- Hacer un reloj en tiempo real.
    ```
    '14:52:19'
    '14:52:20'
    '14:52:21'
    '14:52:22'
    ...
    ```
##### - Reto 34
- Dado dos números retornar las operaciones básicas entre ellos. Suma, Resta, División y Multiplicación.

##### - Reto 35
- Dado un array hacer un nuevo array con el primer y último elemento del array.
    ```
    buildArray([1,2,3,7,8,8,9])
    [ 1, 9 ]
    ```
##### - Reto 36
- Dado un texto devolver cuántas consonates tiene.
##### - Reto 37
- Dado un array devolver que elemento se repite más.
    ```
    counter([1,2,3,4,5,1])
    value: 1, times:2

    counter("max que haces max")
    value: max, times:2
    ```
##### - Reto 38
- Dado un número mostrar listado de los cuadrados de todos los números naturales hasta llegar al mismo. 
    ```
    square(10)
    [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]
    ```
##### - Reto 39
- Dado un email comprobar que sea un email válido.
    ```
    validateEmail("houston@gmail.com")  true
    validateEmail("456gmail.com")       false
    ```
##### - Reto 40
- Dado un array devolver el valor más alto y el más bajo.
    ```
    order([3,4,5,6,7,3,2,9])
    'max: 9, min 2'
    ```
##### - Reto 41
- Dado un número dibujar un arbolito con asteriscos.

    ```
    graphTree(5)
        *    
       ***   
      *****  
     ******* 
    *********
    ```
##### - Reto 42
# PROXIMAMENTE
##### - Reto 43
- Dado un array de números sacar la media de todos ellos.
    ```
    media([1,2,3,4])
    2.5
    ```
##### - Reto 44
- Dado un array de string devolver otro array con los string que tengan más de dos palabras
    ```
    buildArray(["holas que", "haces", "haces houston crack", "mal"])
    [ 'holas que', 'haces houston crack' ]
    ```
##### - Reto 45
- Dado un array de alumnos y sus calificaciones devolver la cantidad de aprobados y desaprobados.
    ```
    status([["Kilian",12],["Miralles",13],["Esther",10],["Perea",15]])
    'aprove:3 disaprove: 1'
    ```
##### - Reto 46
- Dado un string devolver todo los posibles substring.
    ```
    [ 'h', 'ho', 'hol', 'hola', 'o', 'ol', 'ola', 'l', 'la', 'a' ]
    ```
##### - Reto 47
- Dado un array de objetos devolver cuales con las aficiones más comunes.
    ```
    const persons:any=[
        {name:"Max",hobbies:["informatica","cine","videojuegos"]},
        {name:"Excel",hobbies:["informatica","cine","leer"]},
        {name:"Jess",hobbies:["farmacia","cine","viajes"]},
    ]
    favorites(persons)
    Retorna
    {
        informatica: 2,
        cine: 3,
        videojuegos: 1,
        leer: 1,
        farmacia: 1,
        viajes: 1
    }
    ```
##### - Reto 48
# PROXIMAMENTE
##### - Reto 49
- Dado un objeto comprobar si existe una pripiedad en concreto.
    ```
    const object = 
    {
        name:"federico",
        hobbies:["informatica","cine","videojuegos"], 
        email:"federico@viallarreal.com"
    }
    values(object, "email") true
    values(object, "emailss") false
    ```
##### - Reto 50
- Dado un número devolver cuántos bucles tiene.
    ```
    6, 9, 0 = 1
    8 = 2
    1,2,3,4,5,7=0
    bucles(1234560987) 4
    ```
##### - Reto 51
- Dado un array de números devolver los pares e impares aparte
    ```
    splitArray([1,2,3,4,5,6,7,8,9])
    Pair: 2,4,6,8
    Odd: 1,3,5,7,9
    ```

