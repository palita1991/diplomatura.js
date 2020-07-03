// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './basededatos';
import { obtenerUniversidad, obtenerProfesor, obtenerMateria, obtenerObjeto, obtenerUltimoId } from './moduloEjercicios';
import {helper} from './helpers';

/*
// 2) Implementar una función que obtenga una universidad por Id
console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios obtenerUniversidad.');

const universidadById = obtenerUniversidad(1);
console.log('Universidad:', universidadById);
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados

// 3) Implementar una función que obtenga un profesor por Id
console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios obtenerProfesor.');

const profesorById = obtenerProfesor(2);
console.log('Profesor: ', profesorById);

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios obtenerMateria.');

const materiaById = obtenerMateria(3);
console.log('Materia: ', materiaById);

//Generico
console.log("GENERICO: ", obtenerObjeto("universidades", 1));
console.log("GENERICO: ", obtenerObjeto("profesores", 1));
*/

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos

// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js

console.log("--- EJERCICIO 2 ---");
//console.log("Universidad: ", helper.getUniversidad(1),"\n");

console.log("--- EJERCICIO 3 ---");
//console.log("Profesor: ", helper.getProfesor(2),"\n");

console.log("--- EJERCICIO 4 ---");
//console.log("Materia: ", helper.getMateria(3),"\n");

console.log("--- EJERCICIO 4bis (General) ---");
//console.log("Objeto: ", helper.getObjeto("universidades",1,"\n"));

console.log("--- EJERCICIO 7 ---");
//console.log("Último ID: ", helper.getUltimoId("universidades","\n"));

console.log("--- EJERCICIO 9 ---"); // USAR array.push 
//console.log("ID agregado: ", helper.agregarProvincia("Misiones"));
console.log(helper.setProvincia("Misiones"));

console.log("--- EJERCICIO 12 ---");
//let calificacion= helper.setCalificacionByAlumno("Felipe Vidal", "POO", 10)

console.log("--- Prueba ---");
var objeto1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(objeto1) );

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
//console.log("ULTIMO ID: ", obtenerUltimoId("profesores"));

// 8) Importar helpers desde su propio módulo ==> import {helper} from './helpers';

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper

// 10) Implementar una función que reciba el id de una materia y devuelva la materia con los ids de universidad y profesores resueltos a sus nombres

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
