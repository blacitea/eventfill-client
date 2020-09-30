import React from 'react';
import HighlightsList from '../HighlightsList';
import { useParams } from 'react-router-dom';
import './Show.scss';

const Show = ({ events, talents, genres, locations }) => {
	let { resource, id } = useParams();
	// expect axios call here based on resource (event/talent) and id
	const renderObj =
		resource === 'events'
			? events.filter(event => event.id === Number(id))[0]
			: talents.filter(talent => talent.id === Number(id))[0];

	// destructuring the data from axios call
	const {
		name,
		description,
		image_url,
		genre,
		location,
		max_attendees,
		personal_link,
	} = renderObj;

	// can abstract to helper function??
	const summarySentence = `${
		genres.find(({ id }) => id === genre).name
	} ${resource} in ${locations.find(({ id }) => id === location).name}`;

	return (
		<main>
			<section className="show-display">
				<article className="show-info">
					<h1 className="show-info-title">{name}</h1>
					<h2>{summarySentence}</h2>
					<p>{description}</p>
					{resource === 'events' && (
						<>
							<h4 className="event-remaining-spots">
								Remaining spots: {max_attendees}/{max_attendees}
							</h4>
							<button
								onClick={() => alert('some logic to change remaining spots')}
							>
								Claim Ticket
							</button>
						</>
					)}
					{resource !== 'events' && (
						<a href={personal_link} rel="noopener noreferrer" target="_blank">
							<button>View porfolio</button>
						</a>
					)}
				</article>
				<article className="show-image">
					<img src={image_url} alt={name} />
				</article>
			</section>
			<HighlightsList
				//maybe helper function?
				array={resource === 'events' ? talents : events}
				resource={resource === 'events' ? 'talents' : 'events'}
				title={
					resource === 'events'
						? 'Talents showing at this event'
						: 'Attended events'
				}
			/>
		</main>
	);
};

export default Show;
