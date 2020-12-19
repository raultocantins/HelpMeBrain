import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Admin from "../src/Components/Admin/Admin";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </Router>,

  document.getElementById("root")
);
