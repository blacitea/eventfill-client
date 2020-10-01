import React, { useState, useEffect } from 'react';
import HighlightsList from '../HighlightsList';
import InvitationForm from '../forms/InvitationForm';
import { useParams, Link } from 'react-router-dom';
import './Show.scss';

const Show = ({ events, talents, genres, locations, openModal }) => {
	//Set up
	const { resource, id } = useParams();
	console.log(resource, id);

	const [showObj, setShowObj] = useState({});
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
		console.log(mainObj);
		const childObj = resource === 'events' ? talents : events; //returnFromAxios.event/talent
		console.log(childObj);

		const title =
			resource === 'events'
				? 'Talents showing at this event'
				: 'Attended events';
		const mode = resource === 'events' ? 'talents' : 'events';

		setShowObj(mainObj);
		setHighlights({ array: childObj, resource: mode, title: title });
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

	const genreName = genre && genres.find(({ id }) => id === genre).name;
	const locationName =
		location && locations.find(({ id }) => id === location).name;

	// can abstract to helper function??
	console.log(resource);
	const summarySentence = `${genreName} ${resource} in ${locationName}`;

	return (
		<main>
			<section className="show-display">
				<article className="show-info">
					<h1 className="show-info-title">{name}</h1>
					<h2>{summarySentence}</h2>
					<p>{description}</p>
					{resource === 'events' && (
						<>
							Is this working? Event
							<h4 className="event-remaining-spots">
								Remaining spots: {max_attendees}/{max_attendees}
							</h4>
							<button
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
							Is this working? Talent
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
