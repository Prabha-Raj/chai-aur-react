import { useState } from 'react';

import './App.css'

function App() {
  /* without useState
  let counter = 0;
  // const h2 = document.querySelector('h2')
  function incrementValue(){
    counter += 1
    h2.innerHTML = `${counter}`
    // console.log(counter)
  }
  function decrementValue(){
    counter -= 1
    h2.innerHTML = `${counter}`
    // console.log(counter)
  }
  */

  /* using useState */
  let [counter, setCounter] = useState(0)
  let [msg, setMsg] = useState('')

  function incrementValue(){
    if(counter < 10){
      setMsg(msg = '')
      setCounter(++counter)

      /* # if you want many changes in one click then u should have to use callback parameter.

      setCounter(prevCounter => ++prevCounter)
      setCounter(prevCounter => ++prevCounter)
      setCounter(prevCounter => ++prevCounter)
      setCounter(prevCounter => ++prevCounter)
      setCounter(prevCounter => ++prevCounter)
      setCounter(prevCounter => ++prevCounter)
      setCounter(prevCounter => ++prevCounter)
      setCounter(prevCounter => ++prevCounter)
      setCounter(prevCounter => ++prevCounter)
      setCounter(prevCounter => ++prevCounter)
      setCounter(prevCounter => ++prevCounter)
      setCounter(prevCounter => ++prevCounter)
      setCounter(prevCounter => ++prevCounter)
      */
    }else{
      setMsg(msg = "You are reached MAXIMUM Limit | to increment value that value is 10")
    }
  }
  function decrementValue(){
    if(counter > 0){
      setMsg(msg = '')
      setCounter(--counter)
    }else{
      setMsg(msg = "You are reached MAXIMUM Limit | to decrement value that max value is 0")
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={incrementValue}>Increment : {counter}</button>
      &nbsp;&nbsp;
      <button onClick={decrementValue}>Decrement : {counter}</button>
      <p className="msg">{msg}</p>
    </>
  )
}

export default App
