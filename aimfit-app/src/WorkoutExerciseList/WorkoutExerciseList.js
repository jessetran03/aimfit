import React, { Component } from 'react'
import './WorkoutExerciseList.css'
import { Link } from 'react-router-dom'
import config from '../config'
import WorkoutExercise from '../WorkoutExercise/WorkoutExercise'
import TokenService from '../services/token-service'
import PropTypes from 'prop-types'

export default class WorkoutExerciseList extends Component {
  state = {
    exercises: [],
    workout: {},
  }
  static defaultProps = {
    match: { params: {} },
    location: { pathname: {} }
  }
  /*static propTypes = {
    match: { params: PropTypes.object },
    location: { pathname: PropTypes.object },
    history: { goBack: PropTypes.object }
  }*/

  componentDidMount() {
    this.getWorkoutExercises()
    this.getWorkout()
  }

  getWorkout = () => {
    const { workoutId } = this.props.match.params
    return fetch(`${config.API_ENDPOINT}/workouts/${workoutId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then((workout) => {
        this.setState({ workout })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  getWorkoutExercises = () => {
    const { workoutId } = this.props.match.params
    return fetch(`${config.API_ENDPOINT}/workouts/${workoutId}/exercises`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(exercises => {
        this.setState({ exercises })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleClickBack = () => {
    this.props.history.goBack()
  };

  render() {
    const exercises = this.state.exercises
    const workout = this.state.workout
    const path = this.props.location.pathname + '/exercises'
    return (
      <>
        <section className='exercises'>
          <button
            onClick={this.handleClickBack}
          >
            Back
          </button>
          <h2>{workout.title}</h2>
          <ul>
            {exercises.map(exercise => (
              <li
                key={exercise.id}
              >
                <WorkoutExercise
                  id={exercise.id}
                  exerciseId={exercise.exercise_id}
                  name={exercise.exercise_name}
                  getWorkoutExercises={this.getWorkoutExercises}
                />
              </li>
            ))}
          </ul>
          <Link to={path}>
            <button
              onClick={this.handleClickAdd}
            >
              +Add Exercise
            </button>
          </Link>
        </section>
      </>
    )
  }
}