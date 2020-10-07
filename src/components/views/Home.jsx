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
			setEvents(resolve[0].data.slice(0,4));
			setTalents(resolve[1].data.slice(0,5));
		});
		document.title = 'EVENTFILL';
	}, []);
	return (
		<main className="home">
			<section className="splash">
				<article className="splash-description">
					<h1>{'Your Event\nStarts Here'}</h1>
					<p>
						Here at Eventfill, we make it easy for event organisers to find suitable talents to bring to their event. We also give talents a place to market their skills and advertise that they are available for attending events. If you're just interested in finding an event to attend, our event browser has you covered too! Join us today and help bring your community together.
					</p>
					<Link to="/create/event">
						<button>Create an event!</button>
					</Link>
				</article>
				<aside className="splash-image">
					<img
						src="/images/home.jpg"
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
