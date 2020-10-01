import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = props => {
	const [open, setOpen] = useState(false);
	console.log(props.cookies.user_id);

	const Dropdown = props => {
		return (
			<ul className="drop-down">
				<Link to="/create/event">
					<li>New Event</li>
				</Link>
				<Link to="/create/talent">
					<li>New Talent Profile</li>
				</Link>
			</ul>
		);
	};
	return (
		<nav>
			<Link className="router-link" to="/">
				<section className="logo">EVENTFILL</section>
			</Link>
			<ul className="links">
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/explore/events">
					<li>Events</li>
				</Link>
				<Link to="/explore/talents">
					<li>Talents</li>
				</Link>
				<li
					onClick={() => {
						setOpen(!open);
					}}
				>
					Create
				</li>
				{open && <Dropdown />}
				<Link to="/messages">
					<li>My Messages</li>
				</Link>
			</ul>
		</nav>
	);
};

export default NavBar;
