import React, { Component } from 'react'
import './WorkoutExercise.css'
import config from '../config'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class WorkoutExercise extends Component {
  static defaultProps = {
    getWorkoutExercises: () => { },
  }
  static propTypes = {
    getWorkoutExercise: PropTypes.func,
    id: PropTypes.number,
    name: PropTypes.string
  }

  handleClickDelete = e => {
    e.preventDefault()
    const workoutExerciseId = this.props.id

    fetch(`${config.API_ENDPOINT}/workout_exercises/${workoutExerciseId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(() => {
        this.props.getWorkoutExercises()
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { name, exerciseId } = this.props
    const path = 'exercise_log/' + exerciseId
    return (
      <section className='workout-exercise'>
        <Link to={path}>
          <h3>{name}</h3>
        </Link>
        <button
          type='button'
          onClick={this.handleClickDelete}
        >
          Delete
        </button>
      </section>
    )
  }
}
