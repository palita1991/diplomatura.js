import React from "react";
import basededatos from "../datos/index.js";
export default class Profesores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profesores: basededatos.profesores,
    };
    this.changeSelection = this.changeSelection.bind(this);
    this.deleteSelection = this.deleteSelection.bind(this);
  }

  changeSelection(teacher) {
    this.props.setVistaActual("Profesor", teacher);
  }

  deleteSelection(idTeacher) {
    const searchTeacher = this.state.profesores.filter(
      (teacher) => teacher.id !== idTeacher
    );
    this.setState({ profesores: searchTeacher });
  }
  render() {
    return (
      <ul className="list-group">
        {this.state.profesores.map((teacher) => {
          return (
            <div
              key={teacher.id}
              className="d-flex flex-row justify-content-center w-100"
            >
              <li
                onClick={() => {
                  this.changeSelection(teacher.id);
                }}
                className="list-group-item w-25 my-1"
              >
                {teacher.nombre}
              </li>
              <button
                onClick={() => {
                  this.deleteSelection(teacher.id);
                }}
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
