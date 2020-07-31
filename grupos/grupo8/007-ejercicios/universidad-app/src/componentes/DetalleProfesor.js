import React from "react";
import datos from "../datos/index.js";
export default class DetalleProfesor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profesores: datos.profesores,
    };
  }

  render() {
    const { idProfesor } = this.props;
    const searchTeacher = this.state.profesores.find(
      (profesor) => profesor.id === idProfesor
    );
    return (
      <ul className="d-flex justify-content-center">
        <li key={searchTeacher.id} className="list-group-item active w-25">
          <strong className="mr-1">{searchTeacher.id}</strong>
          {searchTeacher.nombre}
        </li>
      </ul>
    );
  }
}
