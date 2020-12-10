import React, { Component } from 'react'
import './WorkoutList.css'
import Workout from '../Workout/Workout'
import STORE from '../STORE'

export default class WorkoutList extends Component {
  state = {
    store: STORE,
  }

  handleAddWorkout = () => {

    const workoutList = this.state.store.workouts
    const newWorkout = {
      id: '11',
      title: 'New Workout',
      exerciseIds: ['1'],
    }

    workoutList.push(newWorkout)

    this.setState({
      store: {
        workouts: workoutList
      }
    })

  };

  render() {
    const { store } = this.state;
    return (
      <>
        <section className="exercises">
          <h2>Workout List</h2>
          <ul>
            {store.workouts.map(workout => (
              <li
                key={workout.id}
              >
                <Workout
                  id={workout.id}
                  title={workout.title}
                />
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="List-add-button"
            onClick={() => this.handleAddWorkout()}
          >
            + Add Workout
          </button>
        </section>
      </>
    )
  }
}

/*const { folderId } = this.props.match.params
const { notes = [] } = this.context
const notesForFolder = getNotesForFolder(notes, folderId)

export const getNotesForFolder = (notes = [], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folder_id === parseInt(folderId))
)
*/