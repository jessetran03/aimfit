import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <>
        <Link to='/'>Login</Link>
        <Link to='/exercises'>Exercises</Link>
        <Link to='/workouts'>Workouts</Link>
      </>
    )
  }
}