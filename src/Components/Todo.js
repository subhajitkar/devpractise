import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  state = {
    items: [],
    item_input: ""
  };

  // Adds items to the list
  add = () => {
    this.setState(prevState => {
      return {
        item_input: "",
        items: prevState.items.concat(prevState.item_input)
      };
    });
  };

  // Updates our input box
  update = e => {
    this.setState({
      item_input: e.target.value
    });
  };

  // Removes items from the list
  remove = () => {};

  render() {
    return (
      <div>
        <h1>React Todos</h1>
        <ul>
          {this.state.items.map((items, i) => (
            <li key={i}>{items}</li>
          ))}
        </ul>
        <input
          type="text"
          id="input"
          value={this.state.item_input}
          onChange={this.update}
        />
        <button type="button" id="add-btn" onClick={this.add}>
          Add Item
        </button>
        <button type="button" id="del-btn" onClick={this.remove}>
          Remove Item
        </button>
      </div>
    );
  }
}

export default Todo;
