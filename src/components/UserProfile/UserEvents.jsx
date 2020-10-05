import React from 'react';

const UserEvents = ({ events }) => {
	console.log(events);
	return (
		<article>
			<h3>My Events</h3>
			{events &&
				events.map(event => {
					console.log(event);
					return <article key={event.id}>{event.name}</article>;
				})}
		</article>
	);
};

export default UserEvents;
