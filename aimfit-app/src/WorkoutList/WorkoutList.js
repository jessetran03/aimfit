import React, { Component } from 'react'
import './WorkoutList.css'
import Workout from '../Workout/Workout'
import config from '../config'
import TokenService from '../services/token-service'

export default class WorkoutList extends Component {
  state = {
    workouts: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    return fetch(`${config.API_ENDPOINT}/workouts`, {
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
      .then((workouts) => {
        this.setState({ workouts })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddWorkout = e => {
    e.preventDefault()
    const newWorkout = {
      title: e.target['workout-name'].value,
      day: e.target['workout-day'].value,
    }
    fetch(`${config.API_ENDPOINT}/workouts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newWorkout),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(workout => {
        this.getData()
      })
      .catch(error => {
        console.error({ error })
      })
  };

  render() {
    const workouts = this.state.workouts;
    return (
      <>
        <section className="workouts">
          <h2>Workout List</h2>
          <ul>
            {workouts.map(workout => (
              <li
                key={workout.id}
              >
                <Workout
                  id={workout.id}
                  title={workout.title}
                  day={workout.day}
                  getData={this.getData}
                />
              </li>
            ))}
          </ul>
          <form onSubmit={this.handleAddWorkout}>
            <label htmlFor='workout-name-input'>
              Name of workout: &nbsp;
            </label>
            <input type='text' id='workout-name-input' name='workout-name' />
            <br />
            <label htmlFor='workout-day-input'>
              Day of week: &nbsp;
            </label>
            <select id='workout-day-select' name='workout-day'>
              <option value='Sunday'>Sunday</option>
              <option value='Monday'>Monday</option>
              <option value='Tuesday'>Tuesday</option>
              <option value='Wednesday'>Wednesday</option>
              <option value='Thursday'>Thursday</option>
              <option value='Friday'>Friday</option>
              <option value='Saturday'>Saturday</option>
            </select>
            <br />
            <button
              type="submit"
              className="List-add-button"
            >
              + Add Workout
            </button>
          </form>

        </section>
      </>
    )
  }
}
