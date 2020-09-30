import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './form.scss';

const validate = values => {
	const errors = {};
	if (!values.name) {
		errors.name = 'Please give us a name to promote your event.';
	}
	if (!values.location) {
		errors.location = 'Where are you hosting this event?';
	}
	if (!values.genre) {
		errors.genre = 'Please give us a genre to promote your event.';
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
	return (
    <Formik
      initialValues={{
        eventName: '',
        location: '',
        genre: '',
        start: '',
        end: '',
        image_url: '',
        description: '',
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        console.log('test');
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Event Name</label>
            <Field name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <Field name="location" as="select">
              <option value="" disabled>
                Select a city
              </option>
              {props.locations && props.locations
                .map(location => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))
              }
            </Field>
            <ErrorMessage name="location" component="div" />
          </div>

          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <Field name="genre" as="select">
              <option value="" disabled>
                Select a genre
              </option>
              {props.genres && props.genres
                .map(genre => (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                ))
              }
            </Field>
            <ErrorMessage name="genre" component="div" />
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
            <label htmlFor="description">Description</label>
            <Field name="description" as="textarea" placeholder="Tell us about your event!" cols={50} rows={3}/>
            <ErrorMessage name="description" component="div" />
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
