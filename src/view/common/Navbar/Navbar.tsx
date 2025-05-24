import './Navbar.css';

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span>Nexus</span>
            </div>
            <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}
