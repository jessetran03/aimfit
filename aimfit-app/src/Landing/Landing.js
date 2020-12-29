import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'
import './Landing.css'

export default class Landing extends Component {

  renderLoggedOut() {
    return(
      <div><Link to="/register"><h3 className='get-started-link'>Sign Up</h3></Link></div>
    )
  }

  renderLoggedIn() {
    return(
      <div><Link to="/workouts"><h3 className='get-started-link'>Get Started!</h3></Link></div>
    )
  }

  render() {
    return (
      <div className='landing'>
        <h2>Aim to be Fit.</h2>
        <p>Create workout plans to help reach your goals.</p>
        {TokenService.hasAuthToken()
          ? this.renderLoggedIn()
          : this.renderLoggedOut()}
      </div>
    )
  }
}