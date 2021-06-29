import { Component } from "react";

class ToggleButton extends Component {
  state = { button: "true" };
  handleToggle = (e) => {
    this.setState((state) => ({
      button: !this.state.button,
    }));
  };

  // whenever the value of the button is updated, component is updated, so theme is applied
  componentDidUpdate() {
    // the cross mark
    let crossLines = document.querySelector(".close-button");
    if (crossLines != null) {
      crossLines = crossLines.querySelectorAll("span");
      for (var i = 0; i < crossLines.length; i++) {
        crossLines[i].style.backgroundColor = this.state.button
          ? "white"
          : "black";
      }
    }
    // the background
    document.querySelector("body").style.backgroundColor = this.state.button
      ? "black"
      : "white";
    // change the style in * selector
    document.querySelector("*").style.color = this.state.button
      ? "white"
      : "black";
    document.querySelector("*").style.fontWeight = this.state.button
      ? "normal"
      : "bolder";
    // the image
    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.border = this.state.button
        ? "2px solid white"
        : "2px solid black";
    }
    // icon color
    let icon = document.querySelector(".material-icons");
    icon.style.color = this.state.button ? "white" : "black";
  }

  render() {
    return (
      <button onClick={this.handleToggle} className="theme-toggle">
        <span className="material-icons">
          {this.state.button ? "dark_mode" : "light_mode"}
        </span>
      </button>
    );
  }
}

export default ToggleButton;
