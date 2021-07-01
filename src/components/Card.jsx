import { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ThemeContext } from "../utils/context/providers";
import colors from "../utils/style/colors";
import DefaultPicture from "../assets/profile.png";

function Card({ name, jobTitle, picture }) {
  const { theme } = useContext(ThemeContext);

  return (
    <CardContainer $isDarkTheme={theme === "dark"}>
      <CardJobTitle $isDarkTheme={theme === "dark"}>{jobTitle}</CardJobTitle>
      <CardPicture src={picture} alt={`Portrait de ${name}`} />
      <CardName>{name}</CardName>
    </CardContainer>
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

const CardContainer = styled.div`
  width: 17rem;
  margin: 1.5rem 2rem;
  padding: 2rem 3rem;
  border: 0.125rem solid transparent;
  border-radius: 0.5rem;

  text-align: center;

  background: ${(props) =>
    props.$isDarkTheme ? `${colors.neutral700}` : `${colors.neutral100}`};

  cursor: pointer;
  transition: 200ms;

  &:hover {
    border-color: ${colors.primary500};
    border-color: ${(props) =>
      props.$isDarkTheme ? `${colors.neutral200}` : `${colors.primary500}`};
  }
`;

const CardJobTitle = styled.h3`
  margin: 0;

  color: ${(props) =>
    props.$isDarkTheme ? `${colors.neutral200}` : `${colors.primary500}`};
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
