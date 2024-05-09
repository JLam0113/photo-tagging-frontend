import { useState } from 'react'
import image from './assets/qnbe.png'
import pin from './assets/pin.png'
import Dropdown from './components/dropdown'
import './App.css'

function App() {
  const [dropdown, setDropdown] = useState(false)
  const [coordinates, setCoordinates] = useState([])
  const [gon, setGon] = useState(false)
  const [lambo, setLambo] = useState(false)
  const [ipin, setIpin] = useState(false)
  const [markers, setMarkers] = useState([]);

  const dropdownClick = async (e) => {
    let character = e.target.id;
    if (character == 'Gon') {
      if (gon) return
    }
    else if (character == 'Lambo') {
      if (lambo) return
    }
    else if (character == 'I-Pin') {
      if (ipin) return
    }
    try {
      await fetch('http://localhost:3000/character?' + new URLSearchParams({
        name: e.target.id,
        x: coordinates[0],
        y: coordinates[1],
      }))
        .then((response) => {
          if (response.status == 200) {
            if (character == 'Gon') {
              setGon(true)
            }
            else if (character == 'Lambo') {
              setLambo(true)
            }
            else if (character == 'I-Pin') {
              setIpin(true)
            }
            setDropdown(false)
            setMarkers((markers) => [...markers, { x: coordinates[0], y: coordinates[1] }]);
          }
        })
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleClick = (e) => {
    if (!dropdown) setDropdown(true);
    setCoordinates([e.pageX, e.pageY]);
  }

  return (
    <>
      <img id="image" src={image} className="img" alt="Background" onClick={handleClick} />
      {dropdown ? <Dropdown x={coordinates[0]} y={coordinates[1]} onClick={dropdownClick}></Dropdown> : ''}
      {markers.map((marker) => (
        <img key={marker.x + marker.y} src={pin} style={{ left: marker.x, top: marker.y - 25, width: 25, position: 'absolute' }}></img>
      ))}
    </>
  )
}

export default App
