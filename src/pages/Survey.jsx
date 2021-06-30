import { useEffect } from "react";
import styled from "styled-components";

import getSampleSurvey from "../utils/data/sampleSurvey";
import colors from "../utils/style/colors";

function Survey() {
  useEffect(() => getSampleSurvey(), []);

  return (
    <SurveyWrapper>
      <QuestionNumber>Question 1</QuestionNumber>
      <Question>
        Votre application doit-elle impérativement apparaître en premier dans
        les résultats de recherche ?
      </Question>
      <AnswersButtonsWrapper>
        <AnswerButton>Oui</AnswerButton>
        <AnswerButton>Non</AnswerButton>
      </AnswersButtonsWrapper>
      <SurveyNav>
        <SurveyNavLink className="previousNavLink">Précédente</SurveyNavLink>
        <SurveyNavLink>Suivante</SurveyNavLink>
      </SurveyNav>
    </SurveyWrapper>
  );
}

const SurveyWrapper = styled.main`
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

  color: ${colors.neutral900};
  font-size: 1.5rem;
  font-weight: 700;

  background: ${colors.neutral100};

  transition: 200ms;

  &:hover {
    border-color: ${colors.primary500};
  }
`;

const SurveyNav = styled.div`
  display: flex;
  justify-content: center;
`;

const SurveyNavLink = styled.span`
  min-width: 7rem;
  margin: 0 0.5rem;
  padding: 0.5rem;

  font-size: 1.1rem;
  text-align: left;
  text-decoration: underline;

  cursor: pointer;

  &.previousNavLink {
    text-align: right;
  }
`;

export default Survey;
