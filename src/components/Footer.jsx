import { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../utils/context/providers";
import colors from "../utils/style/colors";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeMessage =
    theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre";

  return (
    <FooterContainer isDarkTheme={theme === "dark"}>
      <ThemeSwitcher
        onClick={() => toggleTheme()}
        isDarkTheme={theme === "dark"}
      >
        {themeMessage}
      </ThemeSwitcher>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 4rem;

  background: ${colors.secondary500};

  ${(props) => (props.isDarkTheme ? `background: ${colors.neutral700};` : ``)}
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

  ${(props) =>
    props.isDarkTheme
      ? `
        color: white;
        background: ${colors.neutral900}`
      : ``}
`;

export default Footer;
