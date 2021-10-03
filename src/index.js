import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./Components/loader";
import LogComponent from "./OtherPages/login";

const MainApp = lazy(() => import("./MainApp"));
const About = lazy(() => import("./OtherPages/About"));
const Interact = lazy(() => import("./OtherPages/Connect"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="loader-container">
          <Loader></Loader>
        </div>
      }
    >
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
        <Route path="/login">
          <LogComponent isLogin={true} onClickCallback={() => { }} />
        </Route>
        <Route path="/signup">
          <LogComponent isLogin={false} onClickCallback={() => { }} />
        </Route>
      </Switch>
    </Suspense>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
