import React, { useState, useEffect } from 'react';
import './MessageCenter.scss';

import Contacts from './Contacts';
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
		axios
			.get(`api/users/${owner}`)
			.then(resolve => {
				resolve.data.user
					? (document.title = `Message center for ${resolve.data.user.name}`)
					: (document.title = 'Message center');
			})
			.catch(error => console.log('something is wrong here:', error));

		axios
			.get(`api/users/${owner}/messages`)
			.then(response => {
				setContactList(response.data.contacts);
			})
			.catch(error => {
				console.log('something went wrong:', error);
			});
		recipient &&
			axios
				.get(`api/users/${owner}/messages/${recipient}`)
				.then(response => {
					setMessages(response.data.messages);
				})
				.catch(error => {
					console.log('something went wrong:', error);
				});
	}, [recipient, owner]);

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
