import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

class Navbar extends Component {
  componentDidMount() {
    const toggleButton = document.querySelector(".toggle-button");
    const toggleBar = document.querySelectorAll(".bar");
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    const activate = (navbarLinks) => {
      /* access all classes of navbarLinks and toggle the active class.
	  If active class doesnt exist, it will add it and viceaversa. */
      navbarLinks.classList.toggle("active");
      // add classname into a bar check it is 'open' or 'close'
      toggleBar.forEach((bar) => {
        bar === "open"
          ? bar.classList.toggle("close")
          : bar.classList.toggle("open");
      });
    };
    toggleButton.addEventListener("click", () => {
      activate(navbarLinks);
    });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="brand-title">
          <a
            href="https://borigeabhiram.gitlab.io/second-website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ithihas
          </a>
        </div>
        <button className="toggle-button" aria-label="Navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className="navbar-links">
          <ul>
            <li>
              <Link className="skip" href="#maincontent">
                Skip navigation
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/connect">Connect</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
