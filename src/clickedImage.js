import React, { Component } from "react";
import CloseButton from "./Components/cancel"
import Character from "./Components/character";
import Slider from "./slider";

/* This is not a component but just a rendered to render list of components */
class ClickedImage extends Component {
  constructor(props) {
    super(props);
    // this handle state variable is to handle the onClick, onHover, onLeave methods
    this.state = {
      handle: true,
    };
  }
  render() {
    /* Props destructuring here */
    const { img, name, relations } = this.props.character_details;
    return (
      <React.Fragment>
        <CloseButton onClick={this.props.onClick}></CloseButton>
        <div className="clicked-image">
          <Character
            img={img}
            name={name}
            rel={relations}
            handle={this.state.handle}
          ></Character>
        </div>
        <Slider rel={relations} all={this.props.all_details}></Slider>
      </React.Fragment>
    );
  }
}

export default ClickedImage;