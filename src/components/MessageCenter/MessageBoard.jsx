import React from 'react';
import MessageList from './MessageList';
import Compose from './Compose';
import getByKey from '../../helpers/getByKey';
import { useEffect } from 'react';

import './MessageBoard.scss';

const MessageBoard = ({
	owner,
	messages,
	contactList,
	recipient,
	setMessages,
}) => {
	const updateMessageScroll = () => {
		const messageList = document.getElementById('message-list');
		if (messageList) {
			messageList.scrollTop = messageList.scrollHeight;
		}
	};

	useEffect(updateMessageScroll);
	return (
		<section className="message-board">
			{recipient !== '' && (
				<>
					<MessageList
						owner={owner}
						messages={messages}
						recipient={getByKey(contactList, recipient)}
					/>
					{recipient !== 0 && (
						<Compose recipient={recipient} setMessages={setMessages} />
					)}
				</>
			)}
			{!isNaN(owner) && recipient === '' && (
				<div className="no-message">
					<p className="message-center-no-recipient">
						Select a user to get in touch!
					</p>
				</div>
			)}
			{isNaN(owner) && (
				<div className="no-message">
					<p className="message-center-no-recipient">
						Please login to see your messages
					</p>
				</div>
			)}
		</section>
	);
};

export default MessageBoard;
