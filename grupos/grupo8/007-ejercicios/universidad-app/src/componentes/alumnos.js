import React from "react";
import basededatos from "../datos/index.js";
export default class Alumnos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: basededatos.alumnos,
    };
  }

  changeSelection(idStudent) {
    this.props.setVistaActual("Alumno", idStudent);
  }

  deleteSelection(idStudent) {
    const searchStudent = this.state.alumnos.filter(
      (student) => student.id !== idStudent
    );
    this.setState({ alumnos: searchStudent });
  }

  render() {
    return (
      <ul className="list-group">
        {this.state.alumnos.map((student) => {
          return (
            <div
              key={student.id}
              className="d-flex flex-row justify-content-center w-100"
            >
              <li
                onClick={this.changeSelection.bind(this, student.id)}
                className="list-group-item w-25 my-1"
              >
                {student.nombre}
              </li>
              <button
                onClick={this.deleteSelection.bind(this, student.id)}
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
