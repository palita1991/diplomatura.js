import React from "react";
import basededatos from "../datos/index.js";
export default class Profesores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profesores: basededatos.profesores,
    };
  }

  changeSelection = (teacher) => {
    this.props.setVistaActual("Profesor", teacher.id);
  };

  deleteSelection = (teacher) => {
    this.props.deleteSelection("profesores", teacher);
  };
  render() {
    const { profesores } = this.props;
    return (
      <ul className="list-group">
        {profesores.map((teacher) => {
          return (
            <div
              key={teacher.id}
              className="d-flex flex-row justify-content-center w-100"
            >
              <li
                onClick={() => {
                  this.changeSelection(teacher);
                }}
                className="list-group-item w-25 my-1"
              >
                {teacher.nombre}
              </li>
              <button
                onClick={() => {
                  this.deleteSelection(teacher);
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
