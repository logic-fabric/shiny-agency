import { useContext } from "react";
import styled from "styled-components";

import Card from "../components/Card";
import { ThemeContext } from "../utils/context/providers";
import colors from "../utils/style/colors";

function Freelances(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <FreelancesContainer>
      <MainTitle>Trouvez votre prestataire</MainTitle>
      <SubTitle $isDarkTheme={theme === "dark"}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </SubTitle>
      <CardsContainer>
        {props.freelancesProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            name={profile.name}
            picture={profile.picture}
            jobTitle={profile.jobTitle}
          />
        ))}
      </CardsContainer>
    </FreelancesContainer>
  );
}

const FreelancesContainer = styled.main`
  text-align: center;
`;

const MainTitle = styled.h1`
  margin: 0 0 2rem 0;
  font-size: 2rem;
`;

const SubTitle = styled.p`
  margin: 1rem 0;
  
  color: ${(props) =>
    props.$isDarkTheme ? `${colors.neutral200}` : `${colors.secondary500}`};
  font-size: 1.25rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  margin: 4rem 16rem 0 16rem;
`;

export default Freelances;
