import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Landing from '../Landing/Landing'
import Register from '../Register/Register'
import ExerciseList from '../ExerciseList/ExerciseList'
import Exercise from '../Exercise/Exercise'
import WorkoutList from '../WorkoutList/WorkoutList'
import WorkoutExerciseList from '../WorkoutExerciseList/WorkoutExerciseList'
import MuscleNav from '../MuscleNav/MuscleNav'
import Nav from '../Nav/Nav'

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
          key={path}
          path={path}
          component={WorkoutExerciseList}
        />
        )}
        <Route
          path='/exercise'
          component={Exercise}
        />
      </>
    )
  }

  renderCategoryRoutes() {
    return (
      <>
        <Route
          path='/exercises'
          component={MuscleNav}
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
          <h1>AimFit</h1>
        </header>
        <main>
          {this.renderCategoryRoutes()}
          {this.renderMainRoutes()}
        </main>
      </>
    )
  }
}

export default App;