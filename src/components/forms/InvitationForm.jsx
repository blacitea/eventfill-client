import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./form.scss";

const validate = values => {
	const errors = {};
	if (!values.event) {
		errors.event = 'Event required to send invitation.';
	}
	return errors;
};

const InvitationForm = ({ talent, events }) => {
	return (
    <section className="talent-invite">
      <img src={talent.image_url} alt={talent.name} />
      <p>
        Invite
        <br />
        <span>{talent.name}</span>
        <br />
        to your event!
      </p>
      <Formik
        initialValues={{
          event: '',
          message: '',
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
              <label htmlFor="event">Event</label>
              <Field name="event" as="select">
                <option value="" disabled>
                  Pick an Event
                </option>
                {events && events
                  .map(event => (
                    <option value={event.id} key={event.id}>
                      {event.name}
                    </option>
                  ))
                }
              </Field>
              <ErrorMessage name="event" component="div" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <Field name="message" as="textarea" placeholder="Write a message to introduce yourself and your event!" cols={50} rows={3} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Send Invitation
            </button>
          </Form>
        )}
      </Formik>
    </section>
	);
};

export default InvitationForm;
