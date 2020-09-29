import React, { useState } from 'react';
import SelectField from './SelectField';
import './EventForm.scss';

const EventForm = props => {
	const [desc, setDesc] = useState('');
	const [imageurl, setImageURL] = useState('');
	return (
		<form className="event-form">
			<label>Event Name</label>
			<label>Location</label>
			<label>Category</label>
			<label>Start Date</label>
			<label>End Date</label>
			<label>Cover Image URL</label>
			<input
				type="text"
				value={imageurl}
				onChange={event => setImageURL(event.target.value)}
			></input>
			<label>Description</label>
			<textarea
				placeholder="Tell us more about your awesome event!"
				value={desc}
				onChange={event => setDesc(event.target.value)}
			/>
		</form>
	);
};

export default EventForm;
