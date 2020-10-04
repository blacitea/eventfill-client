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
	console.log('recipient', recipient);

	return (
		<section className="message-board">
			{recipient !== undefined && (
				<>
					<MessageList
						owner={owner}
						messages={messages}
						recipient={
							recipient === 0
								? { id: 0, name: 'System' }
								: getByKey(contactList, recipient)
						}
					/>
					{recipient !== 0 && (
						<Compose recipient={recipient} setMessages={setMessages} />
					)}
				</>
			)}
			{recipient === undefined && (
				<div className="no-message">
					<p className="message-center-no-recipient">
						Select a user to get in touch!
					</p>
				</div>
			)}
		</section>
	);
};

export default MessageBoard;
