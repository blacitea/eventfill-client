import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = props => {
  const [open, setOpen] = useState(false);

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
  
  const closeDropDown = () => {
    if (open) {
      setOpen(false);
    }
  }
  
	return (
    <>
      {open && <div className="drop-down__overlay" onClick={closeDropDown} />}
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
