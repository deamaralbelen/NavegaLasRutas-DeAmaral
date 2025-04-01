import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav>
            <img src={logo} alt="Logo de Reset Store" width="550" />
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/catalogo">Catálogo</Link></li>
                <li><Link to="/categoria/Adidas">Adidas</Link></li>
                <li><Link to="/categoria/Nike">Nike</Link></li>
                <li><Link to="/categoria/Vans">Vans</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;