import styled from "styled-components";

import Card from "../components/Card";
import DefaultPicture from "../assets/profile.png";

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: DefaultPicture,
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: DefaultPicture,
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: DefaultPicture,
  },
];

const CardsWrapper = styled.div`
  display: grid;
  gap: 1rem 2rem;
  grid-template-rows: 20rem 20rem;
  grid-template-columns: repeat(2, 1fr);
`;

function Freelances() {
  return (
    <div className="Freelances">
      <h1>Nos freelances</h1>
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
    </div>
  );
}

export default Freelances;
