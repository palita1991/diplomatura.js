import React from "react";
import datos from "../datos/index.js";
export default class DetalleAlumno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: datos.alumnos,
    };
  }

  render() {
    const { idAlumno } = this.props;
    const searchStudent = this.state.alumnos.find(
      (alumno) => alumno.id === idAlumno
    );
    return (
      <ul className="d-flex justify-content-center">
        <li key={searchStudent.id} className="list-group-item active w-25">
          <strong className="mr-1">{searchStudent.id}</strong>
          {searchStudent.nombre}
        </li>
      </ul>
    );
  }
}
