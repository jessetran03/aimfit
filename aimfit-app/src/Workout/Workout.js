import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Workout.css'

export default class Workout extends Component {

  render() {
    const { id, title } = this.props
    return (
      <>
        <section className='exercises'>
          <Link to={`/workouts/${id}`}>
            {title}
          </Link>
        </section>
      </>
    )
  }
}