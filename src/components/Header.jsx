import { Link } from "react-router-dom";
import styled from "styled-components";

import colors from "../utils/style/colors";
import ShinyLogo from "../assets/logo-shiny.png";
import ShinyTextLogo from "../assets/logo-text-shiny.png";

function Header() {
  return (
    <HeaderWrapper>
      <LogoLink to="/">
        <Logo src={ShinyLogo} alt="Shiny logo" />
        <img src={ShinyTextLogo} alt="Agence Shiny" />
      </LogoLink>
      <nav>
        <MainNavList>
          <li>
            <StyledLink to="/">Accueil</StyledLink>
          </li>
          <li>
            <StyledLink to="/freelances">Nos freelances</StyledLink>
          </li>
          <li>
            <StyledLink to="/passer-le-test/1" $isFullLink={true}>
              Passer le test
            </StyledLink>
          </li>
        </MainNavList>
      </nav>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3rem 0;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

const Logo = styled.img`
  margin-right: 0.75rem;
`;

const MainNavList = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;

  list-style-type: none;
`;

const StyledLink = styled(Link)`
  display: inline-block;

  margin: 0 0 0 1rem;
  padding: 0.5rem 2rem;

  color: ${colors.secondary500};
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;

  transition: 200ms;

  &:hover {
    color: ${colors.primary500};
  }

  ${(props) =>
    props.$isFullLink &&
    `
      border-radius: 2rem;

      color: white;
      
      background-color: ${colors.primary500};

      &:hover {
        color: ${colors.neutral100};
      }
    `}
`;

export default Header;
