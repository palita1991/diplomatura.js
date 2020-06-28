import {
    obtenerUniversidad,
    obtenerProfePorId,
    obtenerMateriaPorId,
    obtenerUltimoIDUsado,
    cargarProvincia,
    infoMateria,
    infoAlumnos,
    materiasAlumno
} from './moduloEjercicios';
import { helper} from './helpers';
// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './basededatos';

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados
/*console.log('-------------------------------------------------------');
console.log('Primer ejercicio');


 const obtenerUniversidadPorId = obtenerUniversidad(1);
console.log('Universidad 1 es', obtenerUniversidadPorId); */

// 3) Implementar una función que obtenga un profesor por Id
/* console.log('-------------------------------------------------------');
console.log('Tercer ejercicio');
let id = 3;

const obtenerProfe = obtenerProfePorId(id);
console.log(`El profesor con ${id} es: `, obtenerProfe); */

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
/* console.log('-------------------------------------------------------');
console.log('Cuarto ejercicio');
let id = 2;

const materia = obtenerMateriaPorId(id);
console.log(`La materia de ${id} es: `, materia); */

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
/* console.log('-------------------------------------------------------');
console.log('Quinto ejercicio');
const universidad = helper.obtenerUni(3);
console.log('La universidad buscada por medio del helper es', universidad); */

// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
/* console.log('-------------------------------------------------------');
console.log('Septimo ejercicio');
const tabla = 'profesores';
const ultimoElemento = obtenerUltimoIDUsado(tabla);
console.log(`El ultimo elemento en la tabla ${tabla} es: `, ultimoElemento); */

// 8) Importar helpers desde su propio módulo

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper
/* console.log('-------------------------------------------------------');
console.log('Noveno ejercicio');
const provincia = 'La Pampa';
const idProvNueva = cargarProvincia(provincia);
console.log(`La provincia ${provincia} se cargo con id:`, idProvNueva); */
// 10) Implementar una función que reciba el id de una materia y devuelva la materia son los ids de universidad y profesores resueltos a sus nombres

/* console.log('-------------------------------------------------------');
console.log('Decimo ejercicio');
const id = 1;
console.log(`Materias con id ${id}: `, infoMateria(id)); */

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...
console.log('-------------------------------------------------------');
console.log('Undecimo ejercicio');
console.log('NOTAS DE ALUMNOS')
//console.log(materiasAlumno(1));
console.log(infoAlumnos());
// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
