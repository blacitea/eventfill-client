import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
import { useCookies } from 'react-cookie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const AccountDropdown = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user_id']);
  
  return (
    <ul className="dropdown dropdown__login">
      {Object.keys(cookies).length === 0 &&
        <>
          <li onClick={() => setCookie('user_id', 1, { path: '/' })}>User 1</li>
          <li onClick={() => setCookie('user_id', 2, { path: '/' })}>User 2</li>
          <li onClick={() => setCookie('user_id', 3, { path: '/' })}>User 3</li>
          <li onClick={() => setCookie('user_id', 4, { path: '/' })}>User 4</li>
          <li onClick={() => setCookie('user_id', 5, { path: '/' })}>User 5</li>
        </>
      }
      {Object.keys(cookies).length !== 0 &&
        <>
          <Link to="/messages">
            Messages
          </Link>
          <Link to="/profile">
            Profile
          </Link>
        
          <li onClick={() => removeCookie('user_id')}>Logout</li>
        </>
      }
    </ul>
  );
};

const CreateDropdown = () => {
	return (
		<ul className="dropdown dropdown__create">
			<Link to="/create/event">
				New Event
			</Link>
			<Link to="/create/talent">
				New Talent
			</Link>
		</ul>
	);
};

const NavBar = ({ openModal }) => {
	const [openCreate, setopenCreate] = useState(false);
	const [openLogin, setopenLogin] = useState(false);

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
			{(openCreate || openLogin) && (
				<div className="drop-down__overlay" onClick={closeDropDown} />
			)}
			<nav onClick={closeDropDown}>
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
            className="nav-action" 
            onClick={() => openModal(<Calendar />)}
          >
            Calendar
          </li>
					<li
						className="nav-action"
						onClick={() => {
							setopenCreate(!openCreate);
						}}
					>
						Create
            <FontAwesomeIcon className="nav-action__icon" icon={faChevronDown} />
					</li>
					{openCreate && <CreateDropdown />}

					<li
            className="nav-action"
						onClick={() => {
							setopenLogin(!openLogin);
						}}
					>
						My Account
            <FontAwesomeIcon className="nav-action__icon" icon={faChevronDown} />
					</li>
					{openLogin && <AccountDropdown />}
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
