import React, { Component } from "react";
import Search from "./Components/search";
import ClickedImage from "./clickedImage";
import ToggleButton from "./Components/themeChanger";
import CharacterList from "./characterList";
import Navbar from "./Components/navbar";
import './styles/index.css';

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

  /* function to randomize the list in the json, 
    to show the list in a different order, whenever loaded.
    1. https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
    2. https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
  randomize_list = (e) => {
    let i = 0;
    let list = this.state.list;
    list.reverse().forEach((character) => {
      let random = Math.floor(Math.random() * (i + 1));
      let temp = list[i];
      list[i] = list[random];
      list[random] = temp;
      i++;
    });
  };

  /* this handle function sets the state of the current list after changes made by onChange event call
    Reference: 
    1. https://stackoverflow.com/questions/55028583/how-do-i-call-setstate-from-another-component-in-reactjs
    2. https://stackoverflow.com/questions/24939623/can-i-update-a-components-props-in-react-js */
  handleChangeInState = (e) => {
    this.setState((state) => ({
      list: this.state.list,
    }));
  };

  /* This component gets updated by the click on any image. 
    It checks the state of mainApp view and modifies the styling of image displayed and p tags displayed.*/
  componentDidUpdate() {
    let img = document.querySelector("img");
    let p = document.querySelector("p");
    if (this.state.MainApp_view === false) {
      img.classList.add("selected-image");
      p.classList.add("style-p");
    }
  }

  handleClick = (e) => {
    this.setState((state) => ({
      MainApp_view: !this.state.MainApp_view,
      clicked_details: e,
    }));
    console.log("Clicked on: " + e.name);
  };

  render() {
    this.randomize_list.call();
    let root = document.querySelector("#root");
    console.log("MainApp View: " + this.state.MainApp_view);
    return (
      <React.Fragment>
        {this.state.MainApp_view === true
          ? (root.classList.remove("style-root"),
            (
              <React.Fragment>
                <Navbar></Navbar>
                <h1>Mahabharath</h1>
                <Search
                  list={this.state.list}
                  onChange={this.handleChangeInState}
                ></Search>
                <CharacterList
                  list={this.state.list}
                  onClick={this.handleClick}
                ></CharacterList>
              </React.Fragment>
            ))
          : (root.classList.add("style-root"),
            (
              <ClickedImage
                onClick={this.handleClick}
                character_details={this.state.clicked_details}
                all_details={this.state.list}
              ></ClickedImage>
            ))}
        <ToggleButton></ToggleButton>
      </React.Fragment>
    );
  }
}

export default MainApp;