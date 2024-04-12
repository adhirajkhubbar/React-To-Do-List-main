import './App.css'
import React, { Component } from 'react'
import InputTask from './Components/inputTask';
import ToDoTask from './Components/toDoTask';




export default class App extends Component {

  constructor(props) {
    super(props),

    this.state = {
      taskList: [],
      newTask: "",
    };
  }

  handleInputTask = (event) => {
    this.setState({ newTask: event.target.value})
  }

  addTask = (event)=> {
    event.preventDefault();

    if (this.state.newTask.trim() !=="") {
      this.setState((prevState)=> ({
        taskList: [...prevState.taskList, this.state.newTask],
        newTask: "",
      }))
    }
  }

  deleteTask = (index) => {
    this.setState((prevState) => {
      const updatedTask = [...prevState.taskList];
      updatedTask.splice(index, 1);
      return { taskList: updatedTask };
    });
  }

  editTask = (index) => {
    const userInput = prompt(`Update To-Do ${index + 1}`);

    if (userInput !== null && userInput.trim() !== "") {
      this.setState((prevState) => ({
        taskList: prevState.taskList.map((item, itemIndex) =>
          itemIndex === index ? userInput : item
        ),
      }));
    }
  }

  render() {
    return (
      <div id='container'>
        <h1>To Do List</h1>


        <InputTask
          value={this.state.newTask}
          handleInputTask={this.handleInputTask}
          addTask={this.addTask}
        />

        <ToDoTask
          taskList={this.state.taskList}
          deleteMethod={this.deleteTask}
          editMethod={this.editTask}
        />
      </div>

      
    )
  }
}

