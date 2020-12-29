import React, { Component } from 'react'
import TokenService from '../services/token-service'
import { Link } from 'react-router-dom'
import config from '../config'
import PropTypes from 'prop-types'

export default class Login extends Component {
  state = {
    error: null
  }
  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object
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
        <form onSubmit={this.handleLogin} className="sign-form">
          <h2>Sign in</h2>
          <div>
            {error && <p className='form-error'>{error}</p>}
          </div>
          <label htmlFor='username-input'>
            Username:
          </label>
          <input type='text' id='username-input' name='username' />
          <br />
          <label htmlFor='password-input' className='password-label'>
            Password:
          </label>
          <input type='password' id='password-input' name='password' />
          <br />
          <button
            type='submit'
          >
            Log in
          </button>
          <Link to='/register'>
            <button className='sign-up-button'>Sign Up</button>
          </Link>
        </form>
      </>
    )
  }
}