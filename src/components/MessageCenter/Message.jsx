import React from 'react';
import { Link } from 'react-router-dom';
const Message = ({ content, timeStamp, sender, owner }) => {
	const cs =
		sender === owner ? /*cookie.user_id*/ 'message-me' : 'message-them';
	const eventId = content.includes('Score')
		? content.slice(content.indexOf('#') + 1)
		: null;
	console.log(eventId);
	const link = (
		<Link to={`/events/${eventId}`}>
			<p>Go check out the event!</p>
		</Link>
	);
	return (
		<article className={cs}>
			<p>{content}</p>
			{eventId && link}
			<footer>{timeStamp}</footer>
		</article>
	);
};

export default Message;
