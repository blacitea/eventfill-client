import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
	const errors = {};
	if (!values.eventName) {
		errors.eventName = 'Please give us a name to promote your event.';
	}
	if (!values.location) {
		errors.location = 'Where are you hosting this event?';
	}
	if (!values.genre) {
		errors.genre = 'Please give us a genre to promote your event.';
	}
	if (!values.start) {
		errors.start = 'When will the event start?';
	}
	if (!values.end) {
		errors.end = 'When will the event end?';
	}
	if (!values.image_url) {
		errors.image_url = 'Pick a photo to show off your event!';
	}
	if (!values.description) {
		errors.description = 'Description for your event is required.';
	}
	return errors;
};

const EventForm = props => {
	const formik = useFormik({
		initialValues: {
			eventName: '',
			location: '',
			genre: '',
			start: '',
			end: '',
			image_url: '',
			description: '',
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
			formik.resetForm();
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="eventName">Event Name</label>
			<input
				type="text"
				id="eventName"
				{...formik.getFieldProps('eventName')}
			/>
			{formik.errors.eventName && (
				<div className="form-error">{formik.errors.eventName}</div>
			)}

			<label htmlFor="location">Location</label>
			<select id="location" {...formik.getFieldProps('location')}>
				<option value="" disabled selected>
					Select a city
				</option>
				{props.locations.map(location => (
					<option key={location.id} value={location.id}>
						{location.name}
					</option>
				))}
			</select>
			{formik.errors.location && (
				<div className="form-error">{formik.errors.location}</div>
			)}

			<label htmlFor="genre">genre</label>
			<select id="genre" {...formik.getFieldProps('genre')}>
				<option value="" disabled selected>
					Select a genre
				</option>
				{props.genres.map(genre => (
					<option key={genre.id} value={genre.id}>
						{genre.name}
					</option>
				))}
			</select>
			{formik.errors.genre && (
				<div className="form-error">{formik.errors.genre}</div>
			)}

			<label htmlFor="start">Start Date</label>
			<input type="date" id="start" {...formik.getFieldProps('start')} />
			{formik.errors.start && (
				<div className="form-error">{formik.errors.start}</div>
			)}

			<label htmlFor="end">End Date</label>
			<input type="date" id="end" {...formik.getFieldProps('end')} />
			{formik.errors.end && (
				<div className="form-error">{formik.errors.end}</div>
			)}

			<label htmlFor="image_url">Cover Image</label>
			<input id="image_url" {...formik.getFieldProps('image_url')} />
			{formik.errors.image_url && (
				<div className="form-error">{formik.errors.image_url}</div>
			)}

			<label htmlFor="description">Description</label>
			<textarea
				id="description"
				{...formik.getFieldProps('description')}
				placeholder="Tell people about your event!"
			/>
			{formik.errors.description && (
				<div className="form-error">{formik.errors.description}</div>
			)}
			<button type="submit">Submit Event</button>
		</form>
	);
};

export default EventForm;
