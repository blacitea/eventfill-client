import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
	const errors = {};
	for (let value in values) {
		value ? (errors.value = null) : (errors.value = 'required');
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
					? props.locations.map((location, index) => (
							<option key={index} value={location}>
								{location}
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
				{props.categories
					? props.categories.map((category, index) => (
							<option key={index} value={category}>
								{category}
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
