import React from "react";
import basededatos from "../datos/index.js";

export default class profesores extends React.Component {
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
            <li key={profesor.id} className="list-group-item">
              {profesor.nombre}
            </li>
          );
        })}
      </ul>
    );
  }
}
