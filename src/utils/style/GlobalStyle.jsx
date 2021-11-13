import { useContext } from "react";
import { createGlobalStyle } from "styled-components";

import { ThemeContext } from "../context/providers";
import colors from "./colors";

function GlobalStyle() {
  const { theme } = useContext(ThemeContext);

  console.log("GlobalStyle theme =", theme);

  return <ThemedGlobalStyle isDarkTheme={theme === "dark"} />;
}

const ThemedGlobalStyle = createGlobalStyle`
  html {
    color: ${colors.neutral900};
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-weight: 400;

    transition: 500ms;

    scroll-behavior: smooth;
  }

  body {
    max-width: 1440px;
    margin: auto;
    padding: 0 4rem;
  }

  main {
    margin: 3rem 0;
    padding: 2rem 1rem;
  }

  ${(props) =>
    props.isDarkTheme
      ? `
    html {
      color: white;

      background: ${colors.neutral900};
    }
    `
      : ``}
`;

export default GlobalStyle;
