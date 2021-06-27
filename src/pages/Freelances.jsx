import Card from "../components/Card";
import "../styles/Freelances.css";
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

function Freelances() {
  return (
    <div className="Freelances">
      <h1>Nos freelances</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          name={profile.name}
          picture={profile.picture}
          jobTitle={profile.jobTitle}
        />
      ))}
    </div>
  );
}

export default Freelances;
