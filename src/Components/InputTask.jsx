import React, { Component } from "react";

export default class InputTask extends Component {
  render() {
    const { value, handleInputTask, addTask } = this.props;

    return (
      <form id="input-container" onSubmit={addTask}>
        <input type="text" value={value} onChange={handleInputTask} />
        <button type="submit">ADD</button>
      </form>
    );
  }
}
