import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = props => {
	return (
		<section className="footer">
			<ul className="footer-links">
        <Link to="/explore/events">
					<li>Events</li>
				</Link>
				<Link to="/explore/talents">
					<li>Talents</li>
				</Link>
        <Link to="/">
			    <li className="logo">EVENTFILL</li>
        </Link>
        <Link to="/">
				  <li>About</li>
        </Link>
        <Link to="/">
			    <li>Blog</li>
        </Link>
			</ul>
			<hr></hr>
			<ul className="footer-thumbnails">
        <a href="https://www.lighthouselabs.ca/">
				  <img src="http://github.com/lighthouse-labs.png" alt="Lighthouse Labs" />
        </a>
        <a href="http://github.com/blacitea">
			  	<img src="http://github.com/blacitea.png" alt="Angel Tsang" />
        </a>
        <a href="http://github.com/risatronic">
			  	<img src="http://github.com/risatronic.png" alt="Marisa Doig" />
        </a>
        <a href="http://github.com/quinnvoker">
	  			<img src="http://github.com/quinnvoker.png" alt="Quinn Branscombe" />
        </a>
        <a href="http://github.com/eventfillers">
				  <img src="http://github.com/eventfillers.png" alt="Eventfillers" />
        </a>
			</ul>
		</section>
	);
};

export default Footer;
