/*Dado un array de objetos de peliculas(titulo, autor , vista) retonar una lista indicando cuales viste y cuales no**/

function showMovies(movies:any) {
  let view = ``
  let noView = ``
  let result = ``
  for (let movie of movies) {
    if(movie.view){
      view +=`- ${movie.title} de ${movie.director}\n`
    }else{
      noView +=`- ${movie.title} de ${movie.director}\n`
    }
  }
  result= `Ya has visto:\n ${view} Te falta Ver:\n ${noView}`
  return result
}

const movies = [
  {
    title: 'Parásitos',
    director: 'Bong Joon-ho',
    view: false
  },
  {
    title: 'El irlandés',
    director: 'Martin Scorsese',
    view: false
  },
  {
    title: 'Joker',
    director: 'Todd Phillips',
    view: true
  },
  {
    title: 'Historia de un matrimonio',
    director: 'Sam Mendes',
    view: true
  },
  
  {
    title: 'Érase una vez en Hollywood',
    director: 'Noah Baumbach',
    view: true
  },
  {
    title: 'Jojo Rabbi',
    director: 'Quentin Tarantino',
    view: true
  },
  
]

showMovies(movies)