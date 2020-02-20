import React, { Component } from "react";
import { AddContainer } from "./style";
import ListTask from "./listTask";
import axios from "axios";

export class Add extends Component {
  state = {
    listTask: [],
    hadError: false,
    nameTask: ""
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    axios
      .get("https://monoku-tasks.herokuapp.com/YZgQZzKRQUkEYW5R8How/all")
      .then(res => {
        const listTask = res.data;
        this.setState({ listTask });
      });
  };
  handleChange = event => {
    const nameTask = event.target.value;
    const hadError = nameTask !== "" && nameTask.length < 5;
    this.setState({ nameTask, hadError });
  };

  handleNewTask = event => {
    event.preventDefault();
    const task = {
      text: this.state.nameTask
    };
    axios
      .post(`https://monoku-tasks.herokuapp.com/YZgQZzKRQUkEYW5R8How/add`, task)
      .then(res => {
        this.setState({ nameTask: "" });
        this.fetchData();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <AddContainer hadError={this.state.hadError}>
        <small>Añade las tareas que deseas realizar</small>
        <form onSubmit={this.handleNewTask} reset={this.resetFormFields}>
          <input
            type="text"
            value={this.state.nameTask}
            onChange={this.handleChange}
            placeholder="Eje: Comprar Materiales para trabajar"
          />
          <span className="focus"></span>
          <button>Añadir Tarea</button>
        </form>
        <ListTask
          listTask={this.state.listTask}
          fetchData={this.fetchData}
        ></ListTask>
      </AddContainer>
    );
  }
}

export default Add;
