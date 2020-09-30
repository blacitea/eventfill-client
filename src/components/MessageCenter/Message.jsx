import React from 'react';
const Message = (content, timeStamp, sender) => {
	const cs = sender === 1 ? /*cookie.user_id?*/ 'message-me' : 'message-them';
	return (
		<article className={cs}>
			<p>{content}</p>
			<footer>{timeStamp}</footer>
		</article>
	);
};

export default Message;
