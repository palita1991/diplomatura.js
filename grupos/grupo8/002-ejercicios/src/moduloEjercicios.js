//Ejercicio 1
import { database } from './basededatos';

//Ejercicio 2 

export const obtenerUniversidad = (idUnivBuscada) => 
    database.universidades.find(elem => elem.id===idUnivBuscada);


//Ejercicio 3
export const obtenerProfesor = (idProfBuscado) => 
     database.profesores.find(elem => elem.id === idProfBuscado);

//Ejercicio 4
export const obtenerMateria = (idMateriaBuscada) => 
    database.materias.find(elem => elem.id === idMateriaBuscada);

export const obtenerObjeto = (tabla, id) => {
    return database[tabla].find(elem => elem.id === id)
}
//Ejercicio 7
export const obtenerUltimoId = (tabla) => {
           const ultimo = database[tabla].length;      
           return database[tabla].find((u) => u.id === ultimo).id;
}

//Ejercicio 9
export const infoByMateria = (id) => {

let mat = obtenerMateria(id);




}