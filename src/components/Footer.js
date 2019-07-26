import React, { Component } from 'react';
import './Footer.css';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
import vimeo from '../assets/vimeo.svg';


class Footer extends Component {
  render() {
		return (
			<footer className="Main">
				<div className="Icons">
					<img src={Facebook} alt="facebook" />
					<img src={Instagram} alt="instagram" />
					<img src={Twitter} alt="twitter" />
					<img src={youtube} alt="youtube" />
					<img src={vimeo} alt="vimeo" />
				</div>
			</footer>
		);
	}
}

export default Footer;