import { Link } from "react-router-dom";

import "../styles/Header.css";

function Header() {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/sondage/1">Sondage</Link>
          </li>
          <li>
            <Link to="/freelances">Freelances</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
