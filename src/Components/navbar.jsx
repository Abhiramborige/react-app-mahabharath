import { Component } from 'react';
import '../styles/navbar.css';

class Navbar extends Component {
	componentDidMount() {
		const toggleButton = document.querySelector('.toggle-button');
		const navbarLinks = document.getElementsByClassName('navbar-links')[0];
		const activate = (navbarLinks) => {
			/* access all classes of navbarLinks and toggle the active class.
        If active class doesnt exist, it will add it and viceaversa. */
			navbarLinks.classList.toggle('active');
		};
		toggleButton.addEventListener('click', () => {
			activate(navbarLinks);
		});
	}

	render() {
		return (
			<nav className="navbar">
				<button className="toggle-button" aria-label="Navigation">
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</button>
				<div className="brand-title">
					<a
						href="https://borigeabhiram.gitlab.io/second-website/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Ithihas
					</a>
				</div>
				<div className="navbar-links">
					<ul>
						<li>
							<a className="skip" href="#maincontent">
								Skip navigation
							</a>
						</li>
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
