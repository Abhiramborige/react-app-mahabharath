import { Component } from "react";

class ResetButton extends Component {
  handleReset =() =>{
    this.props.list.forEach((element, index) => {
      this.props.list[index].view = true;
    });
    this.props.onChange();
  } 
  render() { 
    return (
      <button onClick={this.handleReset} className="reset-button">
				<span className="material-icons">
          restart_alt
				</span>
			</button>
    );
  }
}
 
export default ResetButton;