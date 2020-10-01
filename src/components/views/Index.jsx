import React from 'react';
import PreviewsList from '../PreviewsList';
import HighlightsList from '../HighlightsList';
import { Link } from 'react-router-dom';

import './Index.scss';

const Index = props => {
	return (
		<main className="home">
			<section className="index-focus">
				<article>
					<h1>Your Event Starts Here</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						faucibus mi et lobortis euismod. Vivamus pellentesque gravida urna,
						non semper nisi pellentesque in. Nam quis dictum ex. Proin placerat,
						sapien at consequat scelerisque, nulla turpis sagittis leo, ac
						iaculis elit urna vitae lorem.
					</p>
					<Link to="/create/event">
						<button>Start an event!</button>
					</Link>
				</article>
				<aside>
					<img
						src="http://www.manaleak.com/mtguk/files/2016/11/Stoneforge-Mystic-1.jpg"
						alt="main poster"
					/>
				</aside>
			</section>
			<h2>Upcoming Events Near You</h2>
			<h4>Check out these events and plan your attendance!</h4>
			<PreviewsList
				array={props.events}
				onClick={props.onClick}
				resource="events"
			/>
			<HighlightsList
				array={props.talents.concat(props.talents)}
				onClick={props.onClick}
        resource="talents"
        title="Our hottest Talent profiles!"
			/>
		</main>
	);
};

export default Index;
