import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Error404 from "./pages/Error404";
import Freelances from "./pages/Freelances";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sondage/:questionId">
          <Survey />
        </Route>
        <Route path="/freelances">
          <Freelances />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
