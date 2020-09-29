import React from 'react';
import PreviewsList from '../PreviewsList';

const ExploreEvents = props => {
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
			<PreviewsList array={props.events} onClick={props.onClick} />
		</main>
	);
};

export default ExploreEvents;
