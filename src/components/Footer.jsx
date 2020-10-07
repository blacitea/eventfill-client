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
				  <img src="/images/avatars/lhl.png" alt="Lighthouse Labs" />
        </a>
        <a href="http://github.com/blacitea">
			  	<img src="/images/avatars/angel.jpeg" alt="Angel Tsang" />
        </a>
        <a href="http://github.com/risatronic">
			  	<img src="/images/avatars/marisa.jpeg" alt="Marisa Doig" />
        </a>
        <a href="http://github.com/quinnvoker">
	  			<img src="/images/avatars/quinn.png" alt="Quinn Branscombe" />
        </a>
        <a href="http://github.com/eventfillers">
				  <img src="/images/avatars/eventfill.png" alt="Eventfillers" />
        </a>
			</ul>
		</section>
	);
};

export default Footer;
