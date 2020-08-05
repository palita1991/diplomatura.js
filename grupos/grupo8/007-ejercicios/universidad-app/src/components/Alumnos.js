import React from "react";
import basededatos from "../datos/index.js";

export default class Alumnos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnoActual: "",
      alumnos: basededatos.alumnos,
    };
    this.changeSelection = this.changeSelection.bind(this);
  }

  changeSelection(alumno) {
    this.props.setVistaActual("alumnos", alumno.id);
  }

  render() {
    return (
      <ul className="list-group">
        {this.state.alumnos.map((alumno) => {
          return (
            <li
              className="list-group-item"
              key={alumno.id}
              onClick={() => this.changeSelection(alumno)}
            >
              {alumno.nombre}
            </li>
          );
        })}
      </ul>
    );
  }
}
