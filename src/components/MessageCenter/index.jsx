import React, { useState, useEffect } from 'react';
import './MessageCenter.scss';
import Send from './Send';
import Contacts from './Contacts';
import Messages from './Messages';
import { useParams } from 'react-router-dom';
import { users, msgs } from '../mockData';

const MessageCenter = props => {
	const { id } = useParams();
	const [messages, setMessages] = useState(msgs);
	const [recipient, setRecipient] = useState('');
	const [contactList, setContactList] = useState(users);

	useEffect(() => {
		//axios calls to BE for message data
		document.title = `Message center for user_id ${id}`;
	});

	return (
		<main className="message-center">
			<section className="message-center-nav">
				<p className="message-center-title">Message Center</p>
				<Contacts contactList={contactList} setRecipient={setRecipient} />
			</section>
			<section className="message-center-messages">
				<Messages
					messages={messages}
					recipient={contactList.filter(contact => contact.id === recipient)[0]}
				/>
				<Send sender={id} recipient={recipient} />
			</section>
		</main>
	);
};

export default MessageCenter;
