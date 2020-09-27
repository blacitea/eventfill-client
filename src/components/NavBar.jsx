import React, { useState } from 'react';
import './NavBar.scss';

const NavBar = props => {
	const [user, setUser] = useState(false);
	console.log(user);
	return (
		<nav>
			<section className="logo">
				<img
					className="logo-image"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJc8NQqwyAyK6DMH27BiqdxvVIjmue3XoHyQ&usqp=CAU"
					alt="Logo"
				></img>
			</section>
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
						<button onClick={() => setUser('organizer')}>organizer</button>
						<button onClick={() => setUser('talent')}>talent</button>
						<button onClick={() => setUser('organizer')}>event goer</button>
					</ul>
				)}
			</section>
		</nav>
	);
};

export default NavBar;
