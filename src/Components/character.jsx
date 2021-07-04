import { Component } from "react";

class Character extends Component {
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
    return this.props.handle ? this.handleHover.call() : null;
  }

  render() {
    return (
      <div>
        <img
          src={this.props.img}
          /* onMouseOver, onMouseLeave functions get theor values as the function 
              if the handle props is false, else they become null */
          onMouseOver={this.props.handle ? null : this.handleHover}
          onMouseLeave={this.props.handle ? null : this.handleLeave}
          onClick={this.props.onClick}
          /* https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code */
          /* Adjustment for accessebility through keyboard */
          onKeyDown={(e) => (
            (e.code === "Enter") ? this.props.onClick() : null
          )}
          alt="Waiting"
          tabIndex={(this.props.tabIndex==="-1")?"-1":"0"}
        />
        <p id={this.props.name}>{this.props.name}</p>
      </div>
    );
  }
}

export default Character;
