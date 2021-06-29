import { Component } from "react";
import "../styles/navbar.css";

class Navbar extends Component {
  componentDidMount() {
    const toggleButton = document.querySelector(".toggle-button");
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    toggleButton.addEventListener("click", () => {
      /* access all classes of navbarLinks and toggle the active class.
        If active class doesnt exist, it will add it and viceaversa. */
      navbarLinks.classList.toggle("active");
    });
  }

  render() {
    return (
      <nav class="navbar">
        <div class="brand-title">
          <a
            href="https://borigeabhiram.gitlab.io/second-website/"
            target="_blank" rel="noopener noreferrer"
          >
            Ithihas
          </a>
        </div>
        <div class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <div class="navbar-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/connect">Connect</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
