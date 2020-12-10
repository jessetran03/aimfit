import React, { Component } from 'react'
import './MuscleNav.css'

export default class MuscleNav extends Component {
  render() {
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
            <li><button>Traps</button></li>
          </ul>
        </section>
      </>
    )
  }
}