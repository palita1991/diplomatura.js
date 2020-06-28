import {obtenerUniversidad,obtenerProfePorId, obtenerMateriaPorId} from './moduloEjercicios';

const obtenerUni = (id) => obtenerUniversidad(id);
const obtenerProfe = (id) => obtenerProfePorId(id);
const obtenerMateria = (id) => obtenerMateriaPorId(id);
const insertProvincia = (nombre) => cargarProvincia(nombre);
const mostrarMateria = (id) => infoMateria(id);
export const helper = {
    obtenerUni,
    obtenerProfe,
    obtenerMateria,
    insertProvincia,
    mostrarMateria
}