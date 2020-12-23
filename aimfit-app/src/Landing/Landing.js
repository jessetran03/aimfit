import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'

export default class Landing extends Component {

  renderLoggedOut() {
    return(
      <div>Log in <Link to="/login">here</Link>!</div>
    )
  }

  renderLoggedIn() {
    return(
      <div><Link to="/workouts">Go to your workouts!</Link></div>
    )
  }

  render() {
    return (
      <>
        <h2>Welcome</h2>
        <div>Get started!</div>
        {TokenService.hasAuthToken()
          ? this.renderLoggedIn()
          : this.renderLoggedOut()}
      </>
    )
  }
}