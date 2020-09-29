import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
	const errors = {};
	if (!values.event) {
		errors.event = 'Event required to send invitation.';
	}
	return errors;
};

const InvitationForm = props => {
	const formik = useFormik({
		initialValues: {
			event: '',
			message: '',
			talent: props.talent,
		},
		validate,
		onSubmit: values => {
			if (formik.errors) {
				alert('Incomplete form');
			} else {
				alert(JSON.stringify(values, null, 2));
				formik.resetForm();
			}
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<img
				src={formik.values.talent.image_url}
				alt={formik.values.talent.name}
			/>
			<p>
				Invite
				<br />
				<span>{formik.values.talent.name}</span>
				<br />
				to your event!
			</p>
			<label htmlFor="event">Event</label>
			<select
				name="event"
				id="event"
				onChange={formik.handleChange}
				value={formik.values.event}
			>
				<option value="" disabled selected>
					Pick an Event
				</option>
				{props.events.map(event => (
					<option value={event.id} key={event.id}>
						{event.name}
					</option>
				))}
			</select>
			{formik.errors.event ? <div>{formik.errors.event}</div> : null}
			<label htmlFor="message">Message (Optional)</label>
			<textarea
				name="message"
				id="message"
				onChange={formik.handleChange}
				value={formik.values.message}
			/>
			<button type="submit">Send Invitation</button>
		</form>
	);
};

export default InvitationForm;
