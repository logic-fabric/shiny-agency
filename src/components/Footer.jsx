import { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../utils/context/providers";
import colors from "../utils/style/colors";

function Footer() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <FooterContainer>
      <ThemeSwitcher onClick={() => toggleTheme()}>
        Changer de thème
      </ThemeSwitcher>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 4rem;

  background: ${colors.secondary500};
`;

const ThemeSwitcher = styled.button`
  padding: 0.5rem 2rem;
  border-width: 0;
  border-radius: 2rem;

  color: ${colors.neutral900};
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;

  background: ${colors.neutral100};

  cursor: pointer;
`;

export default Footer;
