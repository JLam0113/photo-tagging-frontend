import { useState } from 'react'
import image from './assets/qnbe.png'
import Dropdown from './components/dropdown'
import './App.css'

function App() {
  const [dropdown, setDropdown] = useState(false)
  const [coordinates, setCoordinates] = useState([])

  const handleClick = (e) => {
    setDropdown(true);
    setCoordinates([e.clientX, e.clientY]);
  }

  return (
    <>
      <img src={image} className="img" alt="Background" onClick={handleClick} />
      {dropdown ? <Dropdown x={coordinates[0]} y={coordinates[1]}></Dropdown> : ''}
    </>
  )
}

export default App
