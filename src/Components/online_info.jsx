import { Component, Fragment } from "react";
import Loader from "./loader";

class OnlineInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked_obj: {},
      err: null,
    };
  }

  func = () => {
    this.scrapper(this.props.rename)
      .then((data) => {
        console.log(data);
        this.setState((state) => ({
          err: null,
          clicked_obj: data,
        }));

        this.props.handleImage(data.img);

      })
      .catch((err) => {
        console.log(err);
        this.setState({ err: err });
      });
  };

  // https://stackoverflow.com/questions/47672661/async-function-inside-a-class
  async scrapper(name) {
    const response = await fetch(`${process.env.REACT_APP_MAHABHARATH_API}get/${name}`); 
    const result = await response.json();
    return result;
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.rename !== this.props.rename) {
      console.log("Online Information updated");
      this.func();
    }
  }

  componentDidMount() {
    console.log("Online Information mounted");
    this.func();
  }

  render() {
    if (this.state.err) {
      throw new Error("Timeout");
    }
    return (
      <Fragment>
        {/* checks if clicked name is same as name fetched from API */}
        {this.props.rename !== this.state.clicked_obj.name ? (
          <div>
            <Loader></Loader>
          </div>
          
        ) : (
          <Fragment>
            <div className="flex-info-element">
              <h2>A short description</h2>
              <p>{this.state.clicked_obj.desc}</p>
            </div>
            <div className="flex-info-element">
              <h2>From Wikipedia</h2>
              <p>{this.state.clicked_obj.info}</p>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default OnlineInformation;
