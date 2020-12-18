import React, { Component } from 'react'
import config from '../config'

export default class Exercise extends Component {
  static defaultProps = {
  }

  handleAddExercise = e => {
    e.preventDefault()
    const newWorkoutExercise = {
      workout_id: this.props.workoutId,
      exercise_id: this.props.id,
    }
    fetch(`${config.API_ENDPOINT}/workout_exercises`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newWorkoutExercise),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(workoutExercise => {
        this.props.handleGoBack()
      })
      .catch(error => {
        console.error({ error })
      })
  };

  render() {
    const { id, name } = this.props
    return (
      <li key={id}>
        <h3>{name}</h3>
        <br />
        <button
          type='button'
          onClick={this.handleAddExercise}
        >
          Add to workout
        </button>
      </li>
    )
  }
}