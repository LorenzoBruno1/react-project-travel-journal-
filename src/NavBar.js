import './App.css'
import EarthLogo from './img/earth.svg'

function Navbar (){
    return (
        <div className="navbar-c">
            <img src={EarthLogo} className="navbar--logo" />
            <h3 className="navbar--title">my travel journal.</h3>
        </div>
    )
}

export default Navbar