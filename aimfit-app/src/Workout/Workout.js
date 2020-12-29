import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Workout.css'
import config from '../config'
import TokenService from '../services/token-service'
import PropTypes from 'prop-types'

export default class Workout extends Component {
  static defaultProps = {
    getData: () => {},
  }
  static propTypes = {
    getData: PropTypes.func,
    id: PropTypes.number,
    title: PropTypes.string,
    day: PropTypes.string
  }

  handleClickDelete = e => {
    e.preventDefault()
    const workoutId = this.props.id

    fetch(`${config.API_ENDPOINT}/workouts/${workoutId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(() => {
        this.props.getData()
      })
      .catch(error => {
        console.error({ error})
      })
  }

  render() {
    const { id, title, day } = this.props
    return (
      <>
        <section className='workout'>
          <Link to={`/workouts/${id}`}>
            <h3>{title}</h3>
          </Link>
          <h4>{day}</h4>
          <button
            type='button'
            onClick={this.handleClickDelete}
          >
            Delete
          </button>
        </section>
      </>
    )
  }
}