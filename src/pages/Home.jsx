import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SurveyContext, ThemeContext } from "../utils/context/providers";
import colors from "../utils/style/colors";
import HomeIllustration from "../assets/home-illustration.png";

function Home() {
  const { theme } = useContext(ThemeContext);
  const { clearSurveyAnswers } = useContext(SurveyContext);

  return (
    <HomeContainer $isDarkTheme={theme === "dark"}>
      <div>
        <Slogan>
          Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
        </Slogan>
        <CallToActionLink
          onClick={() => {
            window.scrollTo(0, 0);
            clearSurveyAnswers();
          }}
          to="/faire-le-test/1"
        >
          Faire le test
        </CallToActionLink>
      </div>
      <div>
        <img src={HomeIllustration} alt="" />
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  display: flex;

  padding: 11rem 6rem;

  background: ${(props) =>
    props.$isDarkTheme ? `${colors.neutral700}` : `${colors.neutral100}`};
`;

const Slogan = styled.h1`
  padding: 0 2rem 0 0;

  font-size: 3rem;
  line-height: 5rem;
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

export default Home;
