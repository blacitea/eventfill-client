import React from 'react';
import Message from './Message';

import './MessageList.scss';

const Messages = ({ messages, recipient, owner }) => {
	console.log(recipient);
	console.log(messages);
	return (
		<section>
			<p className="recipient-name">{recipient.name && recipient.name}</p>
			<section id="message-list" className="message-list">
				{recipient.name &&
					messages &&
					messages.map(message => (
						<Message
							owner={owner}
							key={message.id}
							content={message.content}
							sender={message.sender_id}
							timeStamp={message.created_at}
						/>
					))}
			</section>
		</section>
	);
};

export default Messages;
