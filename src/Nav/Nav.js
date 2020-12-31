import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import TokenService from '../services/token-service'
import './Nav.css'
import config from '../config'

export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  handleDemo = e => {
    e.preventDefault()
    this.setState({ error: null })
    const login = {
      user_name: 'dunder_mifflin',
      password: 'Password1!',
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
        TokenService.saveAuthToken(res.authToken)
        this.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  };

  renderLoggedIn() {
    return (
      <>
        <NavLink activeClassName='is-active' to ='/'>
          <span>Home</span>
        </NavLink>
        <NavLink activeClassName='is-active' to='/workouts'>
          <span>Workouts</span>
        </NavLink>
        <NavLink activeClassName='is-active' to='/exercises'>
          <span>Exercises</span>
        </NavLink>
        <Link onClick={this.handleLogoutClick} to='/'>
          <button>Logout</button>
        </Link>
      </>
    )
  }

  renderLoggedOut() {
    return (
      <>
        <NavLink activeClassName='is-active' to='/login'>
          <button>Log in</button>
        </NavLink>
        <NavLink activeClassName='is-active' to='/register'>
          <button className='sign-up-button'>Sign Up</button>
        </NavLink>
        <button onClick={this.handleDemo} className='sign-up-button'>Demo</button>
      </>
    )
  }


  render() {
    return (
      <>
        <div className='nav-header'>
          <Link to='/'>
            <h3>AimFit</h3>
          </Link>
        </div>
        <div className='nav-links'>
          {TokenService.hasAuthToken()
            ? this.renderLoggedIn()
            : this.renderLoggedOut()
          }
        </div>
      </>
    )
  }
}