import ipin from '../assets/ipin.png'
import gon from '../assets/gon.png'
import lambo from '../assets/lambo.png'



function Dropdown({ x, y }) {

    return <>
        <div className="dropdown" style={{top: y, left: x}}>
            <ol>
                <li id='gon'><img src={gon} alt="Gon"/></li>
                <li id='lambo'><img src={lambo} alt="Lambo"/></li>
                <li id='ipin'><img src={ipin} alt="I-Pin"/></li>
            </ol>
        </div>
    </>
}
export default Dropdown