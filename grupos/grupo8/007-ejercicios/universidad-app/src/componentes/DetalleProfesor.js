import React from "react";
import datos from "../datos/index.js";
export default class DetalleProfesor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profesores: datos.profesores,
    };
  }

  render() {
    const { idProfesor } = this.props;
    const searchTeacher = this.state.profesores.find(
      (profesor) => profesor.id === idProfesor
    );
    return (
      <div className="alert alert-primary d-flex justify-content-center">
        <div className="row w-100" key={searchTeacher.id}>
          <div className="col-6">
            <strong className="mr-1">Id: </strong> {searchTeacher.id}
          </div>
          <div className="col-6">
            <strong className="mr-1">Nombre: </strong> {searchTeacher.nombre}
          </div>
        </div>
      </div>
    );
  }
}
