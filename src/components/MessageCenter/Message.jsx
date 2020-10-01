import React from 'react';
const Message = ({ content, timeStamp, sender, owner }) => {
	const cs =
		sender === owner ? /*cookie.user_id*/ 'message-me' : 'message-them';
	return (
		<article className={cs}>
			<p>{content}</p>
			<footer>{timeStamp}</footer>
		</article>
	);
};

export default Message;
