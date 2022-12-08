
const numberOfFilms = +prompt("Сколько фильмовов вы посмотрели ? ", "");


const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
    
};

const a = prompt("Последний фильм который вы посмотрели ?",""),
      b = prompt("На сколько ойцените его ?",""),
      c = prompt("Последний фильм который вы посмотрели ?",""),
      d = prompt("На сколько ойцените его ?","");

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);
