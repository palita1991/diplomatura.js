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

  changeSelection(profesor) {
    this.props.setVistaActual("detalleProfesor", profesor.id);
  }

  deleteSelection(p) {
    const searchTeacher = this.state.profesores.filter(
      (profesor) => profesor.id !== p.id
    );
    this.setState({ profesores: searchTeacher });
  }
  render() {
    return (
      <ul className="list-group">
        {this.state.profesores.map((profesor) => {
          return (
            <div
              key={profesor.id}
              className="d-flex flex-row justify-content-center w-100"
            >
              <li
                onClick={() => {
                  this.changeSelection(profesor);
                }}
                className="list-group-item w-25 my-1"
              >
                {profesor.nombre}
              </li>
              <button
                onClick={() => {
                  this.deleteSelection(profesor);
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
