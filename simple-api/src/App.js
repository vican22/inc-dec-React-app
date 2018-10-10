import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    term: "",
    img: ""
  };

  onChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const api_key = "dc6zaTOxFJmzC";
    const url = `http://api.giphy.com/v1/gifs/search?q=${
      this.state.term
    }&api_key=${api_key}`;

    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          term: "",
          img: data.data[0].images.fixed_height.url
        })
      )
      .catch(err => console.log("error", err));
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.term} />
          <button>Search</button>
        </form>
        <img src={this.state.img} height="200" alt={this.state.term} />
      </div>
    );
  }
}

export default App;
