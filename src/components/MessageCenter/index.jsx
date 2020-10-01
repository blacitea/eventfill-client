import React, { useState, useEffect } from 'react';
import './MessageCenter.scss';
import Send from './Send';
import Contacts from './Contacts';
import Messages from './Messages';
import { users, msgs } from '../mockData';
import { useCookies } from 'react-cookie';

const MessageCenter = props => {
	const [messages, setMessages] = useState(msgs);
	const [recipient, setRecipient] = useState('');
	const [contactList, setContactList] = useState(users);
	const [cookies] = useCookies();

	const id = cookies.user_id;

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
					owner={Number(id)}
					messages={messages}
					recipient={contactList.filter(contact => contact.id === recipient)[0]}
				/>
				<Send sender={Number(id)} recipient={recipient} />
			</section>
		</main>
	);
};

export default MessageCenter;
