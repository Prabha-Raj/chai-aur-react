// importing hooks
import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  // hooks
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copyStatus, setCopyStatus] = useState("Copy")
  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz'
    if (numberAllowed) str += "0987654321"
    if (charAllowed) str += "!@#$%^&*~|\\/-_+=`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
    setCopyStatus("Copy")
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, length)
    window.navigator.clipboard.writeText(password)
    if (window.navigator.clipboard.writeText(password)) {
      setCopyStatus("Copied")
    }

  }, [password])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 pt-1 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center mb-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            ref={passwordRef}
            className=' outline-none w-full py-1 px-3'
          />
          <button
            className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPassToClipboard}>
            {copyStatus}
          </button>
        </div>
        <div className=' flex text-sm gap-x-2 py-3'>
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            className=' cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label htmlFor="">Length: {length}</label>

          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => { setNumberAllowed((prev) => !prev); }}
          />
          <label htmlFor="numberInput">Numbers</label>

          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => { setCharAllowed((prev) => !prev); }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
