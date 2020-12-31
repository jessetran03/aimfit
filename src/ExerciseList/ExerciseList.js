import React, { Component } from 'react'
import './ExerciseList.css'
import Exercise from './Exercise'
import config from '../config'
export default class ExerciseList extends Component {
  static defaultProps = {
    match: { params: {} },
    location: { pathname: {} }
  }
  state = {
    exercises: [],
    muscle: 'Chest'
  }

  muscles = ['Chest', 'Back', 'Triceps', 'Biceps', 'Shoulders', 'Traps', 'Quads', 'Hamstrings', 'Calves']

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

  filterMuscle = e => {
    const muscle = e.target.value;
    this.setState({
      muscle: muscle
    })
  }

  handleGoBack = () => {
    this.props.history.goBack()
  };

  render() {
    const exercises = this.state.exercises;
    const workoutId = this.props.match.params.workoutId
    const muscle = this.state.muscle;
    const muscles = this.muscles;
    return (
      <>
        <h2 className='add-exercise-header'>Exercises</h2>
        <button
          onClick={this.handleGoBack}
        >
          Back
          </button>
        <section className='muscle-group'>
          <h3 className='muscle-header'>Muscle Group</h3>
          <ul>
            {muscles.map(muscle => (
              (muscle === this.state.muscle
                ? <li key={muscle}><button className='selected' onClick={this.filterMuscle} value={muscle}>{muscle}</button></li>
                : <li key={muscle}><button onClick={this.filterMuscle} value={muscle}>{muscle}</button></li>
              )
            ))}
          </ul>
        </section>
        <section className='workouts'>
          <div>
            Showing exercises for {muscle}:
          </div>
          <ul>
            {exercises
              .filter(exercise => exercise.muscle === muscle)
              .map(exercise => (
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