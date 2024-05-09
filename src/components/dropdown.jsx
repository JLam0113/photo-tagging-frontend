import ipinImage from '../assets/ipin.png'
import gonImage from '../assets/gon.png'
import lamboImage from '../assets/lambo.png'
import { useState } from 'react'

function Dropdown({ x, y, onClick }) {

    return <>
        <div className="dropdown" style={{ top: y, left: x }}>
            <ol>
                <li ><img id='Gon' onClick={onClick} src={gonImage} alt="Gon" /></li>
                <li ><img id='Lambo' onClick={onClick} src={lamboImage} alt="Lambo" /></li>
                <li ><img id='I-Pin' onClick={onClick} src={ipinImage} alt="I-Pin" /></li>
            </ol>
        </div>
    </>
}
export default Dropdown