import React, { Component } from 'react'
import TokenService from '../services/token-service'
import { Link } from 'react-router-dom'
import config from '../config'

export default class Login extends Component {
  state = {
    error: null
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  handleLogin = e => {
    e.preventDefault()
    this.setState({ error: null })
    const login = {
      user_name: e.target['username'].value,
      password: e.target['password'].value,
    }
    fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(login),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(res => {
        //user_name.value = ''
        //password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.handleLoginSuccess()
      })
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
        <section className="exercises">
            <h2>Get started.</h2>
        </section>

        <form onSubmit={this.handleLogin} className="exercises">
          <h2>Sign in</h2>
          <div>
            {error && <p className='error'>{error}</p>}
          </div>
          <label htmlFor='username-input'>
            Username:
          </label>
          <input type='text' id='username-input' name='username' />
          <br />
          <label htmlFor='password-input'>
            Password:
          </label>
          <input type='text' id='password-input' name='password' />
          <br />
          <button
            type='submit'
          >
            Log in
          </button>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </form>
      </>
    )
  }
}