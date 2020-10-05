import React, { useState, useEffect } from 'react';
import './index.scss';

import ContactList from './ContactList';
import MessageBoard from './MessageBoard';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const MessageCenter = () => {
	const [messages, setMessages] = useState([]);
	const [recipient, setRecipient] = useState('');
	const [contactList, setContactList] = useState([]);
	const [cookies] = useCookies();

	const owner = parseInt(cookies.user_id);

	useEffect(() => {
		//axios calls to BE for message data
		if (owner) {
			axios
				.get(`api/users/${owner}`)
				.then(resolve => {
					resolve.data.user
						? (document.title = `Message center for ${resolve.data.user.name}`)
						: (document.title = 'Message center');
				})
				.catch(error => console.log('something is wrong here:', error));

			axios
				.get(`api/messages`)
				.then(response => {
					setContactList(response.data.contacts);
				})
				.catch(error => {
					console.log('something went wrong:', error);
				});
			axios
				.get(`api/messages/${recipient}`)
				.then(response => {
					setMessages(response.data.messages);
				})
				.catch(error => {
					console.log('something went wrong:', error);
				});
		} else {
			setMessages([]);
			setRecipient('');
			setContactList([]);
			document.title = 'Message center';
		}
		return () => {
			document.title = 'EVENTFILL';
		};
	}, [recipient, owner]);

	return (
		<main className="message-center">
			<section className="message-center-nav">
				<p className="message-center-title">Message Center</p>
				<ContactList
					contacts={contactList}
					setRecipient={setRecipient}
					recipient={recipient}
				/>
			</section>
			<MessageBoard
				owner={owner}
				messages={messages}
				contactList={contactList}
				recipient={recipient}
				setMessages={setMessages}
			/>
		</main>
	);
};

export default MessageCenter;
