import React from 'react';
import MessageList from './MessageList';
import Compose from './Compose';
import getByKey from '../../helpers/getByKey';
import { useEffect } from 'react';

const MessageBoard = ({owner, messages, contactList, recipient, setMessages,}) => {
  const updateMessageScroll = () => {
    const messageList = document.getElementById("message-list");
    messageList.scrollTop = messageList.scrollHeight;
  }

  useEffect(updateMessageScroll);

	return (
		<>
			<MessageList
				owner={owner}
				messages={messages}
				recipient={getByKey(contactList, recipient)}
			/>
			<Compose sender={owner} recipient={recipient} setMessages={setMessages} />
		</>
	);
};

export default MessageBoard;
