import React, { Component, Suspense, lazy } from "react";
import CloseButton from "./Components/cancel";
import Character from "./Components/character";
import Loading from "./Components/loader";
import { theme } from "./Components/themeChanger";
import Information from "./Information";

const Slider=lazy(() => import("./slider"))

/* This is not a component but just a rendered to render list of components */
class ClickedImage extends Component {
  constructor(props) {
    super(props);
    // this handle state variable is to handle the onClick, onHover, onLeave methods
    this.state = {
      handle: true,
    };
  }

  componentDidMount() {
    let img = document.querySelectorAll("img")[0];
    let p = document.querySelector("p");
    img.classList.add("selected-image");
    p.classList.add("style-p");

    // used to apply the stylings when first mounted using theme variable.
    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.border = theme
        ? "2px solid white"
        : "2px solid black";
    }
  }
  
  componentWillUnmount() {
    let img = document.querySelector("img");
    let p = document.querySelector("p");
    img.classList.remove("selected-image");
    p.classList.remove("style-p");
  }

  handleImage = (data) => {
    this.setState({ img_link: data });
    console.log("Picture updated in clicked image");
  };

  render() {
    /* Props destructuring here */
    const { img, name, relations } = this.props.character_details;
    return (
      <React.Fragment>
        <CloseButton
          onClick={this.props.onClick}
          color={this.props.cancel_btn_theme}
        ></CloseButton>
        <div className="clicked-image">
          <Character
            img={this.state.img_link || img}
            name={name}
            rel={relations}
            handle={this.state.handle}
            /* Adjustment for accessebility through keyboard */
            tabIndex="-1"
          >
            <Information name={name} handleImage={this.handleImage}></Information>
          </Character>
        </div>
        <Suspense fallback={<Loading></Loading>}>
          <Slider rel={relations} all={this.props.all_details}></Slider>
        </Suspense>
      </React.Fragment>
    );
  }
}

export default ClickedImage;
