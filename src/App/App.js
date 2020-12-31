import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import ExerciseList from '../ExerciseList/ExerciseList'
import WorkoutList from '../WorkoutList/WorkoutList'
import WorkoutExerciseList from '../WorkoutExerciseList/WorkoutExerciseList'
import AddExerciseList from '../AddExerciseList/AddExerciseList'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import ExerciseLog from '../ExerciseLog/ExerciseLog'
import './App.css'

class App extends Component {
  state = {}

  renderMainRoutes() {
    return (
      <>
        <Route
          exact
          path='/'
          component={Landing}
        />
        <Route
          exact
          path='/login'
          component={Login}
        />
        <Route
          path='/register'
          component={Register}
        />
        <Route
          exact
          path='/workouts'
          component={WorkoutList}
        />
        <Route
          exact
          path='/exercises'
          component={ExerciseList}
        />
        {['/workouts/:workoutId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={WorkoutExerciseList}
          />
        )}
        {['/workouts/:workoutId/exercises'].map(path =>
          <Route
            key={path}
            path={path}
            component={AddExerciseList}
          />
        )}
        {['/workouts/exercise_log/:exercise_id'].map(path =>
          <Route
            key={path}
            path={path}
            component={ExerciseLog}
          />
        )}
      </>
    )
  }

  render() {
    return (
      <>
        <nav>
          <Route
            path='/'
            component={Nav}
          />
        </nav>
        <main>
          {this.renderMainRoutes()}
        </main>
      </>
    )
  }
}

export default App;