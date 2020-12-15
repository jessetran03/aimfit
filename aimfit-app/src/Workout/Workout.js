import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Workout.css'
import config from '../config'

export default class Workout extends Component {
  static defaultProps = {
    onDeleteWorkout: () => {},
  }

  handleClickDelete = e => {
    e.preventDefault()
    const workoutId = this.props.id

    fetch(`${config.API_ENDPOINT}/workouts/${workoutId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(() => {
        this.props.getData()
        if (this.props.history) {
          this.props.history.push('/')
        }
      })
      .catch(error => {
        console.error({ error})
      })
  }

  render() {
    const { id, title, day } = this.props
    return (
      <>
        <section className='exercises'>
          <Link to={`/workouts/${id}`}>
            <h3>{title}</h3>
          </Link>
          <h4>{day}</h4>
          <button
            type='button'
            onClick={this.handleClickDelete}
          >
            Delete
          </button>
        </section>
      </>
    )
  }
}