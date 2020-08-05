import React from "react";

export default class FormAddAlumno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      edad: "",
    };
  }
  onChangeName(e) {
    this.setState({ nombre: e.target.value });
  }

  onChangeEdad(e) {
    this.setState({ edad: e.target.value });
  }
  agregar() {
    const newAlumno = {
      nombre: this.state.nombre,
      edad: this.state.edad,
    };
    this.props.addStudent(newAlumno);
  }
  render() {
    return (
      <div className="d-flex flex-row justify-content-center">
        <input
          className="form-control w-25"
          placeholder="Nombre"
          value={this.state.nombre}
          onChange={this.onChangeName.bind(this)}
        />
        <input
          className="form-control w-25 mx-2"
          placeholder="Edad"
          value={this.state.edad}
          onChange={this.onChangeEdad.bind(this)}
        />
        <button
          onClick={this.agregar.bind(this)}
          className="btn btn-outline-primary"
        >
          Add
        </button>
      </div>
    );
  }
}
