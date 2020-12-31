import React, { Component } from 'react'
import config from '../config'
import TokenService from '../services/token-service'
import PropTypes from 'prop-types'

export default class AddExercise extends Component {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
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
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
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