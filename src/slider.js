import Character from "./Components/character";
import Information from "./Components/information";
const { Component, Fragment } = require("react");

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.all,
      // for slider component to show all inner elements in the list.
      windowWidth: window.innerWidth,
      // store the clicked image in the slider and pass the information to Information component
      clicked: "",
    };
  }
  get_images() {
    /* search for the people who are related to the current character 
    that is search for all names in relations array */
    const list_relations = [];
    let image_array = [];
    this.props.rel.forEach((element) => {
      list_relations.push(element.name);
      image_array.push(null);
    });
    for (var i = 0; i < list_relations.length; i++) {
      for (var j = 0; j < this.state.list.length; j++) {
        if (list_relations[i] === this.state.list[j].name) {
          image_array[i] = this.state.list[j].img;
        }
      }
    }
    return image_array;
  }

  // for better adjustments of the slider component.
  // Refernece: https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
    var d = document.querySelector("div.slider");
    var u = document.querySelector("ul.slider_list");
    let dd = parseInt(getComputedStyle(d).width);
    let uu = parseInt(getComputedStyle(u).width);
    if (uu < dd) {
      d.style.display = "flex";
      d.style.justifyContent = "center";
    } else {
      d.style.removeProperty("display");
      d.style.removeProperty("justify-content");
    }
    console.log("Updated slider");
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  handleClick = (e) => {
    console.log("slider image clicked "+e);
    this.setState((state) => ({
      clicked : e
    }));
  };

  render() {
    console.log("Slider rendered");
    const image_array = this.get_images();
    return (
      <Fragment>
        <div className="slider">
          <ul className="slider_list">
            {this.props.rel.map((element, index) => (
              <li>
                <div className="slider_list_element">
                  <Character
                    img={image_array[index]}
                    name={element.name}
                    // passing an empty
                    rel={[]}
                    onClick={()=>this.handleClick(element.name)}
                  ></Character>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Information name={this.state.clicked}></Information>
      </Fragment>
    );
  }
}

export default Slider;
