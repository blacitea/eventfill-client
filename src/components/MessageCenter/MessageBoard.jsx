import React from 'react';
import Messages from './Messages';
import Send from './Send';
import getByKey from '../../helpers/getByKey';
const MessageBoard = ({ owner, messages, contactList, recipient }) => {
	return (
		<>
			<Messages
				owner={owner}
				messages={messages}
				recipient={getByKey(contactList, recipient)}
			/>
			<Send sender={owner} recipient={recipient} />
		</>
	);
};

export default MessageBoard;
