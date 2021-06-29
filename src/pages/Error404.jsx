import styled from "styled-components";

import colors from "../utils/style/colors";
import Error404Illustration from "../assets/404-illustration.png";

function Error404() {
  return (
    <Error404Wrapper>
      <ErrorText>Oups...</ErrorText>
      <ErrorIllustration src={Error404Illustration} alt="Erreur 404" />
      <ErrorText>Il semblerait qu'il y ait un problème</ErrorText>
    </Error404Wrapper>
  );
}

const Error404Wrapper = styled.main`
  padding: 4rem;

  text-align: center;

  background: ${colors.neutral100};
`;

const ErrorText = styled.p`
  margin: 1rem;

  font-size: 2rem;
  font-weight: 700;
`;

const ErrorIllustration = styled.img`
  margin: 3rem 0;
`;

export default Error404;
