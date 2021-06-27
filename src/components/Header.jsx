import { Link } from "react-router-dom";
import styled from "styled-components";

import "../styles/Header.css";

const StyledLink = styled(Link)`
  padding: 1rem;
  color: #8186a0;
  font-size: 1.1rem;
  text-decoration: none;
`;

function Header() {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Accueil</StyledLink>
          </li>
          <li>
            <StyledLink to="/sondage/1">Sondage</StyledLink>
          </li>
          <li>
            <StyledLink to="/freelances">Freelances</StyledLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
