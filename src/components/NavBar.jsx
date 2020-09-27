import React, { useState } from 'react';
import './NavBar.scss';

const NavBar = props => {
	const [user, setUser] = useState(false);
	console.log(user);
	return (
		<nav>
			<img
				className="logo"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJc8NQqwyAyK6DMH27BiqdxvVIjmue3XoHyQ&usqp=CAU"
				alt="Logo"
			></img>
			<ul className="links">
				<li>Events</li>
				<li>Talents</li>
				<li>My Profile</li>
			</ul>
			<section className="user-login">
				{user !== false && (
					<button onClick={() => setUser(false)}>Logout</button>
				)}
				{user === false && (
					<ul>
						<button onClick={() => setUser('organizer')}>
							Login_organizer
						</button>
						<button onClick={() => setUser('talent')}>Login_talent</button>
						<button onClick={() => setUser('organizer')}>
							Login_event_goer
						</button>
					</ul>
				)}
			</section>
		</nav>
	);
};

export default NavBar;
