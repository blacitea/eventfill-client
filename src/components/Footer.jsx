import React from 'react';
import './Footer.scss';

const Footer = props => {
	return (
		<section className="footer">
			<ul className="footer-links">
				<li>Events</li>
				<li>Talents</li>
				<li>EVENTFILL</li>
				<li>About</li>
				<li>Blog</li>
			</ul>
			<hr></hr>
			<ul className="footer-thumbnails">
				<img src="/temp1.png" alt="Events" />
				<img src="/temp2.png" alt="Talents" />
				<img src="/temp3.png" alt="EVENTFILL" />
				<img src="/temp4.png" alt="About" />
				<img src="/temp5.png" alt="Blog" />
			</ul>
		</section>
	);
};

export default Footer;
