import React from 'react'
import ReactDOM from 'react-dom/client'

import './popup.css'

const div = document.createElement('div')
document.body.append(div)

const root = ReactDOM.createRoot(div)
root.render(<p>Popup</p>)
