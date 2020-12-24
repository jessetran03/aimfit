import React, { Component } from 'react'
import './AddExerciseList.css'
import Exercise from './Exercise'
import config from '../config'
export default class AddExerciseList extends Component {
  state = {
    exercises: [],
    muscle: 'Chest'
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
    const muscle= this.state.muscle;
    return (
      <>
        <section className="muscle-group">
          <h2>Muscle Group</h2>
          <ul>
            <li><button onClick={this.filterMuscle} value='Chest'>Chest</button></li>
            <li><button onClick={this.filterMuscle} value='Back'>Back</button></li>
            <li><button onClick={this.filterMuscle} value='Quads'>Quads</button></li>
            <li><button onClick={this.filterMuscle} value='Hamstrings'>Hamstrings</button></li>
            <li><button onClick={this.filterMuscle} value='Calves'>Calves</button></li>
            <li><button onClick={this.filterMuscle} value='Triceps'>Triceps</button></li>
            <li><button onClick={this.filterMuscle} value='Biceps'>Biceps</button></li>
            <li><button onClick={this.filterMuscle} value='Shoulders'>Shoulders</button></li>
            <li><button onClick={this.filterMuscle} value='Traps'>Traps</button></li>
          </ul>
        </section>
        <section className='exercises'>
          <h2>Add Exercise</h2>
          <button
            onClick={this.handleGoBack}
          >
            Back
          </button>
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