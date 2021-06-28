import styled from "styled-components";

import Card from "../components/Card";
import colors from "../utils/style/colors";

const freelanceProfiles = [
  {
    name: "Aubin Leroux",
    jobTitle: "Développeur mobile Android/Kotlin",
    picture: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Tessa Sanchez",
    jobTitle: "Designeuse UI",
    picture: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    name: "Marie Adam",
    jobTitle: "Développeuse back-end Python/Django",
    picture: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    name: "Evan Fleury",
    jobTitle: "Scrum Master",
    picture: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Maëlia Gauthier",
    jobTitle: "Cheffe de projet",
    picture: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

function Freelances() {
  return (
    <FreelancesWrapper>
      <MainTitle>Trouvez votre prestataire</MainTitle>
      <SubTitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </SubTitle>
      <CardsWrapper>
        {freelanceProfiles.map((profile, index) => (
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
