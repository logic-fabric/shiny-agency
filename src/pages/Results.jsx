import { useContext } from "react";

import ErrorMain from "../components/ErrorMain";
import { SurveyContext } from "../utils/context/providers";
import { useFetch } from "../utils/hooks/useFetch";

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
    <main>
      <h1>Les compétences dont vous avez besoin : {neededSkills}</h1>
    </main>
  );
}

export default Results;
