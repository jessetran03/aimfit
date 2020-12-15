import React, { Component } from 'react'
import './WorkoutExerciseList.css'
import STORE from '../STORE'
import WorkoutExercise from '../WorkoutExercise/WorkoutExercise'

export default class WorkoutExerciseList extends Component {
  state = {
    exercises: STORE.exercises,
    workouts: STORE.workouts,
  }
  static defaultProps = {
    match: {
      params: {}
    }
  }

  handleClickAdd = () => {

  }

  handleClickBack = () => {
    this.props.history.goBack()
  };

  render() {

    const { workoutId } = this.props.match.params
    const exercises = this.state.exercises
    const exercisesForWorkouts = exercises.filter(exercise =>
      parseInt(exercise.workoutId) === parseInt(workoutId)
    )
    const workouts = this.state.workouts
    const workoutName = workouts.find(workout =>
      workout.id === parseInt(workoutId)
    ).title
    return (
      <>
        <section className='exercises'>
          <button
            onClick={this.handleClickBack}
          >
            Back
          </button>
          <h2>{workoutName}</h2>
          <ul>
            {exercisesForWorkouts.map(exercise => (
              <li
                key={exercise.id}
              >
                <WorkoutExercise
                  id={exercise.id}
                  name={exercise.name}
                />
              </li>
            ))}
          </ul>
          <button
            onClick={this.handleClickAdd}
          >
            +Add Exercise
          </button>
        </section>
      </>
    )
  }
}