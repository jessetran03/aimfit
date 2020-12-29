import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import WorkoutExerciseList from './WorkoutExerciseList'
import renderer from 'react-test-renderer'

it('renders WorkoutExerciseList without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <WorkoutExerciseList />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('render WorkoutExerciseList without data', () => {
  const wrapper = renderer.create(
    <BrowserRouter>
      <WorkoutExerciseList />
    </BrowserRouter>
  )
    .toJSON();
    expect(wrapper).toMatchSnapshot()
  })