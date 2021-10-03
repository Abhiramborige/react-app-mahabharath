import { Component } from "react";
import { theme } from "./themeChanger";

class CloseButton extends Component {

  // used to apply the stylings when first mounted using theme variable.
  componentDidMount() {
    console.log("Cancel button mounted")
    let crossLine = document.querySelector(".close-button");
    crossLine.style.color = theme ? "white" : "black";
  }

  render() {
    return (
      <button
        onClick={() => this.props.onClick({ name: "Cross" })}
        className="close-button"
      >
        <span className="material-icons">clear</span>
      </button>
    );
  }
}

export default CloseButton;
