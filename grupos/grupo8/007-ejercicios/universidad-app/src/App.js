import React from "react";
import "./App.css";
import datos from "./datos";
import Alumnos from "./components/Alumnos";
import Profesores from "./components/Profesores";
import DetalleAlumno from "./components/DetalleAlumno";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cabeceraActual: "Listado",
      vistaActual: "",
      idDetalleSeleccionado: -1,
      alumnos: datos.alumnos,
      profesores: datos.profesores,
      materias: datos.materias,
      calificaciones: datos.calificaciones,
    };
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
    /* this.setState(newState); */
    console.log(idSeleccionado);
    this.setState({
      cabeceraActual: "Informacion",
      vistaActual: <DetalleAlumno idAlumno={this.idDetalleSeleccionado} />,
    });
  }

  mostrarAlumnos() {
    this.setState({
      cabeceraActual: "Alumnos",
      vistaActual: <Alumnos setVistaActual={this.setVistaActual} />,
    });
  }

  mostrarProfesores() {
    this.setState({
      cabeceraActual: "Profesores",
      vistaActual: <Profesores />,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button
            className="btn btn-outline-info"
            onClick={this.mostrarAlumnos.bind(this)}
          >
            Alumnos
          </button>
          <button
            className="btn btn-outline-info"
            onClick={this.mostrarProfesores.bind(this)}
          >
            Profesores
          </button>
          <button className="btn btn-outline-info">Materias</button>
          <button className="btn btn-outline-info">Calificaciones</button>
        </div>
        <h2>{this.state.cabeceraActual}</h2>
        <div className="mainView">{this.state.vistaActual}</div>
      </div>
    );
  }
}

export default App;
