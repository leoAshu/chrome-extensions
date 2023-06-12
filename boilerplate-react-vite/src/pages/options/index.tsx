import { createRoot } from 'react-dom/client'

import '@pages/options/index.css'
import Options from '@pages/options/Options'

function init() {
  const rootContainer = document.querySelector('#__root')
  if (!rootContainer) throw new Error("Can't find Popup root element")

  const root = createRoot(rootContainer)
  root.render(<Options />)
}

init()
