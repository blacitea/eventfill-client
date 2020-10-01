import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCookies } from 'react-cookie';
import './form.scss';

const validate = values => {
	const errors = {};
	if (!values.name) {
		errors.name = 'Please give us a name to promote you.';
	}
	if (!values.location) {
		errors.location = 'Where are you located?';
	}
	if (!values.genre) {
		errors.genre = 'Please give us a genre to promote your talent.';
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
	const [cookies] = useCookies();
	return (
		<Formik
			initialValues={{
				user_id: cookies.user_id,
				name: '',
				location: '',
				genre: '',
				image_url: '',
				personal_link: '',
				description: '',
				open_for_booking: false,
				open_for_commission: false,
			}}
			validate={validate}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values);
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<div className="form-group">
						<label htmlFor="name">Your Name</label>
						<Field name="name" />
						<ErrorMessage name="name" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="location">Location</label>
						<Field name="location" as="select">
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
						<ErrorMessage name="location" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="genre">Genre</label>
						<Field name="genre" as="select">
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
						<ErrorMessage name="genre" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="image_url">Cover Image URL</label>
						<Field name="image_url" />
						<ErrorMessage name="image_url" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="personal_link">Portfolio Link URL</label>
						<Field name="personal_link" />
						<ErrorMessage name="personal_link" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="description">Description</label>
						<Field
							name="description"
							as="textarea"
							placeholder="Tell us about your skills!"
							cols={50}
							rows={3}
						/>
						<ErrorMessage name="description" component="div" />
					</div>

					<div className="form-group">
						<label htmlFor="open_for_booking">Accepting Invitation?</label>
						<Field name="open_for_booking" type="checkbox" />
					</div>

					<button className="form-submit" type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default TalentForm;
