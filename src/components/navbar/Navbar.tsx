import './Navbar.css'
import logo from "../../assets/images/logo.png";

function Navbar() {
    return (
            <div className="nav-section">
                <div >
                    <img src={logo} />
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="">Services</a></li>
                        <li><a href="">Info</a></li>
                        <li><a href="">Reviews</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar;