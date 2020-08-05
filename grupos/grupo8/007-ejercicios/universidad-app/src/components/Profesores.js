import React from "react";
import basededatos from "../datos/index.js";

export default class Profesores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profesores: basededatos.profesores,
    };
  }

  render() {
    return (
      <ul className="list-group">
        {this.state.profesores.map((profesor) => {
          return (
            <li className="list-group-item" key={profesor.id}>
              {profesor.nombre}
            </li>
          );
        })}
      </ul>
    );
  }
}
