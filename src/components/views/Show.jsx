import React, { useState, useEffect } from 'react';
import HighlightsList from '../HighlightsList';
import InvitationForm from '../forms/InvitationForm';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { useCookies } from 'react-cookie';
import EventForm from '../forms/EventForm';
import TalentForm from '../forms/TalentForm';

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
	const [attending, setAttending] = useState(false);

	const updateHighlight = () => {
		let axiosresource = resource === 'events' ? 'events' : 'talent_profiles';
		axios.get(`/api/${axiosresource}/${id}`).then(resolve => {
			setHighlights({
				...highlights,
				array: resolve.data.talents,
			});
		});
	};

	const claimTicket = () => {
		if (attending) {
			axios
				.delete(`/api/users/${user}/registrations/${attending}`)
				.then(resolve => {
					// console.log(resolve);
					setAttending(false);
					setAttendeeCount(prev => prev - 1);
					alert('Your reservation is cancelled!');
				});
		} else {
			axios
				.post(`/api/events/${id}/registrations`)
				.then(resolve => {
					// console.log(resolve);
					setAttending(resolve.data.id);
					setAttendeeCount(prev => prev + 1);
					alert('Your ticket is secured!');
				})
				.catch(error => console.log(error));
		}
	};

	useEffect(() => {
		// axios call to get relevant filtered data based on resource (event/talent) and id
		let axiosresource = resource === 'events' ? 'events' : 'talent_profiles';
		let axiosURL = `/api/${axiosresource}/${id}`;

		if (resource === 'events') {
			axios.get(`/api/users/${user}`).then(resolve => {
				if (Object.keys(resolve.data.gigs).length !== 0) {
					// console.log('going to set pending gig now');
					const gigsList = resolve.data.gigs;
					const [key, value] = Object.entries(gigsList)[0];

					const gig = value.find(({ event_id }) => {
						return resource === 'events' && event_id === parseInt(id);
					});
					gig && setPendingGig(gig);
				}
				// console.log('It got here - print user profile');
				// console.log(resolve.data.attending);
				const attend = resolve.data.attending.find(
					({ event_id }) => event_id === parseInt(id)
				);
				// console.log('any result from find?', attend);
				// console.log('It reaches here - checking registration id');
				if (attend) {
					// console.log(attend.id);
					setAttending(attend.id);
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
				} else {
					data.talent.user_id === user ? setOwned(true) : setOwned(false);
					setShowObj(data.talent);
					setHighlights({
						array: data.events,
						resource: 'events',
						title: 'Attended events',
					});
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
		location_id,
		genre_id,
	} = showObj;

	const location = locations.find(({ id }) => id === parseInt(location_id));
	const genre = genres.find(({ id }) => id === parseInt(genre_id));

	const locationName = location ? location.name : '';
	const genreName = genre ? genre.name : '';
	const summary = `${genreName} ${resource} in ${locationName}`;

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
							{!owned && (
								<button
									disabled={attendeeCount === max_attendees}
									onClick={claimTicket}
								>
									{attending ? 'Cancel Ticket' : 'Claim Ticket'}
								</button>
							)}
							{/* {console.log('pending gig', pendingGig)} */}
							{pendingGig.event_id && (
								<PendingInvite
									pendingGig={pendingGig}
									updateHighlight={updateHighlight}
								/>
							)}
						</>
					)}
					{resource === 'talents' && (
						<section className="show-info-actions">
							<a href={personal_link} rel="noopener noreferrer" target="_blank">
								<button>View Portfolio</button>
							</a>{' '}
							{!owned && (
								<button
									onClick={() => openModal(<InvitationForm {...invite} />)}
								>
									Invite To Event
								</button>
							)}
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
				<>
					<button
						onClick={() => {
							history.push('/explore/talents');
						}}
					>
						Invite talents to your event!
					</button>
					<button
						onClick={() =>
							openModal(
								<>
									<h1 className="modal-title">Edit your event</h1>
									<EventForm
										populate={showObj}
										locations={locations}
										genres={genres}
										setShowObj={setShowObj}
									/>
								</>
							)
						}
					>
						Edit Event
					</button>
				</>
			)}
			{resource !== 'events' && owned && (
				<>
					<button
						onClick={() => {
							history.push('/explore/events');
						}}
					>
						Find an event to showcase your talent!
					</button>
					<button
						onClick={() =>
							openModal(
								<>
									<h1 className="modal-title">Edit your talent profile</h1>
									<TalentForm
										populate={showObj}
										locations={locations}
										genres={genres}
										setShowObj={setShowObj}
									/>
								</>
							)
						}
					>
						Edit Talent Profile
					</button>
				</>
			)}
		</main>
	);
};

export default Show;
