import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ErrorMain from "../components/ErrorMain";
import { SurveyContext, ThemeContext } from "../utils/context/providers";
import { useFetch } from "../utils/hooks/useFetch";
import colors from "../utils/style/colors";

function setNeededSkillsFromUserAnswers(survey, surveyAnswers) {
  const neededSkills = new Set();

  for (let key in surveyAnswers) {
    const associatedSkills = survey.questions[key].associatedSkills;

    if (surveyAnswers[key]) {
      for (let skill of associatedSkills) neededSkills.add(skill);
    }
  }

  return [...neededSkills].join(", ");
}

function Results() {
  const { theme } = useContext(ThemeContext);
  const { surveyAnswers } = useContext(SurveyContext);
  const { data, isDataLoading, error } = useFetch("../data/sample-survey.json");
  const survey = data;

  console.log("survey =", survey);
  console.log("User answers =", surveyAnswers);

  if (error) {
    return (
      <ErrorMain errorText="Oups, il y a eu un problème dans le traitement de vos réponses." />
    );
  }

  const neededSkills = isDataLoading
    ? "en calcul"
    : setNeededSkillsFromUserAnswers(survey, surveyAnswers);

  return (
    <ResultsContainer $isDarkTheme={theme === "dark"}>
      <ResultsTitle>
        Les compétences dont vous avez besoin&nbsp;:{" "}
        <NeededSkillsSpan $isDarkTheme={theme === "dark"}>
          {neededSkills}
        </NeededSkillsSpan>
      </ResultsTitle>
      <CallToActionContainer>
        <CallToActionLink to="/freelances">
          Découvrez nos profils
        </CallToActionLink>
      </CallToActionContainer>
      <JobsDetails>
        <JobTitle $isDarkTheme={theme === "dark"}>UI designer</JobTitle>
        <JobDescription>
          Le designer UI prend en charge les maquettes et graphismes du site.
        </JobDescription>
      </JobsDetails>
    </ResultsContainer>
  );
}

const ResultsContainer = styled.main`
  padding: 11rem 6rem;

  background: ${(props) =>
    props.$isDarkTheme ? `${colors.neutral700}` : `${colors.neutral100}`};
`;

const ResultsTitle = styled.h1`
  max-width: 50rem;
  margin: auto;

  line-height: 1.5;
  text-align: center;
`;

const NeededSkillsSpan = styled.span`
  color: ${(props) =>
    props.$isDarkTheme ? `${colors.neutral300}` : `${colors.primary500}`};
`;

const CallToActionContainer = styled.div`
  text-align: center;
`;

const CallToActionLink = styled(Link)`
  display: inline-block;

  margin: 2rem;
  padding: 0.5rem 4rem;
  border-radius: 2rem;

  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;

  background: ${colors.primary500};
`;

const JobsDetails = styled.div`
  max-width: 60rem;
  margin: auto;
`;

const JobTitle = styled.h2`
  color: ${(props) =>
    props.$isDarkTheme ? `${colors.neutral300}` : `${colors.primary500}`};
`;

const JobDescription = styled.p`
  font-size: 1.3rem;
`;

export default Results;
