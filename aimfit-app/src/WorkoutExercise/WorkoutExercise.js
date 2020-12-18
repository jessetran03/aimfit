import React, { Component } from 'react'
import './WorkoutExercise.css'
import config from '../config'

export default class WorkoutExercise extends Component {
  static defaultProps = {
    onDeleteWorkout: () => {},
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
        console.error({ error})
      })
  }

  render() {
    const { name } = this.props
    return (
      <>
        <h3>{name}</h3>
        <button
          type='button'
          onClick={this.handleClickDelete}
        >
          Delete
        </button>
      </>
    )
  }
}
