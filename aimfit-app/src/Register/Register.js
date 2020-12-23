import React, { Component } from 'react'
import config from '../config'
import PropTypes from 'prop-types'

export default class Register extends Component {
  state = {
    error: null
  }
  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  }

  handleRegisterSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/login'
    history.push(destination)
  }

  handleRegister = e => {
    e.preventDefault()
    const newUser = {
      full_name: e.target['full-name'].value,
      user_name: e.target['username'].value,
      password: e.target['password'].value,
    }
    fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(res =>
        this.handleRegisterSuccess()
      )
      .catch(res => {
        this.setState({ error: res.error })
      })
  };

  render() {
    const { error } = this.state
    return (
      <>
        <section className="muscle-group">
          <h2>Strive to be great. Aim to be fit.</h2>
        </section>
        <form onSubmit={this.handleRegister} className="exercises">
          <h2>Register</h2>
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <label htmlFor='full-name-input'>
            Full name:
          </label>
          <input type='text' id='full-name-input' name='full-name' />
          <br />
          <label htmlFor='username-input'>
            Username:
          </label>
          <input type='text' id='username-input' name='username' />
          <br /><br />
          <label htmlFor='password-input'>
            Password:
          </label>
          <input type='password' id='password-input' name='password' />
          <br />
          <button type='submit'>
            Create account
          </button>

        </form>
      </>
    )
  }
}