import React from 'react'
import ReactDOM from 'react-dom/client'

import './options.css'

const test = <img src="icon.png" />

const root = document.createElement('div')
document.body.appendChild(root)

const reactRoot = ReactDOM.createRoot(root)
reactRoot.render(test)
