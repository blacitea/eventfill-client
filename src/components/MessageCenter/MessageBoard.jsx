import React from 'react';
import Messages from './Messages';
import Send from './Send';
import getByKey from '../../helpers/getByKey';
import { useEffect } from 'react';

const MessageBoard = ({owner, messages, contactList, recipient, setMessages,}) => {
  const updateMessageScroll = () => {
    const messageList = document.getElementById("messages-list");
    messageList.scrollTop = messageList.scrollHeight;
  }

  useEffect(updateMessageScroll);

	return (
		<>
			<Messages
				owner={owner}
				messages={messages}
				recipient={getByKey(contactList, recipient)}
			/>
			<Send sender={owner} recipient={recipient} setMessages={setMessages} />
		</>
	);
};

export default MessageBoard;
