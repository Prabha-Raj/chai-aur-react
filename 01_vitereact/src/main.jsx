import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'http://goole.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit Google'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Hey Google</a>
// )

// const anotherUser = "chai aur React"

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com',target: '_blanck'},
//   'click me to visit google',
//   anotherUser
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Chai />
    <MyApp/> 
  </React.StrictMode>

  // reactElement

    // anotherElement

    // MyApp() // it will works but not recomended to use
)



