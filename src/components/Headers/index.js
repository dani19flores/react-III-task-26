import { Link } from "react-router-dom";
import "./style.css"
const Header = () => {

    return(
        <header>
            <h1>JustWatch</h1>
            <nav className="nav-container">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/movies">movies</Link>
            </nav>
        </header>
    )
}

export default Header;