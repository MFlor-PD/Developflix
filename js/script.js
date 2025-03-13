import peliculas from './peliculas.js'
//console.log(peliculas)

// traer elementos del DOM
// crear las variables necesarias
// generar arrays de generos
// dividir cada array en la seccion correspondiente
// crear un evento para cada boton de genero    (depende)

// 1 - Extraer elementos del DOM
const generoContainer = document.querySelectorAll('.genero-container');
const genero = document.querySelectorAll('.genero');
const accion28 = document.getElementById('genero-28');
const thriller53 = document.getElementById('genero-53');
const aventura12 = document.getElementById('genero-12');

/*
console.log(generoContainer);
console.log(genero);
console.log(accion28);
console.log(thriller53);
console.log(aventura12);
*/

// 2 - crear las variables/arrays necesarios
let accion = [];   
let thriller = [];
let aventura = []; 

// 3 - Clasificar los generos en arrays
peliculas.forEach((pelicula) => {
if (pelicula.genre_ids.includes(28)){
    accion.push(pelicula);
} 
if (pelicula.genre_ids.includes(53)){
    thriller.push(pelicula);
}
if (pelicula.genre_ids.includes(12)){
    aventura.push(pelicula);
}
});

/*
console.log(accion);   
console.log(thriller);
console.log(aventura); 
*/

// 4 - Introducir cada array en la seccion corrspondiente
