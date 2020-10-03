import React from 'react';
import moment from 'moment';

const Message = ({ content, timeStamp, sender, owner }) => {
	const cs =
		sender === owner ? /*cookie.user_id*/ 'message-me' : 'message-them';
	return (
		<article className={"message " + cs}>
			<p className="message-content">{content}</p>
      <footer className="message-time">{sender === owner ? "You, " : "Them, "}{moment(timeStamp).fromNow()}</footer>
		</article>
	);
};

export default Message;
