import React from 'react';
import { Field, useFormik } from 'formik';

const InvitationForm = props => {
	const formik = useFormik({
		initialValues: {
			event: '',
			message: '',
			talent: props.talent,
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
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
			<Field
				component="select"
				name="event"
				id="event"
				onChange={formik.handleChange}
				value={formik.values.event}
			>
				{props.event.map(event => (
					<option value={event.id}>{event.name}</option>
				))}
			</Field>
		</form>
	);
};

export default InvitationForm;
