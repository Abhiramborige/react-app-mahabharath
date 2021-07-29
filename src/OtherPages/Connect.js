import { Component } from "react";
import "../styles/extras.css";
import handleClick from "./backend";
import Rating from "./rating";

class Interact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      rating: 0,
    };
  }

  change_rate = (num) => {
    this.setState({
      rating: num,
    });
  };

  handle = (e) => {
    e.preventDefault();
    console.log("Submitted");
    handleClick(this.state);
  };

  handleChange = (e) => {
    const field = e.target.id;
    // Reference: https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name
    this.setState(() => ({
      [field]: e.target.value,
    }));
  };

  componentDidUpdate() {
    console.log("Rating: " + this.state.rating);
  }

  render() {
    return (
      <form onSubmit={this.handle}>
        <div className="contact-form">
          <div className="form-text">
            <h2>Share your views.</h2>
          </div>
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            onChange={this.handleChange}
            value={this.state.name}
            id="name"
            autoComplete="off"
            required
          ></input>
          <textarea
            rows="4"
            placeholder="Message here"
            className="form-input"
            onChange={this.handleChange}
            value={this.state.message}
            id="message"
            autoComplete="off"
            required
          ></textarea>

          <Rating rate_func={this.change_rate}></Rating>
          <br></br>
          <input type="submit" className="btn" value="Send"></input>
        </div>
      </form>
    );
  }
}

export default Interact;
