import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MuscleNav from './MuscleNav'
import renderer from 'react-test-renderer'

it('renders MuscleNav without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <MuscleNav />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('render MuscleNav without data', () => {
  const wrapper = renderer.create(
    <BrowserRouter>
      <MuscleNav />
    </BrowserRouter>
  )
    .toJSON();
    expect(wrapper).toMatchSnapshot()
  })