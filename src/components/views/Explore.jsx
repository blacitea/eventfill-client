import React from 'react';
import PreviewsList from '../PreviewsList';
import { useParams } from 'react-router-dom';

const ExploreEvents = props => {
	let { id } = useParams();
	return (
		<main>
			<header>
				<h1 className="title">Explore Events</h1>
				<section className="nav">
					<button>Location</button>
					<button>Type</button>
				</section>
			</header>
			<hr />
			{id === 'events' && (
				<PreviewsList array={props.events} resource="events" />
			)}
			{id === 'talents' && (
				<PreviewsList array={props.talents} resource="talents" />
			)}
		</main>
	);
};

export default ExploreEvents;
