import React, { Component } from "react";
import Header from "../componentes/Global/Header";
import Add from "../componentes/Tareas/add";

export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Add />
      </>
    );
  }
}

export default Home;
