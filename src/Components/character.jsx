import { Component, Fragment } from "react";
import { theme } from "./themeChanger";

class Character extends Component {
  constructor() {
    super();
    this.max_random = 10;
    this.min_random = 6;
  }
  handleHover = (e) => {
    var p = document.querySelector("#" + this.props.name);
    if (p.innerHTML === this.props.name) {
      let time = 200;
      this.props.rel.forEach((related) => {
        setTimeout(() => {
          var add_p = document.createElement("br");
          p.insertAdjacentElement("beforeend", add_p);
          p.innerHTML += related.relation + ": " + related.name;
        }, time);
        time = time + 200;
      });
    }
  };

  handleLeave = (e) => {
    var p = document.querySelector("#" + this.props.name);
    p.innerHTML = this.props.name;
  };

  /* This lifecycle method will call the handleHover, which adds the extra details about the 
      Clicked_Image after component gets mounted on if handle props is true */
  componentDidMount() {
    console.log("Character component Mounted");

    // marquee element if name of character exceeds the width of card
    // https://pretagteam.com/question/marquee-text-when-text-overflows
    var element = document.querySelector(`#${this.props.name}`);
    var overflowX = element.offsetWidth < element.scrollWidth;
    if (overflowX === true) {
      var marquee = document.createElement("marquee");
      var contents = element.innerText;
      marquee.innerText = contents;
      element.innerHTML = "";
      
      element.appendChild(marquee);
    }

    // used to apply the stylings when first mounted using theme variable.
    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.border = theme ? "2px solid white" : "2px solid black";
    }

    return this.props.handle ? this.handleHover.call() : null;
  }

  render() {
    return (
      <Fragment>
        <div
          className={
            this.props.index %
              Math.floor(
                Math.random() * (this.max_random - this.min_random) +
                  this.min_random
              ) ===
            0
              ? "card-tall card-wide"
              : this.props.index %
                  Math.floor(
                    Math.random() * (this.max_random - this.min_random) +
                      this.min_random
                  ) ===
                0
              ? "card-tall"
              : this.props.index %
                  Math.floor(
                    Math.random() * (this.max_random - this.min_random) +
                      this.min_random
                  ) ===
                0
              ? "card-wide"
              : null
          }
        >
          <img
            src={this.props.img}
            /* onMouseOver, onMouseLeave functions get theor values as the function 
              if the handle props is false, else they become null */
            onClick={this.props.onClick}
            /* onMouseOver={this.props.handle ? null : this.handleHover}
            onMouseLeave={this.props.handle ? null : this.handleLeave} */

            /* https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code */
            /* Adjustment for accessebility through keyboard */
            onKeyDown={(e) =>
              e.code === "Enter" ? this.props.onClick() : null
            }
            alt="Waiting"
            tabIndex={this.props.tabIndex === "-1" ? "-1" : "0"}
          />
          <p id={this.props.name}>{this.props.name}</p>
        </div>
        {this.props.children}
      </Fragment>
    );
  }
}

export default Character;
