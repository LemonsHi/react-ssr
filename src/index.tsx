// import React from 'react'
// import ReactDOM from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

// const root = ReactDOM.createRoot(document.getElementById('app')!)
// v18 的新方法
// root.render(<App />)
ReactDOM.hydrate(<App />, document.getElementById('root'))
