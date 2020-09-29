import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
	const errors = {};
	return errors;
};

const TalentForm = props => {
	const formik = useFormik({
		initialValues: {},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="name"></label>
			<label htmlFor="location"></label>
			<label htmlFor="category"></label>
			<label htmlFor="image_url"></label>
			<label htmlFor=""></label>
			<label htmlFor=""></label>
			<label htmlFor=""></label>
			<label htmlFor=""></label>
			<button>Submit Talent Profile</button>
		</form>
	);
};
