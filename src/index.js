import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Loader from "./Components/loader";
import LogComponent from "./OtherPages/login";
import { healthProvider } from "./providers";
import Navbar from "./Components/navbar";
import { Fragment } from "react/cjs/react.production.min";

const MainApp = lazy(() => import("./MainApp"));
const About = lazy(() => import("./OtherPages/About"));
const Interact = lazy(() => import("./OtherPages/Connect"));

const App = () => {
  useEffect(async () => {
    // for health check.
    // https://www.codegrepper.com/code-examples/javascript/how+to+check+is+axios+error
    try {
      const result = await healthProvider.getHealthStatus();
      console.log(result);
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
      alert("API under construction 🛠, please try again.");
    }
  }, []);
  return (
    <Fragment>
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
            <Navbar></Navbar>
            <Interact></Interact>
          </Route>
          <Route path="/about">
            <Navbar></Navbar>
            <About></About>
          </Route>
          <Route path="/login">
            <Navbar></Navbar>
            <LogComponent isLogin={true} onClickCallback={() => {}} />
          </Route>
          <Route path="/signup">
            <Navbar></Navbar>
            <LogComponent isLogin={false} onClickCallback={() => {}} />
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
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
