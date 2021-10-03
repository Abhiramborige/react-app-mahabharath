import { Component } from "react";
import ErrorBoundary from "./Components/error";
import OfflineInformation from "./Components/offline_info";
import OnlineInformation from "./Components/online_info";

class Information extends Component {
  state = { filter_list: [] };
  constructor(props){
    super(props)
    this.rename=""
  }

  componentDidMount() {
    console.log("Information updated");
    fetch("./filter.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ list }) => this.setState({ filter_list: list }));
  }

  componentDidUpdate(previousProps) {
    if (previousProps.name !== this.props.name)
      console.log("Information updated");
  }

  render() {
    let flag=false;
    // before rendering, it has to filter out the names accordingly.
    this.state.filter_list.forEach((element) => {
      if (element.name === this.props.name) {
        this.rename = element.rename;
        flag=true;
      }
    });
    // if the element to be renamed is not present, then rename is same as props.name
    if(flag===false) this.rename=this.props.name

    return (
      <div className="flex-info">
        <OfflineInformation name={this.props.name}></OfflineInformation>
        <ErrorBoundary>
          <OnlineInformation
            rename={this.rename}
            handleImage={this.props.handleImage}
          ></OnlineInformation>
        </ErrorBoundary>
      </div>
    );
  }
}

export default Information;
