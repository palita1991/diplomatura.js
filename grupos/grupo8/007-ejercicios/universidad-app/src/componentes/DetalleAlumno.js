import React from "react";
//import datos from "../datos/index.js";
export default class DetalleAlumno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { idAlumno, alumnos } = this.props;
    const searchStudent = alumnos.find((alumno) => alumno.id === idAlumno);
    return (
      <div className="alert alert-primary d-flex justify-content-center">
        <div className="row w-100" key={searchStudent.id}>
          <div className="col-4">
            <strong className="mr-1">Id: </strong> {searchStudent.id}
          </div>
          <div className="col-4">
            <strong className="mr-1">Nombre: </strong> {searchStudent.nombre}
          </div>
          <div className="col-4">
            <strong className="mr-1">Edad: </strong> {searchStudent.edad}
          </div>
        </div>
      </div>
    );
  }
}
