import React from "react";
import basededatos from "../datos/index.js";
export default class profesores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profesores: basededatos.profesores,
    };
    this.changeSelection = this.changeSelection.bind(this);
  }
  changeSelection(profesor) {
    this.props.setVistaActual("detalleProfesor", profesor.id);
  }

  render() {
    return (
      <ul className="list-group">
        {this.state.profesores.map((profesor) => {
          return (
            <li
              key={profesor.id}
              onClick={() => {
                this.changeSelection(profesor);
              }}
              className="list-group-item"
            >
              {profesor.nombre}
            </li>
          );
        })}
      </ul>
    );
  }
}
