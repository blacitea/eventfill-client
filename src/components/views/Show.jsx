import React from 'react';
import HighlightsList from '../HighlightsList';
import { useParams } from 'react-router-dom';

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
	} = renderObj;

	// can abstract to helper function??
	const summarySentence = `${
		genres.find(({ id }) => id === genre).name
	} ${resource} in ${locations.find(({ id }) => id === location).name}`;

	return (
		<main>
			<section>
				<article>
					<h1>{name}</h1>
					<h2>{summarySentence}</h2>
					<h4>
						Remaining spots: {max_attendees}/{max_attendees}
					</h4>
					<p>{description}</p>
					<button onClick={() => alert('some logic to change remaining spots')}>
						Claim Ticket
					</button>
				</article>
				<article>
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
