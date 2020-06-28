import { database } from './baseDeDatos';

export const obtenerUniversidad = (idUniversidad) => {
  return database.universidades.find((uni) => uni.id === idUniversidad);
};

export const obtenerProfePorId = (idProfe) => {
  return database.profesores.find((profe) => profe.id === idProfe);
};

export const obtenerMateriaPorId = (idMateria) => {
  return database.materias.find((materia) => materia.id === idMateria);
};

export const obtenerUltimoIDUsado = (tabla) => {
  const cantidad = database[tabla].length;
  return database[tabla].find((elem) => elem.id === cantidad).id;
};

export const cargarProvincia = (nombreProv) => {
  const cantidadProv = obtenerUltimoIDUsado('provincias');
  database.provincias.push({ id: cantidadProv + 1, nombre: nombreProv });
  let provNueva = database.provincias.find(
    (prov) => prov.nombre === nombreProv
  );
  return provNueva.id;
};

export const infoMateria = (id) => {
  const materia = database.materias
    .filter((materia) => materia.id === id)
    .map((mat) => {
      return {
        id: mat.id,
        nombreMateria: mat.nombre,
        profesor: mat.profesores.filter((id) =>
          database.profesores.find((profeD) => profeD.id === id)
        ),
      };
    });
  return materia;
};

export const materiasAlumno = (id) => {
  let materias = [];
  database.calificaciones.find((cali) => {
    if (cali.alumno === id) {
      materias.push(cali);
    }
  });
  return materias;
};

export const infoAlumnos = () => {
  database.alumnos.map((alum) => {
    return {
      nombre: console.log(alum.nombre.toUpperCase()),
      materia: database.calificaciones
        .filter((cali) => cali.alumno === alum.id)
        .map((mate) => {
          nombreMateria: database.materias.find((materia) => materia.id === mate.materia).nombre;
        }),
    };
  });

  /* if (mate.id === cali.materia) console.log(`${mate.nombre}: ${cali.nota}`);
  if (cali.alumno === alum.id) {
    database.materias.
  } */
  /* const alumnos = database.alumnos.map( (alum) => {
    return {
      nombre: alum.nombre.toUpperCase(),
      materia : materiasAlumno(alum.id),
    }
  })
  return alumnos; */
};
