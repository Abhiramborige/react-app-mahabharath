import { Component } from "react";

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    console.log("Information Mounted");
    fetch("./character_details.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ list }) => this.setState({ list }));
    console.log(this.state.list);
  }

  render() {
    console.log(this.props.name);
    return (
      <div className="information">
        <h2>About {this.props.name}</h2>
        {this.state.list.map((element) =>
          element.name === this.props.name ? <p>{element.description}</p> : null
        )}
      </div>
    );
  }
}

export default Information;
