import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'

export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLoggedIn() {
    return (
      <>
        <Link onClick={this.handleLogoutClick} to='/'>
          Logout
        </Link>
        &nbsp;
        <Link to='/workouts'>
          Workouts
        </Link>
      </>
    )
  }

  renderLoggedOut() {
    return (
      <>
        <Link to='/login'>
          Login
        </Link>
        &nbsp;
        <Link to='/register'>
          Register
        </Link>
      </>
    )
  }


  render() {
    return (
      <>
        {TokenService.hasAuthToken()
          ? this.renderLoggedIn()
          : this.renderLoggedOut()
        }
      </>
    )
  }
}