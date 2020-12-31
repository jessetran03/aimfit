import React, { Component } from 'react'
import config from '../config'
import LogEntry from './LogEntry'
import './ExerciseLog.css'
import TokenService from '../services/token-service'

export default class ExerciseLog extends Component {
  state = {
    exerciseLog: [],
    exercise: {},
  }
  static defaultProps = {
    match: { params: {} },
    location: { pathname: {} }
  }

  componentDidMount() {
    this.getExercise()
    this.getExerciseLog()
  }

  getExerciseLog = () => {
    const { exercise_id } = this.props.match.params
    return fetch(`${config.API_ENDPOINT}/exercise_log/${exercise_id}`, {
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
      .then((exerciseLog) => {
        this.setState({ exerciseLog })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  getExercise = () => {
    const { exercise_id } = this.props.match.params
    return fetch(`${config.API_ENDPOINT}/exercises/${exercise_id}`, {
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
      .then(exercise => {
        this.setState({ exercise })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddEntry = e => {
    e.preventDefault()
    const { exercise_id } = this.props.match.params
    const newEntry = {
      set_count: e.target['entry-set-count'].value,
      rep_count: e.target['entry-rep-count'].value,
      weight_count: e.target['entry-weight-count'].value,
    }
    fetch(`${config.API_ENDPOINT}/exercise_log/${exercise_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newEntry),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(entry => {
        this.getExerciseLog()
        e.target['entry-set-count'].value = ''
        e.target['entry-rep-count'].value = ''
        e.target['entry-weight-count'].value = ''
      })
      .catch(error => {
        console.error({ error })
      })
  };

  handleClickBack = () => {
    this.props.history.goBack()
  };

  render() {
    const exerciseLog = this.state.exerciseLog
    const exercise = this.state.exercise
    return (
      <>
        <section className='workouts'>
          <button onClick={this.handleClickBack}>
            Back
          </button>
          <h2 className='log-header'>{exercise.exercise_name}</h2>
          <form onSubmit={this.handleAddEntry} className='add-entry-form'>
            <label htmlFor='entry-set-count-input' className='entry-set-count-label'>
              Set x Rep:
            </label>
            <input
              className='entry-set-count-input'
              type='number'
              min='0'
              id='entry-set-count-input'
              name='entry-set-count'
              required />
            &nbsp;x
            <input
              className='entry-rep-count-input'
              type='number'
              min='0'
              id='entry-rep-count-input'
              name='entry-rep-count'
              required />
            <br />
            <label htmlFor='entry-weight-count-input'>
              Weight:
            </label>
            <input
              className='entry-weight-count-input'
              type='number'
              min='0'
              id='entry-weight-count-input'
              name='entry-weight-count'
            />
            <br />
            <button
              type='submit'
              className='List-add-button'
            >
              + Add Entry
            </button>
          </form>
          <ul>
            {exerciseLog.map(logEntry => (
              <li
                key={logEntry.id}
              >
                <LogEntry
                  id={logEntry.id}
                  exercise_id={logEntry.exercise_id}
                  weight_count={logEntry.weight_count}
                  set_count={logEntry.set_count}
                  rep_count={logEntry.rep_count}
                  date_logged={logEntry.date_logged}
                  getExerciseLog={this.getExerciseLog}
                />
              </li>
            ))}
          </ul>
        </section>
      </>
    )
  }
}