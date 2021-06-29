import PropTypes from "prop-types";
import styled from "styled-components";

import DefaultPicture from "../assets/profile.png";
import colors from "../utils/style/colors";

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

const CardWrapper = styled.div`
  width: 17rem;
  margin: 1.5rem 2rem;
  padding: 2rem 3rem;
  border-radius: 0.5rem;

  text-align: center;

  background: ${colors.neutral100};

  cursor: pointer;
  transition: 200ms;

  &:hover {
    box-shadow: 0.125rem 0.25rem 1rem ${colors.neutral200};
  }
`;

const CardJobTitle = styled.h3`
  margin: 0;

  color: ${colors.primary500};
  font-size: 1.25rem;
  font-weight: 700;
  text-align: left;
`;

const CardPicture = styled.img`
  width: 9rem;
  height: 9rem;
  margin: 2rem 0;
  border-radius: 50%;
`;

const CardName = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

export default Card;
