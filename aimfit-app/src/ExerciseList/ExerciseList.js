import React, { Component } from 'react'
import './ExerciseList.css'
import STORE from '../STORE'

export default class ExerciseList extends Component {
  state = {
    store: STORE,
  }

  render() {
    const { store } = this.state;
    /*const exercisesForWorkouts = (notes=[], workoutId)*/
    return (
      <>
        <section className='exercises'>
          <h2>Chest exercises</h2>
          <ul>
            {store.exercises.map(exercise => (
              <li
                key={exercise.id}
              >{exercise.name}</li>
            ))}
          </ul>
        </section>
      </>
    )
  }
}

/*export const getNotesForFolder = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folder_id === parseInt(folderId))*/