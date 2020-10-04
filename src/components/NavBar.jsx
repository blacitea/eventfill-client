import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
import CreateDown from './CreateDown';
import LoginDown from './LoginDown';
const NavBar = ({ openModal }) => {
	const [openCreate, setopenCreate] = useState(false);
	const [openLogin, setopenLogin] = useState(false);

	const demoCalendar = <Calendar />;
	const closeDropDown = () => {
		if (openCreate) {
			setopenCreate(false);
		}
		if (openLogin) {
			setopenLogin(false);
		}
	};

	return (
		<>
			{openCreate && (
				<div className="drop-down__overlay" onClick={closeDropDown} />
			)}
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
							setopenCreate(!openCreate);
						}}
					>
						Create
					</li>
					{openCreate && <CreateDown />}
					<Link to="/messages">
						<li>My Messages</li>
					</Link>

					<li
						onClick={() => {
							setopenLogin(!openLogin);
						}}
					>
						Login
					</li>
					{openLogin && <LoginDown />}
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
