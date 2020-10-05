import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import './Message.scss';

const Message = ({ content, timeStamp, sender, owner }) => {
	const cs =
		sender === owner ? /*cookie.user_id*/ 'message-me' : 'message-them';

	const eventId = content.includes('Score')
		? content.slice(content.indexOf('#') + 1)
		: null;

	const link = (
		<Link to={`/events/${eventId}`}>
			<p>Go check out the event!</p>
		</Link>
	);

	return (
		<article className={'message ' + cs}>
			<div className="message-bubble">
				<article className="message-content">
					{content}
					{eventId && link}
				</article>
			</div>
			<footer className="message-time">
				{sender === owner ? 'You, ' : 'Them, '}
				{moment(timeStamp).fromNow()}
			</footer>
		</article>
	);
};

export default Message;
