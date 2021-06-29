import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import MainApp from "./MainApp";
import About from "./OtherPages/About";
import Interact from "./OtherPages/Connect";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainApp></MainApp>
      </Route>
      <Route path="/connect">
        <Interact></Interact>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
    </Switch>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
