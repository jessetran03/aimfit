import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import ExerciseList from '../ExerciseList/ExerciseList'
import Exercise from '../Exercise/Exercise'
import WorkoutList from '../WorkoutList/WorkoutList'
import WorkoutExerciseList from '../WorkoutExerciseList/WorkoutExerciseList'
import AddExerciseList from '../AddExerciseList/AddExerciseList'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'

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
          path='/exercises'
          component={ExerciseList}
        />
        <Route
          exact
          path='/workouts'
          component={WorkoutList}
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
        <Route
          path='/exercise'
          component={Exercise}
        />
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
        <header>
          <Link to="/">
            <h1>AimFit</h1>
          </Link>
        </header>
        <main>
          {this.renderMainRoutes()}
        </main>
      </>
    )
  }
}

export default App;