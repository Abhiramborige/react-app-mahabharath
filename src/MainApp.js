import React, { Fragment, Component, Suspense } from "react";
import Search from "./Components/search";
import ToggleButton from "./Components/themeChanger";
import Navbar from "./Components/navbar";
import "./styles/index.css";
import Loader from "./Components/loader";
import { randomize_list } from "./randomizer";

const ClickedImage = React.lazy(() => import("./clickedImage"));
const CharacterList = React.lazy(() => import("./characterList"));

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      MainApp_view: true,
      clicked_details: [],
    };
  }

  // Reference: https://stackoverflow.com/questions/60824522/import-local-json-data-into-react-state
  // and https://stackoverflow.com/questions/37269808/react-js-uncaught-in-promise-syntaxerror-unexpected-token-in-json-at-posit
  componentDidMount() {
    console.log("MainApp Mounted");
    fetch("./characters.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ list }) => this.setState({ list }));
  }


  /* this handle function sets the state of the current list after changes made by onChange event call
    Reference: 
    1. https://stackoverflow.com/questions/55028583/how-do-i-call-setstate-from-another-component-in-reactjs
    2. https://stackoverflow.com/questions/24939623/can-i-update-a-components-props-in-react-js */
  handleChangeInState = (e) => {
    this.setState((state) => ({
      list: this.state.list,
    }));
  };

  handleClick = (e) => {
    this.setState((state) => ({
      MainApp_view: !this.state.MainApp_view,
      clicked_details: e,
    }));
    console.log("Clicked on: " + e.name);
  };

  render() {
    // randommize the list
    randomize_list(this.state.list);
    let root = document.querySelector("#root");
    console.log("MainApp View: " + this.state.MainApp_view);
    return (
      <Fragment>
        <ToggleButton></ToggleButton>
        {this.state.MainApp_view === true
          ? (root.classList.remove("style-root"),
            (
              <Fragment>
                <Navbar></Navbar>
                <h1>Mahabharath</h1>
                <Search
                  list={this.state.list}
                  onChange={this.handleChangeInState}
                ></Search>
                <Suspense
                  fallback={
                    <div className="loader-container">
                      <Loader></Loader>
                    </div>
                  }
                >
                  <CharacterList
                    list={this.state.list}
                    onClick={this.handleClick}
                  ></CharacterList>
                </Suspense>
              </Fragment>
            ))
          : (root.classList.add("style-root"),
            (
              <Suspense
                fallback={
                  <div className="loader-container">
                    <Loader></Loader>
                  </div>
                }
              >
                <ClickedImage
                  onClick={this.handleClick}
                  character_details={this.state.clicked_details}
                  all_details={this.state.list}
                ></ClickedImage>
              </Suspense>
            ))}
      </Fragment>
    );
  }
}

export default MainApp;
