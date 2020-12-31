import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ExerciseLog from './ExerciseLog'
import renderer from 'react-test-renderer'

it('renders ExerciseLog without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <ExerciseLog />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('render ExerciseLog without data', () => {
  const wrapper = renderer.create(
    <BrowserRouter>
      <ExerciseLog />
    </BrowserRouter>
  )
    .toJSON();
    expect(wrapper).toMatchSnapshot()
  })