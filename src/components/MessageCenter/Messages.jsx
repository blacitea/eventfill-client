import React from 'react';
import Message from './Message';

const Messages = ({ messages, recipient }) => {
	return (
		<section className="messages-board">
			<p className="messages-board-recipient-name">
				{recipient && recipient.name}
			</p>
			{messages &&
				messages.map(message => (
					<Message
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
