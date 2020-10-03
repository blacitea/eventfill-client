import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './form.scss';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const validate = values => {
	const errors = {};
	if (!values.name) {
		errors.name = 'Please give us a name to promote your event.';
	}
	if (!values.location_id) {
		errors.location_id = 'Where are you hosting this event?';
	}
	if (!values.genre_id) {
		errors.genre_id = 'Please give us a genre to promote your event.';
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
	const [cookies] = useCookies();
	const [redirect, setRedirect] = useState({ success: false, id: '' });
	return (
		<Formik
			initialValues={{
				user_id: cookies.user_id,
				name: '',
				location_id: '',
				genre_id: '',
				start: '',
				end: '',
				image_url: '',
				description: '',
				max_attendees: '',
				accepting_talent: true,
			}}
			validate={validate}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				console.log(values.end);
				axios
					.post('/api/events', {
						event: { ...values },
					})
					.then(resolve => {
						resetForm();
						setSubmitting(false);
						alert("All done! Let's take a look at your event.");
						setRedirect({ success: true, id: resolve.data.success.id });
					});
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					{redirect.success && <Redirect to={`/events/${redirect.id}`} />}
					<div className="form-group">
						<label htmlFor="name">Event Name</label>
						<Field name="name" />
						<ErrorMessage name="name" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="location_id">Location</label>
						<Field name="location_id" as="select">
							<option value="" disabled>
								Select a city
							</option>
							{props.locations &&
								props.locations.map(location => (
									<option key={location.id} value={location.id}>
										{location.name}
									</option>
								))}
						</Field>
						<ErrorMessage name="location_id" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="genre_id">Genre</label>
						<Field name="genre_id" as="select">
							<option value="" disabled>
								Select a genre
							</option>
							{props.genres &&
								props.genres.map(genre => (
									<option key={genre.id} value={genre.id}>
										{genre.name}
									</option>
								))}
						</Field>
						<ErrorMessage name="genre_id" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="start">Start Date</label>
						<Field name="start" type="date" />
						<ErrorMessage name="start" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="end">End Date</label>
						<Field name="end" type="date" />
						<ErrorMessage name="end" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="image_url">Cover Image URL</label>
						<Field name="image_url" />
						<ErrorMessage name="image_url" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="max_attendees">Maximum number of attendees</label>
						<Field name="max_attendees" type="number" />
						<ErrorMessage name="max_attendees" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="description">Description</label>
						<Field
							name="description"
							as="textarea"
							placeholder="Tell us about your event!"
							cols={50}
							rows={3}
						/>
						<ErrorMessage name="description" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="accepting_talent">Accepting Talents?</label>
						<Field name="accepting_talent" type="checkbox" />
					</div>

					<button className="form-submit" type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default EventForm;
