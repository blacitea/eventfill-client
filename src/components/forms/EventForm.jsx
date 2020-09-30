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
	if (!values.category) {
		errors.category = 'Please give us a category to promote your event.';
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
			category: '',
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
				name="eventName"
				value={formik.values.eventName}
				onChange={formik.handleChange}
			/>
			{formik.errors.eventName ? <div>{formik.errors.eventName}</div> : null}

			<label htmlFor="location">Location</label>
			<select
				id="location"
				name="location"
				value={formik.values.location}
				onChange={formik.handleChange}
			>
				<option value="" disabled selected>
					Select a city
				</option>
				{props.locations
					? props.locations.map(location => (
							<option key={location.id} value={location.id}>
								{location.name}
							</option>
					  ))
					: null}
			</select>
			{formik.errors.location ? <div>{formik.errors.location}</div> : null}

			<label htmlFor="category">Category</label>
			<select
				id="category"
				name="category"
				value={formik.values.category}
				onChange={formik.handleChange}
			>
				<option value="" disabled selected>
					Select a genre
				</option>
				{props.genres
					? props.genres.map(category => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
					  ))
					: null}
			</select>
			{formik.errors.category ? <div>{formik.errors.category}</div> : null}

			<label htmlFor="start">Start Date</label>
			<input
				type="date"
				id="start"
				name="start"
				value={formik.values.start}
				onChange={formik.handleChange}
			/>
			{formik.errors.start ? <div>{formik.errors.start}</div> : null}

			<label htmlFor="end">End Date</label>
			<input
				type="date"
				id="end"
				name="end"
				value={formik.values.start}
				onChange={formik.handleChange}
			/>
			{formik.errors.end ? <div>{formik.errors.end}</div> : null}

			<label htmlFor="image_url">Cover Image</label>
			<input
				id="image_url"
				name="image_url"
				value={formik.values.image_url}
				onChange={formik.handleChange}
			/>
			{formik.errors.image_url ? <div>{formik.errors.image_url}</div> : null}

			<label htmlFor="description">Description</label>
			<textarea
				id="description"
				name="description"
				value={formik.values.description}
				onChange={formik.handleChange}
				placeholder="Tell people about your event!"
			/>
			{formik.errors.description ? (
				<div>{formik.errors.description}</div>
			) : null}
			<button type="submit">Submit Event</button>
		</form>
	);
};

export default EventForm;
