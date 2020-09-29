import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<nav>
			<section className="logo">EVENTFILL</section>
			<ul className="links">
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/events">
					<li>Events</li>
				</Link>
				<li>Talents</li>
				<li>My Profile</li>
				<li>Log Out</li>
			</ul>
		</nav>
	);
};

export default NavBar;
