import React from 'react';
import { useParams } from 'react-router-dom';
import EventForm from '../forms/EventForm';
import TalentForm from '../forms/TalentForm';

import "./Create.scss"

const EVENT_ASIDE = (
	<>
		<h1>Let's bring your event to a wider audience.</h1>
		<p>
			Just fill out the form and you'll be gathering attendees and talents in no
			time!
		</p>
	</>
);

const TALENT_ASIDE = (
	<>
		<h1>Let's put your skills on the map</h1>
		<p>Just fill out the form and event planners can start discovering you</p>
	</>
);


const Create = ({ locations, genres }) => {
	let { id } = useParams();
	return (
		<main className="create-panel">
			<aside className="create-aside">
				{id === 'event' && EVENT_ASIDE}
				{id === 'talent' && TALENT_ASIDE}
			</aside>
			<section className="create-form">
				{id === 'event' && <EventForm locations={locations} genres={genres} />}
				{id === 'talent' && (
					<TalentForm locations={locations} genres={genres} />
				)}
			</section>
		</main>
	);
};

export default Create;
