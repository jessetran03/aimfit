import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ExerciseList from './ExerciseList'
import renderer from 'react-test-renderer'

it('renders ExerciseList without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <ExerciseList />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('render ExerciseList without data', () => {
  const wrapper = renderer.create(
    <BrowserRouter>
      <ExerciseList />
    </BrowserRouter>
  )
    .toJSON();
    expect(wrapper).toMatchSnapshot()
  })