import React from 'react'
import ReactDOM from 'react-dom/client'

import './options.css'

const div = document.createElement('div')
document.body.append(div)

const root = ReactDOM.createRoot(div)
root.render(
  <div>
    <img src="icon.png" />
    <h1>Options</h1>
  </div>
)
