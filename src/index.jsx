import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Error404 from "./pages/Error404";
import Freelances from "./pages/Freelances";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyle from "./utils/style/GlobalStyle";
import { ThemeProvider } from "./utils/context/providers";
import getRandomProfiles from "./utils/data/randomFreelance";
import reportWebVitals from "./reportWebVitals";

async function initApp() {
  const profilesQuantity = 4 + Math.ceil(Math.random() * 4);
  const freelancesProfiles = await getRandomProfiles(profilesQuantity);

  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <ThemeProvider>
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
            <Route>
              <Error404 />
            </Route>
          </Switch>
          <Footer />
        </ThemeProvider>
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
