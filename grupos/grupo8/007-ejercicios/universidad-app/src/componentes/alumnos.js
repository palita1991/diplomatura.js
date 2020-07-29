import React from "react";
import basededatos from "../datos/index.js";
export default class alumnos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: basededatos.alumnos,
    };
    this.changeSelection = this.changeSelection.bind(this);
  }

  changeSelection(alumno) {
    this.props.setVistaActual("<ul>veerdura</ul>", alumno.id);
  }

  render() {
    return (
      <ul className="list-group">
        {this.state.alumnos.map((alumno) => {
          return (
            <li
              key={alumno.id}
              onClick={() => {
                this.changeSelection(alumno);
              }}
              className="list-group-item"
            >
              {alumno.nombre}
            </li>
          );
        })}
      </ul>
    );
  }
}
