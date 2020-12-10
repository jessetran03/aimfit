import React, { Component } from 'react'
import './Exercise.css'

export default class Exercise extends Component {

  render() {
    return (
      <>
        <section className='exercises'>
          <h2>Flat Bench Press</h2>
        </section>
        <section class="exercises">
          <label>Weight:</label>
          <input />
          <br />
          <label>Number of Sets:</label>
          <input />
          <br />
          <label>Number of Reps:</label>
          <input />
          <br />
          <button>Submit</button>
          <button>Reset</button>
        </section>
      </>
    )
  }
}