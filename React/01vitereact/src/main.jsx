import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const user = "chai aur react"
const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    target:"_blank"
  },
  'click me to search on google',
  user
  // this is an evaluated expression

)

ReactDOM.createRoot(document.getElementById('root')).render(
    // anotherElement
    reactElement
    // <App/>
)
