import React from 'react';
import Message from './Message';

const Messages = ({ messages, recipient, owner }) => {
	return (
		<section className="messages-board">
			<p className="messages-board-recipient-name">
				{recipient.name && recipient.name}
			</p>
			{recipient.name &&
				messages &&
				messages.map(message => (
					<Message
						owner={owner}
						key={message.id}
						content={message.content}
						sender={message.sender_id}
						timeStamp={message.sent_at}
					/>
				))}
		</section>
	);
};

export default Messages;
