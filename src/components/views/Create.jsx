import React from 'react';
import { useParams } from 'react-router-dom';
import EventForm from '../forms/EventForm';
import TalentForm from '../forms/TalentForm';

const Create = ({ locations, categories }) => {
	let { id } = useParams();
	return (
		<main>
			<aside className="create-aside">
				<h1></h1>
				<p></p>
				{id === 'event' && (
					<>
						<h1>Let's bring your event to a wider audience</h1>
						<p>
							Just fill out the form and you'll be gathering attendees and
							talents in no time!
						</p>
					</>
				)}
				{id === 'talent' && (
					<>
						<h1>Let's put your skills on the map</h1>
						<p>
							Just fill out the form and event planners can start discovering
							you
						</p>
					</>
				)}
			</aside>
			<section className="create-form">
				{id === 'event' && (
					<EventForm locations={locations} categories={categories} />
				)}
				{id === 'talent' && (
					<TalentForm locations={locations} categories={categories} />
				)}
			</section>
		</main>
	);
};

export default Create;
