import React from 'react';
import { Link } from 'react-router-dom';

const CreateDown = () => {
	return (
		<ul className="drop-down-create">
			<Link to="/create/event">
				<li>New Event</li>
			</Link>
			<Link to="/create/talent">
				<li>New Talent</li>
			</Link>
		</ul>
	);
};

export default CreateDown;
