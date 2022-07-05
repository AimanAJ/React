import { Link } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Welcome</Link>
        <ul>
            <li>
                <Link to="/shop">Shop </Link>
            </li>
            <li>
                <Link to="/contact_us">Contact Us </Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>


    </nav>
}
