import React, { Component } from 'react'
import config from '../config'
import PropTypes from 'prop-types'
import moment from 'moment';

export default class LogEntry extends Component {
  static defaultProps = {
    getLogEntries: () => { },
  }
  static propTypes = {
    getLogEntries: PropTypes.func,
    id: PropTypes.number,
    set_count: PropTypes.number,
    rep_count: PropTypes.number,
    weight_count: PropTypes.number,
  }

  handleClickDelete = e => {
    e.preventDefault()
    const logEntryId = this.props.id

    fetch(`${config.API_ENDPOINT}/exercise_log/${logEntryId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(() => {
        this.props.getExerciseLog()
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { set_count, rep_count, weight_count, date_logged } = this.props
    return (
      <section className='workout-exercise'>
        <h3>
          {moment(date_logged).format('MM-DD-YYYY')}
        </h3>
        <p>
          {weight_count} lbs for {set_count}x{rep_count}
        </p>
        <button
          type='button'
          onClick={this.handleClickDelete}
        >
          Delete
        </button>
      </section>
    )
  }
}
