import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from './assets/dancing.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
       
      </div>
      <h1>Jocea Tu Ticket</h1>
      <p>¡Jocea tu entrada, vive la experiencia!</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
  
      </div>
      <p className="read-the-docs">
        ©ValeryGonzalez
      </p>
    </>
  )
}

export default App
