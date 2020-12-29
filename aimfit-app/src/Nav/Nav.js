import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import TokenService from '../services/token-service'
import './Nav.css'

export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLoggedIn() {
    return (
      <>
        <NavLink activeClassName='is-active' to ='/'>
          <span>Home</span>
        </NavLink>
        <NavLink activeClassName='is-active' to='/workouts'>
          <span>Workouts</span>
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
        &nbsp;
        <NavLink activeClassName='is-active' to='/register'>
          <button className='sign-up-button'>Sign Up</button>
        </NavLink>
      </>
    )
  }


  render() {
    return (
      <>
        <div className="nav-header">
          <Link to="/">
            <h3>AimFit</h3>
          </Link>
        </div>
        <div className="nav-links">
          {TokenService.hasAuthToken()
            ? this.renderLoggedIn()
            : this.renderLoggedOut()
          }
        </div>
      </>
    )
  }
}