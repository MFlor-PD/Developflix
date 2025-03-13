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
const imageBaseUrl = "https://image.tmdb.org/t/p/w200";
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

accion.forEach((pelicula) => {
    const nuevoDivAccion = document.createElement('div');
    accion28.appendChild(nuevoDivAccion);

    // Crear la imagen
    const img = document.createElement('img');
    img.src = imageBaseUrl + pelicula.poster_path;

    // Añadir la imagen al nuevo div
    nuevoDivAccion.appendChild(img);
});

thriller.forEach((pelicula) => {
const nuevoDivThriller = document.createElement('div');
thriller53.appendChild(nuevoDivThriller);

const img2 = document.createElement('img');
    img2.src = imageBaseUrl + pelicula.poster_path;

    // Añadir la imagen al nuevo div
    nuevoDivThriller.appendChild(img2);
});

aventura.forEach((pelicula) => {
const nuevoDivAvent = document.createElement('div');
aventura12.appendChild(nuevoDivAvent);

const img3 = document.createElement('img');
    img3.src = imageBaseUrl + pelicula.poster_path;

    // Añadir la imagen al nuevo div
    nuevoDivAvent.appendChild(img3);
});
