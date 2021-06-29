import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Error404 from "./pages/Error404";
import Freelances from "./pages/Freelances";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import getRandomProfiles from "./utils/data/randomFreelance";
import getSampleSurvey from "./utils/data/sampleSurvey";
import colors from "./utils/style/colors";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
  html {
    color: ${colors.neutral900};
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-weight: 400;
  }

  body {
    max-width: 1440px;
    margin: auto;
    padding: 0 4rem;
  }

  main {
    margin: 3rem 0;
    padding: 2rem 1rem;
  }
`;

async function initApp() {
  const profilesQuantity = 4 + Math.ceil(Math.random() * 4);
  const freelancesProfiles = await getRandomProfiles(profilesQuantity);

  const sampleSurvey = await getSampleSurvey();

  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/passer-le-test/:questionId">
            <Survey survey={sampleSurvey} />
          </Route>
          <Route path="/freelances">
            <Freelances freelancesProfiles={freelancesProfiles} />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

initApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
