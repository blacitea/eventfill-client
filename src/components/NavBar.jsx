import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<nav>
			<Link className="router-link" to="/">
				<section className="logo">EVENTFILL</section>
			</Link>
			<ul className="links">
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/events">
					<li>Events</li>
				</Link>
				<Link to="/talents">
					<li>Talents</li>
				</Link>
				<Link to="/profile">
					<li>My Profile</li>
				</Link>
				<Link to="/">
					<li>Log Out</li>
				</Link>
			</ul>
		</nav>
	);
};

export default NavBar;
