import { Link } from "react-router-dom";
import styled from "styled-components";

import "../styles/Header.css";

const StyledLink = styled(Link)`
  display: inline-block;

  padding: 0.5rem 1rem;

  color: #8186a0;
  font-size: 1.1rem;
  text-decoration: none;

  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: #5843E4;`}
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
            <StyledLink to="/passer-le-test/1" $isFullLink={true}>
              Passer le test
            </StyledLink>
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
