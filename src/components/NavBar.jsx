import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';

const NavBar = ({ openModal }) => {
	const [open, setOpen] = useState(false);

	const Dropdown = () => {
		return (
			<ul className="drop-down">
				<Link to="/create/event">
					<li>New Event</li>
				</Link>
				<Link to="/create/talent">
					<li>New Talent</li>
				</Link>
			</ul>
		);
	};
	const demoCalendar = <Calendar />;
	const closeDropDown = () => {
		if (open) {
			setOpen(false);
		}
	};

	return (
		<>
			{open && <div className="drop-down__overlay" onClick={closeDropDown} />}
			<nav onClick={closeDropDown}>
				<Link className="router-link" to="/">
					<section className="logo">EVENTFILL</section>
				</Link>
				<button onClick={() => openModal(demoCalendar)}>Calendar Modal</button>
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
						className="nav-create"
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
		</>
	);
};

export default NavBar;
