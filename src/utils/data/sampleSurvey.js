async function getSampleSurvey() {
  try {
    const response = await fetch("../data/sample-survey.json");

    if (response.ok) {
      const survey = await response.json();

      return survey;
    } else {
      console.error(
        `HTTP-Error-${response.status} while fetching ./data/sample-survey.json`
      );
    }
  } catch (err) {
    console.error(
      `An error as occured while fetching ./data/sample-survey.json : ${err}`
    );
  }
}

export default getSampleSurvey;
