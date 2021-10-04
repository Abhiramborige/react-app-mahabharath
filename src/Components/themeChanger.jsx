import { Component } from 'react';

export let theme;
class ToggleButton extends Component {
	state = {
		theme: true,
	};

	componentDidMount() {
		console.log('Themechanger component mounted');
	}

	componentDidUpdate() {
		console.log('Themechanger component updated');

		theme = this.state.theme;
		document.querySelector('body').style.backgroundColor = theme
			? 'black'
			: 'white';
		document.querySelector('*').style.color = theme ? 'white' : 'black';
		document.querySelector('*').style.fontWeight = theme ? 'normal' : 'bolder';

		let images = document.querySelectorAll('img');
		for (let i = 0; i < images.length; i++) {
			images[i].style.border = theme ? '2px solid white' : '2px solid black';
		}

		// icons color
		let icon = document.querySelectorAll('.material-icons');
		icon.forEach((icon_element) => {
			icon_element.style.color = theme ? 'white' : 'black';
		});

		// hamburger color
		let hamburger = document.querySelectorAll('.bar');
		hamburger.forEach((hamburger_element) => {
			hamburger_element.style.backgroundColor = theme ? 'white' : 'black';
		});
	}

	handleThemeChange = () => {
		this.setState((state) => ({
			theme: !this.state.theme,
		}));
	};

	render() {
		return (
			<button onClick={this.handleThemeChange} className="theme-toggle">
				<span className="material-icons">
					{this.state.theme ? 'dark_mode' : 'light_mode'}
				</span>
			</button>
		);
	}
}

export default ToggleButton;
