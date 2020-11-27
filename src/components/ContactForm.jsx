import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: '',
      firstName: '',
      email: '',
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
    const { firstName, lastName, email } = this.state;
    return (
      <div className="ContactForm">
        <div className="contactform-title">
          <h2>Contact</h2>
        </div>
        <div className="contactform-container">
          <form onSubmit={this.submit}>
            <label htmlFor="firstname">
              <input
                type="text"
                id="firstName"
                placeholder="Your firstname"
                className="form-control"
                value={firstName}
                onChange={this.change}
              />
            </label>
            <label htmlFor="lastname">
              <input
                type="text"
                id="lastName"
                placeholder="Your lastname"
                className="form-control"
                value={lastName}
                onChange={this.change}
              />
            </label>
            <label htmlFor="email">
              <input
                type="text"
                id="email"
                value={email}
                placeholder="Your email"
                className="form-control"
                onChange={this.change}
              />
            </label>
            <label htmlFor="msg">
              <textarea
                type="text"
                id="msg"
                placeholder="Your message"
                className="form-control"
                onChange={this.change}
              />
            </label>
            <button className="searchButton-form" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
