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
			<button type="submit">Submit Event</button>
		</form>
	);
};
