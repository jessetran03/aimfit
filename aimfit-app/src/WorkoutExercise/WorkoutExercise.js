import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './WorkoutExercise.css'

export default class WorkoutExercise extends Component {

  render() {
    const { id, name } = this.props
    return (
      <>
        <section className='exercises'>
          <Link to={`/workouts/${id}`}>
            {name}
          </Link>
        </section>
      </>
    )
  }
}

/*render() {
  const { name, id, modified } = this.props
  return (
    <div className='Note'>
      <h2 className='Note__title'>
        <Link to={`/note/${id}`}>
          {name}
        </Link>
      </h2>
      <button
        className='Note__delete'
        type='button'
        onClick={this.handleClickDelete}
      >
        <FontAwesomeIcon icon='trash-alt' />
        {' '}
        remove
      </button>
      <div className='Note__dates'>
        <div className='Note__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </div>*/