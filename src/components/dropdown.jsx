import ipinImage from '../assets/ipin.png'
import gonImage from '../assets/gon.png'
import lamboImage from '../assets/lambo.png'
import { useState } from 'react'

function Dropdown({ x, y }) {
    const [gon, setGon] = useState(false)
    const [lambo, setLambo] = useState(false)
    const [ipin, setIpin] = useState(false)


    const handleClick = async (e) => {
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
                x: x,
                y: y,
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
                    }
                })
        } catch (err) {
            console.log(err.message)
        }
    }

    return <>
        <div className="dropdown" style={{ top: y, left: x }}>
            <ol>
                <li ><img id='Gon' onClick={handleClick} src={gonImage} alt="Gon" /></li>
                <li ><img id='Lambo' onClick={handleClick} src={lamboImage} alt="Lambo" /></li>
                <li ><img id='I-Pin' onClick={handleClick} src={ipinImage} alt="I-Pin" /></li>
            </ol>
        </div>
    </>
}
export default Dropdown