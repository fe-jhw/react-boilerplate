import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

if (process.env.NODE_ENV === 'development' && process.env['USE_MSW'] === 'true') {
  const { worker } = require('./mocks/browser')
  console.log('msw worker start!')
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
