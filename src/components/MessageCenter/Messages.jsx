import React from 'react';
import Message from './Message';

const Messages = ({ messages, recipient, owner }) => {
	return (
    <section>
      <p className="messages-recipient-name">
        {recipient.name && recipient.name}
      </p>
      <section id="messages-list" className="messages-list">
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
