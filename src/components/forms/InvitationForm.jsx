import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="event">Event</label>
           	<Field name="event" as="select">
              <option value="" disabled>
                Pick an Event
              </option>
              {events.map(event => (
                <option value={event.id} key={event.id}>
                  {event.name}
                </option>
              ))}
           	</Field>
            <ErrorMessage name="event" component="div" />

            <label htmlFor="message">Message (Optional)</label>
            <Field name="message" as="textarea" />

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
