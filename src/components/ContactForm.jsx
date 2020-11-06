import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: null,
      name: null,
      email: null,
    };
  }

  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
  };

  render() {
    const { lastName, name, email } = this.state;
    return (
      <div>
        <form onSubmit={this.submit}>
          <label htmlFor="name">
            Last name:
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={this.change}
            />
          </label>

          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              id="firstName"
              value={name}
              valueonChange={this.change}
            />
          </label>

          <label htmlFor="msg">
            Message:
            <textarea type="text" id="msg" onChange={this.change} />
          </label>

          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              placeholder="fredericdurand@sfr.fr"
              value={email}
              onChange={this.change}
            />
          </label>

          <button type="button">Send</button>
        </form>
      </div>
    );
  }
}

export default App;
