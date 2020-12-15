import React, { Component } from 'react'
import './ExerciseList.css'
import config from '../config'

export default class ExerciseList extends Component {
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

  render() {
    const exercises = this.state.exercises;
    return (
      <>
        <section className='exercises'>
          <h2>All Exercises</h2>
          <ul>
            {exercises.map(exercise => (
              <li key={exercise.id}>
                {exercise.exercise_name}
              </li>
            ))}
          </ul>
        </section>
      </>
    )
  }
}