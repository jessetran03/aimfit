import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Landing extends Component {
  render() {
    return (
      <>
        <section className="muscle-group">
          <h2>Strive to be great. Aim to be fit.</h2>
        </section>
        <section className="exercises">
          <form>
            <h2>Get started.</h2>
          </form>
        </section>
        <section className="exercises">
          <h2>Sign in</h2>
          <label>Username:</label>
          <input />
            <br />
              <label>Password:</label>
              <input />
                <br />
                  <button>Log in</button>
                  <Link to='/register'>
                    <button>Register</button>
                  </Link>
                  
    </section>
      </>
    )
  }
}