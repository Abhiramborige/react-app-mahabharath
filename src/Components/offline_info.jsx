import { Component, Fragment } from "react";

class OfflineInformation extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
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
  }

  render() {
    return (
      <div className="flex-info-element">
        <h2>About {this.props.name}</h2>
        {this.state.list.map((element, index) =>
          element.name === this.props.name ? (
            <Fragment key={index}>
              <p>{element.description}</p>
            </Fragment>
          ) : null
        )}
      </div>
    );
  }
}

export default OfflineInformation;
