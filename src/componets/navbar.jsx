import {Link } from 'react-router-dom'
import "../css/navbar.css"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={require("../assets/logo.png")} alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/galary">Galary</Link></li>
                </ul>
                <img src={require("../assets/dive.png")} alt="" />
            </div>
        </div>
    )
}

export default Navbar