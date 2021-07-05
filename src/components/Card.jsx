import { useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ThemeContext } from "../utils/context/providers";
import colors from "../utils/style/colors";
import DefaultPicture from "../assets/profile.png";

function Card({ name, jobTitle, picture }) {
  const { theme } = useContext(ThemeContext);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <CardContainer
      onClick={() => setIsFavorite(!isFavorite)}
      $isDarkTheme={theme === "dark"}
    >
      <CardJobTitle $isDarkTheme={theme === "dark"}>{jobTitle}</CardJobTitle>
      <CardPicture src={picture} alt={`Portrait de ${name}`} />
      <CardStar
        $isFavorite={isFavorite}
        $isDarkTheme={theme === "dark"}
      ></CardStar>
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
  position: relative;
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

const CardStar = styled.span`
  position: absolute;
  top: 6rem;
  right: 5rem;

  opacity: ${(props) => (props.$isFavorite ? 1 : 0)};

  transition: 300ms;

  &:before {
    display: inline-block;

    padding: 0.5rem;
    border: 0.25rem solid transparent;
    border-radius: 50%;
    border-color: ${(props) =>
      props.$isDarkTheme ? `${colors.neutral700}` : `${colors.neutral100}`};

    color: ${colors.primary500};
    font-family: "Font Awesome 5 Free";
    font-size: 2rem;
    font-weight: 900;

    background: ${colors.primary100};

    content: "\f005";
  }
`;

const CardJobTitle = styled.h3`
  min-height: 3.5rem;
  margin: 0;

  color: ${(props) =>
    props.$isDarkTheme ? `${colors.neutral200}` : `${colors.primary500}`};
  line-height: 1.4;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: left;
`;

const CardPicture = styled.img`
  width: 9rem;
  height: 9rem;
  margin: 1rem 0 2rem 0;
  border-radius: 50%;
`;

const CardName = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

export default Card;
