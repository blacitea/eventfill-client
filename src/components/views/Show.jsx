import React, { useState, useEffect } from 'react';
import HighlightsList from '../HighlightsList';
import InvitationForm from '../forms/InvitationForm';
import { useParams, Link } from 'react-router-dom';

import getByKey from '../../helpers/getByKey';

import './Show.scss';

const Show = ({ events, talents, genres, locations, openModal }) => {
	//Set up
	const { resource, id } = useParams();

	const [showObj, setShowObj] = useState({});
	const [attendeeCount, setAttendeeCount] = useState(0);
	const [highlights, setHighlights] = useState({
		array: [],
		resource: '',
		title: '',
	});

	useEffect(() => {
		// axios call to get relevant filtered data based on resource (event/talent) and id
		const mainObj = // returnFromAxios.event/talent
			resource === 'events'
				? events.filter(event => event.id === parseInt(id))[0]
				: talents.filter(talent => talent.id === parseInt(id))[0];

		const childObj = resource === 'events' ? talents : events; //returnFromAxios.event/talent

		const attendees = Math.floor(Math.random() * 10);

		const title =
			resource === 'events'
				? 'Talents showing at this event'
				: 'Attended events';
		const mode = resource === 'events' ? 'talents' : 'events';

		setShowObj(mainObj);
		setHighlights({ array: childObj, resource: mode, title: title });
		setAttendeeCount(attendees);
	}, [resource, id]);

	const inviteForm = resource === 'talents' && (
		<InvitationForm talent={showObj} events={events} />
	);
	// destructuring the data from axios call
	const {
		name,
		description,
		image_url,
		genre,
		location,
		max_attendees,
		personal_link,
	} = showObj;

	const genreName = getByKey(genres, genre).name;
	const locationName = getByKey(locations, location).name;

	return (
		<main>
			<section className="show-display">
				<article className="show-info">
					<h1 className="show-info-title">{name}</h1>
					<h2>{`${genreName} ${resource} in ${locationName}`}</h2>
					<p>{description}</p>
					{resource === 'events' && (
						<>
							<h4 className="event-remaining-spots">
								{max_attendees - attendeeCount === 0 && 'Sold Out'}
								{max_attendees > attendeeCount &&
									`Remaining spots: ${
										max_attendees - attendeeCount
									}/${max_attendees}`}
							</h4>
							<button
								disabled={attendeeCount === max_attendees}
								onClick={() => alert('some logic to change remaining spots')}
							>
								Claim Ticket
							</button>
							<Link to="/explore/events">
								<button>See More Events</button>
							</Link>
						</>
					)}
					{resource !== 'events' && (
						<>
							<a href={personal_link} rel="noopener noreferrer" target="_blank">
								<button>View Porfolio</button>
							</a>
							<button onClick={() => openModal(inviteForm)}>
								Invite Talent
							</button>
							<Link to="/explore/talents">
								<button>See More Talents</button>
							</Link>
						</>
					)}
				</article>
				<article className="show-image">
					<img src={image_url} alt={name} />
				</article>
			</section>
			<HighlightsList {...highlights} />
		</main>
	);
};

export default Show;
