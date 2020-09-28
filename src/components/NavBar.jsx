import React, { useState } from 'react';
import './NavBar.scss';

const NavBar = props => {
	const [user, setUser] = useState(false);
	console.log(user);
	return (
		<nav>
			<section className="logo">EVENTFILL</section>
			<ul className="links">
				<li>Events</li>
				<li>Talents</li>
				<li>My Profile</li>
        <li>Log Out</li>
			</ul>
		</nav>
	);
};

export default NavBar;
