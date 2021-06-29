import styled from "styled-components";

import Card from "../components/Card";
import colors from "../utils/style/colors";

function Freelances(props) {
  return (
    <FreelancesWrapper>
      <MainTitle>Trouvez votre prestataire</MainTitle>
      <SubTitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </SubTitle>
      <CardsWrapper>
        {props.freelancesProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            name={profile.name}
            picture={profile.picture}
            jobTitle={profile.jobTitle}
          />
        ))}
      </CardsWrapper>
    </FreelancesWrapper>
  );
}

const FreelancesWrapper = styled.main`
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 2rem;
`;

const SubTitle = styled.h2`
  color: ${colors.secondary500};
  font-size: 1.25rem;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  margin: 4rem 16rem 0 16rem;
`;

export default Freelances;
