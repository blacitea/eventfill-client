import React from 'react';
import moment from 'moment';

const UserEvents = ({ events }) => {
	console.log(events);
	return (
		<article>
			<h3>My Events</h3>
			{events &&
				events.map(event => {
					console.log(event);
					return (
						<article key={event.id}>
							<p>Event: {event.name}</p>
							<p>
								Period: {moment(event.start).format('LL')} to{' '}
								{moment(event.end).format('LL')}
							</p>
							<p>Description: {event.description}</p>
						</article>
					);
				})}
		</article>
	);
};

export default UserEvents;
