import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../utils/context/providers";
import colors from "../utils/style/colors";

function ErrorMain({ errorText }) {
  const { theme } = useContext(ThemeContext);

  return (
    <ErrorContainer $isDarkTheme={theme === "dark"}>
      <ErrorText>{errorText}</ErrorText>
      <CallToActionLink to="/">Revenir à l'accueil</CallToActionLink>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.main`
  padding: 10rem 4rem;

  text-align: center;

  background: ${(props) =>
    props.$isDarkTheme ? `${colors.neutral700}` : `${colors.neutral100}`};
`;

const ErrorText = styled.p`
  margin: 1rem;

  font-size: 2rem;
  font-weight: 700;
`;

const CallToActionLink = styled(Link)`
  display: inline-block;

  margin: 4rem 0 0 0;
  padding: 0.5rem 4rem;
  border-radius: 2rem;

  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;

  background: ${colors.primary500};
`;

export default ErrorMain;
