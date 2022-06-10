import React from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App'
import ReactDOM from 'react-dom';
import { initContract } from './near/utils'

const container = document.querySelector('#root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(<App />, document.querySelector('#root')
  })
  .catch(console.error)
