import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
	const errors = {};
	if (!values.name) {
		errors.name = 'Please give us a name to promote you.';
	}
	if (!values.location) {
		errors.location = 'Where are you located?';
	}
	if (!values.category) {
		errors.category = 'Please give us a category to promote your talent.';
	}
	if (!values.image_url) {
		errors.image_url = 'Pick a photo to represent your talent profile!';
	}
	if (!values.description) {
		errors.description = 'Description for your talent is required.';
	}
	return errors;
};

const TalentForm = props => {
	const formik = useFormik({
		initialValues: {
			name: '',
			location: '',
			category: '',
			image_url: '',
			personal_link: '',
			description: '',
			open_for_booking: false,
			open_for_commission: false,
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
			formik.resetForm();
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="name">Your Name</label>
			<input id="name" type="text" {...formik.getFieldProps('name')} />
			{formik.errors.name ? (
				<div className="form-validation-error">{formik.errors.name}</div>
			) : null}

			<label htmlFor="location">Location</label>
			<select id="location" {...formik.getFieldProps('location')}>
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
			{formik.errors.location ? (
				<div className="form-validation-error">{formik.errors.location}</div>
			) : null}

			<label htmlFor="category">Primary Category</label>
			<select id="category" {...formik.getFieldProps('category')}>
				<option value="" disabled selected>
					Select a genre
				</option>
				{props.categories
					? props.categories.map(category => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
					  ))
					: null}
			</select>
			{formik.errors.category ? (
				<div className="form-validation-error">{formik.errors.category}</div>
			) : null}

			<label htmlFor="image_url">Cover Image URL</label>
			<input id="image_url" {...formik.getFieldProps('image_url')} />
			{formik.errors.image_url ? (
				<div className="form-validation-error">{formik.errors.image_url}</div>
			) : null}

			<label htmlFor="personal_link">Portfolio Link URL</label>
			<input id="personal_link" {...formik.getFieldProps('personal_link')} />
			{formik.errors.personal_link ? (
				<div className="form-validation-error">
					{formik.errors.personal_link}
				</div>
			) : null}

			<label htmlFor="description">Description</label>
			<textarea
				id="description"
				{...formik.getFieldProps('description')}
				placeholder="Tell people about your skills and talents."
			/>
			{formik.errors.description ? (
				<div className="form-validation-error">{formik.errors.description}</div>
			) : null}

			<label htmlFor="open_for_booking">Accepting Invitation?</label>
			<input
				type="checkbox"
				id="open_for_booking"
				{...formik.getFieldProps('open_for_booking')}
			/>

			<label htmlFor="open_for_commission">Accepting Commission?</label>
			<input
				type="checkbox"
				id="open_for_commission"
				{...formik.getFieldProps('open_for_commission')}
			/>

			<button>Submit Talent Profile</button>
		</form>
	);
};

export default TalentForm;
