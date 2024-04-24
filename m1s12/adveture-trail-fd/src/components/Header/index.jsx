import { Link } from "react-router-dom"
import "./styles.css";

function Header() {
    return (
        <header>
            <div className="logo"><Link to="/">Adventure Trails FD</Link></div>
            <div className="li-container">
              <ul>
                <Link to="/explorer-page">Explorar Trilhas</Link>
                <Link to="/register-page">Cadastrar Trilhas</Link>
              </ul>                
            </div>
        </header>
    );
}

export default Header;