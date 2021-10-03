import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true, 
    });
  }

  render() {
    if (this.state.hasError) {
      return <div className="flex-info-element"><h3>Error occured <br></br>Reload and fetch again.</h3></div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;