import { Component } from "react";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [0, 0, 0, 0, 0],
    };
  }

  componentDidMount() {
    let star_array = document.querySelectorAll(".star");

    star_array.forEach((star, index) => {
      // to have hover effects
      star.addEventListener("mouseover", () => {
        for (let i = 0; i <= index; i++) {
          star_array[i].textContent = "star";
          star_array[i].style.color = "gold";
        }
        // the other indexed stars must become normal.
        for (let i = index + 1; i < 5; i++) {
          star_array[i].textContent = "star_outline";
          star_array[i].style.color = "unset";
        }
      });

      // must retain the current state values when leaving the star div.
      star.addEventListener("mouseleave", () => {
        for (let i = 0; i < star_array.length; i++) {
          let star = star_array[i];
          if (this.state.value[i] === 1) {
            star.style.color = "gold";
            star.textContent = "star";
          } else {
            star.style.color = "unset";
            star.textContent = "star_outline";
          }
        }
      });

      // must update the state when clicked.
      star.addEventListener("click", () => {
        let temp = this.state.value;
        for (let i = 0; i <= index; i++) {
          temp[i] = 1;
        }
        for (let i = index + 1; i < 5; i++) {
          temp[i] = 0;
        }

        this.setState((state) => ({
          value: temp,
        }));

        // https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
        // https://www.freecodecamp.org/news/how-to-update-a-components-prop-in-react-js-oh-yes-it-s-possible-f9d26f1c4c6d/
        this.props.rate_func(this.state.value.reduce((a, b) => a + b, 0));
      });
    });
  }

  render() {
    return (
      <div className="star_container">
        {this.state.value.map((element) => (
          <span className="material-icons star" value={element}>
            star_outline
          </span>
        ))}
      </div>
    );
  }
}

export default Rating;
