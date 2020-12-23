import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Workout from './Workout'
import renderer from 'react-test-renderer'

it('renders Workout without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Workout />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})