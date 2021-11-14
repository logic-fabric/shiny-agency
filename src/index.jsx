import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Error404 } from "./pages/Error404";
import { Freelances } from "./pages/Freelances";
import { Home } from "./pages/Home";
import { Results } from "./pages/Results";
import { Survey } from "./pages/Survey";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GlobalStyle } from "./utils/style/GlobalStyle";
import { SurveyProvider, ThemeProvider } from "./utils/context/providers";
import { getRandomProfiles } from "./utils/data/randomFreelance";

async function initApp() {
  const profilesQuantity = 4 + Math.ceil(Math.random() * 4);
  const freelancesProfiles = await getRandomProfiles(profilesQuantity);

  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <ThemeProvider>
          <SurveyProvider>
            <GlobalStyle />
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/faire-le-test/:questionId">
                <Survey />
              </Route>
              <Route path="/freelances">
                <Freelances freelancesProfiles={freelancesProfiles} />
              </Route>
              <Route path="/resultats">
                <Results />
              </Route>
              <Route>
                <Error404 />
              </Route>
            </Switch>
            <Footer />
          </SurveyProvider>
        </ThemeProvider>
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

initApp();
