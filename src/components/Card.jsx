import PropTypes from "prop-types";

import "../styles/Card.css";
import DefaultPicture from "../assets/profile.png";

function Card({ name, jobTitle, picture }) {
  return (
    <div className="card">
      <span>{jobTitle}</span>
      <img src={picture} alt={`Portrait de ${name}`} height={80} width={80} />
      <span>{name}</span>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

Card.defaultProps = {
  picture: DefaultPicture,
};

export default Card;
