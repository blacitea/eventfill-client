import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import './form.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const validate = values => {
	const errors = {};
	if (!values.event_id) {
		errors.event_id = 'Event required to send invitation.';
	}
	if (!values.time) {
		errors.time = 'Event required to send invitation.';
	}
	return errors;
};

const InvitationForm = ({ talent, events, showSuccess }) => {
  const [cookies] = useCookies();
  const [successful, setSuccessful] = useState(false);

  if (showSuccess && successful) {
    return <p className="success-message">Invitation sent successfully!</p>
  }

	console.log(talent);
	return (
		<section className="talent-invite">
			<img src={talent.image_url} alt={talent.name} />
			<section className="invite-text">
				Invite
				<br />
				<span className="talent-name">{talent.name}</span>
				<br />
				to your event!
			</section>
			<Formik
				initialValues={{
					sender_id: cookies.user_id,
					talent_profile_id: talent.id,
					time: '',
					event_id: '',
					description: '',
				}}
				validate={validate}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setTimeout(() => {}, 400);
					axios
						.post('/api/gigs', {
							gig: { ...values },
						})
						.then(resolve => {
							console.log(resolve.data);
							const message = `Score! You have an event invitation!
							${values.description ? `Note from organizer: ${values.description}` : ''}
							ref#${values.event_id}
							`;
							return axios.post(`/api/users/${values.sender_id}/messages`, {
								message: {
									sender_id: values.sender_id,
									recipient_id: talent.user_id,
									content: message,
								},
							});
						})
						.then(resolve => {
							console.log(resolve);
							resetForm();
              setSubmitting(false);
              if (showSuccess) {
                setSuccessful(true);
              }
						});
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<div className="form-group">
							<label htmlFor="event_id">Event</label>
							<Field name="event_id" as="select">
								<option value="" disabled>
									Pick an Event
								</option>
								{events &&
									events.map(event => (
										<option value={event.id} key={event.id}>
											{event.name}
										</option>
									))}
							</Field>
							<ErrorMessage name="event_id" component="div" />
						</div>

						<div className="form-group">
							<label htmlFor="time">Performance Date</label>
							<Field name="time" type="date" />
							<ErrorMessage name="time" component="div" />
						</div>

						<div className="form-group">
							<label htmlFor="description">Message (Optional)</label>
							<Field
								name="description"
								as="textarea"
								placeholder="Write a message to introduce yourself and your event!"
								cols={30}
								rows={3}
							/>
						</div>

						<button
							className="form-submit"
							type="submit"
							disabled={isSubmitting}
						>
							Send Invitation
						</button>
					</Form>
				)}
			</Formik>
		</section>
	);
};

export default InvitationForm;
