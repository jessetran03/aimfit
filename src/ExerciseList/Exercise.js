import React, { Component } from 'react'
import config from '../config'
import TokenService from '../services/token-service'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Exercise extends Component {
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
    const path = 'workouts/exercise_log/' + id
    return (
      <li key={id}>
        <Link to={path}>
          <h3>{name}</h3>
        </Link>
      </li>
    )
  }
}