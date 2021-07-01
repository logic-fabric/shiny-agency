import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { SurveyContext, ThemeContext } from "../utils/context/providers";
import { useFetch } from "../utils/hooks/useFetch";
import colors from "../utils/style/colors";

// TO DO: use react-query in prod instead of the custom useFetch

function Survey() {
  const { theme } = useContext(ThemeContext);
  const { surveyAnswers, saveSurveyAnswers } = useContext(SurveyContext);
  const { data, isDataLoading, error } = useFetch("../data/sample-survey.json");
  const survey = data;

  const { questionId } = useParams();
  const questionNumber = parseInt(questionId);

  if (error) {
    return (
      <ErrorContainer $isDarkTheme={theme === "dark"}>
        <ErrorText>
          Oups, il y a eu un problème pour récupérer les questions du test
        </ErrorText>
        <CallToActionLink to="/">Revenir à l'accueil</CallToActionLink>
      </ErrorContainer>
    );
  }

  const lastQuestionNumber = Object.keys(survey).length;
  const prevQuestionNumber = Math.max(1, questionNumber - 1);
  const nextQuestionNumber = Math.min(questionNumber + 1, lastQuestionNumber);

  console.log("survey =", survey);
  console.log(
    `Question ${questionNumber} | prev = ${prevQuestionNumber} | next = ${nextQuestionNumber} | last = ${lastQuestionNumber}`
  );

  function saveUserAnswer(answer) {
    saveSurveyAnswers({ [questionNumber]: answer });
  }

  return (
    <SurveyContainer>
      <QuestionNumber>Question {questionNumber}</QuestionNumber>

      {isDataLoading ? (
        <Loader />
      ) : (
        <Question>{survey[questionNumber]}</Question>
      )}

      <AnswersButtonsWrapper>
        <AnswerButton
          onClick={() => saveUserAnswer(true)}
          $isSelected={surveyAnswers[questionNumber] === true}
          $isDarkTheme={theme === "dark"}
        >
          Oui
        </AnswerButton>
        <AnswerButton
          onClick={() => saveUserAnswer(false)}
          $isSelected={surveyAnswers[questionNumber] === false}
          $isDarkTheme={theme === "dark"}
        >
          Non
        </AnswerButton>
      </AnswersButtonsWrapper>
      <SurveyNav>
        <SurveyNavLink
          className="previousNavLink"
          to={`/Faire-le-test/${prevQuestionNumber}`}
          $isDarkTheme={theme === "dark"}
        >
          Précédente
        </SurveyNavLink>
        <SurveyNavLink
          to={`/faire-le-test/${nextQuestionNumber}`}
          $isDarkTheme={theme === "dark"}
        >
          Suivante
        </SurveyNavLink>
        <SurveyNavLink to={`/resultats`} $isDarkTheme={theme === "dark"}>
          Résultats
        </SurveyNavLink>
      </SurveyNav>
    </SurveyContainer>
  );
}

const ErrorContainer = styled.main`
  padding: 10rem 4rem;

  text-align: center;

  background: ${(props) =>
    props.$isDarkTheme ? `${colors.neutral700}` : `${colors.neutral100}`};
`;

const ErrorText = styled.p`
  margin: 1rem;

  font-size: 2rem;
  font-weight: 700;
`;

const CallToActionLink = styled(Link)`
  display: inline-block;

  margin: 4rem 0 0 0;
  padding: 0.5rem 4rem;
  border-radius: 2rem;

  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;

  background: ${colors.primary500};
`;

const SurveyContainer = styled.main`
  text-align: center;
`;

const QuestionNumber = styled.p`
  width: fit-content;
  margin: auto;
  border: 0.125rem solid transparent;
  border-bottom-color: ${colors.primary500};

  font-size: 1.5rem;
  font-weight: 700;
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.p`
  width: 0;
  margin: 2.5rem auto;
  padding: 1.5rem;
  border: 0.5rem solid ${colors.primary500};
  border-bottom-color: transparent;
  border-radius: 50%;

  animation: ${rotate} 500ms infinite linear;
`;

const Question = styled.h1`
  margin: 4rem 8rem;
  font-size: 1.25rem;
  font-weight: 400;
`;

const AnswersButtonsWrapper = styled.div`
  margin: 2rem 12rem;
`;

const AnswerButton = styled.button`
  min-width: 16rem;
  margin: 0.5rem 1.5rem;
  padding: 2rem 4rem;
  border: 0.125rem solid transparent;
  border-radius: 2rem;

  color: ${(props) => {
    return props.$isSelected
      ? `white`
      : props.$isDarkTheme
      ? `white`
      : `${colors.neutral900}`;
  }};

  font-size: 1.5rem;
  font-weight: 700;

  background: ${(props) => {
    return props.$isSelected
      ? `${colors.primary500}`
      : props.$isDarkTheme
      ? `${colors.neutral700}`
      : `${colors.neutral100}`;
  }};

  cursor: pointer;
  transition: 200ms;

  &:hover {
    border-color: ${colors.primary500};
    border-color: ${(props) =>
      props.$isDarkTheme ? `${colors.neutral200}` : `${colors.primary500}`};
  }
`;

const SurveyNav = styled.div`
  display: flex;
  justify-content: center;
`;

const SurveyNavLink = styled(Link)`
  min-width: 7rem;
  margin: 0 0.5rem;
  padding: 0.5rem;

  color: ${(props) => (props.$isDarkTheme ? `white` : `${colors.neutral900}`)};
  font-size: 1.1rem;
  text-align: left;
  text-decoration: underline;

  cursor: pointer;

  &.previousNavLink {
    text-align: right;
  }
`;

export default Survey;
