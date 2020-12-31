import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddExerciseList from './AddExerciseList'
import renderer from 'react-test-renderer'

it('renders AddExerciseList without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <AddExerciseList />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('render AddExerciseList without data', () => {
  const wrapper = renderer.create(
    <BrowserRouter>
      <AddExerciseList />
    </BrowserRouter>
  )
    .toJSON();
    expect(wrapper).toMatchSnapshot()
  })