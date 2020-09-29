import React from 'react';
import PreviewsList from '../PreviewsList';
import HighligthsList from '../HighlightsList';

const Index = props => {
	return (
		<main>
			<section className="index-focus"></section>
			<PreviewsList
				title="Upcoming Events Near You"
				message="Check out these events and plan your attendance!"
				array={props.events}
				onClick={props.onClick}
			/>
			<HighligthsList
				title="Our hottest Talent profiles!"
				array={props.talents}
			/>
		</main>
	);
};
