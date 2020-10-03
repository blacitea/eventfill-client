import React, { useState, useEffect } from 'react';
import HighlightsList from '../HighlightsList';
import InvitationForm from '../forms/InvitationForm';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import getByKey from '../../helpers/getByKey';
import { useCookies } from 'react-cookie';

import './Show.scss';
import PendingInvite from '../PendingInvite';

const Show = ({ genres, locations, openModal }) => {
	//Server check
	//Set up
	const history = useHistory();
	const { resource, id } = useParams();
	const [cookies] = useCookies();
	const user = parseInt(cookies.user_id);
	const [owned, setOwned] = useState(false);
	const [pendingGig, setPendingGig] = useState({});

	const [showObj, setShowObj] = useState({});
	const [attendeeCount, setAttendeeCount] = useState(0);
	const [highlights, setHighlights] = useState({
		array: [],
		resource: '',
		title: '',
	});
	const [invite, setInvite] = useState({ talent: {}, events: [] });
	const [summary, setSummary] = useState('');

	useEffect(() => {
		// axios call to get relevant filtered data based on resource (event/talent) and id
		let axiosresource = resource === 'events' ? 'events' : 'talent_profiles';
		let axiosURL = `/api/${axiosresource}/${id}`;

		if (resource === 'events') {
			axios.get(`/api/users/${user}`).then(resolve => {
				console.log('gigs from axios:', resolve.data.gigs);
				console.log(resolve.data.gigs !== undefined);
				if (resolve.data.gigs !== undefined) {
					console.log('going to set pending gig now');
					const gigsList = resolve.data.gigs;
					const [key, value] = Object.entries(gigsList)[0];

					const gig = value.find(({ event_id }) => {
						return resource === 'events' && event_id === parseInt(id);
					});
					gig && setPendingGig(gig);
				}
			});
		}
		axios
			.get(axiosURL)
			.then(response => {
				let data = response.data;

				if (resource === 'events') {
					data.event.user_id === user ? setOwned(true) : setOwned(false);
					setShowObj(data.event);
					setHighlights({
						array: data.talents,
						resource: 'talents',
						title: 'Talents showing at this event',
					});
					setAttendeeCount(data.attendees);
					const genreName = getByKey(genres, data.event.genre_id).name || '';
					const locationName =
						getByKey(locations, data.event.location_id).name || '';
					setSummary(`${genreName} ${resource} in ${locationName}`);
				} else {
					data.talent.user_id === user ? setOwned(true) : setOwned(false);
					setShowObj(data.talent);
					setHighlights({
						array: data.events,
						resource: 'events',
						title: 'Attended events',
					});
					const genreName = getByKey(genres, data.talent.genre_id).name || '';
					const locationName =
						getByKey(locations, data.talent.location_id).name || '';
					setSummary(`${genreName} ${resource} in ${locationName}`);
				}
				return data.talent;
			})
			.then(resolve => {
				if (resource === 'talents') {
					axios.get('/api/events').then(response => {
						setInvite({
							talent: resolve,
							events: response.data.upcoming.filter(
								event => event.user_id === parseInt(user)
							),
						});
					});
				}
			});
	}, [resource, id, locations, genres]);

	// destructuring the data from axios call
	const {
		name,
		description,
		start,
		end,
		image_url,
		max_attendees,
		personal_link,
	} = showObj;

	return (
		<main>
			<section className="show-display">
				<article className="show-info">
					<h1 className="show-info-title">{name}</h1>
					<h2>{summary}</h2>
					{start && end && (
						<section className="show-info-dates">
							{start.slice(0, 10) !== end.slice(0, 10) &&
								moment(start).format('MMMM Do').concat(' - ')}
							{moment(end).format('MMMM Do, YYYY')}
						</section>
					)}
					<p>{description}</p>

					{/** Logic to display different button depends on resource */}

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
							{console.log(pendingGig)}
							{pendingGig.event_id && <PendingInvite pendingGig={pendingGig} />}
						</>
					)}
					{resource === 'talents' && (
						<section className="show-info-actions">
							<a href={personal_link} rel="noopener noreferrer" target="_blank">
								<button>View Portfolio</button>
							</a>
							<button onClick={() => openModal(<InvitationForm {...invite} />)}>
								Invite To Event
							</button>
						</section>
					)}
				</article>

				<article className="show-image">
					<img src={image_url} alt={name} />
				</article>
			</section>

			{/**Show list of connected talents / events if found */}
			{highlights.array.length > 0 && <HighlightsList {...highlights} />}

			{/* Prompt to invite talent/ promote to event if user = resource owner */}
			{resource === 'events' && owned && (
				<button
					onClick={() => {
						history.push('/explore/talents');
					}}
				>
					Invite talents to your event!
				</button>
			)}
			{resource !== 'events' && owned && (
				<button
					onClick={() => {
						history.push('/explore/events');
					}}
				>
					Find an event to showcase your talent!
				</button>
			)}
		</main>
	);
};

export default Show;
