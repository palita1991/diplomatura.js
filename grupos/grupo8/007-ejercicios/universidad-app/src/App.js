import React from "react";
import "./App.css";
import datos from "./datos";
import Alumnos from "./componentes/Alumnos";
import Profesores from "./componentes/Profesores";
import DetalleAlumno from "./componentes/DetalleAlumno";
import DetalleProfesor from "./componentes/DetalleProfesor";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: "alumnos",
      idDetalleSeleccionado: -1,
      alumnos: datos.alumnos,
      profesores: datos.profesores,
      materias: datos.materias,
      calificaciones: datos.calificaciones,
    };
    /*     this.mostrarListado = this.mostrarListado.bind(this);
    this.modificarVista = this.modificarVista.bind(this); */
    this.setVistaActual = this.setVistaActual.bind(this);
  }
  /**
   * Se utiliza para disparar el cambio de vista.
   * Si viene un id seleccionado, se setea como el detalle actual.
   * @param {*} vista
   * @param {*} idSeleccionado
   */
  setVistaActual(vista, idSeleccionado) {
    const newState = { vistaActual: vista };

    if (idSeleccionado) {
      newState.idDetalleSeleccionado = idSeleccionado;
    } else {
      newState.idDetalleSeleccionado = -1;
    }
    this.setState(newState);
  }

  mostrarListado() {
    const { vistaActual } = this.state;
    if (vistaActual === "alumnos") {
      return <Alumnos setVistaActual={this.setVistaActual} />;
    } else if (vistaActual === "Alumno") {
      return <DetalleAlumno idAlumno={this.state.idDetalleSeleccionado} />;
    } else if (vistaActual === "Profesor") {
      return <DetalleProfesor idProfesor={this.state.idDetalleSeleccionado} />;
    } else {
      return <Profesores setVistaActual={this.setVistaActual} />;
    }
  }

  render() {
    const vistaActual = <div>{this.mostrarListado()}</div>;
    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button
            className="btn btn-outline-info"
            onClick={() => {
              this.setVistaActual("alumnos", null);
            }}
          >
            Alumnos
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => {
              this.setVistaActual("profesores", null);
            }}
          >
            Profesores
          </button>
          <button className="btn btn-outline-info">Materias</button>
          <button className="btn btn-outline-info">Calificaciones</button>
        </div>
        <div className="mainView">
          <h2 className="text-uppercase">{this.state.vistaActual}</h2>
          <div className="mainView">{vistaActual}</div>
        </div>
      </div>
    );
  }
}

export default App;
