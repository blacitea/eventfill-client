import React from 'react';
import { useFormik } from 'formik';

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
		onSubmit: values => alert(JSON.stringify(values, null, 2)),
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
				{props.locations.map(location => (
					<option value={location.id}>{location.name}</option>
				))}
			</select>
			<select
				id="category"
				name="category"
				value={formik.values.category}
				onChange={formik.handleChange}
			>
				<option value="" disabled selected>
					Select a genre
				</option>
				{props.categories.map(category => (
					<option value={category.id}>{category.name}</option>
				))}
			</select>
			<label htmlFor="start">Start Date</label>
			<input
				type="date"
				id="start"
				name="start"
				value={formik.values.start}
				onChange={formik.handleChange}
			/>
			<label htmlFor="end">End Date</label>
			<input
				type="date"
				id="end"
				name="end"
				value={formik.values.start}
				onChange={formik.handleChange}
			/>
			<label htmlFor="image_url">Cover Image</label>
			<input
				id="image_url"
				name="image_url"
				value={formik.values.image_url}
				onChange={formik.handleChange}
			/>
			<label htmlFor="description">Description</label>
			<textarea
				id="description"
				name="description"
				value={formik.values.description}
				onChange={formik.handleChange}
				placeholder="Tell people about your event!"
			/>
			<button type="submit">Submit Event</button>
		</form>
	);
};

export default EventForm;
