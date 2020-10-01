import React, { useState, useEffect } from 'react';
import './MessageCenter.scss';

import Contacts from './Contacts';
import MessageBoard from './MessageBoard';
import getByKey from '../../helpers/getByKey';
import { users, msgs } from '../mockData';
import { useCookies } from 'react-cookie';

const MessageCenter = props => {
	const [messages, setMessages] = useState([]);
	const [recipient, setRecipient] = useState('');
	const [contactList, setContactList] = useState([]);
	const [cookies] = useCookies();

	const owner = cookies.user_id;

	useEffect(() => {
		//axios calls to BE for message data
		document.title = getByKey(users, owner)
			? `Message center for ${getByKey(users, owner).name}`
			: 'Message center';
		setMessages(msgs);
		setContactList(users);
	});

	return (
		<main className="message-center">
			<section className="message-center-nav">
				<p className="message-center-title">Message Center</p>
				<Contacts
					contactList={contactList}
					setRecipient={setRecipient}
					recipient={recipient}
				/>
			</section>
			<section className="message-center-messages">
				{recipient === '' && (
					<p className="message-center-no-recipient">
						Select a user to get in touch!
					</p>
				)}
				{recipient && (
					<MessageBoard
						owner={owner}
						messages={messages}
						contactList={contactList}
						recipient={recipient}
					/>
				)}
			</section>
		</main>
	);
};

export default MessageCenter;
