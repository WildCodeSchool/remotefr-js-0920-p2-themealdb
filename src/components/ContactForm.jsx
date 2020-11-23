import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
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
    const { firstName, name, email } = this.state;
    return (
      <div className="ContactForm">
        <h2>Contact :</h2>
        <form onSubmit={this.submit}>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" value={name} onChange={this.change} />
          </label>
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={this.change}
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
              value={email}
              placeholder="fredericdurand@sfr.fr"
              onChange={this.change}
            />
          </label>

          <button className="searchButton" type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
