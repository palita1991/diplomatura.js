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
    const prueba = this.state.profesores.find(
      (profesor) => profesor.id === idProfesor
    );
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
