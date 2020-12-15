import React, { Component } from 'react'
import './WorkoutExercise.css'

export default class WorkoutExercise extends Component {

  render() {
    const { name } = this.props
    return (
      <>
        <h3>{name}</h3>
        <button>
          Delete
        </button>
      </>
    )
  }
}