import React, { Component } from 'react'

export default class ToDoTask extends Component {
  render() {

    const {taskList, deleteMethod, editMethod} = this.props;
    const reversedTasks = [...taskList].reverse();


    return (
        <div id="tasks">
        {reversedTasks.map((item, index, array) => {
          const reversedIndex = array.length - 1 - index;

          return (
            <div id="task" key={reversedIndex}>
              <span>{item}</span>
              <div id="button-container">
                <button
                  id="delete-button"
                  onClick={() => deleteMethod(reversedIndex)}
                >
                  Delete
                </button>
                <button
                  id="edit-button"
                  onClick={() => editMethod(reversedIndex)}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div> 
    )
  }
}
