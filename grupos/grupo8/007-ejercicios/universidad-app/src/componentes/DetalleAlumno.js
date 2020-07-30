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
    const prueba = this.state.alumnos.find((alumno) => alumno.id === idAlumno);
    return (
      <ul>
        <li key={prueba.id} className="list-group-item">
          {prueba.id}
          {prueba.nombre}
        </li>
      </ul>
    );
  }
}
