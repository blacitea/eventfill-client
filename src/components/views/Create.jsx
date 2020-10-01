import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useParams } from 'react-router-dom';
import EventForm from '../forms/EventForm';
import TalentForm from '../forms/TalentForm';
import { EVENTASIDE, TALENTASIDE } from '../../CONST';

const Create = ({ locations, genres, cookies }) => {
	let { id } = useParams();
	// const { cookies, userId } = useContext(UserContext);
	return (
		<main>
			<h3>You are logged in as from cookie {cookies.user_id}</h3>
			<br />
			{/* <h3>You are logged in as from useState {cookies.user_id}</h3> */}
			<aside className="create-aside">
				{id === 'event' && EVENTASIDE}
				{id === 'talent' && TALENTASIDE}
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
