import { useContext } from "react";

import { SurveyContext } from "../utils/context/providers";

function Results() {
  const { surveyAnswers } = useContext(SurveyContext);

  console.log("User answers =", surveyAnswers);

  return (
    <main>
      <h1>Les compétences dont vous avez besoin</h1>
    </main>
  );
}

export default Results;
