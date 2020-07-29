import React from "react";
import "./App.css";
import datos from "./datos";
import Alumnos from "./componentes/alumnos";
//import Profesores from "./componentes/profesores";
function ListItem(props) {
  const prueba = datos.alumnos.find((alumno) => alumno.id === props.idAlumno);
  console.log(prueba);
  return (
    <ul>
      <li key={prueba.id} className="list-group-item">
        {prueba.id}
        {prueba.nombre}
      </li>
    </ul>
  );
}
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
    this.mostrarListado = this.mostrarListado.bind(this);
    this.modificarVista = this.modificarVista.bind(this);
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
    } else {
      return <ListItem idAlumno={this.state.idDetalleSeleccionado} />;
    }
  }

  modificarVista(vista) {
    this.setState({ vistaActual: vista });
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
              this.modificarVista("alumnos");
            }}
          >
            Alumnos
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => {
              this.modificarVista("profesores");
            }}
          >
            Profesores
          </button>
          <button className="btn btn-outline-info">Materias</button>
          <button className="btn btn-outline-info">Calificaciones</button>
        </div>
        <div className="mainView">
          <h2>{this.state.vistaActual}</h2>
          <div className="mainView">{vistaActual}</div>
        </div>
      </div>
    );
  }
}

export default App;
