import React, { Component } from 'react'
import './ExerciseList.css'
import config from '../config'
export default class ExerciseList extends Component {
  state = {
    exercises: [],
    muscle: '',
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    return fetch(`${config.API_ENDPOINT}/exercises`, {
      method: 'GET',
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then((exercises) => {
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
        <section className="muscle-group">
          <h2>Muscle Group</h2>
          <ul>
            <li><button>Chest</button></li>
            <li><button>Back</button></li>
            <li><button>Quads</button></li>
            <li><button>Hamstrings</button></li>
            <li><button>Calves</button></li>
            <li><button>Triceps</button></li>
            <li><button>Biceps</button></li>
            <li><button>Shoulders</button></li>
            <li><button>Trps</button></li>
          </ul>
        </section>
        <section className='exercises'>
          <h2>All Exercises</h2>
          <ul>
            {exercises.map(exercise => (
              <li key={exercise.id}>
                <h3>{exercise.exercise_name}</h3>
                <br />
                <select>
                  <option>Select...</option>
                  <option>Push workout</option>
                  <option>Pull workout</option>
                </select>
                &nbsp;
                <button>
                  Add to workout
                </button>
              </li>
            ))}
          </ul>
        </section>
      </>
    )
  }
}