import './Navbar.css';
import {Link} from "react-router-dom";
import logo from '../../../assets/logo.webp';

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Nexus Logo" style={{ height: '40px', marginRight: '10px' }} />
                <span className="navbar">Nexus</span>
            </div>
            <div className="navbar-right-links">
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            <button>
                <Link to="/login">Sign In</Link>
            </button>
            </div>
        </nav>
    );
}
