import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
	const errors = {};
	if (!values.event) {
		errors.event = 'Event required to send invitation.';
	}
	return errors;
};

const InvitationForm = ({ talent, events }) => {
	const formik = useFormik({
		initialValues: {
			event: '',
			message: '',
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
			<img src={talent.image_url} alt={talent.name} />
			<p>
				Invite
				<br />
				<span>{talent.name}</span>
				<br />
				to your event!
			</p>
			<label htmlFor="event">Event</label>
			<select id="event" {...formik.getFieldProps('event')}>
				<option value="" disabled selected>
					Pick an Event
				</option>
				{events.map(event => (
					<option value={event.id} key={event.id}>
						{event.name}
					</option>
				))}
			</select>
			{formik.errors.event && (
				<div className="form-error">{formik.errors.event}</div>
			)}

			<label htmlFor="message">Message (Optional)</label>
			<textarea id="message" {...formik.getFieldProps('message')} />

			<button type="submit">Send Invitation</button>
		</form>
	);
};

export default InvitationForm;
