import { useState } from 'react'
import image from './assets/qnbe.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <img src={image} className="img" alt="Background" />
        
    </>
  )
}

export default App
