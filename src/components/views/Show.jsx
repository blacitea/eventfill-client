import React, { useState, useEffect } from 'react';
import HighlightsList from '../HighlightsList';
import InvitationForm from '../forms/InvitationForm';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import getByKey from '../../helpers/getByKey';
import { useCookies } from 'react-cookie';

import './Show.scss';

const Show = ({ genres, locations, openModal }) => {
	//Server check
	//Set up
	const { resource, id } = useParams();
	const [cookies] = useCookies();
	const owner = cookies.user_id;

	const [showObj, setShowObj] = useState({});
	const [attendeeCount, setAttendeeCount] = useState(0);
	const [highlights, setHighlights] = useState({
		array: [],
		resource: '',
		title: '',
	});
	const [invite, setInvite] = useState({ talent: {}, events: [] });

	useEffect(() => {
		// axios call to get relevant filtered data based on resource (event/talent) and id
		let axiosresource = resource === 'events' ? 'events' : 'talent_profiles';
		let axiosURL = `/api/${axiosresource}/${id}`;

		axios
			.get(axiosURL)
			.then(response => {
				let data = response.data;

				if (resource === 'events') {
					console.log('event', data);
					setShowObj(data.event);
					setHighlights({
						array: data.talents,
						resource: 'talents',
						title: 'Talents showing at this event',
					});
					setAttendeeCount(data.attendees);
				} else {
					console.log('talent', data);
					setShowObj(data.talent);
					setHighlights({
						array: data.events,
						resource: 'events',
						title: 'Attended events',
					});
					setAttendeeCount(data.attendees);
				}
				return data.talent;
			})
			.then(resolve => {
				if (resource === 'talents') {
					axios.get('/api/events').then(response => {
						setInvite({
							talent: resolve,
							events: response.data.upcoming.filter(
								event => event.user_id === parseInt(owner)
							),
						});
					});
				}
			});
	}, [resource, id]);

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
							<button onClick={() => openModal(<InvitationForm {...invite} />)}>
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
