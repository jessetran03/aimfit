import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import WorkoutList from './WorkoutList'
import renderer from 'react-test-renderer'

it('renders WorkoutList without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <WorkoutList />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('render WorkoutList without data', () => {
  const wrapper = renderer.create(
    <BrowserRouter>
      <WorkoutList />
    </BrowserRouter>
  )
    .toJSON();
    expect(wrapper).toMatchSnapshot()
  })