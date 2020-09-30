import React from 'react';
import HighlightsList from '../HighlightsList';
import { useParams } from 'react-router-dom';
import { events, talents } from '../mockData';

const Show = () => {
	let { resource, id } = useParams();
	// expect axios call here based on resource (event/talent) and id
	const renderObj = resource === 'events' ? events[id] : talents[id];
	const { name, description, image_url, genre, location } = renderObj;
	return (
		<main>
			<section>
				<article>
					<h1>{name}</h1>
					<h2>
						{genre.name} {resource} in {location.name}
					</h2>
					<p>{description}</p>
					<button onClick={() => alert('some logic to change remaining spots')}>
						Claim Ticket
					</button>
				</article>
				<article>
					<img src={image_url} alt={name} />
				</article>
			</section>
			<HighlightsList />
		</main>
	);
};

export default Show;
