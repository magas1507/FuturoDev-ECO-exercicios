import "./style.css";

function Header() {
    return (
        <header>
            <div className="logo">Adventure Trails FD</div>
            <div className="li-container">
              <ul>
                <li>Explorar Trilhas</li>
                <li>Cadastrar Trilhas</li>
              </ul>                
            </div>
        </header>
    );
}

export default Header;