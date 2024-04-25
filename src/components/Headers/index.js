import { Link } from "react-router-dom";
import "./style.css";
import {Headers,Title,Navition} from "./style";

const Header = () => {

    return(
        <Headers>
            <Title>JustWatch</Title>
            <Navition>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/movies">movies</Link>
            </Navition>
        </Headers>
    )
}

export default Header;