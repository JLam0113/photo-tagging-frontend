import { useState } from 'react'
import image from './assets/qnbe.png'
import Dropdown from './components/dropdown'
import './App.css'

function App() {
  const [dropdown, setDropdown] = useState(false)
  const [coordinates, setCoordinates] = useState([])

  const handleClick = (e) => {
    if(!dropdown) setDropdown(true);
    setCoordinates([e.pageX, e.pageY]);
  }

  return (
    <>
      <img id="image" src={image} className="img" alt="Background" onClick={handleClick} />
      {dropdown ? <Dropdown x={coordinates[0]} y={coordinates[1]}></Dropdown> : ''}
    </>
  )
}

export default App
