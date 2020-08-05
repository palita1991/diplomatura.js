import React from "react";
import datos from "../datos/index";

export default class DetalleAlumno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
    };
  }

  render() {
    const prop = this.prop;
    console.log(prop);
    const alumno = datos.alumnos.find((alumno) => alumno.id === 1);
    return (
      <ul>
        <li key={alumno.id} className="list-group-item">
          {alumno.nombre}
        </li>
      </ul>
    );
  }
}
