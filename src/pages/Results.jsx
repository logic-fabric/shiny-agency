import { useContext } from "react";

import ErrorMain from "../components/ErrorMain";
import { SurveyContext } from "../utils/context/providers";
import { useFetch } from "../utils/hooks/useFetch";

function Results() {
  const { surveyAnswers } = useContext(SurveyContext);
  const { data, error } = useFetch("../data/sample-survey.json");
  const survey = data;

  console.log("survey =", survey);
  console.log("User answers =", surveyAnswers);

  if (error) {
    return (
      <ErrorMain errorText="Oups, il y a eu un problème dans le traitement de vos réponses." />
    );
  }

  return (
    <main>
      <h1>Les compétences dont vous avez besoin</h1>
    </main>
  );
}

export default Results;
