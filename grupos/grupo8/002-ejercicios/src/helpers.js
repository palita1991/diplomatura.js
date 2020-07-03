import { database } from './basededatos';

export const helper = {

    getUniversidad : (idUnivBuscada) => 
    database.universidades.find(elem => elem.id===idUnivBuscada),

    getProfesor : (idProfBuscado) => 
    database.profesores.find(elem => elem.id === idProfBuscado),

    getMateria : (idMateriaBuscada) => 
    database.materias.find(elem => elem.id === idMateriaBuscada),
  
    getObjeto : (tabla, id) => 
    database[tabla].find(elem => elem.id === id),

    getUltimoId : (tabla) => {
        let ultimo = database[tabla].length;      
        return database[tabla].find((u) => u.id === ultimo).id;
    },

    agregarProvincia: (nombreProv) => {

        let ultimoID= this.getUltimoId("provincias");
        ultimoId++;
        if(!nombreProv in database.provincias)
        database.provincias.push(ultimoId,nombreProv);
        return ultimoId;
    },
    //DUDA =====> Por que funciona con function y no con arrow ??
    
    setProvincia: function (nombreProv){
        let ultimoId= this.getUltimoId("provincias");
        ultimoId = ultimoId+1;
        
        if(!database.provincias.some(p=> p.nombre.toLowerCase() === nombreProv.toLowerCase())){
            database.provincias.push({id: ultimoId, nombre: nombreProv});
        
        return ('Nuevo ID: '+ultimoId);}

        else console.log("La provincia ya está en la BD.")
    },

    setCalificacionByAlumno: function (nomAlum, nomMateria, notaAlum){

        let alumno = database.alumnos.find(a => a.nombre.toLowerCase() === nomAlum.toLowerCase());
        let idAlumno;
        let materia = database.materias.find(m => m.nombre.toLowerCase() === nomMateria.toLowerCase());
        let idMateria;

        if(!alumno){
            idAlumno = this.getUltimoId("alumnos")+1 ;
            database.alumnos.push({
                id: idAlumno,
                nombre:nomAlum,
            })
        
        } else idAlumno=alumno.id;
        
        if(!idMateria){
            idMateria = this.getUltimoId("materias")+1;
            database.materias.push({
                id: idMateria,
                nombre: nomMateria,
            })
           
        } else idMateria = materia.id;

        let calificacion = database.calificaciones.some(c => c.alumno === idAlumno && c.materia === idMateria);

        if(!calificacion){
            database.calificaciones.push({
                alumno: idAlumno,
                materia: idMateria,
                nota: notaAlum,
            })
            
        }
    },

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas

infoByAlumno: function () {
    console.log('NOTAS DE ALUMNOS');
    console.log('----------------');

    const result = database.alumnos.map((alumno) => ({
      nombreAlumno: alumno.nombre.toUpperCase(),
      informacion: database.calificaciones
        .filter((c) => c.alumno === alumno.id)
        .map((t) => ({
          nombreMateria: database.materias.find((m) => m.id === t.materia)
            .nombre,
          notaMateria: t.nota,
        })),
    }));
    
  },


}