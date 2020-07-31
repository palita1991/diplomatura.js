import React from "react";
import basededatos from "../datos/index.js";
export default class Alumnos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: basededatos.alumnos,
    };
  }

  changeSelection(alumno) {
    console.log("entro change");
    this.props.setVistaActual("detalleAlumno", alumno.id);
  }

  deleteSelection(a) {
    const prueba = this.state.alumnos.filter((alumno) => alumno.id !== a.id);
    this.setState({ alumnos: prueba });
  }

  render() {
    return (
      <ul className="list-group">
        {this.state.alumnos.map((alumno) => {
          return (
            <div
              key={alumno.id}
              className="d-flex flex-row justify-content-center w-100"
            >
              <li
                onClick={this.changeSelection.bind(this, alumno)}
                className="list-group-item w-25 my-1"
              >
                {alumno.nombre}
              </li>
              <button
                onClick={this.deleteSelection.bind(this, alumno)}
                className="btn btn-outline-danger ml-1 my-1"
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    );
  }
}
