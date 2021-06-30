import { createGlobalStyle } from "styled-components";

import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  html {
    color: ${colors.neutral900};
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-weight: 400;
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
`;

export default GlobalStyle;
