import { link } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
        <link to="/" className="site-title">Welcome</link>
        <ul>
            <li>
                <link to="/shop">Shop </link>
            </li>
            <li>
                <link to="/contact_us">Contact Us </link>
            </li>
            <li>
                <link to="/about">About</link>
            </li>
        </ul>


    </nav>
}
