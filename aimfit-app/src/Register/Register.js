import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
    return (
      <>
        <section className="muscle-group">
          <h2>Strive to be great. Aim to be fit.</h2>
        </section>
        <section className="exercises">
          <h2>Register</h2>
          <label>First name:</label>
          <input />
          <br />
          <label>Last name:</label>
          <input />
          <br /><br />
          <label>Username:</label>
          <input />
          <br /><br />
          <label>Password:</label>
          <input />
          <br />
          <label>Repeat Password:</label>
          <input />
          <br />
          <button>Create account</button>

        </section>
      </>
    )
  }
}