import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SurveyContext, ThemeContext } from "../utils/context/providers";
import colors from "../utils/style/colors";
import ShinyLogo from "../assets/logo-shiny.svg";
import ShinyTextLogo from "../assets/logo-text-shiny.svg";

function Header() {
  const { theme } = useContext(ThemeContext);
  const { clearSurveyAnswers } = useContext(SurveyContext);

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <Logo src={ShinyLogo} alt="Shiny logo" />
        <TextLogo
          src={ShinyTextLogo}
          alt="Agence Shiny"
          isDarkTheme={theme === "dark"}
        />
      </LogoLink>
      <nav>
        <MainNavList>
          <li>
            <StyledLink
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/"
              isDarkTheme={theme === "dark"}
            >
              Accueil
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/freelances"
              isDarkTheme={theme === "dark"}
            >
              Nos freelances
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => {
                window.scrollTo(0, 0);
                clearSurveyAnswers();
              }}
              to="/faire-le-test/1"
              className="highlighted-link"
            >
              Faire le test
            </StyledLink>
          </li>
        </MainNavList>
      </nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
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

const TextLogo = styled.img`
  filter: ${(props) => (props.isDarkTheme ? `` : `invert(100%)`)};
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

  &.highlighted-link {
    border-radius: 2rem;

    color: white;

    background-color: ${colors.primary500};

    &:hover {
      color: ${colors.neutral100};
    }
  }
`;

export default Header;
