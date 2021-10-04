import { Component } from 'react';
import '../styles/navbar.scss';

class Navbar extends Component {
	componentDidMount() {
		const toggleButton = document.querySelector('.toggle-button');
		const toggleBar = document.querySelectorAll('.bar');
		const navbarLinks = document.getElementsByClassName('navbar-links')[0];
		const activate = (navbarLinks) => {
			/* access all classes of navbarLinks and toggle the active class.
        If active class doesnt exist, it will add it and viceaversa. */
			navbarLinks.classList.toggle('active');
			// add classname into a bar check it is 'open' or 'close'
			toggleBar.forEach((bar) => {
				bar === 'open'
					? bar.classList.toggle('close')
					: bar.classList.toggle('open');
			});
		};
		toggleButton.addEventListener('click', () => {
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
						<li>
							<a href="/login">Log in</a>
						</li>
						<li>
							<a href="/signup">Sign up</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
