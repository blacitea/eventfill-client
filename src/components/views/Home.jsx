import React, { useState, useEffect } from 'react';
import PreviewsList from '../PreviewsList';
import HighlightsList from '../HighlightsList';
import { Link } from 'react-router-dom';

import './Home.scss';
import axios from 'axios';

const Home = () => {
	const [events, setEvents] = useState([]);
	const [talents, setTalents] = useState([]);

	useEffect(() => {
		Promise.all([
			axios.get('/api/events'),
			axios.get('/api/talent_profiles'),
		]).then(resolve => {
			setEvents(resolve[0].data.upcoming);
			setTalents(resolve[1].data);
		});
	}, []);
	return (
		<main className="home">
			<section className="splash">
				<article className="splash-description">
					<h1>{'Your Event\nStarts Here'}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						faucibus mi et lobortis euismod. Vivamus pellentesque gravida urna,
						non semper nisi pellentesque in. Nam quis dictum ex. Proin placerat,
						sapien at consequat scelerisque, nulla turpis sagittis leo, ac
						iaculis elit urna vitae lorem.
					</p>
					<Link to="/create/event">
						<button>Create an event!</button>
					</Link>
				</article>
				<aside className="splash-image">
					<img
						src="http://www.manaleak.com/mtguk/files/2016/11/Stoneforge-Mystic-1.jpg"
						alt="main poster"
					/>
				</aside>
			</section>
			<h2 className="upcoming-events-title">Upcoming Events Near You</h2>
			<h4>Check out these events and plan your attendance!</h4>
			<PreviewsList array={events} resource="events" />
			<HighlightsList
				array={talents}
				resource="talents"
				title="Our hottest Talent profiles!"
			/>
		</main>
	);
};

export default Home;
