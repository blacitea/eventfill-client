import React from 'react';
import PreviewsList from '../PreviewsList';
import { useParams } from 'react-router-dom';

const ExploreEvents = props => {
	let { id } = useParams();
	const Clicked = () => alert('This card has been clicked!');
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
				<PreviewsList array={props.events} onClick={Clicked} />
			)}
			{id === 'talents' && (
				<PreviewsList array={props.talents} onClick={Clicked} />
			)}
		</main>
	);
};

export default ExploreEvents;
