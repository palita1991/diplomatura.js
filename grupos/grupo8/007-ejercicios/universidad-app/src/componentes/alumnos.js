import React from "react";
import FormAddAlumno from "./FormAddAlumno";
export default class Alumnos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeSelection = (student) => {
    this.props.setVistaActual("Alumno", student.id);
  };

  deleteSelection = (student) => {
    this.props.deleteSelection("alumnos", student);
  };

  addSelection = (newStudent) => {
    const { alumnos } = this.props;
    newStudent["id"] = alumnos.length + 1;
    this.setState({ alumnos: alumnos.push(newStudent) });
  };

  render() {
    const { alumnos } = this.props;
    return (
      <>
        <FormAddAlumno addStudent={this.addSelection} />
        <ul className="list-group">
          {alumnos.map((student) => {
            return (
              <div
                key={student.id}
                className="d-flex flex-row justify-content-center w-100"
              >
                <li
                  onClick={this.changeSelection.bind(this, student)}
                  className="list-group-item w-25 my-1"
                >
                  {student.nombre}
                </li>
                <button
                  onClick={this.deleteSelection.bind(this, student)}
                  className="btn btn-outline-danger ml-1 my-1"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      </>
    );
  }
}
