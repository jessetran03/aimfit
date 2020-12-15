import React, { Component } from 'react'
import './WorkoutList.css'
import Workout from '../Workout/Workout'
import config from '../config'

export default class WorkoutList extends Component {
  state = {
    workouts: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/workouts`)
    ])
      .then(([workoutsRes]) => {
        if (!workoutsRes.ok)
          return workoutsRes.json().then(e => Promise.reject(e))

        return Promise.all([
          workoutsRes.json(),
        ])
      })
      .then(([workouts]) => {
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
        'content-type': 'application/json'
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

  /*handleSubmit = e => {
    e.preventDefault()
    const newNote = {
      notename: e.target['note-name'].value,
      content: e.target['note-content'].value,
      folder_id: e.target['note-folder-id'].value,
      date_modified: new Date(),
    }
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newNote),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(note => {
        this.context.addNote(note)
        this.props.history.push(`/folder/${note.folder_id}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }*/

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

/*<NotefulForm onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='folder-name-input'>
              Name
            </label>
            <input type='text' id='folder-name-input' name='folder-name' />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add folder
            </button>
          </div>
        </NotefulForm>
        */