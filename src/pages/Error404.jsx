import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../utils/context/providers";
import colors from "../utils/style/colors";
import Error404Illustration from "../assets/404-illustration.png";

function Error404() {
  window.scrollTo(0, 0);
  
  const { theme } = useContext(ThemeContext);

  return (
    <Error404Container $isDarkTheme={theme === "dark"}>
      <ErrorText>Oups...</ErrorText>
      <ErrorIllustration src={Error404Illustration} alt="Erreur 404" />
      <ErrorText>Il semblerait qu'il y ait un problème</ErrorText>
      <CallToActionLink to="/">Revenir à l'accueil</CallToActionLink>
    </Error404Container>
  );
}

const Error404Container = styled.main`
  padding: 4rem;

  text-align: center;

  background: ${(props) =>
    props.$isDarkTheme ? `${colors.neutral700}` : `${colors.neutral100}`};
`;

const ErrorText = styled.p`
  margin: 1rem;

  font-size: 2rem;
  font-weight: 700;
`;

const ErrorIllustration = styled.img`
  margin: 3rem 0;
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

export default Error404;
