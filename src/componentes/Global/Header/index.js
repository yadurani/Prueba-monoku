import React, { Component } from "react";
import { HeaderContainer } from "./style.js";

export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <div className="overlay"></div>
        <small>Viernes, 6 de Diciembre</small>
        <h3>10:45 am</h3>
        <p>¿Qué planeas hacer el día de hoy?</p>
      </HeaderContainer>
    );
  }
}

export default Header;
