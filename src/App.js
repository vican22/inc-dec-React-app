import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    click: 0,
    show: true
  };

  IncrementItem = () => {
    this.setState({
      click: this.state.click + 1
    });
  };

  DecrementItem = () => {
    this.setState({
      click: this.state.click - 1
    });
  };

  ToogleClick = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.IncrementItem}>Click to increment by 1</button>
        <button onClick={this.DecrementItem}>Click to decrement by 1</button>
        <button onClick={this.ToogleClick}>
          {this.state.show ? "Hide number" : "Show number"}
        </button>
        {this.state.show ? <h2>{this.state.click}</h2> : ""}
      </div>
    );
  }
}

export default App;
