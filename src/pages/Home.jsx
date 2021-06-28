import { Link } from "react-router-dom";
import styled from "styled-components";

import colors from "../utils/style/colors";
import HomeIllustration from "../assets/home-illustration.png";

function Home() {
  return (
    <HomeWrapper>
      <div>
        <Slogan>
          Repérez vos besoins, on s'occupe du reste, <br />
          avec les meilleurs talents
        </Slogan>
        <CallToActionLink to="/passer-le-test/1" $isFullLink={true}>
          Passer le test
        </CallToActionLink>
      </div>
      <div>
        <img src={HomeIllustration} alt="" />
      </div>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  display: flex;

  padding: 11rem 6rem;
  background: ${colors.neutral100};
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
