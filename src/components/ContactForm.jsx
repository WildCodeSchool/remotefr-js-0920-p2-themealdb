import React, { Component } from 'react';

class App extends Component {
  state = {
    name: null,
    age: null,
    gender: null,
  };

  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>Contact :</h2>
        <form onSubmit={this.submit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.change} />
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" onChange={this.change} />
          <label htmlFor="msg">Message:</label>
          <textarea type="text" id="msg" onChange={this.change} />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="fredericdurand@sfr.fr"
            onChange={this.change}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default App;
