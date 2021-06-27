import PropTypes from "prop-types";
import styled from "styled-components";

import DefaultPicture from "../assets/profile.png";
import colors from "../utils/style/colors";

const CardWrapper = styled.div`
  width: 12rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;

  text-align: center;

  background: ${colors.neutral100};
`;

const CardJobTitle = styled.p`
  color: ${colors.primary500};
  font-size: 1.5rem;
  font-weight: 700;
`;

const CardPicture = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const CardName = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

function Card({ name, jobTitle, picture }) {
  return (
    <CardWrapper>
      <CardJobTitle>{jobTitle}</CardJobTitle>
      <CardPicture src={picture} alt={`Portrait de ${name}`} />
      <CardName>{name}</CardName>
    </CardWrapper>
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
