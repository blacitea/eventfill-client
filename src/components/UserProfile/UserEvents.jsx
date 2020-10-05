import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const UserEvents = ({ events }) => {
	console.log(events);
	return (
		<article>
			<h3>My Events</h3>
			{events &&
				events.map(event => {
					console.log(event);
					return (
						<article className="profile-sub-item" key={event.id}>
							<Link to={`/events/${event.id}`}>
								<p className="profile-sub-item-title">Event: {event.name}</p>
							</Link>
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
