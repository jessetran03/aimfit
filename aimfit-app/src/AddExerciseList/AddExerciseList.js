import React, { Component } from 'react'
import './AddExerciseList.css'
import Exercise from './Exercise'
import config from '../config'

export default class AddExerciseList extends Component {
  state = {
    exercises: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/exercises`)
    ])
      .then(([exercisesRes]) => {
        if (!exercisesRes.ok)
          return exercisesRes.json().then(e => Promise.reject(e))

        return Promise.all([
          exercisesRes.json(),
        ])
      })
      .then(([exercises]) => {
        this.setState({ exercises })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleGoBack = () => {
    this.props.history.goBack()
  };

  render() {
    const exercises = this.state.exercises;
    const workoutId = this.props.match.params.workoutId
    return (
      <>
        <section className='exercises'>
          <h2>Add Exercise</h2>
          <button
            onClick={this.handleGoBack}
          >
            Back
          </button>
          <ul>
            {exercises.map(exercise => (
              <Exercise
                key={exercise.id}
                id={exercise.id}
                name={exercise.exercise_name}
                workoutId={workoutId}
                handleGoBack={this.handleGoBack}
              />
            ))}
          </ul>
        </section>
      </>
    )
  }
}