import Character from "./Components/character";
import { Component, Fragment } from "react";
import Information from "./Information";
import { randomize_list } from "./randomizer";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.list = this.props.all;
    this.state = {
      // store the clicked image in the slider and pass the information to Information component
      clicked: null,
      image_array: this.get_images(),
    };
  }

  get_images() {
    // randommize the props.rel array
    randomize_list(this.props.rel);

    /* search for the people who are related to the current character 
    that is search for all names in relations array */
    let image_array = [];
    this.props.rel.forEach((element) => {
      image_array.push({name:null, img_link:null});
    });
    for (var i = 0; i < this.props.rel.length; i++) {
      for (var j = 0; j < this.list.length; j++) {
        if (this.props.rel[i].name === this.list[j].name) {
          image_array[i] = {
            name: this.list[j].name,
            img_link: this.list[j].img,
          };
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
  };

  componentDidMount() {
    console.log("Slider Mounted");
    // calling at first to set initially before attaching listener.
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);

    // adjusting view while focussing through tabbing.
    document.querySelectorAll("a").forEach((img, index) => {
      img.addEventListener("focus", () => {
        img.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
    });
  }

  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.clicked !== this.state.clicked) console.log("Slider updated");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  handleClick = (e, i) => {
    console.log("slider image clicked " + e.name);
    this.setState((state) => ({
      clicked: e.name,
      ele_index: i,
    }));
  };

  handleImage = (data) => {
    let temp_arr = this.state.image_array;
    /* for (let i = 0; i < temp_arr.length; i++) {
      if (temp_arr[i].name === this.state.clicked) { 
        temp_arr[i].img_link = data 
        {OR, a single liner instead of loop}
        temp_arr[this.state.ele_index].img_link = data;
      } else {
        temp_arr[i].img_link = this.state.image_array[i].img_link;
      }
    } */

    // if image from API is not found, then set that to default image
    if(data===null){
      this.props.all.forEach(element=>{
        if(element.name===this.state.clicked){
          data=element.img;
        }
      })
    }
    temp_arr[this.state.ele_index].img_link = data;
    this.setState({ image_array: temp_arr });
    console.log("Picture updated in slider");
  };

  render() {
    console.log("Slider rendered");
    return (
      <Fragment>
        <div className="slider">
          <ul className="slider_list">
            {this.props.rel.map((element, index) => (
              <Fragment key={index}>
                <li>
                  <div className="slider_list_element">
                    <a
                      href="#info"
                      onClick={() => this.handleClick(element, index)}
                    >
                      <Character
                        img={this.state.image_array[index].img_link}
                        name={element.name}
                        // passing an empty
                        rel={[]}
                        tabIndex="-1"
                      ></Character>
                    </a>
                  </div>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
        {this.state.clicked !== null ? (
          <div className="information" id="info">
            <Information
              name={this.state.clicked}
              handleImage={this.handleImage}
            ></Information>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default Slider;
